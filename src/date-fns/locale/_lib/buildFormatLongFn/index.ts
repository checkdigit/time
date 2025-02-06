// date-fns/locale/_lib/buildFormatLongFn/index.ts

import type { FormatLongFn as FormatLongFunction, FormatLongWidth } from '../../types.ts';

export interface BuildFormatLongFunctionArguments<DefaultMatchWidth extends FormatLongWidth> {
  formats: Partial<Record<FormatLongWidth, string>> & Record<DefaultMatchWidth, string>;
  defaultWidth: DefaultMatchWidth;
}

export function buildFormatLongFn<DefaultMatchWidth extends FormatLongWidth>(
  arguments_: BuildFormatLongFunctionArguments<DefaultMatchWidth>,
): FormatLongFunction {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? (String(options.width) as FormatLongWidth) : arguments_.defaultWidth;
    const format = arguments_.formats[width] || arguments_.formats[arguments_.defaultWidth];
    return format;
  };
}
