// holidays/united-states/federal-reserve-bank/is-federal-reserve-bank-holiday.spec.ts

import { strict as assert } from 'node:assert';

import isFederalReserveBankHoliday from './is-federal-reserve-bank-holiday';

describe('is-us-federal-reserve-bank-holiday', () => {
  it('works for random federal reserve bank business days in 2022', () => {
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 0, 10)), false);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 1, 7)), false);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 2, 15)), false);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 3, 12)), false);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 4, 12)), false);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 5, 6)), false);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 6, 29)), false);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 7, 25)), false);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 8, 20)), false);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 9, 3)), false);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 10, 28)), false);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 11, 30)), false);
  });

  it('works for all Saturdays in 2022', () => {
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 0, 1)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 0, 8)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 0, 15)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 0, 22)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 0, 29)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 1, 5)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 1, 12)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 1, 19)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 1, 26)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 2, 5)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 2, 12)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 2, 19)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 2, 26)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 3, 2)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 3, 9)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 3, 16)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 3, 23)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 3, 30)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 4, 7)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 4, 14)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 4, 21)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 4, 28)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 5, 4)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 5, 11)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 5, 18)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 5, 25)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 6, 2)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 6, 9)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 6, 16)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 6, 23)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 6, 30)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 7, 6)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 7, 13)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 7, 20)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 7, 27)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 8, 3)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 8, 10)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 8, 17)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 8, 24)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 9, 1)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 9, 8)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 9, 15)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 9, 22)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 9, 29)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 10, 5)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 10, 12)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 10, 19)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 10, 26)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 11, 3)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 11, 10)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 11, 17)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 11, 24)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 11, 31)), true);
  });

  it('works for all Sundays in 2022', () => {
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 0, 2)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 0, 9)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 0, 16)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 0, 23)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 0, 30)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 1, 6)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 1, 13)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 1, 20)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 1, 27)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 2, 6)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 2, 13)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 2, 20)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 2, 27)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 3, 3)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 3, 10)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 3, 17)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 3, 24)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 4, 1)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 4, 8)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 4, 15)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 4, 22)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 4, 29)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 5, 5)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 5, 12)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 5, 19)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 5, 26)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 6, 3)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 6, 10)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 6, 17)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 6, 24)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 6, 31)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 7, 7)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 7, 14)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 7, 21)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 7, 28)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 8, 4)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 8, 11)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 8, 18)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 8, 25)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 9, 2)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 9, 9)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 9, 16)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 9, 23)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 9, 30)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 10, 6)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 10, 13)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 10, 20)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 10, 27)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 11, 4)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 11, 11)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 11, 18)), true);
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 11, 25)), true);
  });

  it('works for all federal reserve bank holidays in 2022', () => {
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 0, 1)), true); // New Year's Day
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 0, 17)), true); // Birthday of Martin Luther King, Jr.
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 1, 21)), true); // Washington's Birthday
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 4, 30)), true); // Memorial Day
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 5, 19)), true); // Juneteenth
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 6, 4)), true); // Independence Day
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 8, 5)), true); // Labor Day
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 9, 10)), true); // Columbus Day
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 10, 11)), true); // Veteran's Day
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 10, 24)), true); // Thanksgiving Day
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 11, 25)), true); // Christmas
  });

  it('works for all federal reserve bank holidays observed in 2022', () => {
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 5, 20)), true); // Juneteenth Observed
    assert.equal(isFederalReserveBankHoliday(new Date(2022, 11, 26)), true); // Christmas Observed
  });

  it('works for all federal reserve bank holidays in 2023', () => {
    assert.equal(isFederalReserveBankHoliday(new Date(2023, 0, 1)), true); // New Year's Day
    assert.equal(isFederalReserveBankHoliday(new Date(2023, 0, 16)), true); // Birthday of Martin Luther King, Jr.
    assert.equal(isFederalReserveBankHoliday(new Date(2023, 1, 20)), true); // Washington's Birthday
    assert.equal(isFederalReserveBankHoliday(new Date(2023, 4, 29)), true); // Memorial Day
    assert.equal(isFederalReserveBankHoliday(new Date(2023, 5, 19)), true); // Juneteenth
    assert.equal(isFederalReserveBankHoliday(new Date(2023, 6, 4)), true); // Independence Day
    assert.equal(isFederalReserveBankHoliday(new Date(2023, 8, 4)), true); // Labor Day
    assert.equal(isFederalReserveBankHoliday(new Date(2023, 9, 9)), true); // Columbus Day
    assert.equal(isFederalReserveBankHoliday(new Date(2023, 10, 11)), true); // Veteran's Day
    assert.equal(isFederalReserveBankHoliday(new Date(2023, 10, 23)), true); // Thanksgiving Day
    assert.equal(isFederalReserveBankHoliday(new Date(2023, 11, 25)), true); // Christmas
  });

  it('works for all federal reserve bank holidays observed in 2023', () => {
    assert.equal(isFederalReserveBankHoliday(new Date(2023, 0, 2)), true); // New Year's Day 2023 Observed
  });

  it('works for all federal reserve bank holidays in 2024', () => {
    assert.equal(isFederalReserveBankHoliday(new Date(2024, 0, 1)), true); // New Year's Day
    assert.equal(isFederalReserveBankHoliday(new Date(2024, 0, 15)), true); // Birthday of Martin Luther King, Jr.
    assert.equal(isFederalReserveBankHoliday(new Date(2024, 1, 19)), true); // Washington's Birthday
    assert.equal(isFederalReserveBankHoliday(new Date(2024, 4, 27)), true); // Memorial Day
    assert.equal(isFederalReserveBankHoliday(new Date(2024, 5, 19)), true); // Juneteenth
    assert.equal(isFederalReserveBankHoliday(new Date(2024, 6, 4)), true); // Independence Day
    assert.equal(isFederalReserveBankHoliday(new Date(2024, 8, 2)), true); // Labor Day
    assert.equal(isFederalReserveBankHoliday(new Date(2024, 9, 14)), true); // Columbus Day
    assert.equal(isFederalReserveBankHoliday(new Date(2024, 10, 11)), true); // Veteran's Day
    assert.equal(isFederalReserveBankHoliday(new Date(2024, 10, 28)), true); // Thanksgiving Day
    assert.equal(isFederalReserveBankHoliday(new Date(2024, 11, 25)), true); // Christmas
  });

  it('works for all federal reserve bank holidays in 2025', () => {
    assert.equal(isFederalReserveBankHoliday(new Date(2025, 0, 1)), true); // New Year's Day
    assert.equal(isFederalReserveBankHoliday(new Date(2025, 0, 20)), true); // Birthday of Martin Luther King, Jr.
    assert.equal(isFederalReserveBankHoliday(new Date(2025, 1, 17)), true); // Washington's Birthday
    assert.equal(isFederalReserveBankHoliday(new Date(2025, 4, 26)), true); // Memorial Day
    assert.equal(isFederalReserveBankHoliday(new Date(2025, 5, 19)), true); // Juneteenth
    assert.equal(isFederalReserveBankHoliday(new Date(2025, 6, 4)), true); // Independence Day
    assert.equal(isFederalReserveBankHoliday(new Date(2025, 8, 1)), true); // Labor Day
    assert.equal(isFederalReserveBankHoliday(new Date(2025, 9, 13)), true); // Columbus Day
    assert.equal(isFederalReserveBankHoliday(new Date(2025, 10, 11)), true); // Veteran's Day
    assert.equal(isFederalReserveBankHoliday(new Date(2025, 10, 27)), true); // Thanksgiving Day
    assert.equal(isFederalReserveBankHoliday(new Date(2025, 11, 25)), true); // Christmas
  });

  it('works for all federal reserve bank holidays in 2026', () => {
    assert.equal(isFederalReserveBankHoliday(new Date(2026, 0, 1)), true); // New Year's Day
    assert.equal(isFederalReserveBankHoliday(new Date(2026, 0, 19)), true); // Birthday of Martin Luther King, Jr.
    assert.equal(isFederalReserveBankHoliday(new Date(2026, 1, 16)), true); // Washington's Birthday
    assert.equal(isFederalReserveBankHoliday(new Date(2026, 4, 25)), true); // Memorial Day
    assert.equal(isFederalReserveBankHoliday(new Date(2026, 5, 19)), true); // Juneteenth
    assert.equal(isFederalReserveBankHoliday(new Date(2026, 6, 4)), true); // Independence Day
    assert.equal(isFederalReserveBankHoliday(new Date(2026, 8, 7)), true); // Labor Day
    assert.equal(isFederalReserveBankHoliday(new Date(2026, 9, 12)), true); // Columbus Day
    assert.equal(isFederalReserveBankHoliday(new Date(2026, 10, 11)), true); // Veteran's Day
    assert.equal(isFederalReserveBankHoliday(new Date(2026, 10, 26)), true); // Thanksgiving Day
    assert.equal(isFederalReserveBankHoliday(new Date(2026, 11, 25)), true); // Christmas
  });
});
