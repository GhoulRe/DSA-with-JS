// This is one of the most confusing expressions in JavaScript because it mixes post - increment(i++) and pre - increment(++i) on the same variable in a single expression.

let i = 11;
i = i++ + ++i;
console.log(i);

// Step 1: Initial value
// i = 11
// Step 2: Evaluate i++

// i++ is post - increment.

// It returns the current value.
// Then increments i.

//     So:

// i++   // returns 11

// After this executes:

// i = 12
// Step 3: Evaluate++i

// ++i is pre - increment.

// It increments first.
// Then returns the new value.

// Current i is 12.

// ++i

// Now:

// i = 13

// and the expression returns:

// 13
// Step 4: Perform the addition

// Now JavaScript has:

// 11 + 13

// which is

// 24
// Step 5: Assignment

// Finally,

//     i = 24;

// So,

// console.log(i); // 24