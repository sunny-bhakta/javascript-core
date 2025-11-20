/**
 * REGULAR EXPRESSIONS IN JAVASCRIPT
 * 
 * Regular expressions are patterns used to match character combinations in strings.
 */

// ============================================
// CREATING REGEX
// ============================================
// Literal syntax
const regex1 = /pattern/;

// Constructor
const regex2 = new RegExp("pattern");

// With flags
const regex3 = /pattern/gi; // global, case-insensitive
const regex4 = new RegExp("pattern", "gi");

// ============================================
// BASIC PATTERNS
// ============================================
const text = "Hello World";

// Exact match
/Hello/.test(text); // true

// Case insensitive
/hello/i.test(text); // true

// Global search
const matches = text.match(/l/g); // ["l", "l", "l"]

// ============================================
// CHARACTER CLASSES
// ============================================
// [abc] - Matches any character in brackets
/[aeiou]/.test("hello"); // true

// [^abc] - Matches any character NOT in brackets
/[^aeiou]/.test("hello"); // true

// [a-z] - Character range
/[a-z]/.test("hello"); // true

// [0-9] - Digit range
/[0-9]/.test("hello123"); // true

// \d - Digit (same as [0-9])
/\d/.test("hello123"); // true

// \w - Word character (alphanumeric + underscore)
/\w/.test("hello"); // true

// \s - Whitespace
/\s/.test("hello world"); // true

// . - Any character except newline
/./.test("a"); // true

// ============================================
// QUANTIFIERS
// ============================================
// * - Zero or more
/ab*/.test("a"); // true
/ab*/.test("abbb"); // true

// + - One or more
/ab+/.test("ab"); // true
/ab+/.test("a"); // false

// ? - Zero or one (optional)
/ab?/.test("a"); // true
/ab?/.test("ab"); // true

// {n} - Exactly n times
/a{3}/.test("aaa"); // true

// {n,} - n or more times
/a{3,}/.test("aaaa"); // true

// {n,m} - Between n and m times
/a{2,4}/.test("aaa"); // true

// ============================================
// ANCHORS
// ============================================
// ^ - Start of string
/^Hello/.test("Hello World"); // true

// $ - End of string
/World$/.test("Hello World"); // true

// \b - Word boundary
/\bworld\b/.test("hello world"); // true

// ============================================
// GROUPS AND CAPTURES
// ============================================
const text2 = "John Doe";

// Capturing group
const match = text2.match(/(\w+)\s(\w+)/);
console.log(match[0]); // "John Doe" (full match)
console.log(match[1]); // "John" (first group)
console.log(match[2]); // "Doe" (second group)

// Non-capturing group
/(?:John|Jane)\sDoe/.test("John Doe"); // true

// Named groups (ES2018)
const namedMatch = "John Doe".match(/(?<first>\w+)\s(?<last>\w+)/);
console.log(namedMatch.groups.first); // "John"
console.log(namedMatch.groups.last); // "Doe"

// ============================================
// ALTERNATION
// ============================================
// | - OR operator
/cat|dog/.test("I have a cat"); // true
/cat|dog/.test("I have a dog"); // true

// ============================================
// LOOKAHEAD AND LOOKBEHIND
// ============================================
// Positive lookahead (?=...)
/hello(?=\sworld)/.test("hello world"); // true

// Negative lookahead (?!...)
/hello(?!\sworld)/.test("hello there"); // true

// Positive lookbehind (?<=...)
/(?<=hello\s)world/.test("hello world"); // true

// Negative lookbehind (?<!...)
/(?<!hello\s)world/.test("hi world"); // true

// ============================================
// REGEX METHODS
// ============================================
const text3 = "Hello World";

// test() - Returns true/false
/World/.test(text3); // true

// exec() - Returns match or null
/World/.exec(text3); // ["World", index: 6, input: "Hello World"]

// match() - String method, returns matches
text3.match(/l/g); // ["l", "l", "l"]

// matchAll() - Returns all matches with groups
const matches = [...text3.matchAll(/l/g)];

// search() - Returns index or -1
text3.search(/World/); // 6

// replace() - Replace matches
text3.replace(/World/, "Universe"); // "Hello Universe"

// replaceAll() - Replace all matches
"hello hello".replaceAll(/hello/g, "hi"); // "hi hi"

// split() - Split by pattern
"a,b,c".split(/,/); // ["a", "b", "c"]

// ============================================
// FLAGS
// ============================================
// g - Global (find all matches)
"hello".match(/l/g); // ["l", "l"]

// i - Case insensitive
/HELLO/i.test("hello"); // true

// m - Multiline (^ and $ match line breaks)
/^hello/m.test("hello\nworld"); // true

// s - Dotall (. matches newline)
/hello.world/s.test("hello\nworld"); // true

// u - Unicode
/\u{1F600}/u.test("😀"); // true

// y - Sticky (matches from lastIndex)
const regex = /hello/y;
regex.lastIndex = 0;
regex.test("hello world"); // true

// ============================================
// COMMON PATTERNS
// ============================================

// Email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
emailRegex.test("user@example.com"); // true

// Phone number
const phoneRegex = /^\+?[\d\s-()]+$/;
phoneRegex.test("+1-555-123-4567"); // true

// URL
const urlRegex = /^https?:\/\/.+/;
urlRegex.test("https://example.com"); // true

// Password (8+ chars, letter, number)
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
passwordRegex.test("password123"); // true

// Date (YYYY-MM-DD)
const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
dateRegex.test("2023-12-25"); // true

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Extract numbers
const numbers = "Price: $123.45".match(/\d+\.?\d*/g);
console.log(numbers); // ["123.45"]

// Extract words
const words = "Hello World".match(/\w+/g);
console.log(words); // ["Hello", "World"]

// Validate format
function validateFormat(input, pattern) {
    return pattern.test(input);
}

const isValidEmail = validateFormat("user@example.com", emailRegex);

// Replace with function
"hello world".replace(/\w+/g, (match) => {
    return match.toUpperCase();
}); // "HELLO WORLD"

