// date-fns-tz/_lib/tzPattern/index.ts

/** Regex to identify the presence of a time zone specifier in a date string */
const tzPattern: RegExp = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/;

export default tzPattern;
