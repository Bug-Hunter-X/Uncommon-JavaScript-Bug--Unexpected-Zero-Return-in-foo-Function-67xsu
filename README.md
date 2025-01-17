# Uncommon JavaScript Bug: Unexpected Zero Return

This repository demonstrates a subtle bug in a JavaScript function. The `foo` function is designed to multiply two numbers, but it incorrectly returns 0 when either input is 0. This is an uncommon error because it's not immediately apparent from the code's overall structure.

## Bug Description

The `foo` function in `bug.js` contains a conditional statement that checks if either input `a` or `b` is equal to 0. If either is 0, it returns 0.  This is the incorrect logic. When multiplying by zero the result should always be zero, but the function returns zero even when one of the input is not zero.

## Solution

The `bugSolution.js` file contains the corrected `foo` function. The incorrect return statement has been fixed. 

## How to Reproduce

1. Clone the repository.
2. Open `bug.js` and observe the faulty code.
3. Run the tests (if provided).
4. Compare the behavior of the buggy and fixed code. 

## Learning Points

This example illustrates how even small logical errors can lead to unexpected behavior in code. Thorough testing and code reviews are essential to prevent such errors.