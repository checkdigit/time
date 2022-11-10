// holidays/united-states/federal-reserve/get-all-federal-reserve-holidays.ts

import { formatUtc } from '../../../index';

const YYYY_MM_DD_FORMAT = 'yyyy-MM-dd';

export interface FederalReserveHoliday {
  name: string;
  date: string;
}

function lastMondayOfMay(year: number) {
  const lastDayOfMay = new Date(year, 4, 31); // last day of may
  // eslint-disable-next-line no-magic-numbers
  const lastMondayOfMayDay = lastDayOfMay.getDate() - (lastDayOfMay.getDay() - 1 < 1 ? 6 : lastDayOfMay.getDay() - 1);
  return formatUtc(new Date(year, 4, lastMondayOfMayDay), YYYY_MM_DD_FORMAT);
}

function getNthInstanceOfDayOfTheWeek(nth: number, dayOfTheWeek: number, month: number, year: number) {
  const date = new Date(year, month, 1); // first day of the month
  date.setDate(1 + ((7 - date.getDay() + dayOfTheWeek) % 7) + (nth - 1) * 7);
  return formatUtc(date, YYYY_MM_DD_FORMAT);
}

export default function (year: number): FederalReserveHoliday[] {
  const federalReserveHolidays: FederalReserveHoliday[] = [];

  federalReserveHolidays.push(
    {
      name: `New Year's Day`,
      date: formatUtc(new Date(year, 0, 1), YYYY_MM_DD_FORMAT),
    },
    {
      name: 'Birthday of Martin Luther King, Jr.',
      // eslint-disable-next-line no-magic-numbers
      date: getNthInstanceOfDayOfTheWeek(3, 1, 0, year), // Birthday of Martin Luther King, Jr. is the Third Monday of January
    },
    {
      name: `Washington's Birthday`,
      // eslint-disable-next-line no-magic-numbers
      date: getNthInstanceOfDayOfTheWeek(3, 1, 1, year), // Washington's Birthday is the Third Monday of February
    },
    {
      name: 'Memorial Day',
      date: lastMondayOfMay(year), // Memorial Day is the Last Monday of May
    }
  );

  const YEAR2021 = 2021;
  if (year >= YEAR2021) {
    federalReserveHolidays.push({
      name: 'Juneteenth National Independence Day',
      // eslint-disable-next-line no-magic-numbers
      date: formatUtc(new Date(year, 5, 19), YYYY_MM_DD_FORMAT),
    });
  }

  federalReserveHolidays.push(
    {
      name: 'Independence Day',
      // eslint-disable-next-line no-magic-numbers
      date: formatUtc(new Date(year, 6, 4), YYYY_MM_DD_FORMAT),
    },
    {
      name: 'Labor Day',
      date: getNthInstanceOfDayOfTheWeek(1, 1, 8, year), // Labor Day is the First Monday of September
    },
    {
      name: 'Columbus Day',
      // eslint-disable-next-line no-magic-numbers
      date: getNthInstanceOfDayOfTheWeek(2, 1, 9, year), // Columbus Day is the Second Monday of October
    },
    {
      name: 'Veterans Day',
      // eslint-disable-next-line no-magic-numbers
      date: formatUtc(new Date(year, 10, 11), YYYY_MM_DD_FORMAT),
    },
    {
      name: 'Thanksgiving Day',
      date: getNthInstanceOfDayOfTheWeek(4, 4, 10, year), // Thanksgiving Day is the Fourth Thursday of November
    },
    {
      name: 'Christmas Day',
      // eslint-disable-next-line no-magic-numbers
      date: formatUtc(new Date(year, 11, 25), YYYY_MM_DD_FORMAT),
    }
  );

  return federalReserveHolidays;
}
