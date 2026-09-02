/* eslint-disable */
// @ts-nocheck

import type {
  FormatOptions,
  ParseISOOptions,
  Locale,
} from '../date-fns/index.ts';

export interface FormatOptionsWithTZ extends Omit<FormatOptions, 'locale'> {
  locale?: FormatOptions['locale'] & Pick<Locale, 'code'>;
  timeZone?: string;
  originalDate?: Date | string | number;
}

export interface ToDateOptionsWithTZ extends ParseISOOptions {
  timeZone?: string;
}

export { format as tzFormat } from './format/index.ts';
export { formatInTimeZone as tzFormatInTimeZone } from './formatInTimeZone/index.ts';
export { fromZonedTime as tzZonedTimeToUtc } from './fromZonedTime/index.ts';
export { toZonedTime as tzUtcToZonedTime } from './toZonedTime/index.ts';
export { getTimezoneOffset as getTimezoneOffset } from './getTimezoneOffset/index.ts';
export { toDate as tzToDate } from './toDate/index.ts';

/* eslint-enable */
