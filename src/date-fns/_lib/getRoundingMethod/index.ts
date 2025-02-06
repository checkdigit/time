// date-fns/_lib/getRoundingMethod/index.ts

import type { RoundingMethod } from '../../types.ts';

export function getRoundingMethod(method: RoundingMethod | undefined): (number: number) => number {
  return (number: number) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    // Prevent negative zero
    return result === 0 ? 0 : result;
  };
}
