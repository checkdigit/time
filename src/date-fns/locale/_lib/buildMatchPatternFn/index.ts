// date-fns/locale/_lib/buildMatchPatternFn/index.ts

import type { MatchFn as MatchFunction, MatchValueCallback } from '../../types.ts';

export interface BuildMatchPatternFunctionArguments<Result> {
  matchPattern: RegExp;
  parsePattern: RegExp;
  valueCallback?: MatchValueCallback<string, Result>;
}

export function buildMatchPatternFn<Result>(
  arguments_: BuildMatchPatternFunctionArguments<Result>,
): MatchFunction<Result> {
  return (string, options = {}) => {
    const matchResult = string.match(arguments_.matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parseResult = string.match(arguments_.parsePattern);
    if (!parseResult) {
      return null;
    }
    let value = (arguments_.valueCallback ? arguments_.valueCallback(parseResult[0]) : parseResult[0]) as Result;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value as any) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}
