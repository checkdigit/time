// date-fns/parse/_lib/constants.ts

export const numericPatterns = {
  month: /^(1[0-2]|0?\d)/ as RegExp, // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/ as RegExp, // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/ as RegExp, // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/ as RegExp, // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/ as RegExp, // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/ as RegExp, // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/ as RegExp, // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/ as RegExp, // 0 to 12
  minute: /^[0-5]?\d/ as RegExp, // 0 to 59
  second: /^[0-5]?\d/ as RegExp, // 0 to 59

  singleDigit: /^\d/ as RegExp, // 0 to 9
  twoDigits: /^\d{1,2}/ as RegExp, // 0 to 99
  threeDigits: /^\d{1,3}/ as RegExp, // 0 to 999
  fourDigits: /^\d{1,4}/ as RegExp, // 0 to 9999

  anyDigitsSigned: /^-?\d+/ as RegExp,
  singleDigitSigned: /^-?\d/ as RegExp, // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/ as RegExp, // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/ as RegExp, // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ as RegExp, // 0 to 9999, -0 to -9999
};

export const timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/ as RegExp,
  basic: /^([+-])(\d{2})(\d{2})|Z/ as RegExp,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/ as RegExp,
  extended: /^([+-])(\d{2}):(\d{2})|Z/ as RegExp,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/ as RegExp,
};
