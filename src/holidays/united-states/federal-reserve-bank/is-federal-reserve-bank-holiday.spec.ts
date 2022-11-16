// holidays/united-states/federal-reserve-bank/is-federal-reserve-bank-holiday.spec.ts

import { strict as assert } from 'node:assert';

import isFederalReserveBankHoliday from './is-federal-reserve-bank-holiday';

describe('is-us-federal-reserve-bank-holiday', () => {
  it('works for random federal reserve bank business days in 2022', () => {
    assert.equal(isFederalReserveBankHoliday(new Date('2022-01-10T18:00:00.000Z')), false);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-02-07T18:00:00.000Z')), false);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-03-15T18:00:00.000Z')), false);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-04-12T18:00:00.000Z')), false);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-05-12T18:00:00.000Z')), false);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-06-02T18:00:00.000Z')), false);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-07-13T18:00:00.000Z')), false);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-08-15T18:00:00.000Z')), false);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-09-19T18:00:00.000Z')), false);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-10-20T18:00:00.000Z')), false);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-11-28T18:00:00.000Z')), false);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-12-29T18:00:00.000Z')), false);
  });

  it('works for all Saturdays in 2022', () => {
    assert.equal(isFederalReserveBankHoliday(new Date('2022-01-01T00:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-01-08T01:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-01-15T02:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-01-22T03:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-01-29T04:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-02-05T05:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-02-12T06:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-02-19T07:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-02-26T08:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-03-05T09:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-03-12T10:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-03-19T11:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-03-26T12:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-04-02T13:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-04-09T14:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-04-16T15:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-04-23T16:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-04-30T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-05-07T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-05-14T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-05-21T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-05-28T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-06-04T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-06-11T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-06-18T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-06-25T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-07-02T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-07-09T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-07-16T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-07-23T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-07-30T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-08-06T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-08-13T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-08-20T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-08-27T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-09-03T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-09-10T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-09-17T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-09-24T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-10-01T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-10-08T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-10-15T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-10-22T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-10-29T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-11-05T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-11-12T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-11-19T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-11-26T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-12-03T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-12-10T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-12-17T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-12-24T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-12-31T17:00:00.000Z')), true);
  });

  it('works for all Sundays in 2022', () => {
    assert.equal(isFederalReserveBankHoliday(new Date('2022-01-02T00:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-01-09T01:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-01-16T02:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-01-23T03:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-01-30T04:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-02-06T05:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-02-13T06:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-02-20T07:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-02-27T08:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-03-06T09:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-03-13T10:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-03-20T11:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-03-27T12:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-04-03T13:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-04-10T14:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-04-17T15:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-04-24T16:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-05-01T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-05-08T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-05-15T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-05-22T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-05-29T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-06-05T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-06-12T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-06-19T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-06-26T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-07-03T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-07-10T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-07-17T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-07-24T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-07-31T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-08-07T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-08-14T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-08-21T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-08-28T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-09-04T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-09-11T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-09-18T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-09-25T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-10-02T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-10-09T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-10-16T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-10-23T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-10-30T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-11-06T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-11-13T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-11-20T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-11-27T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-12-04T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-12-11T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-12-18T17:00:00.000Z')), true);
    assert.equal(isFederalReserveBankHoliday(new Date('2022-12-25T17:00:00.000Z')), true);
  });

  it('works for all federal reserve bank holidays in 2022', () => {
    assert.equal(isFederalReserveBankHoliday(new Date('2022-01-01T20:00:00.000Z')), true); // New Year's Day
    assert.equal(isFederalReserveBankHoliday(new Date('2022-01-17T05:00:00.000Z')), true); // Birthday of Martin Luther King, Jr.
    assert.equal(isFederalReserveBankHoliday(new Date('2022-02-21T07:00:00.000Z')), true); // Washington's Birthday
    assert.equal(isFederalReserveBankHoliday(new Date('2022-05-30T01:00:00.000Z')), true); // Memorial Day
    assert.equal(isFederalReserveBankHoliday(new Date('2022-06-19T03:00:00.000Z')), true); // Juneteenth
    assert.equal(isFederalReserveBankHoliday(new Date('2022-07-04T02:00:00.000Z')), true); // Independence Day
    assert.equal(isFederalReserveBankHoliday(new Date('2022-09-05T03:00:00.000Z')), true); // Labor Day
    assert.equal(isFederalReserveBankHoliday(new Date('2022-10-10T09:00:00.000Z')), true); // Columbus Day
    assert.equal(isFederalReserveBankHoliday(new Date('2022-11-11T10:00:00.000Z')), true); // Veteran's Day
    assert.equal(isFederalReserveBankHoliday(new Date('2022-11-24T11:00:00.000Z')), true); // Thanksgiving Day
    assert.equal(isFederalReserveBankHoliday(new Date('2022-12-25T12:00:00.000Z')), true); // Christmas
  });

  it('works for all federal reserve bank holidays observed in 2022', () => {
    assert.equal(isFederalReserveBankHoliday(new Date('2022-06-20T01:00:00.000Z')), true); // Juneteenth Observed
    assert.equal(isFederalReserveBankHoliday(new Date('2022-12-26T01:00:00.000Z')), true); // Christmas Observed
  });

  it('works for all federal reserve bank holidays in 2023', () => {
    assert.equal(isFederalReserveBankHoliday(new Date('2023-01-01T20:00:00.000Z')), true); // New Year's Day
    assert.equal(isFederalReserveBankHoliday(new Date('2023-01-16T05:00:00.000Z')), true); // Birthday of Martin Luther King, Jr.
    assert.equal(isFederalReserveBankHoliday(new Date('2023-02-20T07:00:00.000Z')), true); // Washington's Birthday
    assert.equal(isFederalReserveBankHoliday(new Date('2023-05-29T01:00:00.000Z')), true); // Memorial Day
    assert.equal(isFederalReserveBankHoliday(new Date('2023-06-19T03:00:00.000Z')), true); // Juneteenth
    assert.equal(isFederalReserveBankHoliday(new Date('2023-07-04T02:00:00.000Z')), true); // Independence Day
    assert.equal(isFederalReserveBankHoliday(new Date('2023-09-04T03:00:00.000Z')), true); // Labor Day
    assert.equal(isFederalReserveBankHoliday(new Date('2023-10-09T09:00:00.000Z')), true); // Columbus Day
    assert.equal(isFederalReserveBankHoliday(new Date('2023-11-11T10:00:00.000Z')), true); // Veteran's Day
    assert.equal(isFederalReserveBankHoliday(new Date('2023-11-23T11:00:00.000Z')), true); // Thanksgiving Day
    assert.equal(isFederalReserveBankHoliday(new Date('2023-12-25T12:00:00.000Z')), true); // Christmas
  });

  it('works for all federal reserve bank holidays observed in 2023', () => {
    assert.equal(isFederalReserveBankHoliday(new Date('2023-01-02T20:00:00.000Z')), true); // New Year's Day 2023 Observed
  });

  it('works for all federal reserve bank holidays in 2024', () => {
    assert.equal(isFederalReserveBankHoliday(new Date('2024-01-01T20:00:00.000Z')), true); // New Year's Day
    assert.equal(isFederalReserveBankHoliday(new Date('2024-01-15T05:00:00.000Z')), true); // Birthday of Martin Luther King, Jr.
    assert.equal(isFederalReserveBankHoliday(new Date('2024-02-19T07:00:00.000Z')), true); // Washington's Birthday
    assert.equal(isFederalReserveBankHoliday(new Date('2024-05-27T01:00:00.000Z')), true); // Memorial Day
    assert.equal(isFederalReserveBankHoliday(new Date('2024-06-19T03:00:00.000Z')), true); // Juneteenth
    assert.equal(isFederalReserveBankHoliday(new Date('2024-07-04T02:00:00.000Z')), true); // Independence Day
    assert.equal(isFederalReserveBankHoliday(new Date('2024-09-02T03:00:00.000Z')), true); // Labor Day
    assert.equal(isFederalReserveBankHoliday(new Date('2024-10-14T09:00:00.000Z')), true); // Columbus Day
    assert.equal(isFederalReserveBankHoliday(new Date('2024-11-11T10:00:00.000Z')), true); // Veteran's Day
    assert.equal(isFederalReserveBankHoliday(new Date('2024-11-28T11:00:00.000Z')), true); // Thanksgiving Day
    assert.equal(isFederalReserveBankHoliday(new Date('2024-12-25T12:00:00.000Z')), true); // Christmas
  });

  it('works for all federal reserve bank holidays in 2025', () => {
    assert.equal(isFederalReserveBankHoliday(new Date('2025-01-01T20:00:00.000Z')), true); // New Year's Day
    assert.equal(isFederalReserveBankHoliday(new Date('2025-01-20T05:00:00.000Z')), true); // Birthday of Martin Luther King, Jr.
    assert.equal(isFederalReserveBankHoliday(new Date('2025-02-17T07:00:00.000Z')), true); // Washington's Birthday
    assert.equal(isFederalReserveBankHoliday(new Date('2025-05-26T01:00:00.000Z')), true); // Memorial Day
    assert.equal(isFederalReserveBankHoliday(new Date('2025-06-19T03:00:00.000Z')), true); // Juneteenth
    assert.equal(isFederalReserveBankHoliday(new Date('2025-07-04T02:00:00.000Z')), true); // Independence Day
    assert.equal(isFederalReserveBankHoliday(new Date('2025-09-01T03:00:00.000Z')), true); // Labor Day
    assert.equal(isFederalReserveBankHoliday(new Date('2025-10-13T09:00:00.000Z')), true); // Columbus Day
    assert.equal(isFederalReserveBankHoliday(new Date('2025-11-11T10:00:00.000Z')), true); // Veteran's Day
    assert.equal(isFederalReserveBankHoliday(new Date('2025-11-27T11:00:00.000Z')), true); // Thanksgiving Day
    assert.equal(isFederalReserveBankHoliday(new Date('2025-12-25T12:00:00.000Z')), true); // Christmas
  });

  it('works for all federal reserve bank holidays in 2026', () => {
    assert.equal(isFederalReserveBankHoliday(new Date('2026-01-01T20:00:00.000Z')), true); // New Year's Day
    assert.equal(isFederalReserveBankHoliday(new Date('2026-01-19T05:00:00.000Z')), true); // Birthday of Martin Luther King, Jr.
    assert.equal(isFederalReserveBankHoliday(new Date('2026-02-16T07:00:00.000Z')), true); // Washington's Birthday
    assert.equal(isFederalReserveBankHoliday(new Date('2026-05-25T01:00:00.000Z')), true); // Memorial Day
    assert.equal(isFederalReserveBankHoliday(new Date('2026-06-19T03:00:00.000Z')), true); // Juneteenth
    assert.equal(isFederalReserveBankHoliday(new Date('2026-07-04T02:00:00.000Z')), true); // Independence Day
    assert.equal(isFederalReserveBankHoliday(new Date('2026-09-07T03:00:00.000Z')), true); // Labor Day
    assert.equal(isFederalReserveBankHoliday(new Date('2026-10-12T09:00:00.000Z')), true); // Columbus Day
    assert.equal(isFederalReserveBankHoliday(new Date('2026-11-11T10:00:00.000Z')), true); // Veteran's Day
    assert.equal(isFederalReserveBankHoliday(new Date('2026-11-26T11:00:00.000Z')), true); // Thanksgiving Day
    assert.equal(isFederalReserveBankHoliday(new Date('2026-12-25T12:00:00.000Z')), true); // Christmas
  });
});
