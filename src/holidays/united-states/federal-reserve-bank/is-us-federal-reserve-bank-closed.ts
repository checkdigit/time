// holidays/united-states/federal-reserve-bank/is-us-federal-reserve-bank-closed.ts

import { formatUtc } from '../../../index';

import { getAllUSFederalReserveBankHolidays, type PlainDate } from './index';

const DAY_OF_THE_WEEK_SUNDAY = 0;
const DAY_OF_THE_WEEK_SATURDAY = 6;

/**
 * @name isUSFederalReserveBankClosed
 * @summary Is the US Federal Reserve Bank Closed?
 *
 * @description
 * US Federal Reserve Bank is closed on United States weekends and holidays outlined in
 * https://www.federalreserve.gov/aboutthefed/k8.htm. This function checks if the US Federal Reserve Bank is closed
 * on a given date.
 *
 * @param plainDate - the date to be checked
 * @returns boolean indicating if the US Federal Reserve Bank is closed on a given date
 */
export default function (plainDate: PlainDate): boolean {
  const date = new Date(plainDate.year, plainDate.month, plainDate.date);
  const year = date.getUTCFullYear();
  const day = date.getUTCDay();
  const formattedDate = formatUtc(date, 'yyyy-MM-dd');
  const allUSFederalReserveBankHolidays = getAllUSFederalReserveBankHolidays(year);

  return (
    day === DAY_OF_THE_WEEK_SATURDAY ||
    day === DAY_OF_THE_WEEK_SUNDAY ||
    allUSFederalReserveBankHolidays.some(
      (holiday) => holiday.date === formattedDate || holiday.observedOn === formattedDate,
    )
  );
}
