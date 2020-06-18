// absolute.ts

export type ComparisonResult = -1 | 0 | 1;

const THOUSAND = 1e3;
const MILLION = 1e6;
const BILLION = 1e9;

export class Absolute {
  private readonly epochNanoseconds: bigint;

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
    return item as Absolute;
  }

  static compare(one: Absolute, two: Absolute): ComparisonResult {
    if (one.getEpochNanoseconds() > two.getEpochNanoseconds()) {
      return 1;
    }
    if (one.getEpochNanoseconds() < two.getEpochNanoseconds()) {
      return -1;
    }
    return 0;
  }

  constructor(epochNanoseconds: bigint) {
    this.epochNanoseconds = epochNanoseconds;
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
    return this.getEpochNanoseconds() === other.getEpochNanoseconds();
  }

  toJSON(this: Absolute): string {
    return this.epochNanoseconds.toString();
  }

  toString(this: Absolute): string {
    return this.epochNanoseconds.toString();
  }
}
