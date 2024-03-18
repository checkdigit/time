// date-fns-tz.spec.ts

import { strict as assert } from 'node:assert';

import { describe, it } from '@jest/globals';

import { tzFormat, tzUtcToZonedTime } from './index';

describe('date-fns-tz', () => {
  it('tzFormat works', () => {
    assert.equal(
      tzFormat(tzUtcToZonedTime(new Date('Tue Sep 13 2022 13:38:00 GMT-0400'), 'UTC'), 'yyyy-MM-dd', {
        timeZone: 'UTC',
      }),
      '2022-09-13',
    );
    assert.equal(
      tzFormat(tzUtcToZonedTime(new Date('Tue Sep 13 2022 13:38:00 GMT-0400'), 'UTC'), 'yyyy-MM-dd-hh-mm-ss', {
        timeZone: 'UTC',
      }),
      '2022-09-13-05-38-00',
    );
  });
});
