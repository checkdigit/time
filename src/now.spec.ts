// now.spec.ts

import assert from 'assert';

import { Temporal } from './index';

describe('now', () => {
  it('absolute() returns always-increasing values as a nanosecond-precision Absolute', () => {
    // make sure we're within 1ms of built-in Date
    assert.ok(Math.abs(Temporal.now.absolute().getEpochMilliseconds() - Date.now()) <= 1);

    // ensure always-increasing epoch nanosecond values over a million invocations.  Polyfill fails this test.
    let prior = BigInt(0);
    for (let invocation = 0; invocation < 1000000; invocation++) {
      const now = Temporal.now.absolute().getEpochNanoseconds();
      assert.ok(prior < now);
      prior = now;
    }

    // make sure we're still within 1ms of built-in Date
    assert.ok(Math.abs(Temporal.now.absolute().getEpochMilliseconds() - Date.now()) <= 1);
  });
});
