/**
 * Returns the formatted time zone name of the provided `timeZone` or the current
 * system time zone if omitted, accounting for DST according to the UTC value of
 * the date.
 */
import type { Locale } from '../../../date-fns/locale/types';

export default function tzIntlTimeZoneName(
  length: 'short' | 'long' | 'shortOffset' | 'longOffset' | 'shortGeneric' | 'longGeneric',
  date: Date,
  options: { timeZone: string; locale?: Locale },
) {
  const dtf = getDTF(length, options.timeZone, options.locale);
  return partsTimeZone(dtf, date);
}

function partsTimeZone(dtf: Intl.DateTimeFormat, date: Date) {
  const formatted = dtf.formatToParts(date);
  for (let i = formatted.length - 1; i >= 0; --i) {
    if (formatted[i]?.type === 'timeZoneName') {
      return formatted[i]?.value;
    }
  }
  return undefined;
}

// If a locale has been provided `en-US` is used as a fallback in case it is an
// invalid locale, otherwise the locale is left undefined to use the system locale.
function getDTF(
  length: 'short' | 'long' | 'shortOffset' | 'longOffset' | 'shortGeneric' | 'longGeneric',
  timeZone: string,
  locale?: Locale,
): Intl.DateTimeFormat {
  if (locale && !locale.code) {
    throw new Error(
      "date-fns-tz error: Please set a language code on the locale object imported from date-fns, e.g. `locale.code = 'en-US'`",
    );
  }
  return new Intl.DateTimeFormat(locale ? [locale.code, 'en-US'] : undefined, {
    timeZone: timeZone,
    timeZoneName: length,
  });
}
