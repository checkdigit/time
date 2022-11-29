// holidays/united-states/federal-reserve-bank/subtract-federal-reserve-bank-business-days.spec.ts

import { strict as assert } from 'node:assert';

import subtractFederalReserveBankBusinessDays from './subtract-federal-reserve-bank-business-days';

describe('subtract-federal-reserve-bank-business-days', () => {
  it('throws error when amount is NaN', () => {
    assert.throws(
      () => subtractFederalReserveBankBusinessDays(new Date('2022-11-13T11:25:10.150Z'), Number.NaN),
      TypeError
    );
  });

  it('works for 0 business days for the whole week', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-13T01:25:10.150Z'), 0).toISOString(),
      '2022-11-13T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-14T02:25:10.150Z'), 0).toISOString(),
      '2022-11-14T02:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-15T03:25:10.150Z'), 0).toISOString(),
      '2022-11-15T03:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-16T04:25:10.150Z'), 0).toISOString(),
      '2022-11-16T04:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-17T05:25:10.150Z'), 0).toISOString(),
      '2022-11-17T05:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-18T06:25:10.150Z'), 0).toISOString(),
      '2022-11-18T06:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-19T07:25:10.150Z'), 0).toISOString(),
      '2022-11-19T07:25:10.150Z'
    );
  });

  it('works for 1 business day with Christmas Day and New Years observed on a Monday', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-25T01:25:10.150Z'), 1).toISOString(),
      '2022-12-23T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-26T02:25:10.150Z'), 1).toISOString(),
      '2022-12-23T02:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-27T03:25:10.150Z'), 1).toISOString(),
      '2022-12-23T03:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-28T04:25:10.150Z'), 1).toISOString(),
      '2022-12-27T04:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-29T05:25:10.150Z'), 1).toISOString(),
      '2022-12-28T05:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-30T06:25:10.150Z'), 1).toISOString(),
      '2022-12-29T06:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-31T07:25:10.150Z'), 1).toISOString(),
      '2022-12-30T07:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-01T08:25:10.150Z'), 1).toISOString(),
      '2022-12-30T08:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-02T09:25:10.150Z'), 1).toISOString(),
      '2022-12-30T09:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-03T10:25:10.150Z'), 1).toISOString(),
      '2022-12-30T10:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-04T11:25:10.150Z'), 1).toISOString(),
      '2023-01-03T11:25:10.150Z'
    );
  });

  it('works for 2 business days for the whole week with no federal holidays in between', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-11T01:25:10.150Z'), 2).toISOString(),
      '2022-12-08T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-12T02:25:10.150Z'), 2).toISOString(),
      '2022-12-08T02:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-13T03:25:10.150Z'), 2).toISOString(),
      '2022-12-09T03:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-14T04:25:10.150Z'), 2).toISOString(),
      '2022-12-12T04:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-15T05:25:10.150Z'), 2).toISOString(),
      '2022-12-13T05:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-16T06:25:10.150Z'), 2).toISOString(),
      '2022-12-14T06:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-17T07:25:10.150Z'), 2).toISOString(),
      '2022-12-15T07:25:10.150Z'
    );
  });

  it('works for 2 business days for the whole week with a federal holiday(Thanksgiving Day) in between', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-20T01:25:10.150Z'), 2).toISOString(),
      '2022-11-17T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-21T02:25:10.150Z'), 2).toISOString(),
      '2022-11-17T02:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-22T03:25:10.150Z'), 2).toISOString(),
      '2022-11-18T03:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-23T04:25:10.150Z'), 2).toISOString(),
      '2022-11-21T04:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-24T05:25:10.150Z'), 2).toISOString(),
      '2022-11-22T05:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-25T06:25:10.150Z'), 2).toISOString(),
      '2022-11-22T06:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-26T07:25:10.150Z'), 2).toISOString(),
      '2022-11-23T07:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-27T08:25:10.150Z'), 2).toISOString(),
      '2022-11-23T08:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-28T09:25:10.150Z'), 2).toISOString(),
      '2022-11-23T09:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-29T10:25:10.150Z'), 2).toISOString(),
      '2022-11-25T10:25:10.150Z'
    );
  });

  it('works for 2 business days when the daylight savings time begins in 2023', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-03-10T02:25:10.150Z'), 2).toISOString(),
      '2023-03-08T02:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-03-11T03:25:10.150Z'), 2).toISOString(),
      '2023-03-09T03:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-03-12T04:25:10.150Z'), 2).toISOString(),
      '2023-03-09T04:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-03-13T05:25:10.150Z'), 2).toISOString(),
      '2023-03-09T05:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-03-14T06:25:10.150Z'), 2).toISOString(),
      '2023-03-10T06:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-03-15T07:25:10.150Z'), 2).toISOString(),
      '2023-03-13T07:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-03-16T08:25:10.150Z'), 2).toISOString(),
      '2023-03-14T08:25:10.150Z'
    );
  });

  it('works for 3 business days when the daylight savings time ends in 2023', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-03-04T02:25:10.150Z'), 3).toISOString(),
      '2023-03-01T02:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-03-05T02:25:10.150Z'), 3).toISOString(),
      '2023-03-01T02:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-03-06T02:25:10.150Z'), 3).toISOString(),
      '2023-03-01T02:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-03-07T02:25:10.150Z'), 3).toISOString(),
      '2023-03-02T02:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-03-08T02:25:10.150Z'), 3).toISOString(),
      '2023-03-03T02:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-03-09T02:25:10.150Z'), 3).toISOString(),
      '2023-03-06T02:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-03-10T02:25:10.150Z'), 3).toISOString(),
      '2023-03-07T02:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-03-11T03:25:10.150Z'), 3).toISOString(),
      '2023-03-08T03:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-03-12T04:25:10.150Z'), 3).toISOString(),
      '2023-03-08T04:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-03-13T05:25:10.150Z'), 3).toISOString(),
      '2023-03-08T05:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-03-14T06:25:10.150Z'), 3).toISOString(),
      '2023-03-09T06:25:10.150Z'
    );
  });

  it('works for 3 business days with Christmas Day and New Years observed on a Monday', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-25T01:25:10.150Z'), 3).toISOString(),
      '2022-12-21T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-26T02:25:10.150Z'), 3).toISOString(),
      '2022-12-21T02:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-27T03:25:10.150Z'), 3).toISOString(),
      '2022-12-21T03:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-28T04:25:10.150Z'), 3).toISOString(),
      '2022-12-22T04:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-29T05:25:10.150Z'), 3).toISOString(),
      '2022-12-23T05:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-30T06:25:10.150Z'), 3).toISOString(),
      '2022-12-27T06:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-31T07:25:10.150Z'), 3).toISOString(),
      '2022-12-28T07:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-01T08:25:10.150Z'), 3).toISOString(),
      '2022-12-28T08:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-02T09:25:10.150Z'), 3).toISOString(),
      '2022-12-28T09:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-03T10:25:10.150Z'), 3).toISOString(),
      '2022-12-28T10:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-04T11:25:10.150Z'), 3).toISOString(),
      '2022-12-29T11:25:10.150Z'
    );
  });

  it('works for 3 business days in a leap year', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2024-02-26T01:02:12.721Z'), 3).toISOString(),
      '2024-02-21T01:02:12.721Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2024-02-27T01:02:12.721Z'), 3).toISOString(),
      '2024-02-22T01:02:12.721Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2024-02-28T01:02:12.721Z'), 3).toISOString(),
      '2024-02-23T01:02:12.721Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2024-02-29T01:02:12.721Z'), 3).toISOString(),
      '2024-02-26T01:02:12.721Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2024-03-01T01:02:12.721Z'), 3).toISOString(),
      '2024-02-27T01:02:12.721Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2024-03-02T01:02:12.721Z'), 3).toISOString(),
      '2024-02-28T01:02:12.721Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2024-03-03T01:02:12.721Z'), 3).toISOString(),
      '2024-02-28T01:02:12.721Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2024-03-04T01:02:12.721Z'), 3).toISOString(),
      '2024-02-28T01:02:12.721Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2024-03-05T01:02:12.721Z'), 3).toISOString(),
      '2024-02-29T01:02:12.721Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2024-03-06T01:02:12.721Z'), 3).toISOString(),
      '2024-03-01T01:02:12.721Z'
    );
  });

  it('works for 3 business days in a leap year when February 29th is a Sunday', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2032-02-26T01:02:12.721Z'), 3).toISOString(),
      '2032-02-23T01:02:12.721Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2032-02-27T01:02:12.721Z'), 3).toISOString(),
      '2032-02-24T01:02:12.721Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2032-02-28T01:02:12.721Z'), 3).toISOString(),
      '2032-02-25T01:02:12.721Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2032-02-29T01:02:12.721Z'), 3).toISOString(),
      '2032-02-25T01:02:12.721Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2032-03-01T01:02:12.721Z'), 3).toISOString(),
      '2032-02-25T01:02:12.721Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2032-03-02T01:02:12.721Z'), 3).toISOString(),
      '2032-02-26T01:02:12.721Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2032-03-03T01:02:12.721Z'), 3).toISOString(),
      '2032-02-27T01:02:12.721Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2032-03-04T01:02:12.721Z'), 3).toISOString(),
      '2032-03-01T01:02:12.721Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2032-03-05T01:02:12.721Z'), 3).toISOString(),
      '2032-03-02T01:02:12.721Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2032-03-06T01:02:12.721Z'), 3).toISOString(),
      '2032-03-03T01:02:12.721Z'
    );
  });

  it('works for 16 business days every hour with three federal holidays in between', () => {
    // We have 4 Saturdays, 4 Sundays and 3 Federal Reserve Bank holidays (2 observed on a Monday and
    // 1 celebrated on a Monday)
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T00:00:00.000Z'), 16).toISOString(),
      '2022-12-21T00:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T01:00:00.000Z'), 16).toISOString(),
      '2022-12-21T01:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T02:00:00.000Z'), 16).toISOString(),
      '2022-12-21T02:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T03:00:00.000Z'), 16).toISOString(),
      '2022-12-21T03:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T04:00:00.000Z'), 16).toISOString(),
      '2022-12-21T04:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T05:00:00.000Z'), 16).toISOString(),
      '2022-12-21T05:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T06:00:00.000Z'), 16).toISOString(),
      '2022-12-21T06:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T07:00:00.000Z'), 16).toISOString(),
      '2022-12-21T07:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T08:00:00.000Z'), 16).toISOString(),
      '2022-12-21T08:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T09:00:00.000Z'), 16).toISOString(),
      '2022-12-21T09:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T10:00:00.000Z'), 16).toISOString(),
      '2022-12-21T10:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T11:00:00.000Z'), 16).toISOString(),
      '2022-12-21T11:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T12:00:00.000Z'), 16).toISOString(),
      '2022-12-21T12:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T13:00:00.000Z'), 16).toISOString(),
      '2022-12-21T13:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T14:00:00.000Z'), 16).toISOString(),
      '2022-12-21T14:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T15:00:00.000Z'), 16).toISOString(),
      '2022-12-21T15:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T16:00:00.000Z'), 16).toISOString(),
      '2022-12-21T16:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T17:00:00.000Z'), 16).toISOString(),
      '2022-12-21T17:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T18:00:00.000Z'), 16).toISOString(),
      '2022-12-21T18:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T19:00:00.000Z'), 16).toISOString(),
      '2022-12-21T19:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T20:00:00.000Z'), 16).toISOString(),
      '2022-12-21T20:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T21:00:00.000Z'), 16).toISOString(),
      '2022-12-21T21:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T22:00:00.000Z'), 16).toISOString(),
      '2022-12-21T22:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-17T23:00:00.000Z'), 16).toISOString(),
      '2022-12-21T23:00:00.000Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-18T00:00:00.000Z'), 16).toISOString(),
      '2022-12-22T00:00:00.000Z'
    );
  });
});
