// holidays/united-states/federal-reserve-bank/subtract-federal-reserve-bank-business-days.ts

import isFederalReserveBankHoliday from './is-federal-reserve-bank-holiday';
import type { PlainDate } from './plain-date';

export default function (plainDate: PlainDate, amount: number): PlainDate {
  if (Number.isNaN(amount)) {
    throw new TypeError('Invalid Amount');
  }

  const endDate = new Date(plainDate.year, plainDate.month, plainDate.date);
  endDate.setUTCHours(0, 0, 0, 0);

  let count = 0;
  while (count < amount) {
    endDate.setUTCDate(endDate.getUTCDate() - 1);
    if (
      !isFederalReserveBankHoliday({
        year: endDate.getUTCFullYear(),
        month: endDate.getUTCMonth(),
        date: endDate.getUTCDate(),
      })
    ) {
      count++;
    }
  }

  return {
    year: endDate.getUTCFullYear(),
    month: endDate.getUTCMonth(),
    date: endDate.getUTCDate(),
  };
}
