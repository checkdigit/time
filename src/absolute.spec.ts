// absolute.spec.ts

import assert from 'assert';
import { Temporal as TemporalPolyfill } from 'proposal-temporal';

import { Temporal } from './index';

describe('absolute', () => {
  it('compatible with current TC39 Temporal polyfill', () => {
    const time = TemporalPolyfill.now.absolute().getEpochNanoseconds();

    const implementation = new Temporal.Absolute(time);
    const polyfill = new TemporalPolyfill.Absolute(time);

    // fix this...
    assert.notStrictEqual(implementation.toString(), polyfill.toString());
  });
});
