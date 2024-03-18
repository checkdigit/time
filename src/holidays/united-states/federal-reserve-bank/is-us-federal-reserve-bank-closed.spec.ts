// holidays/united-states/federal-reserve-bank/is-us-federal-reserve-bank-closed.spec.ts

import { strict as assert } from 'node:assert';

import { describe, it } from '@jest/globals';

import { isUSFederalReserveBankClosed } from './index';

describe('is-us-federal-reserve-bank-holiday', () => {
  it('works for random federal reserve bank business days in 2022', () => {
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 0, date: 10 }), false);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 1, date: 7 }), false);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 2, date: 15 }), false);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 3, date: 12 }), false);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 4, date: 12 }), false);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 5, date: 6 }), false);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 6, date: 29 }), false);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 7, date: 25 }), false);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 8, date: 20 }), false);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 9, date: 3 }), false);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 10, date: 28 }), false);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 11, date: 30 }), false);
  });

  it('works for all Saturdays in 2022', () => {
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 0, date: 1 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 0, date: 8 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 0, date: 15 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 0, date: 22 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 0, date: 29 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 1, date: 5 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 1, date: 12 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 1, date: 19 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 1, date: 26 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 2, date: 5 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 2, date: 12 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 2, date: 19 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 2, date: 26 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 3, date: 2 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 3, date: 9 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 3, date: 16 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 3, date: 23 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 3, date: 30 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 4, date: 7 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 4, date: 14 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 4, date: 21 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 4, date: 28 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 5, date: 4 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 5, date: 11 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 5, date: 18 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 5, date: 25 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 6, date: 2 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 6, date: 9 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 6, date: 16 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 6, date: 23 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 6, date: 30 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 7, date: 6 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 7, date: 13 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 7, date: 20 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 7, date: 27 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 8, date: 3 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 8, date: 10 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 8, date: 17 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 8, date: 24 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 9, date: 1 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 9, date: 8 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 9, date: 15 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 9, date: 22 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 9, date: 29 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 10, date: 5 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 10, date: 12 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 10, date: 19 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 10, date: 26 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 11, date: 3 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 11, date: 10 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 11, date: 17 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 11, date: 24 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 11, date: 31 }), true);
  });

  it('works for all Sundays in 2022', () => {
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 0, date: 2 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 0, date: 9 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 0, date: 16 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 0, date: 23 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 0, date: 30 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 1, date: 6 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 1, date: 13 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 1, date: 20 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 1, date: 27 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 2, date: 6 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 2, date: 13 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 2, date: 20 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 2, date: 27 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 3, date: 3 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 3, date: 10 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 3, date: 17 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 3, date: 24 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 4, date: 1 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 4, date: 8 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 4, date: 15 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 4, date: 22 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 4, date: 29 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 5, date: 5 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 5, date: 12 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 5, date: 19 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 5, date: 26 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 6, date: 3 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 6, date: 10 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 6, date: 17 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 6, date: 24 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 6, date: 31 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 7, date: 7 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 7, date: 14 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 7, date: 21 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 7, date: 28 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 8, date: 4 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 8, date: 11 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 8, date: 18 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 8, date: 25 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 9, date: 2 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 9, date: 9 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 9, date: 16 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 9, date: 23 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 9, date: 30 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 10, date: 6 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 10, date: 13 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 10, date: 20 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 10, date: 27 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 11, date: 4 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 11, date: 11 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 11, date: 18 }), true);
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 11, date: 25 }), true);
  });

  it('works for all federal reserve bank holidays in 2022', () => {
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 0, date: 1 }), true); // New Year's Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 0, date: 17 }), true); // Birthday of Martin Luther King, Jr.
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 1, date: 21 }), true); // Washington's Birthday
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 4, date: 30 }), true); // Memorial Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 5, date: 19 }), true); // Juneteenth
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 6, date: 4 }), true); // Independence Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 8, date: 5 }), true); // Labor Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 9, date: 10 }), true); // Columbus Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 10, date: 11 }), true); // Veteran's Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 10, date: 24 }), true); // Thanksgiving Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 11, date: 25 }), true); // Christmas
  });

  it('works for all federal reserve bank holidays observed in 2022', () => {
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 5, date: 20 }), true); // Juneteenth Observed
    assert.equal(isUSFederalReserveBankClosed({ year: 2022, month: 11, date: 26 }), true); // Christmas Observed
  });

  it('works for all federal reserve bank holidays in 2023', () => {
    assert.equal(isUSFederalReserveBankClosed({ year: 2023, month: 0, date: 1 }), true); // New Year's Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2023, month: 0, date: 16 }), true); // Birthday of Martin Luther King, Jr.
    assert.equal(isUSFederalReserveBankClosed({ year: 2023, month: 1, date: 20 }), true); // Washington's Birthday
    assert.equal(isUSFederalReserveBankClosed({ year: 2023, month: 4, date: 29 }), true); // Memorial Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2023, month: 5, date: 19 }), true); // Juneteenth
    assert.equal(isUSFederalReserveBankClosed({ year: 2023, month: 6, date: 4 }), true); // Independence Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2023, month: 8, date: 4 }), true); // Labor Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2023, month: 9, date: 9 }), true); // Columbus Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2023, month: 10, date: 11 }), true); // Veteran's Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2023, month: 10, date: 23 }), true); // Thanksgiving Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2023, month: 11, date: 25 }), true); // Christmas
  });

  it('works for all federal reserve bank holidays observed in 2023', () => {
    assert.equal(isUSFederalReserveBankClosed({ year: 2023, month: 0, date: 2 }), true); // New Year's Day 2023 Observed
  });

  it('works for all federal reserve bank holidays in 2024', () => {
    assert.equal(isUSFederalReserveBankClosed({ year: 2024, month: 0, date: 1 }), true); // New Year's Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2024, month: 0, date: 15 }), true); // Birthday of Martin Luther King, Jr.
    assert.equal(isUSFederalReserveBankClosed({ year: 2024, month: 1, date: 19 }), true); // Washington's Birthday
    assert.equal(isUSFederalReserveBankClosed({ year: 2024, month: 4, date: 27 }), true); // Memorial Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2024, month: 5, date: 19 }), true); // Juneteenth
    assert.equal(isUSFederalReserveBankClosed({ year: 2024, month: 6, date: 4 }), true); // Independence Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2024, month: 8, date: 2 }), true); // Labor Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2024, month: 9, date: 14 }), true); // Columbus Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2024, month: 10, date: 11 }), true); // Veteran's Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2024, month: 10, date: 28 }), true); // Thanksgiving Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2024, month: 11, date: 25 }), true); // Christmas
  });

  it('works for all federal reserve bank holidays in 2025', () => {
    assert.equal(isUSFederalReserveBankClosed({ year: 2025, month: 0, date: 1 }), true); // New Year's Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2025, month: 0, date: 20 }), true); // Birthday of Martin Luther King, Jr.
    assert.equal(isUSFederalReserveBankClosed({ year: 2025, month: 1, date: 17 }), true); // Washington's Birthday
    assert.equal(isUSFederalReserveBankClosed({ year: 2025, month: 4, date: 26 }), true); // Memorial Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2025, month: 5, date: 19 }), true); // Juneteenth
    assert.equal(isUSFederalReserveBankClosed({ year: 2025, month: 6, date: 4 }), true); // Independence Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2025, month: 8, date: 1 }), true); // Labor Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2025, month: 9, date: 13 }), true); // Columbus Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2025, month: 10, date: 11 }), true); // Veteran's Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2025, month: 10, date: 27 }), true); // Thanksgiving Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2025, month: 11, date: 25 }), true); // Christmas
  });

  it('works for all federal reserve bank holidays in 2026', () => {
    assert.equal(isUSFederalReserveBankClosed({ year: 2026, month: 0, date: 1 }), true); // New Year's Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2026, month: 0, date: 19 }), true); // Birthday of Martin Luther King, Jr.
    assert.equal(isUSFederalReserveBankClosed({ year: 2026, month: 1, date: 16 }), true); // Washington's Birthday
    assert.equal(isUSFederalReserveBankClosed({ year: 2026, month: 4, date: 25 }), true); // Memorial Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2026, month: 5, date: 19 }), true); // Juneteenth
    assert.equal(isUSFederalReserveBankClosed({ year: 2026, month: 6, date: 4 }), true); // Independence Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2026, month: 8, date: 7 }), true); // Labor Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2026, month: 9, date: 12 }), true); // Columbus Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2026, month: 10, date: 11 }), true); // Veteran's Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2026, month: 10, date: 26 }), true); // Thanksgiving Day
    assert.equal(isUSFederalReserveBankClosed({ year: 2026, month: 11, date: 25 }), true); // Christmas
  });
});
