// holidays/united-states/federal-reserve-bank/is-federal-reserve-bank-holiday.ts

import { formatUtc } from '../../../index';

import getAllFederalReserveBankHolidays from './get-all-federal-reserve-bank-holidays';

const DAY_OF_THE_WEEK_SUNDAY = 0;
const DAY_OF_THE_WEEK_SATURDAY = 6;

export default function (utcDate: Date): boolean {
  const year = utcDate.getUTCFullYear();
  const day = utcDate.getUTCDay();
  const allUsFederalReserveBankHolidays = getAllFederalReserveBankHolidays(year);

  return (
    day === DAY_OF_THE_WEEK_SUNDAY ||
    day === DAY_OF_THE_WEEK_SATURDAY ||
    allUsFederalReserveBankHolidays.some(
      (holiday) =>
        holiday.date === formatUtc(utcDate, 'yyyy-MM-dd') || holiday.observedOn === formatUtc(utcDate, 'yyyy-MM-dd')
    )
  );
}
