// format-utc.ts

import { tzFormat, tzUtcToZonedTime } from './date-fns-tz';

export default function (date: Date | string | number, format: string): string {
  return tzFormat(tzUtcToZonedTime(date, 'UTC'), format, { timeZone: 'UTC' });
}
