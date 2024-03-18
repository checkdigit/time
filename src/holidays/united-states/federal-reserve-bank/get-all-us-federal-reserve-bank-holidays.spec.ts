// holidays/united-states/federal-reserve-bank/get-all-us-federal-reserve-bank-holidays.spec.ts

import { strict as assert } from 'node:assert';

import { describe, it } from '@jest/globals';

import { getAllUSFederalReserveBankHolidays } from './index';

describe('get-all-federal-reserve-bank-holidays', () => {
  it('works for 2022 based on the Federal Holidays outlined in https://www.federalreserve.gov/aboutthefed/k8.htm', () => {
    assert.deepEqual(getAllUSFederalReserveBankHolidays(2022), [
      { name: `New Year's Day`, date: '2022-01-01' },
      { name: 'Birthday of Martin Luther King, Jr.', date: '2022-01-17' },
      { name: `Washington's Birthday`, date: '2022-02-21' },
      { name: 'Memorial Day', date: '2022-05-30' },
      { name: 'Juneteenth National Independence Day', date: '2022-06-19', observedOn: '2022-06-20' },
      { name: 'Independence Day', date: '2022-07-04' },
      { name: 'Labor Day', date: '2022-09-05' },
      { name: 'Columbus Day', date: '2022-10-10' },
      { name: 'Veterans Day', date: '2022-11-11' },
      { name: 'Thanksgiving Day', date: '2022-11-24' },
      { name: 'Christmas Day', date: '2022-12-25', observedOn: '2022-12-26' },
    ]);
  });

  it('works for 2023 based on the Federal Holidays outlined in https://www.federalreserve.gov/aboutthefed/k8.htm', () => {
    assert.deepEqual(getAllUSFederalReserveBankHolidays(2023), [
      { name: `New Year's Day`, date: '2023-01-01', observedOn: '2023-01-02' },
      { name: 'Birthday of Martin Luther King, Jr.', date: '2023-01-16' },
      { name: `Washington's Birthday`, date: '2023-02-20' },
      { name: 'Memorial Day', date: '2023-05-29' },
      { name: 'Juneteenth National Independence Day', date: '2023-06-19' },
      { name: 'Independence Day', date: '2023-07-04' },
      { name: 'Labor Day', date: '2023-09-04' },
      { name: 'Columbus Day', date: '2023-10-09' },
      { name: 'Veterans Day', date: '2023-11-11' },
      { name: 'Thanksgiving Day', date: '2023-11-23' },
      { name: 'Christmas Day', date: '2023-12-25' },
    ]);
  });

  it('works for 2024 based on the Federal Holidays outlined in https://www.federalreserve.gov/aboutthefed/k8.htm', () => {
    assert.deepEqual(getAllUSFederalReserveBankHolidays(2024), [
      { name: `New Year's Day`, date: '2024-01-01' },
      { name: 'Birthday of Martin Luther King, Jr.', date: '2024-01-15' },
      { name: `Washington's Birthday`, date: '2024-02-19' },
      { name: 'Memorial Day', date: '2024-05-27' },
      { name: 'Juneteenth National Independence Day', date: '2024-06-19' },
      { name: 'Independence Day', date: '2024-07-04' },
      { name: 'Labor Day', date: '2024-09-02' },
      { name: 'Columbus Day', date: '2024-10-14' },
      { name: 'Veterans Day', date: '2024-11-11' },
      { name: 'Thanksgiving Day', date: '2024-11-28' },
      { name: 'Christmas Day', date: '2024-12-25' },
    ]);
  });

  it('works for 2025 based on the Federal Holidays outlined in https://www.federalreserve.gov/aboutthefed/k8.htm', () => {
    assert.deepEqual(getAllUSFederalReserveBankHolidays(2025), [
      { name: `New Year's Day`, date: '2025-01-01' },
      { name: 'Birthday of Martin Luther King, Jr.', date: '2025-01-20' },
      { name: `Washington's Birthday`, date: '2025-02-17' },
      { name: 'Memorial Day', date: '2025-05-26' },
      { name: 'Juneteenth National Independence Day', date: '2025-06-19' },
      { name: 'Independence Day', date: '2025-07-04' },
      { name: 'Labor Day', date: '2025-09-01' },
      { name: 'Columbus Day', date: '2025-10-13' },
      { name: 'Veterans Day', date: '2025-11-11' },
      { name: 'Thanksgiving Day', date: '2025-11-27' },
      { name: 'Christmas Day', date: '2025-12-25' },
    ]);
  });

  it('works for 2026 based on the Federal Holidays outlined in https://www.federalreserve.gov/aboutthefed/k8.htm', () => {
    assert.deepEqual(getAllUSFederalReserveBankHolidays(2026), [
      { name: `New Year's Day`, date: '2026-01-01' },
      { name: 'Birthday of Martin Luther King, Jr.', date: '2026-01-19' },
      { name: `Washington's Birthday`, date: '2026-02-16' },
      { name: 'Memorial Day', date: '2026-05-25' },
      { name: 'Juneteenth National Independence Day', date: '2026-06-19' },
      { name: 'Independence Day', date: '2026-07-04' },
      { name: 'Labor Day', date: '2026-09-07' },
      { name: 'Columbus Day', date: '2026-10-12' },
      { name: 'Veterans Day', date: '2026-11-11' },
      { name: 'Thanksgiving Day', date: '2026-11-26' },
      { name: 'Christmas Day', date: '2026-12-25' },
    ]);
  });
});
