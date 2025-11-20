/**
 * OPERATORS IN JAVASCRIPT
 * 
 * JavaScript has various types of operators:
 * 1. Arithmetic Operators
 * 2. Assignment Operators
 * 3. Comparison Operators
 * 4. Logical Operators
 * 5. Bitwise Operators
 * 6. Ternary Operator
 * 7. Type Operators
 */

// ============================================
// ARITHMETIC OPERATORS
// ============================================
let a = 10;
let b = 3;

console.log(a + b); // 13 (Addition)
console.log(a - b); // 7 (Subtraction)
console.log(a * b); // 30 (Multiplication)
console.log(a / b); // 3.333... (Division)
console.log(a % b); // 1 (Modulus/Remainder)
console.log(a ** b); // 1000 (Exponentiation)

// Increment and Decrement
let count = 5;
count++; // Post-increment: returns 5, then increments to 6
++count; // Pre-increment: increments to 7, then returns 7
count--; // Post-decrement: returns 7, then decrements to 6
--count; // Pre-decrement: decrements to 5, then returns 5

// ============================================
// ASSIGNMENT OPERATORS
// ============================================
let x = 10; // Basic assignment

x += 5; // x = x + 5 (15)
x -= 3; // x = x - 3 (12)
x *= 2; // x = x * 2 (24)
x /= 4; // x = x / 4 (6)
x %= 4; // x = x % 4 (2)
x **= 3; // x = x ** 3 (8)

// ============================================
// COMPARISON OPERATORS
// ============================================
let num1 = 5;
let num2 = "5";
let num3 = 10;

// Equality (loose equality - type coercion)
console.log(num1 == num2); // true (coerces types)
console.log(num1 != num2); // false

// Strict Equality (no type coercion)
console.log(num1 === num2); // false (different types)
console.log(num1 !== num2); // true

// Relational Operators
console.log(num1 < num3); // true
console.log(num1 > num3); // false
console.log(num1 <= num3); // true
console.log(num1 >= num3); // false

// ============================================
// LOGICAL OPERATORS
// ============================================
let isActive = true;
let isAdmin = false;

// AND (&&) - returns first falsy value or last truthy value
console.log(isActive && isAdmin); // false
console.log(true && "hello"); // "hello"
console.log(false && "hello"); // false

// OR (||) - returns first truthy value or last falsy value
console.log(isActive || isAdmin); // true
console.log(true || "hello"); // true
console.log(false || "hello"); // "hello"

// NOT (!) - inverts boolean
console.log(!isActive); // false
console.log(!isAdmin); // true

// Nullish Coalescing (??) - returns right side if left is null/undefined
let value = null ?? "default"; // "default"
let value2 = 0 ?? "default"; // 0 (not null/undefined)

// ============================================
// TERNARY OPERATOR (Conditional Operator)
// ============================================
let age = 20;
let status = age >= 18 ? "adult" : "minor";
console.log(status); // "adult"

// Nested ternary
let grade = 85;
let result = grade >= 90 ? "A" : 
             grade >= 80 ? "B" : 
             grade >= 70 ? "C" : "F";
console.log(result); // "B"

// ============================================
// BITWISE OPERATORS
// ============================================
let x1 = 5;  // 0101 in binary
let y1 = 3;  // 0011 in binary

console.log(x1 & y1); // 1 (AND: 0001)
console.log(x1 | y1); // 7 (OR: 0111)
console.log(x1 ^ y1); // 6 (XOR: 0110)
console.log(~x1); // -6 (NOT: inverts bits)
console.log(x1 << 1); // 10 (Left shift: 1010)
console.log(x1 >> 1); // 2 (Right shift: 0010)
console.log(x1 >>> 1); // 2 (Unsigned right shift)

// ============================================
// TYPE OPERATORS
// ============================================
console.log(typeof "hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"

let arr = [1, 2, 3];
console.log(arr instanceof Array); // true
console.log(arr instanceof Object); // true

// ============================================
// STRING OPERATORS
// ============================================
let str1 = "Hello";
let str2 = "World";
console.log(str1 + " " + str2); // "Hello World"

// Template literals
let name = "John";
let greeting = `Hello, ${name}!`; // "Hello, John!"

// ============================================
// OPTIONAL CHAINING (?.) - ES2020
// ============================================
const user = {
    name: "John",
    address: {
        city: "New York"
    }
};

console.log(user?.address?.city); // "New York"
console.log(user?.address?.zipCode); // undefined (no error)
console.log(user?.contact?.phone); // undefined (no error)

// ============================================
// OPERATOR PRECEDENCE
// ============================================
// Operators are evaluated in order of precedence
// Use parentheses to control order

let result1 = 2 + 3 * 4; // 14 (multiplication first)
let result2 = (2 + 3) * 4; // 20 (addition first)

// ============================================
// COMMON PATTERNS
// ============================================

// Short-circuit evaluation
const config = {
    apiUrl: process.env.API_URL || "http://localhost:3000"
};

// Optional chaining with nullish coalescing
const userName = user?.name ?? "Guest";

// Increment in loops
for (let i = 0; i < 10; i++) {
    console.log(i);
}

