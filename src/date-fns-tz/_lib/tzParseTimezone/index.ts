import tzTokenizeDate from '../tzTokenizeDate';
import newDateUTC from '../newDateUTC';

const MILLISECONDS_IN_HOUR = 3600000;
const MILLISECONDS_IN_MINUTE = 60000;

const patterns = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-]\d{2})$/,
  timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/,
};

// Parse various time zone offset formats to an offset in milliseconds
export default function tzParseTimezone(timezoneString: string, date?: Date, isUtcDate?: boolean) {
  let token: RegExpExecArray | null;
  let absoluteOffset;

  // Empty string
  if (timezoneString === '') {
    return 0;
  }

  // Z
  token = patterns.timezoneZ.exec(timezoneString);
  if (token) {
    return 0;
  }

  let hours;

  // ±hh
  token = patterns.timezoneHH.exec(timezoneString);
  if (token) {
    hours = parseInt(token[1] as string, 10);

    if (!validateTimezone(hours)) {
      return NaN;
    }

    return -(hours * MILLISECONDS_IN_HOUR);
  }

  // ±hh:mm or ±hhmm
  token = patterns.timezoneHHMM.exec(timezoneString);
  if (token) {
    hours = parseInt(token[1] as string, 10);
    let minutes = parseInt(token[2] as string, 10);

    if (!validateTimezone(hours, minutes)) {
      return NaN;
    }

    absoluteOffset = Math.abs(hours) * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE;
    return hours > 0 ? -absoluteOffset : absoluteOffset;
  }

  // IANA time zone
  if (isValidTimezoneIANAString(timezoneString)) {
    date = new Date(date || Date.now());
    let utcDate = isUtcDate ? date : toUtcDate(date);

    let offset = calcOffset(utcDate, timezoneString);

    let fixedOffset = isUtcDate ? offset : fixOffset(date, offset, timezoneString);

    return -fixedOffset;
  }

  return NaN;
}

function toUtcDate(date: Date) {
  return newDateUTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
}

function calcOffset(date: Date, timezoneString: string) {
  let tokens = tzTokenizeDate(date, timezoneString);

  // ms dropped because it's not provided by tzTokenizeDate
  let asUTC = newDateUTC(
    tokens[0] as number,
    (tokens[1] as number) - 1,
    tokens[2] as number,
    (tokens[3] as number) % 24,
    tokens[4] as number,
    tokens[5] as number,
    0
  ).getTime();

  let asTS = date.getTime();
  let over = asTS % 1000;
  asTS -= over >= 0 ? over : 1000 + over;
  return asUTC - asTS;
}

function fixOffset(date: Date, offset: number, timezoneString: string): number {
  let localTS = date.getTime();

  // Our UTC time is just a guess because our offset is just a guess
  let utcGuess = localTS - offset;

  // Test whether the zone matches the offset for this ts
  let o2 = calcOffset(new Date(utcGuess), timezoneString);

  // If so, offset didn't change, and we're done
  if (offset === o2) {
    return offset;
  }

  // If not, change the ts by the difference in the offset
  utcGuess -= o2 - offset;

  // If that gives us the local time we want, we're done
  let o3 = calcOffset(new Date(utcGuess), timezoneString);
  if (o2 === o3) {
    return o2;
  }

  // If it's different, we're in a hole time. The offset has changed, but we don't adjust the time
  return Math.max(o2, o3);
}

function validateTimezone(hours: number, minutes?: number): boolean {
  return -23 <= hours && hours <= 23 && (minutes == null || (0 <= minutes && minutes <= 59));
}

const validIANATimezoneCache = {} as Record<string, boolean>;
function isValidTimezoneIANAString(timeZoneString: string): boolean {
  if (validIANATimezoneCache[timeZoneString]) return true;
  try {
    new Intl.DateTimeFormat(undefined, { timeZone: timeZoneString });
    validIANATimezoneCache[timeZoneString] = true;
    return true;
  } catch (error) {
    return false;
  }
}
