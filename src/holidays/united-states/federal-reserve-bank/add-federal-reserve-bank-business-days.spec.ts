// holidays/united-states/federal-reserve-bank/add-federal-reserve-bank-business-days.spec.ts

import { strict as assert } from 'node:assert';

import addFederalReserveBankBusinessDays from './add-federal-reserve-bank-business-days';

describe('add-federal-reserve-bank-business-days', () => {
  it('throws error when amount is NaN', () => {
    assert.throws(() => addFederalReserveBankBusinessDays(new Date('2022-11-13T19:02:12.721Z'), Number.NaN), TypeError);
  });

  it('works for 0 business days for the whole week', () => {
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-13T00:02:12.721Z'), 0).toISOString(),
      '2022-11-13T00:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-14T01:02:12.721Z'), 0).toISOString(),
      '2022-11-14T01:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-15T02:02:12.721Z'), 0).toISOString(),
      '2022-11-15T02:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-16T03:02:12.721Z'), 0).toISOString(),
      '2022-11-16T03:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-17T04:02:12.721Z'), 0).toISOString(),
      '2022-11-17T04:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-18T05:02:12.721Z'), 0).toISOString(),
      '2022-11-18T05:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-19T06:02:12.721Z'), 0).toISOString(),
      '2022-11-19T06:02:12.721Z'
    );
  });

  it('works for 1 business day with Christmas Day and New Years observed on a Monday', () => {
    // Sunday --> Tuesday (Since 2022-12-26 is a Federal Reserve Holiday (observed) celebrating Christmas Day)
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-25T00:02:12.721Z'), 1).toISOString(),
      '2022-12-27T00:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-26T01:02:12.721Z'), 1).toISOString(),
      '2022-12-27T01:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-27T02:02:12.721Z'), 1).toISOString(),
      '2022-12-28T02:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-28T03:02:12.721Z'), 1).toISOString(),
      '2022-12-29T03:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-29T04:02:12.721Z'), 1).toISOString(),
      '2022-12-30T04:02:12.721Z'
    );
    // Friday --> Tuesday (Since 2023-01-02 is a Federal Reserve Holiday (observed) celebrating New Year's Day)
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-30T05:02:12.721Z'), 1).toISOString(),
      '2023-01-03T05:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-31T06:02:12.721Z'), 1).toISOString(),
      '2023-01-03T06:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-01-01T07:02:12.721Z'), 1).toISOString(),
      '2023-01-03T07:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-01-02T08:02:12.721Z'), 1).toISOString(),
      '2023-01-03T08:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-01-03T09:02:12.721Z'), 1).toISOString(),
      '2023-01-04T09:02:12.721Z'
    );
  });

  it('works for 2 business days for the whole week with no federal holidays in between', () => {
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-13T01:02:12.721Z'), 2).toISOString(),
      '2022-11-15T01:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-14T02:02:12.721Z'), 2).toISOString(),
      '2022-11-16T02:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-15T03:02:12.721Z'), 2).toISOString(),
      '2022-11-17T03:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-16T04:02:12.721Z'), 2).toISOString(),
      '2022-11-18T04:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-17T05:02:12.721Z'), 2).toISOString(),
      '2022-11-21T05:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-18T06:02:12.721Z'), 2).toISOString(),
      '2022-11-22T06:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-19T07:02:12.721Z'), 2).toISOString(),
      '2022-11-22T07:02:12.721Z'
    );
  });

  it('works for 2 business days for the whole week with a federal holiday(Thanksgiving Day) in between', () => {
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-20T01:02:12.721Z'), 2).toISOString(),
      '2022-11-22T01:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-21T02:02:12.721Z'), 2).toISOString(),
      '2022-11-23T02:02:12.721Z'
    );
    // Tuesday --> Friday (Since 2022-11-24 is a Federal Reserve Holiday celebrating Thanksgiving Day)
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-22T03:02:12.721Z'), 2).toISOString(),
      '2022-11-25T03:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-23T04:02:12.721Z'), 2).toISOString(),
      '2022-11-28T04:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-24T05:02:12.721Z'), 2).toISOString(),
      '2022-11-28T05:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-25T06:02:12.721Z'), 2).toISOString(),
      '2022-11-29T06:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-26T07:02:12.721Z'), 2).toISOString(),
      '2022-11-29T07:02:12.721Z'
    );
  });

  it('works for 2 business days when the daylight savings time begins in 2023', () => {
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-03-08T02:25:10.150Z'), 2).toISOString(),
      '2023-03-10T02:25:10.150Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-03-09T03:25:10.150Z'), 2).toISOString(),
      '2023-03-13T03:25:10.150Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-03-10T04:25:10.150Z'), 2).toISOString(),
      '2023-03-14T04:25:10.150Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-03-11T05:02:12.721Z'), 2).toISOString(),
      '2023-03-14T05:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-03-12T06:02:12.721Z'), 2).toISOString(),
      '2023-03-14T06:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-03-13T07:02:12.721Z'), 2).toISOString(),
      '2023-03-15T07:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-03-14T08:02:12.721Z'), 2).toISOString(),
      '2023-03-16T08:02:12.721Z'
    );
  });

  it('works for 3 business days when the daylight savings time ends in 2023', () => {
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-11-01T02:25:10.150Z'), 3).toISOString(),
      '2023-11-06T02:25:10.150Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-11-02T03:25:10.150Z'), 3).toISOString(),
      '2023-11-07T03:25:10.150Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-11-03T04:25:10.150Z'), 3).toISOString(),
      '2023-11-08T04:25:10.150Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-11-04T05:02:12.721Z'), 3).toISOString(),
      '2023-11-08T05:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-11-05T06:02:12.721Z'), 3).toISOString(),
      '2023-11-08T06:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-11-06T07:02:12.721Z'), 3).toISOString(),
      '2023-11-09T07:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-11-07T08:02:12.721Z'), 3).toISOString(),
      '2023-11-10T08:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-11-08T09:02:12.721Z'), 3).toISOString(),
      '2023-11-13T09:02:12.721Z'
    );
  });

  it('works for 3 business days with Christmas Day and New Years observed on a Monday', () => {
    // Sunday --> Thursday (Since 2022-12-26 is a Federal Reserve Holiday (observed) celebrating Christmas Day)
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-25T01:02:12.721Z'), 3).toISOString(),
      '2022-12-29T01:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-26T02:02:12.721Z'), 3).toISOString(),
      '2022-12-29T02:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-27T03:02:12.721Z'), 3).toISOString(),
      '2022-12-30T03:02:12.721Z'
    );
    // Wednesday --> Tuesday (Since 2023-01-02 is a Federal Reserve Holiday (observed) celebrating New Year's Day)
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-28T04:02:12.721Z'), 3).toISOString(),
      '2023-01-03T04:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-29T05:02:12.721Z'), 3).toISOString(),
      '2023-01-04T05:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-30T06:02:12.721Z'), 3).toISOString(),
      '2023-01-05T06:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-31T07:02:12.721Z'), 3).toISOString(),
      '2023-01-05T07:02:12.721Z'
    );
  });

  it('works for 3 business days in a leap year', () => {
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2024-02-26T01:02:12.721Z'), 3).toISOString(),
      '2024-02-29T01:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2024-02-27T01:02:12.721Z'), 3).toISOString(),
      '2024-03-01T01:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2024-02-28T01:02:12.721Z'), 3).toISOString(),
      '2024-03-04T01:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2024-02-29T01:02:12.721Z'), 3).toISOString(),
      '2024-03-05T01:02:12.721Z'
    );
  });

  it('works for 3 business days in a leap year when February 29th is a Sunday', () => {
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2032-02-25T01:02:12.721Z'), 3).toISOString(),
      '2032-03-01T01:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2032-02-26T01:02:12.721Z'), 3).toISOString(),
      '2032-03-02T01:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2032-02-27T01:02:12.721Z'), 3).toISOString(),
      '2032-03-03T01:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2032-02-28T01:02:12.721Z'), 3).toISOString(),
      '2032-03-03T01:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2032-02-29T01:02:12.721Z'), 3).toISOString(),
      '2032-03-03T01:02:12.721Z'
    );
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2032-03-01T01:02:12.721Z'), 3).toISOString(),
      '2032-03-04T01:02:12.721Z'
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
