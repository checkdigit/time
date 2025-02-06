// date-fns/locale/_lib/buildLocalizeFn/index.ts

import type { Day, Era, Month, Quarter } from '../../../types.ts';
import type { LocaleDayPeriod, LocaleUnitValue, LocaleWidth, LocalizeFn as LocalizeFunction } from '../../types.ts';

export type BuildLocalizeFnArgs<
  Value extends LocaleUnitValue,
  ArgumentCallback extends LocalizeFnArgCallback<Value> | undefined,
> = {
  values: LocalizePeriodValuesMap<Value>;
  defaultWidth: LocaleWidth;
  formattingValues?: LocalizePeriodValuesMap<Value>;
  defaultFormattingWidth?: LocaleWidth;
} & (ArgumentCallback extends undefined
  ? { argumentCallback?: undefined }
  : { argumentCallback: LocalizeFnArgCallback<Value> });

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */
export type LocalizeFnArgCallback<Value extends LocaleUnitValue | number> = (value: Value) => LocalizeUnitIndex<Value>;

/**
 * The map of localized values for each width.
 */
export type LocalizePeriodValuesMap<Value extends LocaleUnitValue> = Partial<
  Record<LocaleWidth, LocalizeValues<Value>>
>;

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */
export type LocalizeUnitIndex<Value extends LocaleUnitValue | number> = Value extends LocaleUnitValue
  ? keyof LocalizeValues<Value>
  : number;

/**
 * Converts the unit value to the tuple of values.
 */
export type LocalizeValues<Value extends LocaleUnitValue> = Value extends LocaleDayPeriod
  ? Record<LocaleDayPeriod, string>
  : Value extends Era
    ? LocalizeEraValues
    : Value extends Quarter
      ? LocalizeQuarterValues
      : Value extends Day
        ? LocalizeDayValues
        : Value extends Month
          ? LocalizeMonthValues
          : never;

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */
export type LocalizeEraValues = readonly [string, string];

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */
export type LocalizeQuarterValues = readonly [string, string, string, string];

/**
 * The tuple of localized day values. The first element represents Sunday.
 */
export type LocalizeDayValues = readonly [string, string, string, string, string, string, string];

/**
 * The tuple of localized month values. The first element represents January.
 */
export type LocalizeMonthValues = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];

export function buildLocalizeFn<
  Value extends LocaleUnitValue,
  ArgumentCallback extends LocalizeFnArgCallback<Value> | undefined,
>(arguments_: BuildLocalizeFnArgs<Value, ArgumentCallback>): LocalizeFunction<Value> {
  return (value, options) => {
    const context = options?.context ? String(options.context) : 'standalone';

    let valuesArray: LocalizeValues<Value>;
    if (context === 'formatting' && arguments_.formattingValues) {
      const defaultWidth = arguments_.defaultFormattingWidth || arguments_.defaultWidth;
      const width = (options?.width ? String(options.width) : defaultWidth) as LocaleWidth;
      valuesArray = (arguments_.formattingValues[width] || arguments_.formattingValues[defaultWidth])!;
    } else {
      const defaultWidth = arguments_.defaultWidth;
      const width = (options?.width ? String(options.width) : arguments_.defaultWidth) as LocaleWidth;
      valuesArray = (arguments_.values[width] || arguments_.values[defaultWidth])!;
    }
    const index = (
      arguments_.argumentCallback ? arguments_.argumentCallback(value) : value
    ) as LocalizeUnitIndex<Value>;
    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}
