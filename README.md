# Check Digit Time Library

The Check Digit time library is the officially sanctioned method for Check Digit services to deal with time. It is a partial implementation of the new TC39 Temporal proposal
and date manipulation functions provided by date-fns. Features:

- Nanosecond precision date times, simulated with Node's built-in high-resolution timer
- Tests that verify compliance with latest TC39 polyfill
- Designed to be removed once Temporal is included, by default, within V8.
- Implements most of Temporal.Instant, except timezone/calendar functionality
- Implements Temporal.Now.instant()
- Stripped down `date-fns` functions
- `date-fns-tz` for timezone support

Temporal (vs the millisecond precision of standard Date built-in) is useful for webservices recording the time of events, where concurrent activity may occur and millisecond precision does not provide adequate uniqueness and ordering.

The [`date-fns`](https://date-fns.org) library is included. The only locale currently supported is `en-US`, but otherwise contains all
available functionality as of v2.29.1.

Additionally, the [`date-fns-tz`](https://github.com/marnusw/date-fns-tz) library is included. The only locale currently supported is `en-US`, but otherwise contains all
available functionality as of v1.3.7.

### Important note about `Instant.toString()`

Unlike built-in `Date.toISOString()`, `Instant.toString()` will not add fractional second digits if those values are zero.

E.g.

```
new Date(0).toISOString() -> 1970-01-01T00:00:00.100Z

vs

Temporal.Instant(0n).toString() -> 1970-01-01T00:00:00.1Z
```

### Why not just use the polyfill?

The polyfill is not production ready. The implementation is designed to be used in the browser so cannot make use of Node's high-resolution timer to more accurately simulate nanosecond precision time. Crucially, the polyfill does not guarantee always increasing nanosecond precision times on subsequent calls, which makes it a non-starter for recording the time of events in production webservices.

### Installing and usage

`npm install @checkdigit/time` then:

```
import { Temporal } from '@checkdigit/time'; // delete this once Temporal becomes a built-in

// print out nanosecond-precision ISO8601 datetime
console.log('Current time', Temporal.Now.instant().toString());
```

For `date-fns` functionality:

```
import { format } from '@checkdigit/time';

console.log(format(new Date(), 'yyyy-MM-dd'));
```

### Documentation

The stage 3 proposal can be found here: https://github.com/tc39/proposal-temporal

The reference documentation is here: https://tc39.es/proposal-temporal/docs/

The documentation for `date-fns` is here: https://date-fns.org/

The documentation for `date-fns-tz` is here: https://github.com/marnusw/date-fns-tz
