// holidays/united-states/federal-reserve-bank/subtract-federal-reserve-bank-business-days.spec.ts

import { strict as assert } from 'node:assert';
import momentBusiness from 'moment-business-days';

import isFederalReserveBankHoliday from './is-federal-reserve-bank-holiday';
import subtractFederalReserveBankBusinessDays from './subtract-federal-reserve-bank-business-days';

function subtractMomentBusinessDays(date: string, numberOfDays: number): string {
  return momentBusiness(date).businessSubtract(numberOfDays, 'days').toISOString();
}

describe('subtract-federal-reserve-bank-business-days', () => {
  it('throws error when amount is NaN', () => {
    assert.throws(() => subtractFederalReserveBankBusinessDays('2022-11-13T11:25:10.150Z', Number.NaN), TypeError);
  });

  it('works for 0 business days for the whole week', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-11-13T01:25:10.150Z', 0).toISOString(),
      subtractMomentBusinessDays('2022-11-13T01:25:10.150Z', 0)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-11-14T02:25:10.150Z', 0).toISOString(),
      subtractMomentBusinessDays('2022-11-14T02:25:10.150Z', 0)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-11-15T03:25:10.150Z', 0).toISOString(),
      subtractMomentBusinessDays('2022-11-15T03:25:10.150Z', 0)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-11-16T04:25:10.150Z', 0).toISOString(),
      subtractMomentBusinessDays('2022-11-16T04:25:10.150Z', 0)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-11-17T05:25:10.150Z', 0).toISOString(),
      subtractMomentBusinessDays('2022-11-17T05:25:10.150Z', 0)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-11-18T06:25:10.150Z', 0).toISOString(),
      subtractMomentBusinessDays('2022-11-18T06:25:10.150Z', 0)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-11-19T07:25:10.150Z', 0).toISOString(),
      subtractMomentBusinessDays('2022-11-19T07:25:10.150Z', 0)
    );
  });

  it('works for 1 business day with Christmas Day and New Years observed on a Monday', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-12-25T01:25:10.150Z', 1).toISOString(),
      subtractMomentBusinessDays('2022-12-25T01:25:10.150Z', 1)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-12-26T02:25:10.150Z', 1).toISOString(),
      subtractMomentBusinessDays('2022-12-26T02:25:10.150Z', 1)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-12-27T03:25:10.150Z', 1).toISOString(),
      subtractMomentBusinessDays('2022-12-27T03:25:10.150Z', 1)
    );
    // Since 2022-12-26 is a Federal Reserve Holiday (observed) celebrating Christmas Day
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-12-28T04:25:10.150Z', 1).toISOString(),
      subtractMomentBusinessDays('2022-12-28T04:25:10.150Z', 2)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-12-29T05:25:10.150Z', 1).toISOString(),
      subtractMomentBusinessDays('2022-12-29T05:25:10.150Z', 1)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-12-30T06:25:10.150Z', 1).toISOString(),
      subtractMomentBusinessDays('2022-12-30T06:25:10.150Z', 1)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-12-31T07:25:10.150Z', 1).toISOString(),
      subtractMomentBusinessDays('2022-12-31T07:25:10.150Z', 1)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-01T08:25:10.150Z', 1).toISOString(),
      subtractMomentBusinessDays('2023-01-01T08:25:10.150Z', 1)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-02T09:25:10.150Z', 1).toISOString(),
      subtractMomentBusinessDays('2023-01-02T09:25:10.150Z', 1)
    );
    // Since 2023-01-02 is a Federal Reserve Holiday (observed) celebrating New Year's Day
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-03T10:25:10.150Z', 1).toISOString(),
      subtractMomentBusinessDays('2023-01-03T10:25:10.150Z', 2)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-04T11:25:10.150Z', 1).toISOString(),
      subtractMomentBusinessDays('2023-01-04T11:25:10.150Z', 1)
    );
  });

  it('works for 2 business days for the whole week with no federal holidays in between', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-12-11T01:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2022-12-11T01:25:10.150Z', 2)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-12-12T02:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2022-12-12T02:25:10.150Z', 2)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-12-13T03:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2022-12-13T03:25:10.150Z', 2)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-12-14T04:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2022-12-14T04:25:10.150Z', 2)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-12-15T05:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2022-12-15T05:25:10.150Z', 2)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-12-16T06:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2022-12-16T06:25:10.150Z', 2)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-12-17T07:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2022-12-17T07:25:10.150Z', 2)
    );
  });

  it('works for 2 business days for the whole week with a federal holiday(Thanksgiving Day) in between', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-11-20T01:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2022-11-20T01:25:10.150Z', 2)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-11-20T01:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2022-11-20T01:25:10.150Z', 2)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-11-22T03:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2022-11-22T03:25:10.150Z', 2)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-11-23T04:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2022-11-23T04:25:10.150Z', 2)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-11-24T05:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2022-11-24T05:25:10.150Z', 2)
    );
    // Since 2022-11-24 is a Federal Reserve Holiday (observed) celebrating Thanksgiving Day
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-11-25T06:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2022-11-25T06:25:10.150Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-11-26T07:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2022-11-26T07:25:10.150Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-11-27T08:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2022-11-27T08:25:10.150Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-11-28T09:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2022-11-28T09:25:10.150Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-11-29T10:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2022-11-29T10:25:10.150Z', 2)
    );
  });

  it('works for 2 business days when the daylight savings time begins in 2023', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-03-10T02:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2023-03-10T02:25:10.150Z', 2)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-03-11T03:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2023-03-11T03:25:10.150Z', 2)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-03-12T04:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2023-03-12T04:25:10.150Z', 2)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-03-13T05:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2023-03-13T05:25:10.150Z', 2)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-03-14T06:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2023-03-14T06:25:10.150Z', 2)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-03-15T07:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2023-03-15T07:25:10.150Z', 2)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-03-16T08:25:10.150Z', 2).toISOString(),
      subtractMomentBusinessDays('2023-03-16T08:25:10.150Z', 2)
    );
  });

  it('works for 3 business days when the daylight savings time ends in 2023', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-03-04T02:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2023-03-04T02:25:10.150Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-03-05T02:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2023-03-05T02:25:10.150Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-03-06T02:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2023-03-06T02:25:10.150Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-03-07T02:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2023-03-07T02:25:10.150Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-03-08T02:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2023-03-08T02:25:10.150Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-03-09T02:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2023-03-09T02:25:10.150Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-03-10T02:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2023-03-10T02:25:10.150Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-03-11T03:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2023-03-11T03:25:10.150Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-03-12T04:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2023-03-12T04:25:10.150Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-03-13T05:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2023-03-13T05:25:10.150Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-03-14T06:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2023-03-14T06:25:10.150Z', 3)
    );
  });

  it('works for 3 business days with Christmas Day and New Years observed on a Monday', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-12-25T01:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2022-12-25T01:25:10.150Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-12-26T02:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2022-12-26T02:25:10.150Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-12-27T03:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2022-12-27T03:25:10.150Z', 3)
    );
    // Since 2022-12-26 is a Federal Reserve Holiday (observed) celebrating Christmas Day
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-12-28T04:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2022-12-28T04:25:10.150Z', 4)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-12-29T05:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2022-12-29T05:25:10.150Z', 4)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-12-30T06:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2022-12-30T06:25:10.150Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2022-12-31T07:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2022-12-31T07:25:10.150Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-01T08:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2023-01-01T08:25:10.150Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-02T09:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2023-01-02T09:25:10.150Z', 3)
    );
    // Since 2023-01-02 is a Federal Reserve Holiday (observed) celebrating New Year's Day
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-03T10:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2023-01-03T10:25:10.150Z', 4)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-04T11:25:10.150Z', 3).toISOString(),
      subtractMomentBusinessDays('2023-01-04T11:25:10.150Z', 4)
    );
  });

  it('works for 3 business days in a leap year', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays('2024-02-26T01:02:12.721Z', 3).toISOString(),
      subtractMomentBusinessDays('2024-02-26T01:02:12.721Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2024-02-27T01:02:12.721Z', 3).toISOString(),
      subtractMomentBusinessDays('2024-02-26T01:02:12.721Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2024-02-28T01:02:12.721Z', 3).toISOString(),
      subtractMomentBusinessDays('2024-02-28T01:02:12.721Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2024-02-29T01:02:12.721Z', 3).toISOString(),
      subtractMomentBusinessDays('2024-02-29T01:02:12.721Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2024-03-01T01:02:12.721Z', 3).toISOString(),
      subtractMomentBusinessDays('2024-03-01T01:02:12.721Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2024-03-02T01:02:12.721Z', 3).toISOString(),
      subtractMomentBusinessDays('2024-03-02T01:02:12.721Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2024-03-03T01:02:12.721Z', 3).toISOString(),
      subtractMomentBusinessDays('2024-03-03T01:02:12.721Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2024-03-04T01:02:12.721Z', 3).toISOString(),
      subtractMomentBusinessDays('2024-03-04T01:02:12.721Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2024-03-05T01:02:12.721Z', 3).toISOString(),
      subtractMomentBusinessDays('2024-03-05T01:02:12.721Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2024-03-06T01:02:12.721Z', 3).toISOString(),
      subtractMomentBusinessDays('2024-03-06T01:02:12.721Z', 3)
    );
  });

  it('works for 3 business days in a leap year when February 29th is a Sunday', () => {
    assert.equal(
      subtractFederalReserveBankBusinessDays('2032-02-26T01:02:12.721Z', 3).toISOString(),
      subtractMomentBusinessDays('2032-02-26T01:02:12.721Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2032-02-27T01:02:12.721Z', 3).toISOString(),
      subtractMomentBusinessDays('2032-02-27T01:02:12.721Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2032-02-28T01:02:12.721Z', 3).toISOString(),
      subtractMomentBusinessDays('2032-02-28T01:02:12.721Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2032-02-29T01:02:12.721Z', 3).toISOString(),
      subtractMomentBusinessDays('2032-02-29T01:02:12.721Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2032-03-01T01:02:12.721Z', 3).toISOString(),
      subtractMomentBusinessDays('2032-03-01T01:02:12.721Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2032-03-02T01:02:12.721Z', 3).toISOString(),
      subtractMomentBusinessDays('2032-03-02T01:02:12.721Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2032-03-03T01:02:12.721Z', 3).toISOString(),
      subtractMomentBusinessDays('2032-03-03T01:02:12.721Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2032-03-04T01:02:12.721Z', 3).toISOString(),
      subtractMomentBusinessDays('2032-03-04T01:02:12.721Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2032-03-05T01:02:12.721Z', 3).toISOString(),
      subtractMomentBusinessDays('2032-03-05T01:02:12.721Z', 3)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2032-03-06T01:02:12.721Z', 3).toISOString(),
      subtractMomentBusinessDays('2032-03-06T01:02:12.721Z', 3)
    );
  });

  it('works for 16 business days every hour with three federal holidays in between', () => {
    // We have 4 Saturdays, 4 Sundays and 3 Federal Reserve Bank holidays (2 observed on a Monday and
    // 1 celebrated on a Monday)
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T00:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T00:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T01:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T01:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T02:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T02:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T03:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T03:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T04:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T04:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T05:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T05:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T06:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T06:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T07:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T07:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T08:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T08:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T09:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T09:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T10:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T10:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T11:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T11:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T12:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T12:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T13:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T13:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T14:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T14:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T15:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T15:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T16:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T16:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T17:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T17:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T18:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T18:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T19:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T19:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T20:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T20:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T21:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T21:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T22:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T22:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-21T23:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-21T23:00:00.000Z', 23)
    );
    assert.equal(
      subtractFederalReserveBankBusinessDays('2023-01-24T00:00:00.000Z', 20).toISOString(),
      subtractMomentBusinessDays('2023-01-24T00:00:00.000Z', 23)
    );
  });

  it('works for 10000 random dates', () => {
    // try 10k random date-times
    for (let index = 0; index < 10_000; index++) {
      const isoString = new Date(Math.floor(Math.random() * 10_000_000_000_000)).toISOString();
      let expected = subtractMomentBusinessDays(isoString, 2);
      if (
        isFederalReserveBankHoliday(new Date(subtractMomentBusinessDays(isoString, 1))) ||
        isFederalReserveBankHoliday(new Date(subtractMomentBusinessDays(isoString, 2)))
      ) {
        expected = subtractMomentBusinessDays(isoString, 3);
      }
      assert.equal(subtractFederalReserveBankBusinessDays(isoString, 2).toISOString(), expected);
    }
  });
});
