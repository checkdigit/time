// date-fns-tz/date-fns-v2-lib/assign/index.ts

export default function assign<T, U extends Object>(target: T, object: U): T & U {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  for (const property in object) {
    if (Object.hasOwn(object, property)) {
      (target as any)[property] = object[property];
    }
  }

  return target as T & U;
}
