// holidays/united-states/federal-reserve-bank/add-federal-reserve-bank-business-days.spec.ts

import { strict as assert } from 'node:assert';

import addFederalReserveBankBusinessDays from './add-federal-reserve-bank-business-days';

describe('add-federal-reserve-bank-business-days', () => {
  it('throws error when amount is NaN', () => {
    assert.throws(() => addFederalReserveBankBusinessDays('2022-11-13', Number.NaN), TypeError);
  });

  it('works for 0 business days for the whole week', () => {
    assert.equal(addFederalReserveBankBusinessDays('2022-11-13', 0), '2022-11-13');
    assert.equal(addFederalReserveBankBusinessDays('2022-11-14', 0), '2022-11-14');
    assert.equal(addFederalReserveBankBusinessDays('2022-11-15', 0), '2022-11-15');
    assert.equal(addFederalReserveBankBusinessDays('2022-11-16', 0), '2022-11-16');
    assert.equal(addFederalReserveBankBusinessDays('2022-11-17', 0), '2022-11-17');
    assert.equal(addFederalReserveBankBusinessDays('2022-11-18', 0), '2022-11-18');
    assert.equal(addFederalReserveBankBusinessDays('2022-11-19', 0), '2022-11-19');
  });

  it('works for 1 business day with Christmas Day and New Years observed on a Monday', () => {
    // Since 2022-12-26 is a Federal Reserve Holiday (observed) celebrating Christmas Day
    assert.equal(addFederalReserveBankBusinessDays('2022-12-25', 1), '2022-12-27');
    assert.equal(addFederalReserveBankBusinessDays('2022-12-26', 1), '2022-12-27');
    assert.equal(addFederalReserveBankBusinessDays('2022-12-27', 1), '2022-12-28');
    assert.equal(addFederalReserveBankBusinessDays('2022-12-28', 1), '2022-12-29');
    assert.equal(addFederalReserveBankBusinessDays('2022-12-29', 1), '2022-12-30');
    // Since 2023-01-02 is a Federal Reserve Holiday (observed) celebrating New Year's Day
    assert.equal(addFederalReserveBankBusinessDays('2022-12-30', 1), '2023-01-03');
    assert.equal(addFederalReserveBankBusinessDays('2022-12-31', 1), '2023-01-03');
    assert.equal(addFederalReserveBankBusinessDays('2023-01-01', 1), '2023-01-03');
    assert.equal(addFederalReserveBankBusinessDays('2023-01-02', 1), '2023-01-03');
    assert.equal(addFederalReserveBankBusinessDays('2023-01-03', 1), '2023-01-04');
  });

  it('works for 2 business days for the whole week with no federal holidays in between', () => {
    assert.equal(addFederalReserveBankBusinessDays('2022-11-13', 2), '2022-11-15');
    assert.equal(addFederalReserveBankBusinessDays('2022-11-14', 2), '2022-11-16');
    assert.equal(addFederalReserveBankBusinessDays('2022-11-15', 2), '2022-11-17');
    assert.equal(addFederalReserveBankBusinessDays('2022-11-16', 2), '2022-11-18');
    assert.equal(addFederalReserveBankBusinessDays('2022-11-17', 2), '2022-11-21');
    assert.equal(addFederalReserveBankBusinessDays('2022-11-18', 2), '2022-11-22');
    assert.equal(addFederalReserveBankBusinessDays('2022-11-19', 2), '2022-11-22');
  });

  it('works for 2 business days for the whole week with a federal holiday(Thanksgiving Day) in between', () => {
    assert.equal(addFederalReserveBankBusinessDays('2022-11-20', 2), '2022-11-22');
    assert.equal(addFederalReserveBankBusinessDays('2022-11-21', 2), '2022-11-23');
    assert.equal(addFederalReserveBankBusinessDays('2022-11-22', 2), '2022-11-25');
    // Since 2022-11-24 is a Federal Reserve Holiday celebrating Thanksgiving Day
    assert.equal(addFederalReserveBankBusinessDays('2022-11-23', 2), '2022-11-28');
    assert.equal(addFederalReserveBankBusinessDays('2022-11-24', 2), '2022-11-28');
    assert.equal(addFederalReserveBankBusinessDays('2022-11-25', 2), '2022-11-29');
    assert.equal(addFederalReserveBankBusinessDays('2022-11-26', 2), '2022-11-29');
  });

  it('works for 2 business days when the daylight savings time begins in 2023', () => {
    assert.equal(addFederalReserveBankBusinessDays('2023-03-08', 2), '2023-03-10');
    assert.equal(addFederalReserveBankBusinessDays('2023-03-09', 2), '2023-03-13');
    assert.equal(addFederalReserveBankBusinessDays('2023-03-10', 2), '2023-03-14');
    assert.equal(addFederalReserveBankBusinessDays('2023-03-11', 2), '2023-03-14');
    assert.equal(addFederalReserveBankBusinessDays('2023-03-12', 2), '2023-03-14');
    assert.equal(addFederalReserveBankBusinessDays('2023-03-13', 2), '2023-03-15');
    assert.equal(addFederalReserveBankBusinessDays('2023-03-14', 2), '2023-03-16');
  });

  it('works for 3 business days when the daylight savings time ends in 2023', () => {
    assert.equal(addFederalReserveBankBusinessDays('2023-11-01', 3), '2023-11-06');
    assert.equal(addFederalReserveBankBusinessDays('2023-11-02', 3), '2023-11-07');
    assert.equal(addFederalReserveBankBusinessDays('2023-11-03', 3), '2023-11-08');
    assert.equal(addFederalReserveBankBusinessDays('2023-11-04', 3), '2023-11-08');
    assert.equal(addFederalReserveBankBusinessDays('2023-11-05', 3), '2023-11-08');
    assert.equal(addFederalReserveBankBusinessDays('2023-11-06', 3), '2023-11-09');
    assert.equal(addFederalReserveBankBusinessDays('2023-11-07', 3), '2023-11-10');
    assert.equal(addFederalReserveBankBusinessDays('2023-11-08', 3), '2023-11-13');
  });

  it('works for 3 business days with Christmas Day and New Years observed on a Monday', () => {
    // Since 2022-12-26 is a Federal Reserve Holiday (observed) celebrating Christmas Day
    assert.equal(addFederalReserveBankBusinessDays('2022-12-25', 3), '2022-12-29');
    assert.equal(addFederalReserveBankBusinessDays('2022-12-26', 3), '2022-12-29');
    assert.equal(addFederalReserveBankBusinessDays('2022-12-27', 3), '2022-12-30');
    assert.equal(addFederalReserveBankBusinessDays('2022-12-28', 3), '2023-01-03');
    // Since 2023-01-02 is a Federal Reserve Holiday (observed) celebrating New Year's Day
    assert.equal(addFederalReserveBankBusinessDays('2022-12-29', 3), '2023-01-04');
    assert.equal(addFederalReserveBankBusinessDays('2022-12-30', 3), '2023-01-05');
    assert.equal(addFederalReserveBankBusinessDays('2022-12-31', 3), '2023-01-05');
  });

  it('works for 3 business days in a leap year', () => {
    assert.equal(addFederalReserveBankBusinessDays('2024-02-26', 3), '2024-02-29');
    assert.equal(addFederalReserveBankBusinessDays('2024-02-27', 3), '2024-03-01');
    assert.equal(addFederalReserveBankBusinessDays('2024-02-28', 3), '2024-03-04');
    assert.equal(addFederalReserveBankBusinessDays('2024-02-29', 3), '2024-03-05');
  });

  it('works for 3 business days in a leap year when February 29th is a Sunday', () => {
    assert.equal(addFederalReserveBankBusinessDays('2032-02-25', 3), '2032-03-01');
    assert.equal(addFederalReserveBankBusinessDays('2032-02-26', 3), '2032-03-02');
    assert.equal(addFederalReserveBankBusinessDays('2032-02-27', 3), '2032-03-03');
    assert.equal(addFederalReserveBankBusinessDays('2032-02-28', 3), '2032-03-03');
    assert.equal(addFederalReserveBankBusinessDays('2032-02-29', 3), '2032-03-03');
    assert.equal(addFederalReserveBankBusinessDays('2032-03-01', 3), '2032-03-04');
  });

  it('works for 20 business days every hour with three federal holidays in between', () => {
    // We have 4 Saturdays, 4 Sundays and 3 Federal Reserve Bank holidays (2 observed on a Monday and
    // 1 celebrated on a Monday)
    assert.equal(addFederalReserveBankBusinessDays('2022-12-21', 20), '2023-01-23');
    assert.equal(addFederalReserveBankBusinessDays('2022-12-22', 20), '2023-01-24');
    assert.equal(addFederalReserveBankBusinessDays('2022-12-23', 20), '2023-01-25');
    assert.equal(addFederalReserveBankBusinessDays('2022-12-24', 20), '2023-01-25');
    assert.equal(addFederalReserveBankBusinessDays('2022-12-25', 20), '2023-01-25');
    assert.equal(addFederalReserveBankBusinessDays('2022-12-26', 20), '2023-01-25');
    assert.equal(addFederalReserveBankBusinessDays('2022-12-27', 20), '2023-01-26');
    assert.equal(addFederalReserveBankBusinessDays('2022-12-28', 20), '2023-01-27');
    assert.equal(addFederalReserveBankBusinessDays('2022-12-29', 20), '2023-01-30');
    assert.equal(addFederalReserveBankBusinessDays('2022-12-30', 20), '2023-01-31');
  });
});
