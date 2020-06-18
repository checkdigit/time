// now.spec.ts

import assert from 'assert';
import { Temporal as TemporalPolyfill } from 'proposal-temporal';

import { Temporal } from './index';

describe('now', () => {
  it('absolute() returns current time as Absolute', () => {
    assert.strictEqual(typeof Temporal.now.absolute().toString(), typeof TemporalPolyfill.now.absolute().toString());
    // console.log(Temporal.now.absolute().toString());
    // console.log(TemporalPolyfill.now.absolute().toString());
  });
});
