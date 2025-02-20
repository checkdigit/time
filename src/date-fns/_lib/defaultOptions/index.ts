/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
// @ts-nocheck

import type {
  FirstWeekContainsDateOptions,
  Locale,
  LocalizedOptions,
  WeekOptions,
} from "../../types.ts";

export type DefaultOptions = LocalizedOptions<keyof Locale> &
  WeekOptions &
  FirstWeekContainsDateOptions;

let defaultOptions: DefaultOptions = {};

export function getDefaultOptions(): DefaultOptions {
  return defaultOptions;
}

export function setDefaultOptions(newOptions: DefaultOptions): void {
  defaultOptions = newOptions;
}

/* eslint-enable */
