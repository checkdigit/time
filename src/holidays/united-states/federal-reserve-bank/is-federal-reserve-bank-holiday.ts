// holidays/united-states/federal-reserve-bank/is-federal-reserve-bank-holiday.ts

import { format } from '../../../index';

import getAllFederalReserveBankHolidays from './get-all-federal-reserve-bank-holidays';

const DAY_OF_THE_WEEK_SUNDAY = 0;
const DAY_OF_THE_WEEK_SATURDAY = 6;

export default function (date: Date): boolean {
  const year = date.getFullYear();
  const day = date.getDay();
  const allUsFederalReserveBankHolidays = getAllFederalReserveBankHolidays(year);

  return (
    day === DAY_OF_THE_WEEK_SATURDAY ||
    day === DAY_OF_THE_WEEK_SUNDAY ||
    allUsFederalReserveBankHolidays.some(
      (holiday) => holiday.date === format(date, 'yyyy-MM-dd') || holiday.observedOn === format(date, 'yyyy-MM-dd')
    )
  );
}
