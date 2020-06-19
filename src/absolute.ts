// absolute.ts

/* eslint-disable no-magic-numbers */

export type ComparisonResult = -1 | 0 | 1;

const THOUSAND = 1e3;
const MILLION = 1e6;
const BILLION = 1e9;

const extraRegEx = /\.\d\d\d(?<extra>\d+)Z$/u;

/**
 * Partial implementation of Temporal.Absolute, part of the new TC39 Temporal proposal.
 *
 * See docs here: https://tc39.es/proposal-temporal/docs/absolute.html
 */
export class Absolute {
  // this eslint rule should be removed, it doesn't understand Typescript constructors
  // eslint-disable-next-line no-useless-constructor
  constructor(private readonly epochNanoseconds: bigint) {}

  static fromEpochSeconds(epochSeconds: number): Absolute {
    return new Absolute(BigInt(epochSeconds) * BigInt(BILLION));
  }

  static fromEpochMilliseconds(epochMilliseconds: number): Absolute {
    return new Absolute(BigInt(BigInt(epochMilliseconds) * BigInt(MILLION)));
  }

  static fromEpochMicroseconds(epochMicroseconds: bigint): Absolute {
    return new Absolute(BigInt(BigInt(epochMicroseconds) * BigInt(THOUSAND)));
  }

  static fromEpochNanoseconds(epochNanoseconds: bigint): Absolute {
    return new Absolute(epochNanoseconds);
  }

  static from(item: Absolute | string): Absolute {
    if (item instanceof Absolute) {
      return item;
    }
    const extra = extraRegEx.exec(item)?.groups?.extra ?? '';
    const extraDigits = BigInt(extra) * BigInt(10 ** (6 - extra.length));
    const nanoseconds = BigInt(new Date(item).getTime()) * BigInt(MILLION) + extraDigits;
    return new Absolute(nanoseconds);
  }

  static compare(
    one: { getEpochNanoseconds: () => bigint },
    two: { getEpochNanoseconds: () => bigint }
  ): ComparisonResult {
    if (one.getEpochNanoseconds() > two.getEpochNanoseconds()) {
      return 1;
    }
    if (one.getEpochNanoseconds() < two.getEpochNanoseconds()) {
      return -1;
    }
    return 0;
  }

  getEpochSeconds(this: Absolute): number {
    return Number(this.epochNanoseconds / BigInt(BILLION));
  }

  getEpochMilliseconds(this: Absolute): number {
    return Number(this.epochNanoseconds / BigInt(MILLION));
  }

  getEpochMicroseconds(this: Absolute): bigint {
    return this.epochNanoseconds / BigInt(THOUSAND);
  }

  getEpochNanoseconds(this: Absolute): bigint {
    return this.epochNanoseconds;
  }

  equals(this: Absolute, other: Absolute): boolean {
    return this.epochNanoseconds === other.getEpochNanoseconds();
  }

  toString(this: Absolute): string {
    let nanoseconds = Number(this.epochNanoseconds % BigInt(BILLION));
    const epochMilliseconds =
      Number((this.epochNanoseconds / BigInt(BILLION)) * BigInt(THOUSAND)) + Math.floor(Number(nanoseconds / MILLION));
    nanoseconds = Number((this.epochNanoseconds < BigInt(0) ? BILLION : 0) + nanoseconds);
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

    let seconds = '';
    if (second || millisecond || microsecond || nanosecond) {
      const parts = [];
      if (nanosecond) {
        parts.unshift(`${nanosecond.toString().padStart(3, '0')}`);
      }
      if (microsecond || parts.length) {
        parts.unshift(`${microsecond.toString().padStart(3, '0')}`);
      }
      if (millisecond || parts.length) {
        parts.unshift(`${millisecond.toString().padStart(3, '0')}`);
      }
      seconds = `${second.toString().padStart(2, '0')}${parts.length ? `.${parts.join('')}` : ''}`;
    }
    return `${year.toString().padStart(4, '0')}-${month.toString().padStart(2, '0')}-${day
      .toString()
      .padStart(2, '0')}T${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}${
      seconds ? `:${seconds}` : ''
    }Z`;
  }

  toJSON(this: Absolute): string {
    return this.toString();
  }

  // eslint-disable-next-line class-methods-use-this
  valueOf(): never {
    throw new TypeError('use compare() or equals() to compare Temporal.Absolute');
  }
}
