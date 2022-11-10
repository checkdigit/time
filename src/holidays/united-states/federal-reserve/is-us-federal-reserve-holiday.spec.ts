// holidays/united-states/federal-reserve/is-us-federal-reserve-holiday.spec.ts

import { strict as assert } from 'node:assert';

import isUsFederalReserveHoliday from './is-us-federal-reserve-holiday';

describe('is-us-federal-reserve-holiday', () => {
  it('works', () => {
    assert.equal(isUsFederalReserveHoliday(new Date('2022-11-10T16:58:28.866Z')), false);
  });
});
