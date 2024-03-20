import { afterEach, beforeAll, describe, expect, it } from "vitest";
import { getDefaultOptions } from "./index";
import { setDefaultOptions } from "../setDefaultOptions/index";
import { startOfWeek } from "../startOfWeek/index";
import {
  getDefaultOptions as getInternalDefaultOptions,
  setDefaultOptions as setInternalDefaultOptions,
} from "../_lib/defaultOptions/index";
import { resetDefaultOptions } from "../_lib/test/index";
import { Locale } from "../types";

describe.skip("getDefaultOptions", () => {
  afterEach(resetDefaultOptions);

  let eo: Locale
  beforeAll(async () => {
    // @ts-expect-error
    ({ eo } = await import("../locale/eo/index"));
  });

  it("returns an empty object", () => {
    const result = getDefaultOptions();
    expect(result).toEqual({});
  });

  it("returns a clone of the original object", () => {
    setInternalDefaultOptions({ weekStartsOn: 1 });
    const result = getDefaultOptions();
    expect(getInternalDefaultOptions()).toEqual(result);
  });

  it("mutating the result does not affect functions that use options", () => {
    const defaultOptionsClone = getDefaultOptions();
    defaultOptionsClone.weekStartsOn = 1;
    const result = startOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
    expect(result).toEqual(new Date(2014, 7 /* Aug */, 31));

    // Mutating the original object does affect `startOfWeek`
    const _defaultOptions = getInternalDefaultOptions();
    _defaultOptions.weekStartsOn = 1;
    const result2 = startOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
    expect(result2).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it("returns new values after setting them via `setDefaultOptions`", () => {
    setDefaultOptions({
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: eo,
    });
    const result = getDefaultOptions();
    expect(result).toEqual({
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: eo,
    });
  });
});
