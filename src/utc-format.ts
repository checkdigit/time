// utc-format.ts

import { tzFormat, tzUtcToZonedTime } from './date-fns-tz';

export default (date: Date | string | number, format: string): string =>
  tzFormat(tzUtcToZonedTime(date, 'UTC'), format, { timeZone: 'UTC' });
