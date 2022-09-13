// date-fns.spec.ts

import { strict as assert } from 'node:assert';

import { add, format, Temporal } from './index';

describe('date-fns', () => {
  it('format works', () => {
    assert.equal(format(new Date('Tue Sep 13 2022 13:38:00 GMT-0400'), 'yyyy-MM-dd'), '2022-09-13');
  });

  it('format works with temporal', () => {
    assert.equal(format(Temporal.Instant.from('2286-11-20T17:46:40.123456789Z'), 'yyyy-MM-dd'), '2286-11-20');
    assert.equal(
      format(Temporal.Instant.from('2286-11-20T17:46:40.123456789Z'), 'yyyy-MM-dd-hh-ss-SSS'),
      '2286-11-20-12-40-123'
    );
  });

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
      '2017-06-15T19:29:20.000Z'
    );
  });
});
