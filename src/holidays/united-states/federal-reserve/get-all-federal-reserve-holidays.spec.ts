// holidays/united-states/federal-reserve/get-all-federal-reserve-holidays.spec.ts

import { strict as assert } from 'node:assert';

import getAllFederalReserveHolidays from './get-all-federal-reserve-holidays';

describe('get-all-federal-reserve-holidays', () => {
  it('works', () => {
    assert.deepEqual(getAllFederalReserveHolidays(2022), [
      { name: `New Year's Day`, date: '2022-01-01' },
      { name: 'Birthday of Martin Luther King, Jr.', date: '2022-01-17' },
      { name: `Washington's Birthday`, date: '2022-02-21' },
      { name: 'Memorial Day', date: '2022-05-30' },
      { name: 'Juneteenth National Independence Day', date: '2022-06-19' },
      { name: 'Independence Day', date: '2022-07-04' },
      { name: 'Labor Day', date: '2022-09-05' },
      { name: 'Columbus Day', date: '2022-10-10' },
      { name: 'Veterans Day', date: '2022-11-11' },
      { name: 'Thanksgiving Day', date: '2022-11-24' },
      { name: 'Christmas Day', date: '2022-12-25' },
    ]);
  });
});
