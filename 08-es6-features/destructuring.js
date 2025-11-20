/**
 * DESTRUCTURING IN JAVASCRIPT (ES6)
 * 
 * Destructuring allows extracting values from arrays and objects into variables.
 */

// ============================================
// ARRAY DESTRUCTURING
// ============================================
const arr = [1, 2, 3];

// Basic destructuring
const [a, b, c] = arr;
console.log(a, b, c); // 1, 2, 3

// Skip elements
const [first, , third] = arr;
console.log(first, third); // 1, 3

// Default values
const [x, y, z = 0] = [1, 2];
console.log(x, y, z); // 1, 2, 0

// Rest operator
const [head, ...tail] = arr;
console.log(head); // 1
console.log(tail); // [2, 3]

// Swap variables
let p = 1;
let q = 2;
[p, q] = [q, p];
console.log(p, q); // 2, 1

// Nested destructuring
const nested = [1, [2, 3], 4];
const [n1, [n2, n3], n4] = nested;
console.log(n1, n2, n3, n4); // 1, 2, 3, 4

// ============================================
// OBJECT DESTRUCTURING
// ============================================
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Basic destructuring
const { name, age } = person;
console.log(name, age); // "John" 30

// Renaming variables
const { name: userName, age: userAge } = person;
console.log(userName, userAge); // "John" 30

// Default values
const { name: n, city = "Unknown" } = person;
console.log(n, city); // "John" "New York"

// Nested destructuring
const user = {
    name: "Jane",
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    }
};

const { address: { city: userCity, zip } } = user;
console.log(userCity, zip); // "New York" "10001"

// Rest in destructuring
const { name: n2, ...rest } = person;
console.log(rest); // { age: 30, city: "New York" }

// ============================================
// FUNCTION PARAMETERS DESTRUCTURING
// ============================================
function greet({ name, age }) {
    return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet(person)); // "Hello, John! You are 30 years old."

// With defaults
function greetWithDefaults({ name = "Guest", age = 0 }) {
    return `Hello, ${name}! You are ${age} years old.`;
}

// Array parameters
function sum([a, b, c = 0]) {
    return a + b + c;
}

console.log(sum([1, 2, 3])); // 6

// ============================================
// COMPUTED PROPERTY NAMES
// ============================================
const prop = "name";
const { [prop]: value } = person;
console.log(value); // "John"

// ============================================
// DESTRUCTURING ASSIGNMENT
// ============================================
let x1, y1;
[x1, y1] = [1, 2];
console.log(x1, y1); // 1, 2

let name1, age1;
({ name: name1, age: age1 } = person);
console.log(name1, age1); // "John" 30

// ============================================
// DESTRUCTURING IN LOOPS
// ============================================
const users = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 }
];

for (const { name, age } of users) {
    console.log(`${name} is ${age} years old`);
}

// ============================================
// DESTRUCTURING WITH ITERATORS
// ============================================
const map = new Map([
    ["a", 1],
    ["b", 2]
]);

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// ============================================
// DESTRUCTURING RETURN VALUES
// ============================================
function getCoordinates() {
    return [10, 20];
}

const [x2, y2] = getCoordinates();
console.log(x2, y2); // 10, 20

function getUser() {
    return {
        name: "John",
        age: 30,
        email: "john@example.com"
    };
}

const { name: n3, email } = getUser();
console.log(n3, email); // "John" "john@example.com"

