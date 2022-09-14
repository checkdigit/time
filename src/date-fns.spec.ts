// date-fns.spec.ts

import { strict as assert } from 'node:assert';

import { add, tzFormat, tzUtcToZonedTime } from './index';

describe('date-fns', () => {
  it('tzFormat works', () => {
    assert.equal(
      tzFormat(tzUtcToZonedTime(new Date('Tue Sep 13 2022 13:38:00 GMT-0400'), 'UTC'), 'yyyy-MM-dd', {
        timeZone: 'UTC',
      }),
      '2022-09-13'
    );
    assert.equal(
      tzFormat(tzUtcToZonedTime(new Date('Tue Sep 13 2022 13:38:00 GMT-0400'), 'UTC'), 'yyyy-MM-dd-hh-mm-ss', {
        timeZone: 'UTC',
      }),
      '2022-09-13-05-38-00'
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
