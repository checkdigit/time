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
      subtractFederalReserveBankBusinessDays(new Date('2022-11-13T11:25:10.150Z'), 0).toISOString(),
      '2022-11-13T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-14T11:25:10.150Z'), 0).toISOString(),
      '2022-11-14T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-15T11:25:10.150Z'), 0).toISOString(),
      '2022-11-15T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-16T11:25:10.150Z'), 0).toISOString(),
      '2022-11-16T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-17T11:25:10.150Z'), 0).toISOString(),
      '2022-11-17T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-18T11:25:10.150Z'), 0).toISOString(),
      '2022-11-18T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-19T11:25:10.150Z'), 0).toISOString(),
      '2022-11-19T11:25:10.150Z'
    );
  });

  it('works for 1 business day with Christmas Day and New Years observed on a Monday', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-25T11:25:10.150Z'), 1).toISOString(),
      '2022-12-23T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-26T11:25:10.150Z'), 1).toISOString(),
      '2022-12-23T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-27T11:25:10.150Z'), 1).toISOString(),
      '2022-12-23T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-28T11:25:10.150Z'), 1).toISOString(),
      '2022-12-27T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-29T11:25:10.150Z'), 1).toISOString(),
      '2022-12-28T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-30T11:25:10.150Z'), 1).toISOString(),
      '2022-12-29T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-31T11:25:10.150Z'), 1).toISOString(),
      '2022-12-30T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-01T11:25:10.150Z'), 1).toISOString(),
      '2022-12-30T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-02T11:25:10.150Z'), 1).toISOString(),
      '2022-12-30T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-03T11:25:10.150Z'), 1).toISOString(),
      '2022-12-30T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-04T11:25:10.150Z'), 1).toISOString(),
      '2023-01-03T11:25:10.150Z'
    );
  });

  it('works for 2 business days for the whole week with no federal holidays in between', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-11T11:25:10.150Z'), 2).toISOString(),
      '2022-12-08T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-12T11:25:10.150Z'), 2).toISOString(),
      '2022-12-08T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-13T11:25:10.150Z'), 2).toISOString(),
      '2022-12-09T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-14T11:25:10.150Z'), 2).toISOString(),
      '2022-12-12T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-15T11:25:10.150Z'), 2).toISOString(),
      '2022-12-13T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-16T11:25:10.150Z'), 2).toISOString(),
      '2022-12-14T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-17T11:25:10.150Z'), 2).toISOString(),
      '2022-12-15T11:25:10.150Z'
    );
  });

  it('works for 2 business days for the whole week with a federal holiday(Thanksgiving Day) in between', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-20T11:25:10.150Z'), 2).toISOString(),
      '2022-11-17T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-21T11:25:10.150Z'), 2).toISOString(),
      '2022-11-17T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-22T11:25:10.150Z'), 2).toISOString(),
      '2022-11-18T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-23T11:25:10.150Z'), 2).toISOString(),
      '2022-11-21T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-24T11:25:10.150Z'), 2).toISOString(),
      '2022-11-22T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-25T11:25:10.150Z'), 2).toISOString(),
      '2022-11-22T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-26T11:25:10.150Z'), 2).toISOString(),
      '2022-11-23T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-27T11:25:10.150Z'), 2).toISOString(),
      '2022-11-23T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-28T11:25:10.150Z'), 2).toISOString(),
      '2022-11-23T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-29T11:25:10.150Z'), 2).toISOString(),
      '2022-11-25T11:25:10.150Z'
    );
  });

  it('works for 3 business days with Christmas Day and New Years observed on a Monday', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-25T11:25:10.150Z'), 3).toISOString(),
      '2022-12-21T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-26T11:25:10.150Z'), 3).toISOString(),
      '2022-12-21T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-27T11:25:10.150Z'), 3).toISOString(),
      '2022-12-21T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-28T11:25:10.150Z'), 3).toISOString(),
      '2022-12-22T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-29T11:25:10.150Z'), 3).toISOString(),
      '2022-12-23T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-30T11:25:10.150Z'), 3).toISOString(),
      '2022-12-27T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-31T11:25:10.150Z'), 3).toISOString(),
      '2022-12-28T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-01T11:25:10.150Z'), 3).toISOString(),
      '2022-12-28T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-02T11:25:10.150Z'), 3).toISOString(),
      '2022-12-28T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-03T11:25:10.150Z'), 3).toISOString(),
      '2022-12-28T11:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-04T11:25:10.150Z'), 3).toISOString(),
      '2022-12-29T11:25:10.150Z'
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
