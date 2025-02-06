// date-fns/_lib/protectedTokens/index.ts

const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = new Set(['D', 'DD', 'YY', 'YYYY']);

export function isProtectedDayOfYearToken(token: string): boolean {
  return dayOfYearTokenRE.test(token);
}

export function isProtectedWeekYearToken(token: string): boolean {
  return weekYearTokenRE.test(token);
}

export function warnOrThrowProtectedError(token: string, format: string, input: string): void {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.has(token)) {
    throw new RangeError(_message);
  }
}

function message(token: string, format: string, input: string) {
  const subject = token.startsWith('Y') ? 'years' : 'days of the month';
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
