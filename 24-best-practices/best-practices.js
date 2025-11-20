/**
 * BEST PRACTICES IN JAVASCRIPT
 * 
 * Guidelines for writing clean, maintainable JavaScript:
 * - Code Style
 * - Naming Conventions
 * - Code Organization
 * - Error Handling
 * - Performance
 * - Security
 */

// ============================================
// CODE STYLE
// ============================================

// 1. Use const by default, let when needed
const PI = 3.14159; // Constant value
let counter = 0; // Needs reassignment
// Avoid var

// 2. Use meaningful variable names
const userName = "John"; // Good
const u = "John"; // Bad

// 3. Use camelCase for variables and functions
const firstName = "John";
function getUserName() {
    return firstName;
}

// 4. Use PascalCase for classes
class UserAccount {
    constructor(name) {
        this.name = name;
    }
}

// 5. Use UPPER_SNAKE_CASE for constants
const API_BASE_URL = "https://api.example.com";
const MAX_RETRY_ATTEMPTS = 3;

// 6. Use descriptive function names
function calculateTotalPrice(items) { // Good
    return items.reduce((sum, item) => sum + item.price, 0);
}

function calc(items) { // Bad
    return items.reduce((sum, item) => sum + item.price, 0);
}

// ============================================
// CODE ORGANIZATION
// ============================================

// 1. Group related code
class UserService {
    // User-related methods together
    getUser(id) { }
    createUser(user) { }
    updateUser(id, user) { }
    deleteUser(id) { }
}

// 2. Use modules
// user.js
export class User {
    constructor(name) {
        this.name = name;
    }
}

// 3. Separate concerns
// data.js - Data access
function fetchUsers() { }

// utils.js - Utility functions
function formatDate(date) { }

// 4. Use consistent file structure
/*
src/
  components/
  services/
  utils/
  constants/
*/

// ============================================
// FUNCTION BEST PRACTICES
// ============================================

// 1. Keep functions small and focused
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 2. Use pure functions when possible
function add(a, b) {
    return a + b; // Pure - no side effects
}

// 3. Avoid side effects
let counter = 0;
function impureAdd(a) {
    counter++; // Side effect
    return a + counter;
}

// 4. Use default parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// 5. Use rest parameters for flexibility
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

// 6. Return early
function processUser(user) {
    if (!user) return null;
    if (!user.isActive) return null;
    
    // Main logic
    return user;
}

// ============================================
// ERROR HANDLING
// ============================================

// 1. Always handle errors
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Fetch error:", error);
        throw error; // Re-throw if needed
    }
}

// 2. Use specific error types
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

// 3. Don't ignore errors
try {
    riskyOperation();
} catch (error) {
    // BAD: Ignoring error
    // Good: Handle appropriately
    console.error("Operation failed:", error);
    // Or throw, or return default value
}

// 4. Validate input
function divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Arguments must be numbers");
    }
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

// ============================================
// ASYNC BEST PRACTICES
// ============================================

// 1. Use async/await for cleaner code
async function getUserData(userId) {
    const user = await fetchUser(userId);
    const posts = await fetchPosts(userId);
    return { user, posts };
}

// 2. Handle errors in async functions
async function safeAsyncOperation() {
    try {
        return await riskyOperation();
    } catch (error) {
        console.error("Error:", error);
        return null; // Or throw
    }
}

// 3. Use Promise.all for parallel operations
async function loadData() {
    const [users, posts, comments] = await Promise.all([
        fetchUsers(),
        fetchPosts(),
        fetchComments()
    ]);
    return { users, posts, comments };
}

// 4. Don't forget await
async function process() {
    const result = await asyncOperation(); // Don't forget await!
    return result;
}

// ============================================
// PERFORMANCE BEST PRACTICES
// ============================================

// 1. Cache expensive operations
const cache = new Map();
function expensiveOperation(input) {
    if (cache.has(input)) {
        return cache.get(input);
    }
    const result = /* expensive calculation */;
    cache.set(input, result);
    return result;
}

// 2. Use appropriate data structures
// Map for frequent additions/deletions
const map = new Map();
map.set("key", "value");

// Set for unique values
const set = new Set([1, 2, 3]);

// 3. Avoid premature optimization
// Profile first, then optimize

// 4. Debounce/throttle event handlers
const debouncedSearch = debounce((query) => {
    search(query);
}, 300);

// 5. Lazy load resources
const module = await import("./heavy-module.js");

// ============================================
// SECURITY BEST PRACTICES
// ============================================

// 1. Never trust user input
function sanitizeInput(input) {
    // Remove dangerous characters
    return input.replace(/[<>]/g, "");
}

// 2. Use parameterized queries (concept)
// Don't concatenate user input into queries
// Use prepared statements or parameterized queries

// 3. Validate and sanitize
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 4. Use HTTPS
// Always use HTTPS in production

// 5. Don't expose sensitive data
// Don't log passwords, tokens, etc.
function login(username, password) {
    // Don't: console.log(password);
    // Do: authenticate securely
}

// 6. Use Content Security Policy
// Prevent XSS attacks

// ============================================
// CODE QUALITY
// ============================================

// 1. Use ESLint
// Catch errors and enforce style

// 2. Use Prettier
// Consistent code formatting

// 3. Write tests
function add(a, b) {
    return a + b;
}

// test("add function", () => {
//     expect(add(2, 3)).toBe(5);
// });

// 4. Document complex code
/**
 * Calculates the total price including tax
 * @param {number} price - Base price
 * @param {number} taxRate - Tax rate (0-1)
 * @returns {number} Total price with tax
 */
function calculateTotal(price, taxRate) {
    return price * (1 + taxRate);
}

// 5. Use TypeScript or JSDoc for types
/**
 * @param {string} name
 * @param {number} age
 * @returns {Object}
 */
function createUser(name, age) {
    return { name, age };
}

// ============================================
// COMMON MISTAKES TO AVOID
// ============================================

// 1. Using == instead of ===
if (value === 5) { } // Good
if (value == 5) { } // Bad (allows type coercion)

// 2. Not handling errors
// Always handle potential errors

// 3. Mutating function parameters
function processArray(arr) {
    // arr.push(item); // Bad - mutates input
    return [...arr, item]; // Good - returns new array
}

// 4. Not using const/let
// Always use const or let, never var

// 5. Forgetting return statement
function add(a, b) {
    a + b; // Bad - no return
    return a + b; // Good
}

// 6. Not cleaning up
// Remove event listeners, clear intervals
function setup() {
    const interval = setInterval(() => {}, 1000);
    // Remember to clearInterval(interval);
}

// ============================================
// CODE REVIEW CHECKLIST
// ============================================

/*
✓ Code follows style guide
✓ Meaningful variable names
✓ Functions are small and focused
✓ Error handling is present
✓ No console.logs in production
✓ No commented-out code
✓ Tests are written
✓ Documentation is clear
✓ Performance is considered
✓ Security is considered
*/

