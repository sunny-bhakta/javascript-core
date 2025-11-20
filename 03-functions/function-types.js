/**
 * FUNCTION TYPES IN JAVASCRIPT
 * 
 * JavaScript supports multiple ways to define functions:
 * 1. Function Declarations
 * 2. Function Expressions
 * 3. Arrow Functions
 * 4. IIFE (Immediately Invoked Function Expressions)
 * 5. Generator Functions
 */

// ============================================
// FUNCTION DECLARATION
// ============================================
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("John")); // "Hello, John!"

// Hoisted - can be called before declaration
sayHello(); // Works!

function sayHello() {
    console.log("Hello!");
}

// ============================================
// FUNCTION EXPRESSION
// ============================================
const add = function(a, b) {
    return a + b;
};

console.log(add(2, 3)); // 5

// Not hoisted - cannot be called before declaration
// subtract(5, 2); // Error!

const subtract = function(a, b) {
    return a - b;
};

// Named function expression
const multiply = function multiplyNumbers(a, b) {
    return a * b;
};

// ============================================
// ARROW FUNCTIONS (ES6)
// ============================================
// Basic syntax
const divide = (a, b) => {
    return a / b;
};

// Single expression (implicit return)
const square = (x) => x * x;

// Single parameter (parentheses optional)
const double = x => x * 2;

// No parameters
const getRandom = () => Math.random();

// Multiple parameters
const sum = (a, b, c) => a + b + c;

// Returning object literal
const createUser = (name, age) => ({ name, age });

// Multi-line arrow function
const processData = (data) => {
    const processed = data.map(item => item * 2);
    return processed.filter(item => item > 10);
};

// ============================================
// FUNCTION PARAMETERS
// ============================================

// Default Parameters
function greetUser(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greetUser()); // "Hello, Guest!"
console.log(greetUser("John")); // "Hello, John!"

// Default with arrow function
const calculate = (a, b = 1) => a * b;

// Rest Parameters (collects remaining arguments)
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3, 4, 5)); // 15

// Arguments object (not available in arrow functions)
function showArguments() {
    console.log(arguments); // Array-like object
}

// ============================================
// IIFE (Immediately Invoked Function Expression)
// ============================================
(function() {
    console.log("IIFE executed immediately");
})();

// With parameters
(function(name) {
    console.log(`Hello, ${name}!`);
})("John");

// Arrow function IIFE
(() => {
    console.log("Arrow IIFE");
})();

// Assigning result
const result = (function(x) {
    return x * 2;
})(5);
console.log(result); // 10

// ============================================
// GENERATOR FUNCTIONS
// ============================================
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// Generator with loop
function* countTo(n) {
    for (let i = 1; i <= n; i++) {
        yield i;
    }
}

for (let num of countTo(5)) {
    console.log(num); // 1, 2, 3, 4, 5
}

// ============================================
// METHOD (Function as Object Property)
// ============================================
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) { // Shorthand method syntax
        return a - b;
    },
    multiply: (a, b) => a * b
};

console.log(calculator.add(5, 3)); // 8

// ============================================
// CONSTRUCTOR FUNCTION
// ============================================
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("John", 30);
console.log(person1.name); // "John"

// ============================================
// FIRST-CLASS FUNCTIONS
// ============================================
// Functions can be:
// 1. Assigned to variables
const func = function() { return "Hello"; };

// 2. Passed as arguments
function executeFunction(fn) {
    return fn();
}
executeFunction(() => "World");

// 3. Returned from functions
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}
const double = createMultiplier(2);
console.log(double(5)); // 10

// ============================================
// HIGHER-ORDER FUNCTIONS
// ============================================
// Functions that operate on other functions

// Function that takes function as argument
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log); // 0, 1, 2

// Function that returns function
function greaterThan(n) {
    return m => m > n;
}

const greaterThan10 = greaterThan(10);
console.log(greaterThan10(15)); // true

// ============================================
// CALLBACK FUNCTIONS
// ============================================
function processArray(arr, callback) {
    const result = [];
    for (let item of arr) {
        result.push(callback(item));
    }
    return result;
}

const numbers = [1, 2, 3, 4];
const doubled = processArray(numbers, x => x * 2);
console.log(doubled); // [2, 4, 6, 8]

// ============================================
// RECURSIVE FUNCTIONS
// ============================================
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// ============================================
// FUNCTION PROPERTIES AND METHODS
// ============================================
function example(a, b) {
    return a + b;
}

// name property
console.log(example.name); // "example"

// length property (number of parameters)
console.log(example.length); // 2

// call method
console.log(example.call(null, 1, 2)); // 3

// apply method
console.log(example.apply(null, [1, 2])); // 3

// bind method
const bound = example.bind(null, 10);
console.log(bound(5)); // 15

