// format-utc.ts

import { tzFormat, tzUtcToZonedTime } from './date-fns-tz';
import type { OptionsWithTZ } from './date-fns-tz/types';

export default function (date: Date | string | number, format: string, options?: OptionsWithTZ): string {
  if (options?.timeZone !== undefined && options?.timeZone !== 'UTC') {
    throw new RangeError('formatUtc only supports UTC');
  }
  return tzFormat(tzUtcToZonedTime(date, 'UTC'), format, { ...options, timeZone: 'UTC' });
}
