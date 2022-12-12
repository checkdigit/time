// holidays/united-states/federal-reserve-bank/is-us-federal-reserve-bank-closed.ts

import { formatUtc } from '../../../index';

import { getAllUSFederalReserveBankHolidays, PlainDate } from './index';

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
  const allUsFederalReserveBankHolidays = getAllUSFederalReserveBankHolidays(year);

  return (
    day === DAY_OF_THE_WEEK_SATURDAY ||
    day === DAY_OF_THE_WEEK_SUNDAY ||
    allUsFederalReserveBankHolidays.some(
      (holiday) =>
        holiday.date === formatUtc(date, 'yyyy-MM-dd') || holiday.observedOn === formatUtc(date, 'yyyy-MM-dd')
    )
  );
}
