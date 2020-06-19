# Check Digit Time Library

The Check Digit time library is the officially sanctioned method for Check Digit services to deal with time.  It is a partial implementation of the new TC39 Temporal proposal.  Features:
* Nano-second precision date times, simulated with Node's built-in high-resolution timer
* Tests that verify compliance with latest TC39 polyfill
* Designed to be removed once Temporal is included, by default, within V8.
* Implements most of Temporal.Absolute, with the exception of timezone/calendar functionality
* Implements Temporal.now.absolute()

Temporal (vs the millisecond precision of standard Date built-in) is useful for webservices recording the time of events, where concurrent activity may occur and millisecond precision does not provide adequate uniqueness and ordering.

### Why not just use the polyfill?

The polyfill is not production ready.  The implementation is designed to be used in the browser so cannot make use of Node's high-resolution timer to more accurately simulate nano-second precision time.  Crucially, the polyfill does not guarantee always increasing absolute times on subsequent calls, which makes it a non-starter for recording the time of events in production webservices.

### Installing

`npm install @checkdigit/time` then:
```
import { Temporal } from '@checkdigit/time'; // delete this once Temporal becomes a built-in

// print out nanosecond-precision ISO8601 datetime
console.log('Current time', Temporal.now.absolute().toString());
```

### Documentation

The stage 2 proposal can be found here: https://github.com/tc39/proposal-temporal

The reference documentation is here: https://tc39.es/proposal-temporal/docs/
