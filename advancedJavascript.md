## Four Simple Rules of JavaScript Promises

1. **Promise:** Represents an operation whose result may be available in the future.
2. **resolve():** Fulfills the Promise with a successful result.
3. **reject():** Rejects the Promise with a failure reason.
4. **setTimeout():** Schedules a function to execute after a specified delay. It works independently of `async` and `await`.

## Two Additional Things to Remember

- **async:** Makes a function return a Promise.
- **await:** Waits for a Promise to settle.

## Important Technical Detail

A Promise doesn't have to be explicitly resolved or rejected by your code. It can remain pending indefinitely if neither happens.