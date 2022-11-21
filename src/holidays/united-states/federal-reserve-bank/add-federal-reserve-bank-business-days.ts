// holidays/united-states/federal-reserve-bank/add-federal-reserve-bank-business-days.ts

import { addBusinessDays, isWeekend } from '../../../date-fns';
import isFederalReserveBankHoliday from './is-federal-reserve-bank-holiday';

function getDatesInRange(startDate: Date, endDate: Date) {
  const dateArray = [];
  const currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    dateArray.push(new Date(currentDate));
    currentDate.setUTCDate(currentDate.getUTCDate() + 1);
  }

  return dateArray;
}

export default function (date: Date, amount: number): Date {
  const currentDate = new Date(date);
  const datesInRange = getDatesInRange(new Date(date), new Date(addBusinessDays(date, amount)));
  const federalReserveBankHolidaysInRange = datesInRange.filter(
    (eachDate) => !isWeekend(eachDate) && isFederalReserveBankHoliday(eachDate)
  ).length;
  if (federalReserveBankHolidaysInRange > amount) {
    return new Date(addBusinessDays(currentDate, federalReserveBankHolidaysInRange));
  } else if (
    (!isWeekend(currentDate) && isFederalReserveBankHoliday(currentDate)) ||
    federalReserveBankHolidaysInRange === amount
  ) {
    return new Date(addBusinessDays(currentDate, amount));
  }
  return new Date(addBusinessDays(currentDate, amount + federalReserveBankHolidaysInRange));
}
