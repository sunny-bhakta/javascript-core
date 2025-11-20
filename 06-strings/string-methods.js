/**
 * STRING METHODS IN JAVASCRIPT
 * 
 * Strings are immutable - methods return new strings.
 */

// ============================================
// STRING CREATION
// ============================================
const str1 = "Hello";
const str2 = 'World';
const str3 = `Template Literal`;

// String constructor
const str4 = new String("Hello");
console.log(typeof str4); // "object"

// ============================================
// TEMPLATE LITERALS (ES6)
// ============================================
const name = "John";
const age = 30;

// String interpolation
const greeting = `Hello, ${name}! You are ${age} years old.`;
console.log(greeting); // "Hello, John! You are 30 years old."

// Multiline strings
const multiline = `This is
a multiline
string`;

// Expressions
const calculation = `2 + 2 = ${2 + 2}`;
console.log(calculation); // "2 + 2 = 4"

// Tagged templates
function tag(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return result + str + (values[i] || '');
    }, '');
}

const result = tag`Hello ${name}, you are ${age}`;

// ============================================
// STRING LENGTH
// ============================================
const text = "Hello";
console.log(text.length); // 5

// ============================================
// ACCESSING CHARACTERS
// ============================================
const str = "Hello";

// charAt()
console.log(str.charAt(0)); // "H"
console.log(str.charAt(10)); // "" (empty string)

// Bracket notation
console.log(str[0]); // "H"
console.log(str[10]); // undefined

// charCodeAt() - Get character code
console.log(str.charCodeAt(0)); // 72 (H)

// ============================================
// SEARCHING METHODS
// ============================================
const sentence = "Hello World";

// indexOf() - Find first occurrence
console.log(sentence.indexOf("o")); // 4
console.log(sentence.indexOf("o", 5)); // 7 (start from index 5)
console.log(sentence.indexOf("xyz")); // -1 (not found)

// lastIndexOf() - Find last occurrence
console.log(sentence.lastIndexOf("o")); // 7

// includes() - Check if contains
console.log(sentence.includes("World")); // true
console.log(sentence.includes("world")); // false (case-sensitive)

// startsWith() - Check if starts with
console.log(sentence.startsWith("Hello")); // true
console.log(sentence.startsWith("Hello", 0)); // true

// endsWith() - Check if ends with
console.log(sentence.endsWith("World")); // true
console.log(sentence.endsWith("Hello", 5)); // true (check first 5 chars)

// search() - Search with regex
console.log(sentence.search(/world/i)); // 6 (case-insensitive)
console.log(sentence.search("xyz")); // -1

// match() - Match regex
const matches = sentence.match(/l/g);
console.log(matches); // ["l", "l", "l"]

// matchAll() - All matches
const allMatches = [...sentence.matchAll(/l/g)];
console.log(allMatches);

// ============================================
// EXTRACTING SUBSTRINGS
// ============================================
const str5 = "Hello World";

// substring() - Extract substring
console.log(str5.substring(0, 5)); // "Hello"
console.log(str5.substring(6)); // "World"
console.log(str5.substring(5, 0)); // "Hello" (swaps if start > end)

// slice() - Extract substring (can use negative)
console.log(str5.slice(0, 5)); // "Hello"
console.log(str5.slice(-5)); // "World" (last 5 chars)
console.log(str5.slice(6)); // "World"

// substr() - Deprecated, use slice() instead

// ============================================
// MODIFYING STRINGS
// ============================================
const str6 = "  Hello World  ";

// toUpperCase()
console.log(str6.toUpperCase()); // "  HELLO WORLD  "

// toLowerCase()
console.log(str6.toLowerCase()); // "  hello world  "

// trim() - Remove whitespace from ends
console.log(str6.trim()); // "Hello World"

// trimStart() / trimLeft()
console.log(str6.trimStart()); // "Hello World  "

// trimEnd() / trimRight()
console.log(str6.trimEnd()); // "  Hello World"

// ============================================
// REPLACING
// ============================================
const str7 = "Hello World World";

// replace() - Replace first occurrence
console.log(str7.replace("World", "Universe")); // "Hello Universe World"

// replace() with regex
console.log(str7.replace(/World/g, "Universe")); // "Hello Universe Universe"

// replaceAll() - Replace all occurrences
console.log(str7.replaceAll("World", "Universe")); // "Hello Universe Universe"

// ============================================
// SPLITTING AND JOINING
// ============================================
const str8 = "apple,banana,orange";

// split() - Split into array
const fruits = str8.split(",");
console.log(fruits); // ["apple", "banana", "orange"]

const str9 = "Hello World";
console.log(str9.split("")); // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]
console.log(str9.split(" ", 1)); // ["Hello"] (limit)

// join() - Join array into string (Array method)
const arr = ["apple", "banana", "orange"];
console.log(arr.join(", ")); // "apple, banana, orange"

// ============================================
// PADDING
// ============================================
const str10 = "5";

// padStart() - Pad at start
console.log(str10.padStart(3, "0")); // "005"

// padEnd() - Pad at end
console.log(str10.padEnd(3, "0")); // "500"

// ============================================
// REPEATING
// ============================================
const str11 = "Hello";

// repeat() - Repeat string
console.log(str11.repeat(3)); // "HelloHelloHello"

// ============================================
// UNICODE METHODS
// ============================================
const str12 = "Hello";

// codePointAt() - Get code point
console.log(str12.codePointAt(0)); // 72

// fromCharCode() - Create from code (String method)
console.log(String.fromCharCode(72)); // "H"

// fromCodePoint() - Create from code point
console.log(String.fromCodePoint(72)); // "H"

// ============================================
// LOCALE METHODS
// ============================================
const str13 = "hello world";

// toLocaleUpperCase()
console.log(str13.toLocaleUpperCase()); // "HELLO WORLD"

// toLocaleLowerCase()
console.log(str13.toLocaleLowerCase()); // "hello world"

// localeCompare() - Compare strings
console.log("a".localeCompare("b")); // -1 (a comes before b)
console.log("b".localeCompare("a")); // 1 (b comes after a)
console.log("a".localeCompare("a")); // 0 (equal)

// ============================================
// STRING CONVERSION
// ============================================
const num = 42;

// String() constructor
console.log(String(num)); // "42"

// toString()
console.log(num.toString()); // "42"

// Template literal
console.log(`${num}`); // "42"

// ============================================
// COMMON PATTERNS
// ============================================

// Check if string is empty
function isEmpty(str) {
    return !str || str.trim().length === 0;
}

// Capitalize first letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// Reverse string
function reverse(str) {
    return str.split("").reverse().join("");
}

// Count occurrences
function countOccurrences(str, substring) {
    return (str.match(new RegExp(substring, "g")) || []).length;
}

// Remove duplicates
function removeDuplicates(str) {
    return [...new Set(str.split(""))].join("");
}

// Check palindrome
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}

// ============================================
// RAW STRINGS (Tagged Templates)
// ============================================
function raw(strings, ...values) {
    return strings.raw[0];
}

const path = String.raw`C:\Users\John\Documents`;
console.log(path); // "C:\Users\John\Documents" (backslashes preserved)

