// holidays/united-states/federal-reserve-bank/is-federal-reserve-bank-holiday.ts

import { formatUtc } from '../../../index';

import getAllFederalReserveBankHolidays from './get-all-federal-reserve-bank-holidays';
import type { PlainDate } from './plain-date';

const DAY_OF_THE_WEEK_SUNDAY = 0;
const DAY_OF_THE_WEEK_SATURDAY = 6;

export default function (plainDate: PlainDate): boolean {
  const date = new Date(plainDate.year, plainDate.month, plainDate.date);
  const year = date.getUTCFullYear();
  const day = date.getUTCDay();
  const allUsFederalReserveBankHolidays = getAllFederalReserveBankHolidays(year);

  return (
    day === DAY_OF_THE_WEEK_SATURDAY ||
    day === DAY_OF_THE_WEEK_SUNDAY ||
    allUsFederalReserveBankHolidays.some(
      (holiday) =>
        holiday.date === formatUtc(date, 'yyyy-MM-dd') || holiday.observedOn === formatUtc(date, 'yyyy-MM-dd')
    )
  );
}
