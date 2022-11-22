// holidays/united-states/federal-reserve-bank/add-federal-reserve-bank-business-days.ts

import { isWeekend } from '../../../date-fns';

import isFederalReserveBankHoliday from './is-federal-reserve-bank-holiday';

export default function (date: Date, amount: number): Date {
  if (Number.isNaN(amount)) {
    throw new TypeError('Invalid Amount');
  }

  const endDate = new Date(date);
  const hours = date.getHours();

  let count = 0;
  while (count < amount) {
    endDate.setDate(endDate.getDate() + 1);
    if (!isWeekend(endDate) && !isFederalReserveBankHoliday(endDate)) {
      count++;
    }
  }

  endDate.setHours(hours);
  return endDate;
}
