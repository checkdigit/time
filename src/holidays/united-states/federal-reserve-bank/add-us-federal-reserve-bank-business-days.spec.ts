// holidays/united-states/federal-reserve-bank/add-us-federal-reserve-bank-business-days.spec.ts

import { strict as assert } from 'node:assert';

import { addUSFederalReserveBankBusinessDays } from './index';

describe('add-federal-reserve-bank-business-days', () => {
  it('throws error when amount is NaN', () => {
    assert.throws(
      () => addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 13 }, Number.NaN),
      TypeError,
    );
  });

  it('works for 0 business days for the whole week', () => {
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 13 }, 0), {
      year: 2022,
      month: 10,
      date: 13,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 14 }, 0), {
      year: 2022,
      month: 10,
      date: 14,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 15 }, 0), {
      year: 2022,
      month: 10,
      date: 15,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 16 }, 0), {
      year: 2022,
      month: 10,
      date: 16,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 17 }, 0), {
      year: 2022,
      month: 10,
      date: 17,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 18 }, 0), {
      year: 2022,
      month: 10,
      date: 18,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 19 }, 0), {
      year: 2022,
      month: 10,
      date: 19,
    });
  });

  it('works for 1 business day with Christmas Day and New Years observed on a Monday', () => {
    // Since 2022-12-26 is a Federal Reserve Holiday (observed) celebrating Christmas Day
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 25 }, 1), {
      year: 2022,
      month: 11,
      date: 27,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 26 }, 1), {
      year: 2022,
      month: 11,
      date: 27,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 27 }, 1), {
      year: 2022,
      month: 11,
      date: 28,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 28 }, 1), {
      year: 2022,
      month: 11,
      date: 29,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 29 }, 1), {
      year: 2022,
      month: 11,
      date: 30,
    });
    // Since 2023-01-02 is a Federal Reserve Holiday (observed) celebrating New Year's Day
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 30 }, 1), {
      year: 2023,
      month: 0,
      date: 3,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 31 }, 1), {
      year: 2023,
      month: 0,
      date: 3,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2023, month: 0, date: 1 }, 1), {
      year: 2023,
      month: 0,
      date: 3,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2023, month: 0, date: 2 }, 1), {
      year: 2023,
      month: 0,
      date: 3,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2023, month: 0, date: 3 }, 1), {
      year: 2023,
      month: 0,
      date: 4,
    });
  });

  it('works for 2 business days for the whole week with no federal holidays in between', () => {
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 13 }, 2), {
      year: 2022,
      month: 10,
      date: 15,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 14 }, 2), {
      year: 2022,
      month: 10,
      date: 16,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 15 }, 2), {
      year: 2022,
      month: 10,
      date: 17,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 16 }, 2), {
      year: 2022,
      month: 10,
      date: 18,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 17 }, 2), {
      year: 2022,
      month: 10,
      date: 21,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 18 }, 2), {
      year: 2022,
      month: 10,
      date: 22,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 19 }, 2), {
      year: 2022,
      month: 10,
      date: 22,
    });
  });

  it('works for 2 business days for the whole week with a federal holiday(Thanksgiving Day) in between', () => {
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 20 }, 2), {
      year: 2022,
      month: 10,
      date: 22,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 21 }, 2), {
      year: 2022,
      month: 10,
      date: 23,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 22 }, 2), {
      year: 2022,
      month: 10,
      date: 25,
    });
    // Since 2022-11-24 is a Federal Reserve Holiday celebrating Thanksgiving Day
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 23 }, 2), {
      year: 2022,
      month: 10,
      date: 28,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 24 }, 2), {
      year: 2022,
      month: 10,
      date: 28,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 25 }, 2), {
      year: 2022,
      month: 10,
      date: 29,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 10, date: 26 }, 2), {
      year: 2022,
      month: 10,
      date: 29,
    });
  });

  it('works for 2 business days when the daylight savings time begins in 2023', () => {
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2023, month: 2, date: 8 }, 2), {
      year: 2023,
      month: 2,
      date: 10,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2023, month: 2, date: 9 }, 2), {
      year: 2023,
      month: 2,
      date: 13,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2023, month: 2, date: 10 }, 2), {
      year: 2023,
      month: 2,
      date: 14,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2023, month: 2, date: 11 }, 2), {
      year: 2023,
      month: 2,
      date: 14,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2023, month: 2, date: 12 }, 2), {
      year: 2023,
      month: 2,
      date: 14,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2023, month: 2, date: 13 }, 2), {
      year: 2023,
      month: 2,
      date: 15,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2023, month: 2, date: 14 }, 2), {
      year: 2023,
      month: 2,
      date: 16,
    });
  });

  it('works for 3 business days when the daylight savings time ends in 2023', () => {
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2023, month: 10, date: 1 }, 3), {
      year: 2023,
      month: 10,
      date: 6,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2023, month: 10, date: 2 }, 3), {
      year: 2023,
      month: 10,
      date: 7,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2023, month: 10, date: 3 }, 3), {
      year: 2023,
      month: 10,
      date: 8,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2023, month: 10, date: 4 }, 3), {
      year: 2023,
      month: 10,
      date: 8,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2023, month: 10, date: 5 }, 3), {
      year: 2023,
      month: 10,
      date: 8,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2023, month: 10, date: 6 }, 3), {
      year: 2023,
      month: 10,
      date: 9,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2023, month: 10, date: 7 }, 3), {
      year: 2023,
      month: 10,
      date: 10,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2023, month: 10, date: 8 }, 3), {
      year: 2023,
      month: 10,
      date: 13,
    });
  });

  it('works for 3 business days with Christmas Day and New Years observed on a Monday', () => {
    // Since 2022-12-26 is a Federal Reserve Holiday (observed) celebrating Christmas Day
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 25 }, 3), {
      year: 2022,
      month: 11,
      date: 29,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 26 }, 3), {
      year: 2022,
      month: 11,
      date: 29,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 27 }, 3), {
      year: 2022,
      month: 11,
      date: 30,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 28 }, 3), {
      year: 2023,
      month: 0,
      date: 3,
    });
    // Since 2023-01-02 is a Federal Reserve Holiday (observed) celebrating New Year's Day
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 29 }, 3), {
      year: 2023,
      month: 0,
      date: 4,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 30 }, 3), {
      year: 2023,
      month: 0,
      date: 5,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 31 }, 3), {
      year: 2023,
      month: 0,
      date: 5,
    });
  });

  it('works for 3 business days in a leap year', () => {
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2024, month: 1, date: 26 }, 3), {
      year: 2024,
      month: 1,
      date: 29,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2024, month: 1, date: 27 }, 3), {
      year: 2024,
      month: 2,
      date: 1,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2024, month: 1, date: 28 }, 3), {
      year: 2024,
      month: 2,
      date: 4,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2024, month: 1, date: 29 }, 3), {
      year: 2024,
      month: 2,
      date: 5,
    });
  });

  it('works for 3 business days in a leap year when February 29th is a Sunday', () => {
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2032, month: 1, date: 25 }, 3), {
      year: 2032,
      month: 2,
      date: 1,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2032, month: 1, date: 26 }, 3), {
      year: 2032,
      month: 2,
      date: 2,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2032, month: 1, date: 27 }, 3), {
      year: 2032,
      month: 2,
      date: 3,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2032, month: 1, date: 28 }, 3), {
      year: 2032,
      month: 2,
      date: 3,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2032, month: 1, date: 29 }, 3), {
      year: 2032,
      month: 2,
      date: 3,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2032, month: 2, date: 1 }, 3), {
      year: 2032,
      month: 2,
      date: 4,
    });
  });

  it('works for 20 business days every hour with three federal holidays in between', () => {
    // We have 4 Saturdays, 4 Sundays and 3 Federal Reserve Bank holidays (2 observed on a Monday and
    // 1 celebrated on a Monday)
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 21 }, 20), {
      year: 2023,
      month: 0,
      date: 23,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 22 }, 20), {
      year: 2023,
      month: 0,
      date: 24,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 23 }, 20), {
      year: 2023,
      month: 0,
      date: 25,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 24 }, 20), {
      year: 2023,
      month: 0,
      date: 25,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 25 }, 20), {
      year: 2023,
      month: 0,
      date: 25,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 26 }, 20), {
      year: 2023,
      month: 0,
      date: 25,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 27 }, 20), {
      year: 2023,
      month: 0,
      date: 26,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 28 }, 20), {
      year: 2023,
      month: 0,
      date: 27,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 29 }, 20), {
      year: 2023,
      month: 0,
      date: 30,
    });
    assert.deepEqual(addUSFederalReserveBankBusinessDays({ year: 2022, month: 11, date: 30 }, 20), {
      year: 2023,
      month: 0,
      date: 31,
    });
  });
});
