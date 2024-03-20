import type { Instant } from "../../instant";

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
export function toDate<DateType extends Date>(
  argument: DateType | number | string,
): DateType {
  let modifiedArgument = argument;
  // this hack is required to support nano seconds
  if (typeof (modifiedArgument as unknown as Instant)?.epochNanoseconds === 'bigint') {
    modifiedArgument = new Date(Number((modifiedArgument as unknown as Instant).epochNanoseconds / 1000000n)) as DateType;
  }
  const argStr = Object.prototype.toString.call(modifiedArgument);

  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // this hack is required because setHours doesn't work for hours that are spring-forward
    return modifiedArgument as DateType;
    // original:
    // // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    // return new (argument.constructor as GenericDateConstructor<DateType>)(
    //   +argument,
    // );

  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument) as DateType;
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN) as DateType;
  }
}
