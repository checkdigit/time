// absolute.spec.ts

import assert from 'assert';
import { Temporal as TemporalPolyfill } from 'proposal-temporal';

import { Temporal } from './index';

describe('absolute', () => {
  it('from parses date strings correctly', () => {
    [
      '1970-01-01T00:00:00.100Z',
      '1970-01-01T00:00Z',
      '1969-12-31T23:59:59.999999999Z',
      '1969-12-31T23:59:59.999999Z',
      '1969-12-31T23:59:59.999Z',
      '1969-12-31T23:59:59Z',
      '2286-11-20T17:46:40.123Z',
      '2286-11-20T17:46:40.123456Z',
      '2286-11-20T17:46:40.123456789Z',
      '2286-11-20T17:46:40Z',
      '2286-11-20T17:46Z',
    ].forEach((dateString) => {
      assert.strictEqual(Temporal.Absolute.from(dateString).toString(), dateString);
    });
  });

  it('static methods compatible with current TC39 Temporal polyfill', () => {
    const time = TemporalPolyfill.now.absolute().getEpochNanoseconds();

    assert.strictEqual(
      Temporal.Absolute.fromEpochSeconds(Number(time / BigInt(1e9))).toString(),
      TemporalPolyfill.Absolute.fromEpochSeconds(Number(time / BigInt(1e9))).toString()
    );

    assert.strictEqual(
      Temporal.Absolute.fromEpochMilliseconds(Number(time / BigInt(1e6))).toString(),
      TemporalPolyfill.Absolute.fromEpochMilliseconds(Number(time / BigInt(1e6))).toString()
    );

    assert.strictEqual(
      Temporal.Absolute.fromEpochMicroseconds(time / BigInt(1e3)).toString(),
      TemporalPolyfill.Absolute.fromEpochMicroseconds(time / BigInt(1e3)).toString()
    );

    assert.strictEqual(
      Temporal.Absolute.fromEpochNanoseconds(time).toString(),
      TemporalPolyfill.Absolute.fromEpochNanoseconds(time).toString()
    );

    assert.strictEqual(
      Temporal.Absolute.compare(
        Temporal.Absolute.fromEpochNanoseconds(time),
        Temporal.Absolute.fromEpochNanoseconds(time)
      ),
      TemporalPolyfill.Absolute.compare(
        TemporalPolyfill.Absolute.fromEpochNanoseconds(time),
        TemporalPolyfill.Absolute.fromEpochNanoseconds(time)
      )
    );

    assert.strictEqual(
      Temporal.Absolute.compare(
        Temporal.Absolute.fromEpochNanoseconds(time),
        Temporal.Absolute.fromEpochNanoseconds(time + BigInt(1))
      ),
      TemporalPolyfill.Absolute.compare(
        TemporalPolyfill.Absolute.fromEpochNanoseconds(time),
        TemporalPolyfill.Absolute.fromEpochNanoseconds(time + BigInt(1))
      )
    );

    assert.strictEqual(
      Temporal.Absolute.compare(
        Temporal.Absolute.fromEpochNanoseconds(time),
        Temporal.Absolute.fromEpochNanoseconds(time - BigInt(1))
      ),
      TemporalPolyfill.Absolute.compare(
        TemporalPolyfill.Absolute.fromEpochNanoseconds(time),
        TemporalPolyfill.Absolute.fromEpochNanoseconds(time - BigInt(1))
      )
    );

    assert.strictEqual(
      Temporal.Absolute.from(Temporal.Absolute.fromEpochNanoseconds(time)).toString(),
      TemporalPolyfill.Absolute.from(TemporalPolyfill.Absolute.fromEpochNanoseconds(time)).toString()
    );

    assert.strictEqual(
      Temporal.Absolute.from(Temporal.Absolute.fromEpochNanoseconds(time).toString()).getEpochNanoseconds(),
      TemporalPolyfill.Absolute.from(
        TemporalPolyfill.Absolute.fromEpochNanoseconds(time).toString()
      ).getEpochNanoseconds()
    );
  });

  it('compatible with current TC39 Temporal polyfill', () => {
    function check(time: bigint = TemporalPolyfill.now.absolute().getEpochNanoseconds()) {
      const implementation = new Temporal.Absolute(time);
      const polyfill = new TemporalPolyfill.Absolute(time);

      assert.strictEqual(implementation.getEpochSeconds(), polyfill.getEpochSeconds());
      assert.strictEqual(implementation.getEpochMicroseconds(), polyfill.getEpochMicroseconds());
      assert.ok(implementation.equals(implementation));
      assert.ok(polyfill.equals(polyfill));
      assert.strictEqual(implementation.toJSON(), polyfill.toJSON());
      assert.strictEqual(implementation.toString(), polyfill.toString());

      assert.strictEqual(
        Temporal.Absolute.from(implementation.toString()).getEpochNanoseconds(),
        TemporalPolyfill.Absolute.from(polyfill.toString()).getEpochNanoseconds()
      );
    }

    // current time
    check();

    // we only go to 10^20, the polyfill gets buggy with larger numbers far in the future and the distance past
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
