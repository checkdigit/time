// date-fns/locale/en-US/_lib/formatLong/index.ts

import { buildFormatLongFn as buildFormatLongFunction } from '../../../_lib/buildFormatLongFn/index.ts';
import type { FormatLong } from '../../../types.ts';

const dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy',
};

const timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a',
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}',
};

export const formatLong: FormatLong = {
  date: buildFormatLongFunction({
    formats: dateFormats,
    defaultWidth: 'full',
  }),

  time: buildFormatLongFunction({
    formats: timeFormats,
    defaultWidth: 'full',
  }),

  dateTime: buildFormatLongFunction({
    formats: dateTimeFormats,
    defaultWidth: 'full',
  }),
};
