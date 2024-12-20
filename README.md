# JavaScript: Unexpected NaN Result with undefined in Conditional Check

This repository demonstrates a common JavaScript issue: unexpected NaN results when handling undefined values in conditional checks.

## Bug Description
The function `foo()` aims to return 0 if the input `x` is `null`. However, if `x` is `undefined`, the addition `x + 1` results in `NaN`.

## Solution
The solution involves explicitly checking for both `null` and `undefined` to prevent the `NaN` output. This can be achieved by using a loose equality check or the `typeof` operator.

## How to reproduce the bug
1. Clone this repository.
2. Run the `bug.js` file using a JavaScript runtime.
3. Observe that the output for `foo(undefined)` is `NaN`. 
