# Check Digit Time Library

Copyright (c) 2022-2024 [Check Digit, LLC](https://checkdigit.com)

The Check Digit time library is the officially sanctioned method for Check Digit services to deal with time. It has date manipulation functions provided by date-fns. Features:

- Stripped down `date-fns` functions
- `date-fns-tz` for timezone support
- `formatUtc` for formatting UTC dates

The [`date-fns`](https://date-fns.org) library is included. The only locale currently supported is `en-US`, but otherwise contains all
available functionality as of v4.1.0 except that the code in `fp` folder are excluded, which contain functional programming related stuff that is not used at the moment.

Additionally, the [`date-fns-tz`](https://github.com/marnusw/date-fns-tz) library is included. Contains all
available functionality as of v3.2.0 except that the code in `fp` folder are excluded, which contain functional programming related stuff that is not used at the moment.

## `formatUtc`

The `formatUtc` function is a wrapper around `date-fns-tz`'s `format` function, but with the following differences:

- There is no `options` argument, `timeZone` is always UTC.

Generally speaking, `formatUtc` should be used in place of `format` or `tzFormat`, unless non-UTC time zones are required.

## Installing and usage

`npm install @checkdigit/time` then:

For `date-fns` functionality:

```typescript
import { formatUtc } from '@checkdigit/time';

console.log(formatUtc(new Date(), 'yyyy-MM-dd'));
```

## Documentation

The documentation for `date-fns` is here: https://date-fns.org/

The documentation for `date-fns-tz` is here: https://github.com/marnusw/date-fns-tz

## Critical maintenance notes (VERY IMPORTANT!!!):

When updating the latest code from the original repositories, except making all the necessary changes to make them fully typescript compatible, please remember to carry over the patches to overcome the following issues:

- spring-forward support
- nanosecond support

Please search for `[PATCH:]` in the existing codebase.
