/* eslint-disable */
// @ts-nocheck

/** Regex to identify the presence of a time zone specifier in a date string */
export const tzPattern: RegExp =
  /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;

/* eslint-enable */
