// holidays/united-states/federal-reserve-bank/is-federal-reserve-bank-holiday.ts

import { isWeekend } from '../../../date-fns';
import { formatUtc } from '../../../index';
import getAllFederalReserveBankHolidays from './get-all-federal-reserve-bank-holidays';

export default function (date: Date): boolean {
  const year = date.getFullYear();
  const allUsFederalReserveBankHolidays = getAllFederalReserveBankHolidays(year);

  return (
    isWeekend(date) || allUsFederalReserveBankHolidays.some((holiday) => holiday.date === formatUtc(date, 'yyyy-MM-dd'))
  );
}
