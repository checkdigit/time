// holidays/united-states/federal-reserve-bank/subtract-federal-reserve-bank-business-days.ts

import { formatUtc } from '../../../index';
import isFederalReserveBankHoliday from './is-federal-reserve-bank-holiday';

export default function (date: string, amount: number): string {
  if (Number.isNaN(amount)) {
    throw new TypeError('Invalid Amount');
  }

  const endDate = new Date(date);
  endDate.setUTCHours(0, 0, 0, 0);

  let count = 0;
  while (count < amount) {
    endDate.setUTCDate(endDate.getUTCDate() - 1);
    if (!isFederalReserveBankHoliday(endDate)) {
      count++;
    }
  }

  return formatUtc(endDate, 'yyyy-MM-dd');
}
