/*
=====================================
Part 2: Hoisting
=====================================
*/

/*
Step 0:
Difference between function declaration and function expression

Function Declaration:
- Fully hoisted
- Can be used before definition

Function Expression:
- NOT hoisted
- Cannot be used before definition
*/

// -------------------------------
// Step 1: Refactoring to Function Expressions
// -------------------------------

// 1. cube
const cube = function (x) {
  return x * x * x;
};

// 2. fullName
const fullName = function (first, last) {
  return first + " " + last;
};

// 3. power (recursive)
const power = function (base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
};

// 4. sumCubes
const sumCubes = function (numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
};

// -------------------------------
// Step 2: Mechanics of Hoisting
// -------------------------------

// Q1: Why undefined instead of error?
/*
console.log(message);
var message = 'Hi there!';

Explanation:
- var declarations are hoisted
- value is not assigned yet
- default value is undefined
*/

// Q2: Why error with let?
/*
console.log(message);
let message = 'Hi there!';

Explanation:
- let is not accessible before declaration
- Temporal Dead Zone
- ReferenceError is thrown
*/

// Q3: What happens here?
/*
console.log(showMessage());

const showMessage = function () {
  return 'Hi there!';
};

Explanation:
- const function expressions are not hoisted
- showMessage is undefined at call time
- ReferenceError occurs
*/

// Q4: Why no error here?
/*
console.log(showMessage());

function showMessage() {
  return 'Hi there!';
}

Explanation:
- Function declarations are fully hoisted
- Available before execution
*/

// -------------------------------
// Step 3: Code Restructuring
// -------------------------------

// Example 1 (fixed)
let values = [10, 20, 30];

for (let i = 0; i < values.length; i++) {
  console.log(values[i]);
}

// Example 2 (fixed)
let lastLogin = '1/1/1970';

function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`;
}

console.log(welcome('Charlie', 'Munger'));
