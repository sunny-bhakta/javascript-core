/**
 * SPREAD AND REST OPERATORS (ES6)
 * 
 * Spread (...) expands iterables into individual elements.
 * Rest (...) collects remaining elements into an array.
 */

// ============================================
// SPREAD WITH ARRAYS
// ============================================
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Copy array
const copy = [...arr1];
console.log(copy); // [1, 2, 3]

// Add elements
const withNew = [...arr1, 4, 5];
console.log(withNew); // [1, 2, 3, 4, 5]

// Insert in middle
const inserted = [...arr1.slice(0, 1), 10, ...arr1.slice(1)];
console.log(inserted); // [1, 10, 2, 3]

// ============================================
// SPREAD WITH OBJECTS (ES2018)
// ============================================
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Combine objects
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// Copy object
const copyObj = { ...obj1 };
console.log(copyObj); // { a: 1, b: 2 }

// Override properties
const updated = { ...obj1, b: 20 };
console.log(updated); // { a: 1, b: 20 }

// Add properties
const extended = { ...obj1, e: 5 };
console.log(extended); // { a: 1, b: 2, e: 5 }

// ============================================
// REST PARAMETERS
// ============================================
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// Rest must be last parameter
function greet(greeting, ...names) {
    return `${greeting}, ${names.join(", ")}!`;
}

console.log(greet("Hello", "John", "Jane", "Bob")); // "Hello, John, Jane, Bob!"

// ============================================
// REST IN DESTRUCTURING
// ============================================
const [first, ...rest] = [1, 2, 3, 4, 5];
console.log(first); // 1
console.log(rest); // [2, 3, 4, 5]

const { name, ...other } = { name: "John", age: 30, city: "NY" };
console.log(name); // "John"
console.log(other); // { age: 30, city: "NY" }

// ============================================
// SPREAD IN FUNCTION CALLS
// ============================================
function multiply(a, b, c) {
    return a * b * c;
}

const numbers = [2, 3, 4];
console.log(multiply(...numbers)); // 24

// Math.max with spread
const max = Math.max(...[1, 5, 3, 9, 2]);
console.log(max); // 9

// ============================================
// SPREAD WITH STRINGS
// ============================================
const str = "Hello";
const chars = [...str];
console.log(chars); // ["H", "e", "l", "l", "o"]

// ============================================
// SPREAD WITH SETS AND MAPS
// ============================================
const set = new Set([1, 2, 3]);
const arrayFromSet = [...set];
console.log(arrayFromSet); // [1, 2, 3]

const map = new Map([["a", 1], ["b", 2]]);
const arrayFromMap = [...map];
console.log(arrayFromMap); // [["a", 1], ["b", 2]]

// ============================================
// COMMON PATTERNS
// ============================================

// Clone object with nested objects (shallow copy)
const original = { a: 1, b: { c: 2 } };
const cloned = { ...original };
cloned.b.c = 3;
console.log(original.b.c); // 3 (shallow copy!)

// Deep clone (for simple objects)
const deepClone = JSON.parse(JSON.stringify(original));

// Default values with spread
const defaults = { theme: "light", lang: "en" };
const userPrefs = { theme: "dark" };
const final = { ...defaults, ...userPrefs };
console.log(final); // { theme: "dark", lang: "en" }

// Remove property
const { password, ...userWithoutPassword } = {
    name: "John",
    email: "john@example.com",
    password: "secret"
};
console.log(userWithoutPassword); // { name: "John", email: "john@example.com" }

// ============================================
// SPREAD VS REST
// ============================================
// Spread: expands
const arr = [1, 2, 3];
console.log(...arr); // 1 2 3 (expanded)

// Rest: collects
function collect(...args) {
    return args; // [1, 2, 3] (collected)
}

