// date-fns-tz/date-fns-v2-lib/cloneObject/index.ts

import assign from '../assign/index.ts';

export default function cloneObject<T extends object | undefined>(object: T): T {
  if (object === undefined) {
    return object;
  }
  return assign({}, object);
}
