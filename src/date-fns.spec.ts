// date-fns.spec.ts

import { strict as assert } from 'node:assert';

import { describe, it } from '@jest/globals';

import { add } from './index';

describe('date-fns', () => {
  it('add works', () => {
    assert.equal(
      add(new Date('2014-09-01T14:19:50.000Z'), {
        years: 2,
        months: 9,
        weeks: 1,
        days: 7,
        hours: 5,
        minutes: 9,
        seconds: 30,
      }).toISOString(),
      '2017-06-15T19:29:20.000Z',
    );
  });
});
