// instant.ts

export type ComparisonResult = -1 | 0 | 1;

const YEAR_DIGITS = 4;

const THOUSAND_DIGITS = 3;
const MILLION_DIGITS = 6;
const BILLION_DIGITS = 9;

const THOUSAND = 10 ** THOUSAND_DIGITS;
const MILLION = 10 ** MILLION_DIGITS;
const BILLION = 10 ** BILLION_DIGITS;

const extraRegEx = /\.\d\d\d(?<extra>\d+)Z$/u; // matches the extra digits (after millisecond) in a string like 2021-01-01T00:00:00.123456789Z

/**
 * Partial implementation of Temporal.Instant, part of the new TC39 Temporal proposal.
 *
 * See docs here: https://tc39.es/proposal-temporal/docs/instant.html
 */
export class Instant {
  constructor(private readonly nanoseconds: bigint) {}

  static fromEpochSeconds(epochSeconds: number): Instant {
    return new Instant(BigInt(epochSeconds) * BigInt(BILLION));
  }

  static fromEpochMilliseconds(epochMilliseconds: number): Instant {
    return new Instant(BigInt(BigInt(epochMilliseconds) * BigInt(MILLION)));
  }

  static fromEpochMicroseconds(epochMicroseconds: bigint): Instant {
    return new Instant(BigInt(BigInt(epochMicroseconds) * BigInt(THOUSAND)));
  }

  static fromEpochNanoseconds(epochNanoseconds: bigint): Instant {
    return new Instant(epochNanoseconds);
  }

  static from(item: Instant | string): Instant {
    if (item instanceof Instant) {
      return item;
    }
    const extra = extraRegEx.exec(item)?.groups?.['extra'] ?? '';
    const extraDigits = BigInt(extra) * BigInt(10 ** (MILLION_DIGITS - extra.length));
    const nanoseconds = BigInt(new Date(item).getTime()) * BigInt(MILLION) + extraDigits;
    return new Instant(nanoseconds);
  }

  static compare(one: { epochNanoseconds: bigint }, two: { epochNanoseconds: bigint }): ComparisonResult {
    if (one.epochNanoseconds > two.epochNanoseconds) {
      return 1;
    }
    if (one.epochNanoseconds < two.epochNanoseconds) {
      return -1;
    }
    return 0;
  }

  get epochSeconds(): number {
    if (this.nanoseconds < 0 && this.nanoseconds % BigInt(BILLION) !== 0n) {
      return Number(this.nanoseconds / BigInt(BILLION)) - 1;
    }
    return Number(this.nanoseconds / BigInt(BILLION));
  }

  get epochMilliseconds(): number {
    if (this.nanoseconds < 0 && this.nanoseconds % BigInt(MILLION) !== 0n) {
      return Number(this.nanoseconds / BigInt(MILLION)) - 1;
    }
    return Number(this.nanoseconds / BigInt(MILLION));
  }

  get epochMicroseconds(): bigint {
    if (this.nanoseconds < 0 && this.nanoseconds % BigInt(THOUSAND) !== 0n) {
      return this.nanoseconds / BigInt(THOUSAND) - 1n;
    }
    return this.nanoseconds / BigInt(THOUSAND);
  }

  get epochNanoseconds(): bigint {
    return this.nanoseconds;
  }

  equals(this: Instant, other: Instant): boolean {
    return this.nanoseconds === other.epochNanoseconds;
  }

  toString(this: Instant): string {
    let nanoseconds = Number(this.nanoseconds % BigInt(BILLION));
    const epochMilliseconds =
      Number((this.nanoseconds / BigInt(BILLION)) * BigInt(THOUSAND)) + Math.floor(Number(nanoseconds / MILLION));
    nanoseconds = Number((this.nanoseconds < BigInt(0) ? BILLION : 0) + nanoseconds);
    const millisecond = Math.floor(nanoseconds / MILLION) % THOUSAND;
    const microsecond = Math.floor(nanoseconds / THOUSAND) % THOUSAND;
    const nanosecond = Math.floor(nanoseconds) % THOUSAND;

    const item = new Date(epochMilliseconds);
    const year = item.getUTCFullYear();
    const month = item.getUTCMonth() + 1;
    const day = item.getUTCDate();
    const hour = item.getUTCHours();
    const minute = item.getUTCMinutes();
    const second = item.getUTCSeconds();

    let fraction = `${millisecond * MILLION + microsecond * THOUSAND + nanosecond}`.padStart(BILLION_DIGITS, '0');
    while (fraction.endsWith('0')) {
      fraction = fraction.slice(0, -1);
    }
    if (fraction.length > 0) {
      fraction = `.${fraction}`;
    }
    return `${year.toString().padStart(YEAR_DIGITS, '0')}-${month.toString().padStart(2, '0')}-${day
      .toString()
      .padStart(2, '0')}T${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second
      .toString()
      .padStart(2, '0')}${fraction}Z`;
  }

  toJSON(this: Instant): string {
    return this.toString();
  }

  // eslint-disable-next-line class-methods-use-this
  valueOf(): never {
    throw new TypeError('use compare() or equals() to compare Temporal.Instant');
  }
}
