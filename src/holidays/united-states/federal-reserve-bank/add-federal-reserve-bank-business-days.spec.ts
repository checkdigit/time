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
    // Monday --> Tuesday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-26T19:02:12.721Z'), 1).toISOString(),
      '2022-12-27T19:02:12.721Z'
    );
    // Tuesday --> Wednesday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-27T19:02:12.721Z'), 1).toISOString(),
      '2022-12-28T19:02:12.721Z'
    );
    // Wednesday --> Thursday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-28T19:02:12.721Z'), 1).toISOString(),
      '2022-12-29T19:02:12.721Z'
    );
    // Thursday --> Friday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-29T19:02:12.721Z'), 1).toISOString(),
      '2022-12-30T19:02:12.721Z'
    );
    // Friday --> Next Tuesday (Since 2023-01-02 is a Federal Reserve Holiday (observed) celebrating New Year's Day)
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-30T19:02:12.721Z'), 1).toISOString(),
      '2023-01-03T19:02:12.721Z'
    );
    // Saturday --> Next Tuesday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-31T19:02:12.721Z'), 1).toISOString(),
      '2023-01-03T19:02:12.721Z'
    );
    // Sunday --> Next Tuesday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-01-01T19:02:12.721Z'), 1).toISOString(),
      '2023-01-03T19:02:12.721Z'
    );
    // Monday --> Next Tuesday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-01-02T19:02:12.721Z'), 1).toISOString(),
      '2023-01-03T19:02:12.721Z'
    );
    // Tuesday --> Next Wednesday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2023-01-03T19:02:12.721Z'), 1).toISOString(),
      '2023-01-04T19:02:12.721Z'
    );
  });

  it('works for 2 business days for the whole week with no federal holidays in between', () => {
    // Sunday --> Tuesday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-13T19:02:12.721Z'), 2).toISOString(),
      '2022-11-15T19:02:12.721Z'
    );
    // Monday --> Wednesday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-14T19:02:12.721Z'), 2).toISOString(),
      '2022-11-16T19:02:12.721Z'
    );
    // Tuesday --> Thursday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-15T19:02:12.721Z'), 2).toISOString(),
      '2022-11-17T19:02:12.721Z'
    );
    // Wednesday --> Friday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-16T19:02:12.721Z'), 2).toISOString(),
      '2022-11-18T19:02:12.721Z'
    );
    // Thursday --> Next Monday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-17T19:02:12.721Z'), 2).toISOString(),
      '2022-11-21T19:02:12.721Z'
    );
    // Friday --> Next Tuesday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-18T19:02:12.721Z'), 2).toISOString(),
      '2022-11-22T19:02:12.721Z'
    );
    // Saturday --> Next Tuesday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-19T19:02:12.721Z'), 2).toISOString(),
      '2022-11-22T19:02:12.721Z'
    );
  });

  it('works for 2 business days for the whole week with a federal holiday(Thanksgiving Day) in between', () => {
    // Sunday --> Tuesday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-20T19:02:12.721Z'), 2).toISOString(),
      '2022-11-22T19:02:12.721Z'
    );
    // Monday --> Wednesday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-21T19:02:12.721Z'), 2).toISOString(),
      '2022-11-23T19:02:12.721Z'
    );
    // Tuesday --> Friday (Since 2022-11-24 is a Federal Reserve Holiday celebrating Thanksgiving Day)
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-22T19:02:12.721Z'), 2).toISOString(),
      '2022-11-25T19:02:12.721Z'
    );
    // Wednesday --> Next Monday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-23T19:02:12.721Z'), 2).toISOString(),
      '2022-11-28T19:02:12.721Z'
    );
    // Thursday --> Next Monday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-24T19:02:12.721Z'), 2).toISOString(),
      '2022-11-28T19:02:12.721Z'
    );
    // Friday --> Next Tuesday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-11-25T19:02:12.721Z'), 2).toISOString(),
      '2022-11-29T19:02:12.721Z'
    );
    // Saturday --> Next Tuesday
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
    // Monday --> Thursday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-26T19:02:12.721Z'), 3).toISOString(),
      '2022-12-29T19:02:12.721Z'
    );
    // Tuesday --> Friday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-27T19:02:12.721Z'), 3).toISOString(),
      '2022-12-30T19:02:12.721Z'
    );
    // Wednesday --> Next Tuesday (Since 2023-01-02 is a Federal Reserve Holiday (observed) celebrating New Year's Day)
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-28T19:02:12.721Z'), 3).toISOString(),
      '2023-01-03T19:02:12.721Z'
    );
    // Thursday --> Next Wednesday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-29T19:02:12.721Z'), 3).toISOString(),
      '2023-01-04T19:02:12.721Z'
    );
    // Friday --> Next Thursday (Since 2023-01-02 is a Federal Reserve Holiday (observed) celebrating New Year's Day)
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-30T19:02:12.721Z'), 3).toISOString(),
      '2023-01-05T19:02:12.721Z'
    );
    // Saturday --> Next Thursday
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-31T19:02:12.721Z'), 3).toISOString(),
      '2023-01-05T19:02:12.721Z'
    );
  });

  it('works for 16 business days with three federal holidays in between', () => {
    assert.equal(
      addFederalReserveBankBusinessDays(new Date('2022-12-21T19:02:12.721Z'), 16).toISOString(),
      '2023-01-17T19:02:12.721Z'
    );
  });
});
