// holidays/united-states/federal-reserve-bank/is-federal-reserve-bank-holiday.spec.ts

import { strict as assert } from 'node:assert';

import isFederalReserveBankHoliday from './is-federal-reserve-bank-holiday';

describe('is-us-federal-reserve-bank-holiday', () => {
  it('works', () => {
    assert.equal(isFederalReserveBankHoliday(new Date('2022-11-10T16:58:28.866Z')), false);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-11-11T16:58:28.866Z')), true); // Veteran's Day 2022
  });
});
