// now.ts

import { Instant } from './instant';

/**
 * Partial implementation of Temporal.now, part of the new TC39 Temporal proposal.  Currently only instant() is
 * supported.
 *
 * See docs here: https://tc39.es/proposal-temporal/docs/now.html
 */

const MILLION = 1e6;

let baseDateTime = BigInt(Date.now());
let baseHighResolutionTime = process.hrtime.bigint();
let priorEpochNanoseconds = BigInt(0);

/**
 * This returns ever-increasing millisecond-accurate current time values in nanosecond form.
 *
 * To simulate nanosecond current time, we take the millisecond based clock and supplement with the HR timer.
 * Two invocations within the same millisecond will have an accurate nanosecond difference between them, so
 * this is useful for ensuring unique timestamps in webservices where concurrent execution may be an issue.
 */
export function instant(): Instant {
  const dateTime = BigInt(Date.now());

  if (dateTime > baseDateTime) {
    // we're in a new millisecond, so reset the base HR time
    baseHighResolutionTime = process.hrtime.bigint();
    baseDateTime = dateTime;
  }

  let epochNanoseconds =
    dateTime * BigInt(MILLION) + ((process.hrtime.bigint() - baseHighResolutionTime) % BigInt(MILLION));

  if (epochNanoseconds < priorEpochNanoseconds) {
    // the HR offset has overflowed, so reset the base HR time
    baseHighResolutionTime = process.hrtime.bigint();
    epochNanoseconds = priorEpochNanoseconds + ((process.hrtime.bigint() - baseHighResolutionTime) % BigInt(MILLION));
  }

  priorEpochNanoseconds = epochNanoseconds;
  return new Instant(epochNanoseconds);
}
