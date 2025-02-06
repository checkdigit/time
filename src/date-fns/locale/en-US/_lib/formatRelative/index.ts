// date-fns/locale/en-US/_lib/formatRelative/index.ts

import type { FormatRelativeFn as FormatRelativeFunction } from '../../../types.ts';

const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P',
};

export const formatRelative: FormatRelativeFunction = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];
