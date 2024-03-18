// instant.spec.ts

import { strict as assert } from 'node:assert';

import { describe, it } from '@jest/globals';
import { Temporal as TemporalPolyfill } from '@js-temporal/polyfill';

import { Temporal } from './index';

describe('instant', () => {
  it('from parses date strings correctly', () => {
    [
      '1970-01-01T00:00:00.1Z',
      '1970-01-01T00:00:00Z',
      '1969-12-31T23:59:59.999999999Z',
      '1969-12-31T23:59:59.999999Z',
      '1969-12-31T23:59:59.999Z',
      '1969-12-31T23:59:59Z',
      '2286-11-20T17:46:40.123Z',
      '2286-11-20T17:46:40.123456Z',
      '2286-11-20T17:46:40.123456789Z',
      '2286-11-20T17:46:40Z',
      '2286-11-20T17:46:00Z',
    ].forEach((dateString) => {
      assert.equal(TemporalPolyfill.Instant.from(dateString).toString(), dateString);
      assert.equal(Temporal.Instant.from(dateString).toString(), dateString);
    });
  });

  it('does not allow use of valueOf()', () => {
    assert.throws(() => Temporal.Now.instant().valueOf());
    assert.throws(() => TemporalPolyfill.Now.instant().valueOf());
    assert.throws(() => (Temporal.Now.instant() as unknown as number) + 1);
    assert.throws(() => (TemporalPolyfill.Now.instant() as unknown as number) + 1);
  });

  it('compare method works with sort()', () => {
    // example from documentation
    const one = Temporal.Instant.fromEpochSeconds(1e9);
    const two = Temporal.Instant.fromEpochSeconds(1.1e9);
    const three = Temporal.Instant.fromEpochSeconds(1.2e9);

    // this should not be an eslint error.  Temporal.Instant.compare is a static method.
    const sorted = [three, one, two].sort(Temporal.Instant.compare);
    assert.equal(sorted.join(' '), '2001-09-09T01:46:40Z 2004-11-09T11:33:20Z 2008-01-10T21:20:00Z');

    // example from documentation
    const onePolyfill = TemporalPolyfill.Instant.fromEpochSeconds(1e9);
    const twoPolyfill = TemporalPolyfill.Instant.fromEpochSeconds(1.1e9);
    const threePolyfill = TemporalPolyfill.Instant.fromEpochSeconds(1.2e9);

    // this should not be an eslint error.  Temporal.Instant.compare is a static method.

    const sortedPolyfill = [threePolyfill, onePolyfill, twoPolyfill].sort(TemporalPolyfill.Instant.compare);
    assert.equal(sortedPolyfill.join(' '), '2001-09-09T01:46:40Z 2004-11-09T11:33:20Z 2008-01-10T21:20:00Z');
  });

  it('static methods compatible with current TC39 Temporal polyfill', () => {
    const time = TemporalPolyfill.Now.instant().epochNanoseconds;

    assert.equal(
      Temporal.Instant.fromEpochSeconds(Number(time / BigInt(1e9))).toString(),
      TemporalPolyfill.Instant.fromEpochSeconds(Number(time / BigInt(1e9))).toString(),
    );

    assert.equal(
      Temporal.Instant.fromEpochMilliseconds(Number(time / BigInt(1e6))).toString(),
      TemporalPolyfill.Instant.fromEpochMilliseconds(Number(time / BigInt(1e6))).toString(),
    );

    assert.equal(
      Temporal.Instant.fromEpochMicroseconds(time / BigInt(1e3)).toString(),
      TemporalPolyfill.Instant.fromEpochMicroseconds(time / BigInt(1e3)).toString(),
    );

    assert.equal(
      Temporal.Instant.fromEpochNanoseconds(time).toString(),
      TemporalPolyfill.Instant.fromEpochNanoseconds(time).toString(),
    );

    assert.equal(
      Temporal.Instant.compare(
        Temporal.Instant.fromEpochNanoseconds(time),
        Temporal.Instant.fromEpochNanoseconds(time),
      ),
      TemporalPolyfill.Instant.compare(
        TemporalPolyfill.Instant.fromEpochNanoseconds(time),
        TemporalPolyfill.Instant.fromEpochNanoseconds(time),
      ),
    );

    assert.equal(
      Temporal.Instant.compare(
        Temporal.Instant.fromEpochNanoseconds(time),
        Temporal.Instant.fromEpochNanoseconds(time + BigInt(1)),
      ),
      TemporalPolyfill.Instant.compare(
        TemporalPolyfill.Instant.fromEpochNanoseconds(time),
        TemporalPolyfill.Instant.fromEpochNanoseconds(time + BigInt(1)),
      ),
    );

    assert.equal(
      Temporal.Instant.compare(
        Temporal.Instant.fromEpochNanoseconds(time),
        Temporal.Instant.fromEpochNanoseconds(time - BigInt(1)),
      ),
      TemporalPolyfill.Instant.compare(
        TemporalPolyfill.Instant.fromEpochNanoseconds(time),
        TemporalPolyfill.Instant.fromEpochNanoseconds(time - BigInt(1)),
      ),
    );

    assert.equal(
      Temporal.Instant.from(Temporal.Instant.fromEpochNanoseconds(time)).toString(),
      TemporalPolyfill.Instant.from(TemporalPolyfill.Instant.fromEpochNanoseconds(time)).toString(),
    );

    assert.equal(
      Temporal.Instant.from(Temporal.Instant.fromEpochNanoseconds(time).toString()).epochNanoseconds,
      TemporalPolyfill.Instant.from(TemporalPolyfill.Instant.fromEpochNanoseconds(time).toString()).epochNanoseconds,
    );
  });

  it('compatible with current TC39 Temporal polyfill', () => {
    function check(time: bigint = TemporalPolyfill.Now.instant().epochNanoseconds) {
      const implementation = new Temporal.Instant(time);
      const polyfill = new TemporalPolyfill.Instant(time);

      assert.equal(implementation.epochSeconds, polyfill.epochSeconds);
      assert.equal(implementation.epochMicroseconds, polyfill.epochMicroseconds);
      assert.equal(implementation.epochMilliseconds, polyfill.epochMilliseconds);
      assert.ok(implementation.equals(implementation));
      assert.ok(polyfill.equals(polyfill));
      assert.equal(implementation.toJSON(), polyfill.toJSON());
      assert.equal(implementation.toString(), polyfill.toString());

      assert.equal(
        Temporal.Instant.from(implementation.toString()).epochNanoseconds,
        TemporalPolyfill.Instant.from(polyfill.toString()).epochNanoseconds,
      );
    }

    // current time
    check();

    // we only go to 10^20, the polyfill gets buggy with larger numbers far in the future and the distant past
    for (let magnitude = 0; magnitude < 20; magnitude++) {
      check(BigInt(magnitude));
      check(BigInt(-magnitude));
      check(BigInt(-2) ** BigInt(magnitude));
      check(BigInt(2) ** BigInt(magnitude));
      check(BigInt(-10) ** BigInt(magnitude));
      check(BigInt(10) ** BigInt(magnitude));
      check(BigInt(-10) ** BigInt(magnitude) - BigInt(magnitude));
      check(BigInt(-10) ** BigInt(magnitude) + BigInt(magnitude));
      check(BigInt(10) ** BigInt(magnitude) - BigInt(magnitude));
      check(BigInt(10) ** BigInt(magnitude) + BigInt(magnitude));
    }
  });
});
