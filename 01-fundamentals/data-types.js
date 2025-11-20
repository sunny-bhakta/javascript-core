/**
 * DATA TYPES IN JAVASCRIPT
 * 
 * JavaScript has two main categories of data types:
 * 1. Primitive Types (immutable)
 * 2. Reference Types (mutable objects)
 */

// ============================================
// PRIMITIVE TYPES
// ============================================

// 1. String
const firstName = "John";
const lastName = 'Doe';
const fullName = `John Doe`; // Template literal
const message = `Hello, ${firstName}!`; // String interpolation

// 2. Number
const integer = 42;
const float = 3.14;
const negative = -10;
const scientific = 1e6; // 1000000
const infinity = Infinity;
const notANumber = NaN;

// 3. Boolean
const isActive = true;
const isComplete = false;

// 4. Undefined
let undefinedVar;
console.log(undefinedVar); // undefined

// 5. Null
const emptyValue = null;

// 6. Symbol (ES6)
const uniqueId = Symbol('id');
const anotherId = Symbol('id');
console.log(uniqueId === anotherId); // false - each Symbol is unique

// 7. BigInt (ES2020)
const bigNumber = 9007199254740991n;
const anotherBig = BigInt(9007199254740991);

// ============================================
// REFERENCE TYPES (Objects)
// ============================================

// 1. Object
const person = {
    name: "John",
    age: 30,
    isActive: true
};

// 2. Array
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "two", true, null];

// 3. Function
function greet() {
    return "Hello!";
}

// 4. Date
const today = new Date();

// 5. RegExp
const pattern = /hello/gi;

// ============================================
// TYPE CHECKING
// ============================================

// typeof operator
console.log(typeof "hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (bug in JavaScript)
console.log(typeof Symbol()); // "symbol"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function() {}); // "function"

// instanceof operator
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log(new Date() instanceof Date); // true

// Array.isArray()
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

// ============================================
// TYPE CONVERSION
// ============================================

// Explicit Conversion
const numStr = "42";
const num = Number(numStr); // 42
const str = String(42); // "42"
const bool = Boolean(1); // true

// parseInt and parseFloat
const int = parseInt("42px"); // 42
const float = parseFloat("3.14"); // 3.14

// Implicit Conversion (Type Coercion)
console.log("5" + 3); // "53" (string concatenation)
console.log("5" - 3); // 2 (number subtraction)
console.log("5" * 3); // 15 (number multiplication)
console.log(true + 1); // 2 (true converts to 1)
console.log(false + 1); // 1 (false converts to 0)

// ============================================
// TRUTHY AND FALSY VALUES
// ============================================

// Falsy values (convert to false)
// false, 0, -0, 0n, "", null, undefined, NaN

if (0) console.log("won't print");
if ("") console.log("won't print");
if (null) console.log("won't print");
if (undefined) console.log("won't print");
if (NaN) console.log("won't print");

// Truthy values (everything else)
if (1) console.log("will print");
if ("hello") console.log("will print");
if ([]) console.log("will print");
if ({}) console.log("will print");

// ============================================
// PRIMITIVE VS REFERENCE
// ============================================

// Primitive - copied by value
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (unchanged)

// Reference - copied by reference
let obj1 = { value: 10 };
let obj2 = obj1;
obj2.value = 20;
console.log(obj1.value); // 20 (changed!)

// Creating independent copy
let obj3 = { ...obj1 }; // Spread operator
obj3.value = 30;
console.log(obj1.value); // 20 (unchanged)

