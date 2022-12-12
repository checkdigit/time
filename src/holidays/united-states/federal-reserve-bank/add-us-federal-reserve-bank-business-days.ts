// holidays/united-states/federal-reserve-bank/add-us-federal-reserve-bank-business-days.ts

import { isUSFederalReserveBankClosed, PlainDate } from './index';

/**
 * @name addUSFederalReserveBankBusinessDays
 * @summary Add or subtract the specified number of US Federal Reserve Bank business days to the given date.
 *
 * @description
 * Add or subtract the specified number of US Federal Reserve Bank business days to the given date.
 *
 * @param plainDate - the date to be changed
 * @param amount - the amount of business days to be added or subtracted. Positive amount will add the number of US
 * Federal Reserve Bank business days and negative amount will subtract the number of US Federal Reserve Bank business days.
 * @returns plainDate with the business days added/subtracted
 */
export default function (plainDate: PlainDate, amount: number): PlainDate {
  if (Number.isNaN(amount)) {
    throw new TypeError('Invalid Amount');
  }

  const endDate = new Date(plainDate.year, plainDate.month, plainDate.date);
  endDate.setUTCHours(0, 0, 0, 0);

  let count = 0;
  if (amount < 0) {
    while (count < -amount) {
      endDate.setUTCDate(endDate.getUTCDate() - 1);
      if (
        !isUSFederalReserveBankClosed({
          year: endDate.getUTCFullYear(),
          month: endDate.getUTCMonth(),
          date: endDate.getUTCDate(),
        })
      ) {
        count++;
      }
    }
  } else {
    while (count < amount) {
      endDate.setUTCDate(endDate.getUTCDate() + 1);
      if (
        !isUSFederalReserveBankClosed({
          year: endDate.getUTCFullYear(),
          month: endDate.getUTCMonth(),
          date: endDate.getUTCDate(),
        })
      ) {
        count++;
      }
    }
  }

  return {
    year: endDate.getUTCFullYear(),
    month: endDate.getUTCMonth(),
    date: endDate.getUTCDate(),
  };
}
