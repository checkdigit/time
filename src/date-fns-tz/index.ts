/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
// @ts-nocheck

import type { FormatOptions, ParseISOOptions, Locale } from '../date-fns'

export interface FormatOptionsWithTZ extends Omit<FormatOptions, 'locale'> {
  locale?: FormatOptions['locale'] & Pick<Locale, 'code'>
  timeZone?: string
  originalDate?: Date | string | number
}

export interface ToDateOptionsWithTZ extends ParseISOOptions {
  timeZone?: string
}

export { format as tzFormat } from './format/index.js'
export { formatInTimeZone } from './formatInTimeZone/index.js'
export { fromZonedTime } from './fromZonedTime/index.js'
export { toZonedTime } from './toZonedTime/index.js'
export { getTimezoneOffset } from './getTimezoneOffset/index.js'
export { toDate as tzToDate } from './toDate/index.js'

export { default as tzUtcToZonedTime } from './utcToZonedTime';
export { default as tzZonedTimeToUtc } from './zonedTimeToUtc';

/* eslint-enable */
