/**
 * Returns the [year, month, day, hour, minute, seconds] tokens of the provided
 * `date` as it will be rendered in the `timeZone`.
 */
export default function tzTokenizeDate(date: Date, timeZone: string) {
  const dtf = getDateTimeFormat(timeZone);
  return partsOffset(dtf, date);
}

const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5,
};

function partsOffset(dtf: Intl.DateTimeFormat, date: Date) {
  try {
    const formatted = dtf.formatToParts(date);
    const filled = [];
    for (let i = 0; i < formatted.length; i++) {
      const pos = typeToPos[formatted[i]?.type as 'year'] as number;
      if (pos >= 0) {
        filled[pos] = parseInt(formatted[i]?.value as keyof typeof typeToPos, 10);
      }
    }
    return filled;
  } catch (error) {
    if (error instanceof RangeError) {
      return [NaN];
    }
    throw error;
  }
}

// to get deterministic local date/time output according to the `en-US` locale which
// can be used to extract local time parts as necessary.
const dtfCache = {} as Record<string, Intl.DateTimeFormat>;
function getDateTimeFormat(timeZone: string): Intl.DateTimeFormat {
  if (!dtfCache[timeZone]) {
    // New browsers use `hourCycle`, IE and Chrome <73 does not support it and uses `hour12`
    const testDateFormatted = new Intl.DateTimeFormat('en-US', {
      hour12: false,
      timeZone: 'America/New_York',
      year: 'numeric',
      month: 'numeric',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(new Date('2014-06-25T04:00:00.123Z'));
    const hourCycleSupported =
      testDateFormatted === '06/25/2014, 00:00:00' || testDateFormatted === '‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00';

    dtfCache[timeZone] = hourCycleSupported
      ? new Intl.DateTimeFormat('en-US', {
          hour12: false,
          timeZone: timeZone,
          year: 'numeric',
          month: 'numeric',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      : new Intl.DateTimeFormat('en-US', {
          hourCycle: 'h23',
          timeZone: timeZone,
          year: 'numeric',
          month: 'numeric',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
  }
  return dtfCache[timeZone] as Intl.DateTimeFormat;
}
