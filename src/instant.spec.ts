// instant.spec.ts

import assert from 'assert';
import { Temporal as TemporalPolyfill } from 'proposal-temporal';
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
      assert.strictEqual(TemporalPolyfill.Instant.from(dateString).toString(), dateString);
      assert.strictEqual(Temporal.Instant.from(dateString).toString(), dateString);
    });
  });

  it('does not allow use of valueOf()', () => {
    assert.throws(() => Temporal.now.instant().valueOf());
    assert.throws(() => ((Temporal.now.instant() as unknown) as number) + 1);
  });

  it('compare method works with sort()', () => {
    // example from documentation
    const one = Temporal.Instant.fromEpochSeconds(1.0e9);
    const two = Temporal.Instant.fromEpochSeconds(1.1e9);
    const three = Temporal.Instant.fromEpochSeconds(1.2e9);

    // this should not be an eslint error.  Temporal.Instant.compare is a static method.
    // eslint-disable-next-line @typescript-eslint/unbound-method
    const sorted = [three, one, two].sort(Temporal.Instant.compare);
    assert.strictEqual(sorted.join(' '), '2001-09-09T01:46:40Z 2004-11-09T11:33:20Z 2008-01-10T21:20:00Z');
  });

  it('static methods compatible with current TC39 Temporal polyfill', () => {
    const time = TemporalPolyfill.now.instant().epochNanoseconds;

    assert.strictEqual(
      Temporal.Instant.fromEpochSeconds(Number(time / BigInt(1e9))).toString(),
      TemporalPolyfill.Instant.fromEpochSeconds(Number(time / BigInt(1e9))).toString()
    );

    assert.strictEqual(
      Temporal.Instant.fromEpochMilliseconds(Number(time / BigInt(1e6))).toString(),
      TemporalPolyfill.Instant.fromEpochMilliseconds(Number(time / BigInt(1e6))).toString()
    );

    assert.strictEqual(
      Temporal.Instant.fromEpochMicroseconds(time / BigInt(1e3)).toString(),
      TemporalPolyfill.Instant.fromEpochMicroseconds(time / BigInt(1e3)).toString()
    );

    assert.strictEqual(
      Temporal.Instant.fromEpochNanoseconds(time).toString(),
      TemporalPolyfill.Instant.fromEpochNanoseconds(time).toString()
    );

    assert.strictEqual(
      Temporal.Instant.compare(
        Temporal.Instant.fromEpochNanoseconds(time),
        Temporal.Instant.fromEpochNanoseconds(time)
      ),
      TemporalPolyfill.Instant.compare(
        TemporalPolyfill.Instant.fromEpochNanoseconds(time),
        TemporalPolyfill.Instant.fromEpochNanoseconds(time)
      )
    );

    assert.strictEqual(
      Temporal.Instant.compare(
        Temporal.Instant.fromEpochNanoseconds(time),
        Temporal.Instant.fromEpochNanoseconds(time + BigInt(1))
      ),
      TemporalPolyfill.Instant.compare(
        TemporalPolyfill.Instant.fromEpochNanoseconds(time),
        TemporalPolyfill.Instant.fromEpochNanoseconds(time + BigInt(1))
      )
    );

    assert.strictEqual(
      Temporal.Instant.compare(
        Temporal.Instant.fromEpochNanoseconds(time),
        Temporal.Instant.fromEpochNanoseconds(time - BigInt(1))
      ),
      TemporalPolyfill.Instant.compare(
        TemporalPolyfill.Instant.fromEpochNanoseconds(time),
        TemporalPolyfill.Instant.fromEpochNanoseconds(time - BigInt(1))
      )
    );

    assert.strictEqual(
      Temporal.Instant.from(Temporal.Instant.fromEpochNanoseconds(time)).toString(),
      TemporalPolyfill.Instant.from(TemporalPolyfill.Instant.fromEpochNanoseconds(time)).toString()
    );

    assert.strictEqual(
      Temporal.Instant.from(Temporal.Instant.fromEpochNanoseconds(time).toString()).epochNanoseconds,
      TemporalPolyfill.Instant.from(TemporalPolyfill.Instant.fromEpochNanoseconds(time).toString()).epochNanoseconds
    );
  });

  it('compatible with current TC39 Temporal polyfill', () => {
    function check(time: bigint = TemporalPolyfill.now.instant().epochNanoseconds) {
      const implementation = new Temporal.Instant(time);
      const polyfill = new TemporalPolyfill.Instant(time);

      assert.strictEqual(implementation.epochSeconds, polyfill.epochSeconds);
      assert.strictEqual(implementation.epochMicroseconds, polyfill.epochMicroseconds);
      assert.ok(implementation.equals(implementation));
      assert.ok(polyfill.equals(polyfill));
      assert.strictEqual(implementation.toJSON(), polyfill.toJSON());
      assert.strictEqual(implementation.toString(), polyfill.toString());

      assert.strictEqual(
        Temporal.Instant.from(implementation.toString()).epochNanoseconds,
        TemporalPolyfill.Instant.from(polyfill.toString()).epochNanoseconds
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
