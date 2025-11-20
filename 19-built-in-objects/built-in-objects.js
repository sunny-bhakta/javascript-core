/**
 * BUILT-IN OBJECTS & METHODS IN JAVASCRIPT
 * 
 * JavaScript provides many built-in objects and methods:
 * - Math
 * - Date
 * - JSON
 * - Number
 * - String
 * - Array
 * - Object
 */

// ============================================
// MATH OBJECT
// ============================================

// Constants
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.LN2); // 0.6931471805599453

// Rounding methods
console.log(Math.round(4.7)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.ceil(4.2)); // 5
console.log(Math.trunc(4.7)); // 4

// Min/Max
console.log(Math.max(1, 2, 3, 4, 5)); // 5
console.log(Math.min(1, 2, 3, 4, 5)); // 1

// With array
const numbers = [1, 2, 3, 4, 5];
console.log(Math.max(...numbers)); // 5

// Power and roots
console.log(Math.pow(2, 3)); // 8
console.log(2 ** 3); // 8 (ES2016)
console.log(Math.sqrt(16)); // 4
console.log(Math.cbrt(8)); // 2

// Random
console.log(Math.random()); // 0 to 1 (exclusive)
console.log(Math.floor(Math.random() * 10)); // 0 to 9

// Trigonometric
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0)); // 1
console.log(Math.tan(Math.PI / 4)); // ~1

// Logarithmic
console.log(Math.log(Math.E)); // 1
console.log(Math.log10(100)); // 2
console.log(Math.log2(8)); // 3

// Absolute value
console.log(Math.abs(-5)); // 5

// Sign
console.log(Math.sign(-5)); // -1
console.log(Math.sign(5)); // 1
console.log(Math.sign(0)); // 0

// ============================================
// DATE OBJECT
// ============================================

// Create dates
const now = new Date();
const specific = new Date(2023, 11, 25); // Month is 0-indexed
const fromString = new Date("2023-12-25");
const fromTimestamp = new Date(1703520000000);

// Get methods
console.log(now.getFullYear()); // 2023
console.log(now.getMonth()); // 0-11
console.log(now.getDate()); // 1-31
console.log(now.getDay()); // 0-6 (Sunday = 0)
console.log(now.getHours()); // 0-23
console.log(now.getMinutes()); // 0-59
console.log(now.getSeconds()); // 0-59
console.log(now.getMilliseconds()); // 0-999
console.log(now.getTime()); // Timestamp

// Set methods
const date = new Date();
date.setFullYear(2024);
date.setMonth(0); // January
date.setDate(1);
date.setHours(12);
date.setMinutes(30);

// UTC methods
console.log(now.getUTCFullYear());
console.log(now.getUTCHours());

// Formatting
console.log(now.toString()); // Full string
console.log(now.toDateString()); // Date only
console.log(now.toTimeString()); // Time only
console.log(now.toISOString()); // ISO format
console.log(now.toLocaleString()); // Local format
console.log(now.toLocaleDateString()); // Local date
console.log(now.toLocaleTimeString()); // Local time

// Static methods
console.log(Date.now()); // Current timestamp
console.log(Date.parse("2023-12-25")); // Parse string

// Date arithmetic
const date1 = new Date("2023-01-01");
const date2 = new Date("2023-12-31");
const diff = date2 - date1; // Milliseconds
const days = diff / (1000 * 60 * 60 * 24); // Days

// ============================================
// JSON OBJECT
// ============================================

const obj = {
    name: "John",
    age: 30,
    city: "New York",
    hobbies: ["reading", "coding"]
};

// stringify - Convert to JSON string
const jsonString = JSON.stringify(obj);
console.log(jsonString);
// {"name":"John","age":30,"city":"New York","hobbies":["reading","coding"]}

// With replacer function
const filtered = JSON.stringify(obj, (key, value) => {
    if (key === "age") return undefined; // Exclude age
    return value;
});

// With space (pretty print)
const pretty = JSON.stringify(obj, null, 2);

// parse - Convert JSON string to object
const parsed = JSON.parse(jsonString);
console.log(parsed.name); // "John"

// With reviver function
const withReviver = JSON.parse(jsonString, (key, value) => {
    if (key === "age") return value * 2; // Transform age
    return value;
});

// ============================================
// NUMBER OBJECT
// ============================================

// Constants
console.log(Number.MAX_VALUE); // Largest number
console.log(Number.MIN_VALUE); // Smallest positive number
console.log(Number.MAX_SAFE_INTEGER); // 2^53 - 1
console.log(Number.MIN_SAFE_INTEGER); // -(2^53 - 1)
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN); // NaN
console.log(Number.EPSILON); // Smallest difference

// Static methods
console.log(Number.isFinite(10)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // true
console.log(Number.parseFloat("10.5")); // 10.5
console.log(Number.parseInt("10.5")); // 10
console.log(Number.parseInt("10.5", 10)); // 10 (base 10)

// Instance methods
const num = 123.456;
console.log(num.toFixed(2)); // "123.46"
console.log(num.toPrecision(4)); // "123.5"
console.log(num.toExponential(2)); // "1.23e+2"
console.log(num.toString()); // "123.456"
console.log(num.toString(2)); // Binary: "1111011.01110101..."
console.log(num.toString(16)); // Hexadecimal: "7b.74bc6a7ef9db..."

// ============================================
// STRING OBJECT (Additional Methods)
// ============================================

const str = "Hello World";

// Search
console.log(str.indexOf("o")); // 4
console.log(str.lastIndexOf("o")); // 7
console.log(str.search(/World/)); // 6
console.log(str.match(/l/g)); // ["l", "l", "l"]
console.log(str.includes("World")); // true
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("World")); // true

// Extract
console.log(str.slice(0, 5)); // "Hello"
console.log(str.substring(0, 5)); // "Hello"
console.log(str.substr(0, 5)); // "Hello" (deprecated)

// Modify
console.log(str.replace("World", "Universe")); // "Hello Universe"
console.log(str.replaceAll("l", "L")); // "HeLLo WorLd"
console.log(str.toUpperCase()); // "HELLO WORLD"
console.log(str.toLowerCase()); // "hello world"
console.log(str.trim()); // Remove whitespace
console.log(str.trimStart()); // Remove start whitespace
console.log(str.trimEnd()); // Remove end whitespace

// Split and join
console.log(str.split(" ")); // ["Hello", "World"]
console.log(str.split("")); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]

// Padding
console.log("5".padStart(3, "0")); // "005"
console.log("5".padEnd(3, "0")); // "500"

// Repeat
console.log("ha".repeat(3)); // "hahaha"

// Character access
console.log(str.charAt(0)); // "H"
console.log(str.charCodeAt(0)); // 72
console.log(str.codePointAt(0)); // 72

// ============================================
// ARRAY OBJECT (Static Methods)
// ============================================

// Array.from - Create from array-like
const arrayLike = { length: 3, 0: "a", 1: "b", 2: "c" };
const arr1 = Array.from(arrayLike); // ["a", "b", "c"]
const arr2 = Array.from("hello"); // ["h", "e", "l", "l", "o"]
const arr3 = Array.from({ length: 5 }, (_, i) => i * 2); // [0, 2, 4, 6, 8]

// Array.of - Create from arguments
const arr4 = Array.of(1, 2, 3); // [1, 2, 3]
const arr5 = Array.of(7); // [7] (not array of length 7)

// Array.isArray - Check if array
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("not array")); // false

// ============================================
// OBJECT METHODS
// ============================================

const obj = { a: 1, b: 2, c: 3 };

// Object.keys - Get keys
console.log(Object.keys(obj)); // ["a", "b", "c"]

// Object.values - Get values
console.log(Object.values(obj)); // [1, 2, 3]

// Object.entries - Get [key, value] pairs
console.log(Object.entries(obj)); // [["a", 1], ["b", 2], ["c", 3]]

// Object.assign - Copy properties
const target = {};
const source = { a: 1, b: 2 };
Object.assign(target, source); // { a: 1, b: 2 }

// Object.create - Create with prototype
const proto = { greet: () => "Hello" };
const newObj = Object.create(proto);
console.log(newObj.greet()); // "Hello"

// Object.freeze - Prevent modifications
const frozen = Object.freeze({ x: 1 });
// frozen.x = 2; // Error in strict mode

// Object.seal - Prevent add/delete
const sealed = Object.seal({ x: 1 });
sealed.x = 2; // OK
// sealed.y = 3; // Error

// Object.getPrototypeOf
console.log(Object.getPrototypeOf(obj)); // Object.prototype

// Object.hasOwnProperty
console.log(obj.hasOwnProperty("a")); // true
console.log(obj.hasOwnProperty("toString")); // false (inherited)

// Object.fromEntries - Create from entries
const entries = [["a", 1], ["b", 2]];
const obj2 = Object.fromEntries(entries); // { a: 1, b: 2 }

// ============================================
// GLOBAL OBJECTS
// ============================================

// console
console.log("Log");
console.error("Error");
console.warn("Warning");
console.info("Info");
console.table({ a: 1, b: 2 });
console.time("timer");
console.timeEnd("timer");

// setTimeout / setInterval
const timeout = setTimeout(() => console.log("Delayed"), 1000);
clearTimeout(timeout);

const interval = setInterval(() => console.log("Repeating"), 1000);
clearInterval(interval);

// encodeURI / decodeURI
const encoded = encodeURI("https://example.com/path?name=John Doe");
const decoded = decodeURI(encoded);

// encodeURIComponent / decodeURIComponent
const encodedComp = encodeURIComponent("John Doe");
const decodedComp = decodeURIComponent(encodedComp);

// isNaN / isFinite
console.log(isNaN("not a number")); // true
console.log(isFinite(10)); // true
console.log(isFinite(Infinity)); // false

