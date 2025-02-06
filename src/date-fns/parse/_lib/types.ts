// date-fns/parse/_lib/types.ts

import type { FirstWeekContainsDateOptions, LocalizedOptions, WeekOptions } from '../../types.ts';

export interface ParseFlags {
  timestampIsSet?: boolean;
  era?: number;
}

export type ParserOptions = Required<LocalizedOptions<'options'> & FirstWeekContainsDateOptions & WeekOptions>;

export type ParseResult<TValue> = { value: TValue; rest: string } | null;
