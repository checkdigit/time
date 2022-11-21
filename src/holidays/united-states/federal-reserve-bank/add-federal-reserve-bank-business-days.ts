// holidays/united-states/federal-reserve-bank/add-federal-reserve-bank-business-days.ts

import { isWeekend } from '../../../date-fns';
import isSaturday from '../../../date-fns/isSaturday';
import isSunday from '../../../date-fns/isSunday';
import isFederalReserveBankHoliday from './is-federal-reserve-bank-holiday';

const WEEK_DAYS = 5;

export default function (date: Date, amount: number): Date {
  const startedOnWeekend = isWeekend(date);

  if (Number.isNaN(amount)) {
    throw new TypeError('Invalid Amount');
  }

  const hours = date.getHours();
  const fullWeeks = Math.trunc(amount / WEEK_DAYS);

  date.setDate(date.getDate() + fullWeeks * 7);

  let remainingDays = Math.abs(amount % WEEK_DAYS);

  while (remainingDays > 0) {
    date.setDate(date.getDate() + 1);
    if (!isWeekend(date) && !isFederalReserveBankHoliday(date)) {
      remainingDays -= 1;
    }
  }

  if (startedOnWeekend && isWeekend(date) && amount !== 0) {
    if (isSaturday(date)) {
      date.setDate(date.getDate() + 2);
    }
    if (isSunday(date)) {
      date.setDate(date.getDate() + 1);
    }
  }

  date.setHours(hours);
  return date;
}
