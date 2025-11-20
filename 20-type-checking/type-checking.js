/**
 * TYPE CHECKING & VALIDATION IN JAVASCRIPT
 * 
 * JavaScript is dynamically typed, so type checking is important:
 * - typeof operator
 * - instanceof operator
 * - Type checking methods
 * - Type guards
 * - Validation
 */

// ============================================
// TYPEOF OPERATOR
// ============================================

console.log(typeof "hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (bug in JavaScript)
console.log(typeof Symbol()); // "symbol"
console.log(typeof 123n); // "bigint"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function() {}); // "function"
console.log(typeof null); // "object" (not "null"!)

// ============================================
// INSTANCEOF OPERATOR
// ============================================

// Check if object is instance of constructor
console.log([] instanceof Array); // true
console.log([] instanceof Object); // true
console.log({} instanceof Object); // true
console.log({} instanceof Array); // false

// With custom classes
class MyClass {}
const instance = new MyClass();
console.log(instance instanceof MyClass); // true

// With constructor functions
function Person(name) {
    this.name = name;
}
const person = new Person("John");
console.log(person instanceof Person); // true

// ============================================
// ARRAY TYPE CHECKING
// ============================================

// Array.isArray - Best way to check arrays
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false
console.log(Array.isArray("array")); // false

// instanceof Array (works but has issues with iframes)
console.log([] instanceof Array); // true

// Object.prototype.toString
console.log(Object.prototype.toString.call([])); // "[object Array]"
console.log(Object.prototype.toString.call({})); // "[object Object]"

// ============================================
// NULL AND UNDEFINED CHECKING
// ============================================

let value;

// Check for undefined
console.log(value === undefined); // true
console.log(typeof value === "undefined"); // true

// Check for null
const nullValue = null;
console.log(nullValue === null); // true
console.log(nullValue == null); // true (loose equality)

// Check for null or undefined
console.log(value == null); // true (checks both)
console.log(value === null || value === undefined); // true

// Modern check
console.log(value != null); // false (not null and not undefined)

// ============================================
// NUMBER TYPE CHECKING
// ============================================

// typeof check
console.log(typeof 42 === "number"); // true
console.log(typeof NaN === "number"); // true (NaN is number type!)

// Number.isNaN - Best way to check NaN
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN("NaN")); // false
console.log(isNaN("NaN")); // true (global isNaN coerces)

// Number.isFinite - Check if finite number
console.log(Number.isFinite(42)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN)); // false

// Number.isInteger - Check if integer
console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(42.5)); // false

// Number.isSafeInteger - Check if safe integer
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)); // false

// ============================================
// STRING TYPE CHECKING
// ============================================

const str = "hello";

console.log(typeof str === "string"); // true
console.log(str instanceof String); // false (primitive)
console.log(new String("hello") instanceof String); // true (object)

// Check if empty
console.log(str.length === 0); // false
console.log(str.trim().length === 0); // false (after trim)

// ============================================
// OBJECT TYPE CHECKING
// ============================================

const obj = {};

// typeof check
console.log(typeof obj === "object"); // true
console.log(typeof null === "object"); // true (bug!)

// Check if plain object
function isPlainObject(value) {
    return (
        typeof value === "object" &&
        value !== null &&
        Object.prototype.toString.call(value) === "[object Object]"
    );
}

console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
console.log(isPlainObject(null)); // false

// ============================================
// FUNCTION TYPE CHECKING
// ============================================

function myFunction() {}

console.log(typeof myFunction === "function"); // true
console.log(myFunction instanceof Function); // true

// Arrow function
const arrow = () => {};
console.log(typeof arrow === "function"); // true

// ============================================
// TYPE GUARDS
// ============================================

// Type guard functions
function isString(value) {
    return typeof value === "string";
}

function isNumber(value) {
    return typeof value === "number" && !isNaN(value);
}

function isBoolean(value) {
    return typeof value === "boolean";
}

function isArray(value) {
    return Array.isArray(value);
}

function isObject(value) {
    return (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
    );
}

function isFunction(value) {
    return typeof value === "function";
}

function isNull(value) {
    return value === null;
}

function isUndefined(value) {
    return value === undefined;
}

function isNullOrUndefined(value) {
    return value == null; // Checks both null and undefined
}

// ============================================
// VALIDATION FUNCTIONS
// ============================================

// Validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return typeof email === "string" && emailRegex.test(email);
}

console.log(isValidEmail("user@example.com")); // true
console.log(isValidEmail("invalid")); // false

// Validate number in range
function isNumberInRange(value, min, max) {
    return (
        typeof value === "number" &&
        !isNaN(value) &&
        value >= min &&
        value <= max
    );
}

// Validate string length
function isValidLength(str, min, max) {
    return (
        typeof str === "string" &&
        str.length >= min &&
        str.length <= max
    );
}

// Validate object has required properties
function hasRequiredProperties(obj, required) {
    if (!isObject(obj)) return false;
    return required.every(prop => prop in obj);
}

// ============================================
// TYPE COERCION CHECKING
// ============================================

// Strict equality (no coercion)
console.log(5 === "5"); // false
console.log(5 == "5"); // true (coerced)

// Type coercion examples
console.log("5" + 3); // "53" (string concatenation)
console.log("5" - 3); // 2 (number subtraction)
console.log("5" * 3); // 15 (number multiplication)
console.log(true + 1); // 2 (true = 1)
console.log(false + 1); // 1 (false = 0)

// ============================================
// COMPREHENSIVE TYPE CHECKER
// ============================================

function getType(value) {
    if (value === null) return "null";
    if (value === undefined) return "undefined";
    if (Array.isArray(value)) return "array";
    if (value instanceof Date) return "date";
    if (value instanceof RegExp) return "regexp";
    if (typeof value === "object") return "object";
    return typeof value;
}

console.log(getType(null)); // "null"
console.log(getType(undefined)); // "undefined"
console.log(getType([])); // "array"
console.log(getType({})); // "object"
console.log(getType(new Date())); // "date"
console.log(getType(/regex/)); // "regexp"

// ============================================
// VALIDATION SCHEMA
// ============================================

function validate(schema, data) {
    const errors = [];
    
    for (const [key, validator] of Object.entries(schema)) {
        if (!validator(data[key])) {
            errors.push(`Invalid ${key}`);
        }
    }
    
    return {
        valid: errors.length === 0,
        errors
    };
}

const schema = {
    name: (value) => typeof value === "string" && value.length > 0,
    age: (value) => typeof value === "number" && value > 0 && value < 150,
    email: (value) => isValidEmail(value)
};

const userData = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

const result = validate(schema, userData);
console.log(result.valid); // true

// ============================================
// TYPE ASSERTIONS
// ============================================

// Assert type (throw if wrong)
function assertString(value, message = "Expected string") {
    if (typeof value !== "string") {
        throw new TypeError(message);
    }
    return value;
}

function assertNumber(value, message = "Expected number") {
    if (typeof value !== "number" || isNaN(value)) {
        throw new TypeError(message);
    }
    return value;
}

// Usage
try {
    const str = assertString(123); // Throws error
} catch (error) {
    console.error(error.message);
}

