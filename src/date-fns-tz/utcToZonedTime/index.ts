import tzParseTimezone from '../_lib/tzParseTimezone';
import toDate from '../toDate';
import type { OptionsWithTZ } from '../types';

/**
 * @name utcToZonedTime
 * @category Time Zone Helpers
 * @summary Get a date/time representing local time in a given time zone from the UTC date
 *
 * @description
 * Returns a date instance with values representing the local time in the time zone
 * specified of the UTC time from the date provided. In other words, when the new date
 * is formatted it will show the equivalent hours in the target time zone regardless
 * of the current system time zone.
 *
 * @param {Date|String|Number} date - the date with the relevant UTC time
 * @param {String} timeZone - the time zone to get local time for, can be an offset or IANA time zone
 * @param {OptionsWithTZ} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the equivalent time in the time zone
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // In June 10am UTC is 6am in New York (-04:00)
 * const result = utcToZonedTime('2014-06-25T10:00:00.000Z', 'America/New_York')
 * //=> Jun 25 2014 06:00:00
 */
export default function utcToZonedTime(
  dirtyDate: Date | string | number,
  timeZone: string,
  options?: OptionsWithTZ,
): Date {
  const date = toDate(dirtyDate, options);

  const offsetMilliseconds = tzParseTimezone(timeZone, date, true);

  const d = new Date(date.getTime() - offsetMilliseconds);

  const resultDate = new Date(0);

  resultDate.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());

  resultDate.setHours(d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds());

  // [PATCH:] this hack is required because setHours doesn't work for hours that are spring-forward
  (resultDate as any)[Symbol.for('UTCHours')] = d.getUTCHours();
  return resultDate;
}
