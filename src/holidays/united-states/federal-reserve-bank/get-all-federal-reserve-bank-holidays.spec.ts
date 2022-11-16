// holidays/united-states/federal-reserve-bank/get-all-federal-reserve-bank-holidays.spec.ts

import { strict as assert } from 'node:assert';

import getAllFederalReserveHolidays from './get-all-federal-reserve-bank-holidays';

describe('get-all-federal-reserve-bank-holidays', () => {
  it('works for 2022 based on the Federal Holidays outlined in https://www.federalreserve.gov/aboutthefed/k8.htm', () => {
    assert.deepEqual(getAllFederalReserveHolidays(2022), [
      { holiday: `New Year's Day`, date: '2022-01-01' },
      { holiday: 'Birthday of Martin Luther King, Jr.', date: '2022-01-17' },
      { holiday: `Washington's Birthday`, date: '2022-02-21' },
      { holiday: 'Memorial Day', date: '2022-05-30' },
      { holiday: 'Juneteenth National Independence Day', date: '2022-06-19', observedOn: '2022-06-20' },
      { holiday: 'Independence Day', date: '2022-07-04' },
      { holiday: 'Labor Day', date: '2022-09-05' },
      { holiday: 'Columbus Day', date: '2022-10-10' },
      { holiday: 'Veterans Day', date: '2022-11-11' },
      { holiday: 'Thanksgiving Day', date: '2022-11-24' },
      { holiday: 'Christmas Day', date: '2022-12-25', observedOn: '2022-12-26' },
    ]);
  });

  it('works for 2023 based on the Federal Holidays outlined in https://www.federalreserve.gov/aboutthefed/k8.htm', () => {
    assert.deepEqual(getAllFederalReserveHolidays(2023), [
      { holiday: `New Year's Day`, date: '2023-01-01', observedOn: '2023-01-02' },
      { holiday: 'Birthday of Martin Luther King, Jr.', date: '2023-01-16' },
      { holiday: `Washington's Birthday`, date: '2023-02-20' },
      { holiday: 'Memorial Day', date: '2023-05-29' },
      { holiday: 'Juneteenth National Independence Day', date: '2023-06-19' },
      { holiday: 'Independence Day', date: '2023-07-04' },
      { holiday: 'Labor Day', date: '2023-09-04' },
      { holiday: 'Columbus Day', date: '2023-10-09' },
      { holiday: 'Veterans Day', date: '2023-11-11' },
      { holiday: 'Thanksgiving Day', date: '2023-11-23' },
      { holiday: 'Christmas Day', date: '2023-12-25' },
    ]);
  });

  it('works for 2024 based on the Federal Holidays outlined in https://www.federalreserve.gov/aboutthefed/k8.htm', () => {
    assert.deepEqual(getAllFederalReserveHolidays(2024), [
      { holiday: `New Year's Day`, date: '2024-01-01' },
      { holiday: 'Birthday of Martin Luther King, Jr.', date: '2024-01-15' },
      { holiday: `Washington's Birthday`, date: '2024-02-19' },
      { holiday: 'Memorial Day', date: '2024-05-27' },
      { holiday: 'Juneteenth National Independence Day', date: '2024-06-19' },
      { holiday: 'Independence Day', date: '2024-07-04' },
      { holiday: 'Labor Day', date: '2024-09-02' },
      { holiday: 'Columbus Day', date: '2024-10-14' },
      { holiday: 'Veterans Day', date: '2024-11-11' },
      { holiday: 'Thanksgiving Day', date: '2024-11-28' },
      { holiday: 'Christmas Day', date: '2024-12-25' },
    ]);
  });

  it('works for 2025 based on the Federal Holidays outlined in https://www.federalreserve.gov/aboutthefed/k8.htm', () => {
    assert.deepEqual(getAllFederalReserveHolidays(2025), [
      { holiday: `New Year's Day`, date: '2025-01-01' },
      { holiday: 'Birthday of Martin Luther King, Jr.', date: '2025-01-20' },
      { holiday: `Washington's Birthday`, date: '2025-02-17' },
      { holiday: 'Memorial Day', date: '2025-05-26' },
      { holiday: 'Juneteenth National Independence Day', date: '2025-06-19' },
      { holiday: 'Independence Day', date: '2025-07-04' },
      { holiday: 'Labor Day', date: '2025-09-01' },
      { holiday: 'Columbus Day', date: '2025-10-13' },
      { holiday: 'Veterans Day', date: '2025-11-11' },
      { holiday: 'Thanksgiving Day', date: '2025-11-27' },
      { holiday: 'Christmas Day', date: '2025-12-25' },
    ]);
  });

  it('works for 2026 based on the Federal Holidays outlined in https://www.federalreserve.gov/aboutthefed/k8.htm', () => {
    assert.deepEqual(getAllFederalReserveHolidays(2026), [
      { holiday: `New Year's Day`, date: '2026-01-01' },
      { holiday: 'Birthday of Martin Luther King, Jr.', date: '2026-01-19' },
      { holiday: `Washington's Birthday`, date: '2026-02-16' },
      { holiday: 'Memorial Day', date: '2026-05-25' },
      { holiday: 'Juneteenth National Independence Day', date: '2026-06-19' },
      { holiday: 'Independence Day', date: '2026-07-04' },
      { holiday: 'Labor Day', date: '2026-09-07' },
      { holiday: 'Columbus Day', date: '2026-10-12' },
      { holiday: 'Veterans Day', date: '2026-11-11' },
      { holiday: 'Thanksgiving Day', date: '2026-11-26' },
      { holiday: 'Christmas Day', date: '2026-12-25' },
    ]);
  });
});
