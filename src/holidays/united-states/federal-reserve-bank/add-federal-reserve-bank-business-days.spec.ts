// holidays/united-states/federal-reserve-bank/add-federal-reserve-bank-business-days.spec.ts

import { strict as assert } from 'node:assert';

import addFederalReserveBankBusinessDays from './add-federal-reserve-bank-business-days';

describe('add-federal-reserve-bank-business-days', () => {
  it('throws error when amount is NaN', () => {
    assert.throws(() => addFederalReserveBankBusinessDays(new Date('2022-11-13T19:02:12.721Z'), Number.NaN), TypeError);
  });

  it('works for 0 business days for the whole week', () => {
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-13T19:02:12.721Z'), 0).toISOString(),
      '2022-11-13T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-14T19:02:12.721Z'), 0).toISOString(),
      '2022-11-14T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-15T19:02:12.721Z'), 0).toISOString(),
      '2022-11-15T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-16T19:02:12.721Z'), 0).toISOString(),
      '2022-11-16T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-17T19:02:12.721Z'), 0).toISOString(),
      '2022-11-17T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-18T19:02:12.721Z'), 0).toISOString(),
      '2022-11-18T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-19T19:02:12.721Z'), 0).toISOString(),
      '2022-11-19T19:02:12.721Z'
    );
  });

  it('works for 1 business day with Christmas Day and New Years observed on a Monday', () => {
    // Sunday --> Tuesday (Since 2022-12-26 is a Federal Reserve Holiday (observed) celebrating Christmas Day)
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-25T19:02:12.721Z'), 1).toISOString(),
      '2022-12-27T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-26T19:02:12.721Z'), 1).toISOString(),
      '2022-12-27T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-27T19:02:12.721Z'), 1).toISOString(),
      '2022-12-28T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-28T19:02:12.721Z'), 1).toISOString(),
      '2022-12-29T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-29T19:02:12.721Z'), 1).toISOString(),
      '2022-12-30T19:02:12.721Z'
    );
    // Friday --> Tuesday (Since 2023-01-02 is a Federal Reserve Holiday (observed) celebrating New Year's Day)
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-30T19:02:12.721Z'), 1).toISOString(),
      '2023-01-03T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-31T19:02:12.721Z'), 1).toISOString(),
      '2023-01-03T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-01-01T19:02:12.721Z'), 1).toISOString(),
      '2023-01-03T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-01-02T19:02:12.721Z'), 1).toISOString(),
      '2023-01-03T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-01-03T19:02:12.721Z'), 1).toISOString(),
      '2023-01-04T19:02:12.721Z'
    );
  });

  it('works for 2 business days for the whole week with no federal holidays in between', () => {
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-13T19:02:12.721Z'), 2).toISOString(),
      '2022-11-15T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-14T19:02:12.721Z'), 2).toISOString(),
      '2022-11-16T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-15T19:02:12.721Z'), 2).toISOString(),
      '2022-11-17T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-16T19:02:12.721Z'), 2).toISOString(),
      '2022-11-18T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-17T19:02:12.721Z'), 2).toISOString(),
      '2022-11-21T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-18T19:02:12.721Z'), 2).toISOString(),
      '2022-11-22T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-19T19:02:12.721Z'), 2).toISOString(),
      '2022-11-22T19:02:12.721Z'
    );
  });

  it('works for 2 business days for the whole week with a federal holiday(Thanksgiving Day) in between', () => {
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-20T19:02:12.721Z'), 2).toISOString(),
      '2022-11-22T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-21T19:02:12.721Z'), 2).toISOString(),
      '2022-11-23T19:02:12.721Z'
    );
    // Tuesday --> Friday (Since 2022-11-24 is a Federal Reserve Holiday celebrating Thanksgiving Day)
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-22T19:02:12.721Z'), 2).toISOString(),
      '2022-11-25T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-23T19:02:12.721Z'), 2).toISOString(),
      '2022-11-28T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-24T19:02:12.721Z'), 2).toISOString(),
      '2022-11-28T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-25T19:02:12.721Z'), 2).toISOString(),
      '2022-11-29T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-26T19:02:12.721Z'), 2).toISOString(),
      '2022-11-29T19:02:12.721Z'
    );
  });

  it('works for 3 business days with Christmas Day and New Years observed on a Monday', () => {
    // Sunday --> Thursday (Since 2022-12-26 is a Federal Reserve Holiday (observed) celebrating Christmas Day)
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-25T19:02:12.721Z'), 3).toISOString(),
      '2022-12-29T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-26T19:02:12.721Z'), 3).toISOString(),
      '2022-12-29T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-27T19:02:12.721Z'), 3).toISOString(),
      '2022-12-30T19:02:12.721Z'
    );
    // Wednesday --> Tuesday (Since 2023-01-02 is a Federal Reserve Holiday (observed) celebrating New Year's Day)
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-28T19:02:12.721Z'), 3).toISOString(),
      '2023-01-03T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-29T19:02:12.721Z'), 3).toISOString(),
      '2023-01-04T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-30T19:02:12.721Z'), 3).toISOString(),
      '2023-01-05T19:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-31T19:02:12.721Z'), 3).toISOString(),
      '2023-01-05T19:02:12.721Z'
    );
  });

  it('works for 16 business days every hour with three federal holidays in between', () => {
    // We have 4 Saturdays, 4 Sundays and 3 Federal Reserve Bank holidays (2 observed on a Monday and
    // 1 celebrated on a Monday)
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T00:00:00.000Z'), 16).toISOString(),
      '2023-01-17T00:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T01:00:00.000Z'), 16).toISOString(),
      '2023-01-17T01:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T02:00:00.000Z'), 16).toISOString(),
      '2023-01-17T02:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T03:00:00.000Z'), 16).toISOString(),
      '2023-01-17T03:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T04:00:00.000Z'), 16).toISOString(),
      '2023-01-17T04:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T05:00:00.000Z'), 16).toISOString(),
      '2023-01-17T05:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T06:00:00.000Z'), 16).toISOString(),
      '2023-01-17T06:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T07:00:00.000Z'), 16).toISOString(),
      '2023-01-17T07:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T08:00:00.000Z'), 16).toISOString(),
      '2023-01-17T08:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T09:00:00.000Z'), 16).toISOString(),
      '2023-01-17T09:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T10:00:00.000Z'), 16).toISOString(),
      '2023-01-17T10:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T11:00:00.000Z'), 16).toISOString(),
      '2023-01-17T11:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T12:00:00.000Z'), 16).toISOString(),
      '2023-01-17T12:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T13:00:00.000Z'), 16).toISOString(),
      '2023-01-17T13:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T14:00:00.000Z'), 16).toISOString(),
      '2023-01-17T14:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T15:00:00.000Z'), 16).toISOString(),
      '2023-01-17T15:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T16:00:00.000Z'), 16).toISOString(),
      '2023-01-17T16:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T17:00:00.000Z'), 16).toISOString(),
      '2023-01-17T17:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T18:00:00.000Z'), 16).toISOString(),
      '2023-01-17T18:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T19:00:00.000Z'), 16).toISOString(),
      '2023-01-17T19:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T20:00:00.000Z'), 16).toISOString(),
      '2023-01-17T20:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T21:00:00.000Z'), 16).toISOString(),
      '2023-01-17T21:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T22:00:00.000Z'), 16).toISOString(),
      '2023-01-17T22:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T23:00:00.000Z'), 16).toISOString(),
      '2023-01-17T23:00:00.000Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-22T00:00:00.000Z'), 16).toISOString(),
      '2023-01-18T00:00:00.000Z'
    );
  });
});
