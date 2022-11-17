// holidays/united-states/federal-reserve-bank/add-federal-reserve-bank-business-days.spec.ts

import { strict as assert } from 'node:assert';

import addFederalReserveBankBusinessDays from './add-federal-reserve-bank-business-days';

describe('add-federal-reserve-bank-business-days', () => {
  it('works', () => {
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-17T19:02:12.721Z'), 2).toISOString(),
      '2022-11-21T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-22T19:02:12.721Z'), 2).toISOString(),
      '2022-11-25T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-30T19:02:12.721Z'), 2).toISOString(),
      '2023-01-04T19:02:12.721Z'
    );
  });
});
