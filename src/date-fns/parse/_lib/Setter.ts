// date-fns/parse/_lib/Setter.ts

import { transpose } from '../../transpose/index.ts';
import { constructFrom } from '../../constructFrom/index.ts';
import type { ParseFlags, ParserOptions } from './types.ts';

const TIMEZONE_UNIT_PRIORITY = 10;

export abstract class Setter {
  public abstract priority: number;
  public subPriority = 0;

  public validate<DateType extends Date>(_utcDate: DateType, _options?: ParserOptions): boolean {
    return true;
  }

  public abstract set<DateType extends Date>(
    utcDate: DateType,
    flags: ParseFlags,
    options: ParserOptions,
  ): DateType | [DateType, ParseFlags];
}

export class ValueSetter<Value> extends Setter {
  private value: Value;
  private validateValue: <DateType extends Date>(utcDate: DateType, value: Value, options: ParserOptions) => boolean;
  private setValue: <DateType extends Date>(
    utcDate: DateType,
    flags: ParseFlags,
    value: Value,
    options: ParserOptions,
  ) => DateType | [DateType, ParseFlags];
  public priority: number;

  constructor(
    value: Value,

    validateValue: <DateType extends Date>(utcDate: DateType, value: Value, options: ParserOptions) => boolean,

    setValue: <DateType extends Date>(
      utcDate: DateType,
      flags: ParseFlags,
      value: Value,
      options: ParserOptions,
    ) => DateType | [DateType, ParseFlags],
    priority: number,
    subPriority?: number,
  ) {
    super();
    this.value = value;
    this.validateValue = validateValue;
    this.setValue = setValue;
    this.priority = priority;
    if (subPriority) {
      this.subPriority = subPriority;
    }
  }

  override validate<DateType extends Date>(date: DateType, options: ParserOptions): boolean {
    return this.validateValue(date, this.value, options);
  }

  set<DateType extends Date>(
    date: DateType,
    flags: ParseFlags,
    options: ParserOptions,
  ): DateType | [DateType, ParseFlags] {
    return this.setValue(date, flags, this.value, options);
  }
}

export class DateToSystemTimezoneSetter extends Setter {
  priority: number = TIMEZONE_UNIT_PRIORITY;
  override subPriority = -1;
  set<DateType extends Date>(date: DateType, flags: ParseFlags): DateType {
    if (flags.timestampIsSet) {
      return date;
    }
    return constructFrom(date, transpose(date, Date));
  }
}
