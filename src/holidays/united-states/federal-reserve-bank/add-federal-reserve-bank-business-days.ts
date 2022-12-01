// holidays/united-states/federal-reserve-bank/add-federal-reserve-bank-business-days.ts

import isFederalReserveBankHoliday from './is-federal-reserve-bank-holiday';

export default function (date: string, amount: number): Date {
  if (Number.isNaN(amount)) {
    throw new TypeError('Invalid Amount');
  }

  const endDate = new Date(date);

  let count = 0;
  while (count < amount) {
    endDate.setDate(endDate.getDate() + 1);
    if (!isFederalReserveBankHoliday(endDate)) {
      count++;
    }
  }

  return endDate;
}
