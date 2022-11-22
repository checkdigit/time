// holidays/united-states/federal-reserve-bank/subtract-federal-reserve-bank-business-days.spec.ts

import { strict as assert } from 'node:assert';

import subtractFederalReserveBankBusinessDays from './subtract-federal-reserve-bank-business-days';

describe('subtract-federal-reserve-bank-business-days', () => {
  it('throws error when amount is NaN', () => {
    assert.throws(
      () => subtractFederalReserveBankBusinessDays(new Date('2022-11-13T01:25:10.150Z'), Number.NaN),
      TypeError
    );
  });

  it('works for 0 business days for the whole week', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-13T01:25:10.150Z'), 0).toISOString(),
      '2022-11-13T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-14T01:25:10.150Z'), 0).toISOString(),
      '2022-11-14T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-15T01:25:10.150Z'), 0).toISOString(),
      '2022-11-15T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-16T01:25:10.150Z'), 0).toISOString(),
      '2022-11-16T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-17T01:25:10.150Z'), 0).toISOString(),
      '2022-11-17T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-18T01:25:10.150Z'), 0).toISOString(),
      '2022-11-18T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-19T01:25:10.150Z'), 0).toISOString(),
      '2022-11-19T01:25:10.150Z'
    );
  });

  xit('works for 1 business day with Christmas Day and New Years observed on a Monday', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-25T01:25:10.150Z'), 1).toISOString(),
      '2022-12-23T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-26T01:25:10.150Z'), 1).toISOString(),
      '2022-12-27T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-27T01:25:10.150Z'), 1).toISOString(),
      '2022-12-28T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-28T01:25:10.150Z'), 1).toISOString(),
      '2022-12-29T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-29T01:25:10.150Z'), 1).toISOString(),
      '2022-12-30T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-30T01:25:10.150Z'), 1).toISOString(),
      '2023-01-03T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-31T01:25:10.150Z'), 1).toISOString(),
      '2023-01-03T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-01T01:25:10.150Z'), 1).toISOString(),
      '2023-01-03T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-02T01:25:10.150Z'), 1).toISOString(),
      '2023-01-03T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2023-01-03T01:25:10.150Z'), 1).toISOString(),
      '2023-01-04T01:25:10.150Z'
    );
  });

  xit('works for 2 business days for the whole week with no federal holidays in between', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-13T01:25:10.150Z'), 2).toISOString(),
      '2022-11-15T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-14T01:25:10.150Z'), 2).toISOString(),
      '2022-11-16T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-15T01:25:10.150Z'), 2).toISOString(),
      '2022-11-17T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-16T01:25:10.150Z'), 2).toISOString(),
      '2022-11-18T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-17T01:25:10.150Z'), 2).toISOString(),
      '2022-11-21T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-18T01:25:10.150Z'), 2).toISOString(),
      '2022-11-22T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-19T01:25:10.150Z'), 2).toISOString(),
      '2022-11-22T01:25:10.150Z'
    );
  });

  xit('works for 2 business days for the whole week with a federal holiday(Thanksgiving Day) in between', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-20T01:25:10.150Z'), 2).toISOString(),
      '2022-11-22T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-21T01:25:10.150Z'), 2).toISOString(),
      '2022-11-23T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-22T01:25:10.150Z'), 2).toISOString(),
      '2022-11-25T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-23T01:25:10.150Z'), 2).toISOString(),
      '2022-11-28T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-24T01:25:10.150Z'), 2).toISOString(),
      '2022-11-28T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-25T01:25:10.150Z'), 2).toISOString(),
      '2022-11-29T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-11-26T01:25:10.150Z'), 2).toISOString(),
      '2022-11-29T01:25:10.150Z'
    );
  });

  xit('works for 3 business days with Christmas Day and New Years observed on a Monday', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-25T01:25:10.150Z'), 3).toISOString(),
      '2022-12-29T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-26T01:25:10.150Z'), 3).toISOString(),
      '2022-12-29T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-27T01:25:10.150Z'), 3).toISOString(),
      '2022-12-30T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-28T01:25:10.150Z'), 3).toISOString(),
      '2023-01-03T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-29T01:25:10.150Z'), 3).toISOString(),
      '2023-01-04T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-30T01:25:10.150Z'), 3).toISOString(),
      '2023-01-05T01:25:10.150Z'
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-31T01:25:10.150Z'), 3).toISOString(),
      '2023-01-05T01:25:10.150Z'
    );
  });

  xit('works for 16 business days with three federal holidays in between', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays(new Date('2022-12-21T01:25:10.150Z'), 16).toISOString(),
      '2023-01-17T01:25:10.150Z'
    );
  });
});
