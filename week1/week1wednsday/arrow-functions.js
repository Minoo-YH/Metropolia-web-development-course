// Scenario 1: Basic Function (no parameters)
const sayHello = () => "Hello, world!";


// Scenario 2: Single Parameter
const double = x => x * 2;


// Scenario 3: Multiple Parameters
const add = (x, y) => x + y;


// Scenario 4: Function Inside an Object
// NOTE: Arrow functions do NOT have their own `this`
// So we keep this as a regular function
const person = {
  name: "Alice",
  sayHi: function () {
    return "Hi, " + this.name + "!";
  }
};


// Scenario 5: Callback Function with forEach
const numbers = [1, 2, 3, 4, 5];

const doubled = [];
numbers.forEach(num => doubled.push(num * 2));


// --- Test Outputs ---
console.log(sayHello());            // Hello, world!
console.log(double(5));             // 10
console.log(add(3, 4));              // 7
console.log(person.sayHi());         // Hi, Alice!
console.log(doubled);                // [2, 4, 6, 8, 10]

