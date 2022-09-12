// now.spec.ts

import { strict as assert } from 'node:assert';

import { Temporal as TemporalPolyfill } from '@js-temporal/polyfill';

import { Temporal } from './index';

describe('now', () => {
  it('instant() returns always-increasing values as a nanosecond-precision Instant', () => {
    // make sure we're within 1ms of built-in Date
    assert.ok(Math.abs(Temporal.Now.instant().epochMilliseconds - Date.now()) <= 1);

    // ensure always-increasing epoch nanosecond values over a million invocations.  Polyfill fails this test.
    let prior = BigInt(0);
    for (let invocation = 0; invocation < 1_000_000; invocation++) {
      const now = Temporal.Now.instant().epochNanoseconds;
      assert.ok(prior < now);
      prior = now;
    }

    // make sure we're still within 1ms of built-in Date
    assert.ok(Math.abs(Temporal.Now.instant().epochMilliseconds - Date.now()) <= 1);
  });

  it('polyfill instant() does not return always-increasing values as a nanosecond-precision Instant', () => {
    let failed = false;
    try {
      // make sure we're within 1ms of built-in Date
      assert.ok(Math.abs(TemporalPolyfill.Now.instant().epochMilliseconds - Date.now()) <= 1);

      // ensure always-increasing epoch nanosecond values over a million invocations.  Polyfill fails this test.
      let prior = BigInt(0);
      for (let invocation = 0; invocation < 1_000_000; invocation++) {
        const now = TemporalPolyfill.Now.instant().epochNanoseconds;
        assert.ok(prior < now);
        prior = now;
      }

      // make sure we're still within 1ms of built-in Date
      assert.ok(Math.abs(TemporalPolyfill.Now.instant().epochMilliseconds - Date.now()) <= 1);
    } catch {
      // expected to fail
      failed = true;
    }
    assert.ok(failed);
  });
});
