/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
// @ts-nocheck

export const numericPatterns: {
  month: RegExp; // 0 to 12
  date: RegExp; // 0 to 31
  dayOfYear: RegExp; // 0 to 366
  week: RegExp; // 0 to 53
  hour23h: RegExp; // 0 to 23
  hour24h: RegExp; // 0 to 24
  hour11h: RegExp; // 0 to 11
  hour12h: RegExp; // 0 to 12
  minute: RegExp; // 0 to 59
  second: RegExp; // 0 to 59
  singleDigit: RegExp; // 0 to 9
  twoDigits: RegExp; // 0 to 99
  threeDigits: RegExp; // 0 to 999
  fourDigits: RegExp; // 0 to 9999
  anyDigitsSigned: RegExp;
  singleDigitSigned: RegExp; // 0 to 9, -0 to -9
  twoDigitsSigned: RegExp; // 0 to 99, -0 to -99
  threeDigitsSigned: RegExp; // 0 to 999, -0 to -999
  fourDigitsSigned: RegExp;
} = {
  month: /^(1[0-2]|0?\d)/, // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/, // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/, // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/, // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/, // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/, // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/, // 0 to 12
  minute: /^[0-5]?\d/, // 0 to 59
  second: /^[0-5]?\d/, // 0 to 59

  singleDigit: /^\d/, // 0 to 9
  twoDigits: /^\d{1,2}/, // 0 to 99
  threeDigits: /^\d{1,3}/, // 0 to 999
  fourDigits: /^\d{1,4}/, // 0 to 9999

  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/, // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/, // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/, // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/, // 0 to 9999, -0 to -9999
};

export const timezonePatterns: {
  basicOptionalMinutes: RegExp;
  basic: RegExp;
  basicOptionalSeconds: RegExp;
  extended: RegExp;
  extendedOptionalSeconds: RegExp;
} = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
};

/* eslint-enable */
