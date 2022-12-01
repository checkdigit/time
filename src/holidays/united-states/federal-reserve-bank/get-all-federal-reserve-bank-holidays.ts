// holidays/united-states/federal-reserve-bank/get-all-federal-reserve-bank-holidays.ts

import { format } from '../../../index';

const YYYY_MM_DD_FORMAT = 'yyyy-MM-dd';

const DAY_OF_THE_WEEK_SUNDAY = 0;
const DAY_OF_THE_WEEK_MONDAY = 1;
const DAY_OF_THE_WEEK_THURSDAY = 4;
const DAY_OF_THE_WEEK_SATURDAY = 6;

const MONTH_JANUARY = 0;
const MONTH_FEBRUARY = 1;
const MONTH_MAY = 4;
const MONTH_JUNE = 5;
const MONTH_JULY = 6;
const MONTH_SEPTEMBER = 8;
const MONTH_OCTOBER = 9;
const MONTH_NOVEMBER = 10;
const MONTH_DECEMBER = 11;

const DATE_ONE = 1;
const DATE_TWO = 2;
const DATE_FOUR = 4;
const DATE_FIVE = 5;
const DATE_ELEVEN = 11;
const DATE_TWELVE = 12;
const DATE_NINETEEN = 19;
const DATE_TWENTY = 20;
const DATE_TWENTY_FIVE = 25;
const DATE_TWENTY_SIX = 26;
const DATE_THIRTY_ONE = 31;

const OCCURRENCE_FIRST = 1;
const OCCURRENCE_SECOND = 2;
const OCCURRENCE_THIRD = 3;
const OCCURRENCE_FOURTH = 4;

const YEAR2021 = 2021;

export interface FederalReserveBankHoliday {
  name: string;
  date: string;
  observedOn?: string | undefined;
}

function getLastMondayOfMay(year: number) {
  const lastDayOfMay = new Date(year, MONTH_MAY, DATE_THIRTY_ONE); // last day of may
  const lastMondayOfMayDay =
    lastDayOfMay.getDate() - (lastDayOfMay.getDay() - 1 < 1 ? DAY_OF_THE_WEEK_SATURDAY : lastDayOfMay.getDay() - 1);
  return format(new Date(year, MONTH_MAY, lastMondayOfMayDay), YYYY_MM_DD_FORMAT);
}

function getNthOccurrenceOfDayOfTheWeekInMonth(nth: number, dayOfTheWeek: number, month: number, year: number) {
  const date = new Date(year, month, DATE_ONE); // first day of the month
  date.setDate(1 + ((7 - date.getDay() + dayOfTheWeek) % 7) + (nth - 1) * 7);
  return format(date, YYYY_MM_DD_FORMAT);
}

export default function (year: number): FederalReserveBankHoliday[] {
  const newYearsDay =
    new Date(year, MONTH_JANUARY, DATE_ONE).getDay() === DAY_OF_THE_WEEK_SUNDAY
      ? {
          name: `New Year's Day`,
          date: format(new Date(year, MONTH_JANUARY, DATE_ONE), YYYY_MM_DD_FORMAT),
          observedOn: format(new Date(year, MONTH_JANUARY, DATE_TWO), YYYY_MM_DD_FORMAT),
        }
      : {
          name: `New Year's Day`,
          date: format(new Date(year, MONTH_JANUARY, DATE_ONE), YYYY_MM_DD_FORMAT),
        };

  const martinLutherKingJrDay = {
    name: 'Birthday of Martin Luther King, Jr.',
    date: getNthOccurrenceOfDayOfTheWeekInMonth(OCCURRENCE_THIRD, DAY_OF_THE_WEEK_MONDAY, MONTH_JANUARY, year), // Birthday of Martin Luther King, Jr. is the Third Monday of January
  };

  const washingtonsBirthday = {
    name: `Washington's Birthday`,
    date: getNthOccurrenceOfDayOfTheWeekInMonth(OCCURRENCE_THIRD, DAY_OF_THE_WEEK_MONDAY, MONTH_FEBRUARY, year), // Washington's Birthday is the Third Monday of February
  };

  const memorialDay = {
    name: 'Memorial Day',
    date: getLastMondayOfMay(year), // Memorial Day is the Last Monday of May
  };

  const juneteenth =
    new Date(year, MONTH_JUNE, DATE_NINETEEN).getDay() === DAY_OF_THE_WEEK_SUNDAY
      ? {
          name: 'Juneteenth National Independence Day',
          date: format(new Date(year, MONTH_JUNE, DATE_NINETEEN), YYYY_MM_DD_FORMAT),
          observedOn: format(new Date(year, MONTH_JUNE, DATE_TWENTY), YYYY_MM_DD_FORMAT),
        }
      : {
          name: 'Juneteenth National Independence Day',
          date: format(new Date(year, MONTH_JUNE, DATE_NINETEEN), YYYY_MM_DD_FORMAT),
        };

  const independenceDay =
    new Date(year, MONTH_JULY, DATE_FOUR).getDay() === DAY_OF_THE_WEEK_SUNDAY
      ? {
          name: 'Independence Day',
          date: format(new Date(year, MONTH_JULY, DATE_FOUR), YYYY_MM_DD_FORMAT),
          observedOn: format(new Date(year, MONTH_JULY, DATE_FIVE), YYYY_MM_DD_FORMAT),
        }
      : {
          name: 'Independence Day',
          date: format(new Date(year, MONTH_JULY, DATE_FOUR), YYYY_MM_DD_FORMAT),
        };

  const laborDay = {
    name: 'Labor Day',
    date: getNthOccurrenceOfDayOfTheWeekInMonth(OCCURRENCE_FIRST, DAY_OF_THE_WEEK_MONDAY, MONTH_SEPTEMBER, year), // Labor Day is the First Monday of September
  };

  const columbusDay = {
    name: 'Columbus Day',
    date: getNthOccurrenceOfDayOfTheWeekInMonth(OCCURRENCE_SECOND, DAY_OF_THE_WEEK_MONDAY, MONTH_OCTOBER, year), // Columbus Day is the Second Monday of October
  };

  const veteransDay =
    new Date(year, MONTH_NOVEMBER, DATE_ELEVEN).getDay() === DAY_OF_THE_WEEK_SUNDAY
      ? {
          name: 'Veterans Day',
          date: format(new Date(year, MONTH_NOVEMBER, DATE_ELEVEN), YYYY_MM_DD_FORMAT),
          observedOn: format(new Date(year, MONTH_NOVEMBER, DATE_TWELVE), YYYY_MM_DD_FORMAT),
        }
      : {
          name: 'Veterans Day',
          date: format(new Date(year, MONTH_NOVEMBER, DATE_ELEVEN), YYYY_MM_DD_FORMAT),
        };

  const thanksGivingDay = {
    name: 'Thanksgiving Day',
    date: getNthOccurrenceOfDayOfTheWeekInMonth(OCCURRENCE_FOURTH, DAY_OF_THE_WEEK_THURSDAY, MONTH_NOVEMBER, year), // Thanksgiving Day is the Fourth Thursday of November
  };

  const christmasDay =
    new Date(year, MONTH_DECEMBER, DATE_TWENTY_FIVE).getDay() === DAY_OF_THE_WEEK_SUNDAY
      ? {
          name: 'Christmas Day',
          date: format(new Date(year, MONTH_DECEMBER, DATE_TWENTY_FIVE), YYYY_MM_DD_FORMAT),
          observedOn: format(new Date(year, MONTH_DECEMBER, DATE_TWENTY_SIX), YYYY_MM_DD_FORMAT),
        }
      : {
          name: 'Christmas Day',
          date: format(new Date(year, MONTH_DECEMBER, DATE_TWENTY_FIVE), YYYY_MM_DD_FORMAT),
        };

  return year >= YEAR2021
    ? [
        newYearsDay,
        martinLutherKingJrDay,
        washingtonsBirthday,
        memorialDay,
        juneteenth,
        independenceDay,
        laborDay,
        columbusDay,
        veteransDay,
        thanksGivingDay,
        christmasDay,
      ]
    : [
        newYearsDay,
        martinLutherKingJrDay,
        washingtonsBirthday,
        memorialDay,
        independenceDay,
        laborDay,
        columbusDay,
        veteransDay,
        thanksGivingDay,
        christmasDay,
      ];
}
