/**
 * JAVASCRIPT INTERVIEW QUESTIONS & ANSWERS
 * 
 * Comprehensive collection of JavaScript interview questions
 * organized by topic with detailed answers and code examples.
 */

// ============================================
// FUNDAMENTALS
// ============================================

/**
 * Q1: What is the difference between var, let, and const?
 * 
 * Answer:
 * - var: Function-scoped, hoisted, can be redeclared
 * - let: Block-scoped, hoisted but in TDZ, cannot be redeclared
 * - const: Block-scoped, hoisted but in TDZ, cannot be redeclared or reassigned
 */

// Example
function varExample() {
    if (true) {
        var x = 1; // Function-scoped
        let y = 2; // Block-scoped
        const z = 3; // Block-scoped
    }
    console.log(x); // 1 (accessible)
    // console.log(y); // Error - not accessible
    // console.log(z); // Error - not accessible
}

/**
 * Q2: What is the difference between == and ===?
 * 
 * Answer:
 * - == (loose equality): Performs type coercion
 * - === (strict equality): No type coercion, checks type and value
 */

console.log(5 == "5"); // true (coerced)
console.log(5 === "5"); // false (different types)

/**
 * Q3: What are truthy and falsy values?
 * 
 * Answer:
 * Falsy: false, 0, -0, 0n, "", null, undefined, NaN
 * Everything else is truthy
 */

if (0) console.log("won't print");
if ("") console.log("won't print");
if (null) console.log("won't print");
if (1) console.log("will print");
if ("hello") console.log("will print");

// ============================================
// FUNCTIONS & CLOSURES
// ============================================

/**
 * Q4: What is a closure?
 * 
 * Answer:
 * A closure is a function that has access to variables in its outer
 * (enclosing) lexical scope, even after the outer function has returned.
 */

function outerFunction(x) {
    // Outer function's variable
    const outerVar = x;
    
    // Inner function (closure)
    function innerFunction(y) {
        // Can access outerVar even after outerFunction returns
        return outerVar + y;
    }
    
    return innerFunction;
}

const closure = outerFunction(10);
console.log(closure(5)); // 15

/**
 * Q5: Explain the "this" keyword
 * 
 * Answer:
 * 'this' refers to the object that is executing the current function.
 * Its value depends on how the function is called.
 */

// Global context
console.log(this); // Global object (or undefined in strict mode)

// Method context
const obj = {
    name: "Object",
    method: function() {
        return this.name; // "Object"
    }
};

// Arrow functions don't have their own 'this'
const arrowObj = {
    name: "Arrow",
    method: () => {
        return this.name; // undefined (inherits from outer scope)
    }
};

/**
 * Q6: What is the difference between function declaration and function expression?
 * 
 * Answer:
 * - Function declaration: Hoisted, can be called before declaration
 * - Function expression: Not hoisted, cannot be called before assignment
 */

// Function declaration (hoisted)
sayHello(); // Works!

function sayHello() {
    console.log("Hello");
}

// Function expression (not hoisted)
// sayGoodbye(); // Error!

const sayGoodbye = function() {
    console.log("Goodbye");
};

// ============================================
// ARRAYS & OBJECTS
// ============================================

/**
 * Q7: What is the difference between map, filter, and reduce?
 * 
 * Answer:
 * - map: Transforms each element, returns new array
 * - filter: Selects elements, returns new array
 * - reduce: Reduces to single value
 */

const numbers = [1, 2, 3, 4, 5];

// map - Transform
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter - Select
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce - Reduce
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15

/**
 * Q8: What is the difference between shallow copy and deep copy?
 * 
 * Answer:
 * - Shallow copy: Copies references, nested objects still reference original
 * - Deep copy: Creates completely new object with all nested objects copied
 */

// Shallow copy
const original = { a: 1, b: { c: 2 } };
const shallow = { ...original };
shallow.b.c = 3;
console.log(original.b.c); // 3 (changed!)

// Deep copy
const deep = JSON.parse(JSON.stringify(original));
deep.b.c = 4;
console.log(original.b.c); // 3 (unchanged)

/**
 * Q9: How do you check if a value is an array?
 * 
 * Answer:
 * Use Array.isArray() - most reliable method
 */

console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false
console.log(Array.isArray("array")); // false

// ============================================
// ASYNCHRONOUS JAVASCRIPT
// ============================================

/**
 * Q10: What is the difference between Promises and async/await?
 * 
 * Answer:
 * - Promises: Use .then()/.catch() chains
 * - async/await: Syntactic sugar, makes async code look synchronous
 */

// Promises
function fetchWithPromise() {
    return fetch("https://api.example.com/data")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

// async/await
async function fetchWithAsync() {
    try {
        const response = await fetch("https://api.example.com/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

/**
 * Q11: What is the Event Loop?
 * 
 * Answer:
 * JavaScript's concurrency model based on an event loop.
 * It has a call stack, callback queue, and microtask queue.
 * Microtasks (Promises) run before macrotasks (setTimeout).
 */

console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
// Output: 1, 4, 3, 2
// Microtasks (Promise) run before macrotasks (setTimeout)

/**
 * Q12: What is the difference between setTimeout and setInterval?
 * 
 * Answer:
 * - setTimeout: Executes once after delay
 * - setInterval: Executes repeatedly at intervals
 */

// setTimeout - Once
const timeout = setTimeout(() => {
    console.log("Executed once");
}, 1000);

// setInterval - Repeatedly
const interval = setInterval(() => {
    console.log("Executed repeatedly");
}, 1000);

// Clear them
clearTimeout(timeout);
clearInterval(interval);

// ============================================
// SCOPE & HOISTING
// ============================================

/**
 * Q13: What is hoisting?
 * 
 * Answer:
 * JavaScript's behavior of moving declarations to the top of their scope.
 * Only declarations are hoisted, not initializations.
 */

// var hoisting
console.log(x); // undefined (not error)
var x = 5;

// Function declaration hoisting
sayHi(); // Works!

function sayHi() {
    console.log("Hi");
}

// let/const hoisting (TDZ)
// console.log(y); // Error - TDZ
let y = 10;

/**
 * Q14: What is the Temporal Dead Zone (TDZ)?
 * 
 * Answer:
 * Period between start of scope and declaration where let/const
 * cannot be accessed. They are hoisted but not initialized.
 */

// TDZ example
// console.log(tdzVar); // Error - TDZ
let tdzVar = "declared";
console.log(tdzVar); // OK - after declaration

// ============================================
// OBJECTS & PROTOTYPES
// ============================================

/**
 * Q15: What is prototypal inheritance?
 * 
 * Answer:
 * JavaScript uses prototypal inheritance - objects inherit from other objects
 * through the prototype chain.
 */

function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    return `${this.name} is eating`;
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    return `${this.name} is barking`;
};

const dog = new Dog("Buddy", "Labrador");
console.log(dog.eat()); // Inherited from Animal
console.log(dog.bark()); // Own method

/**
 * Q16: What is the difference between Object.create() and new?
 * 
 * Answer:
 * - Object.create(): Creates object with specified prototype
 * - new: Creates instance using constructor function
 */

// Object.create
const proto = { greet: () => "Hello" };
const obj1 = Object.create(proto);

// new
function Person(name) {
    this.name = name;
}
const obj2 = new Person("John");

/**
 * Q17: What is the difference between Object.freeze() and Object.seal()?
 * 
 * Answer:
 * - Object.freeze(): Prevents all modifications (add, delete, modify)
 * - Object.seal(): Prevents add/delete, but allows modification
 */

const frozen = Object.freeze({ x: 1 });
// frozen.x = 2; // Error in strict mode
// delete frozen.x; // Error

const sealed = Object.seal({ x: 1 });
sealed.x = 2; // OK
// sealed.y = 3; // Error
// delete sealed.x; // Error

// ============================================
// ES6+ FEATURES
// ============================================

/**
 * Q18: What is destructuring?
 * 
 * Answer:
 * Extracting values from arrays or objects into variables.
 */

// Array destructuring
const [a, b, c] = [1, 2, 3];
const [first, , third] = [1, 2, 3];
const [head, ...tail] = [1, 2, 3, 4];

// Object destructuring
const { name, age } = { name: "John", age: 30 };
const { name: userName, age: userAge } = { name: "John", age: 30 };

/**
 * Q19: What is the spread operator?
 * 
 * Answer:
 * Expands iterables (arrays, objects) into individual elements.
 */

// Array spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Object spread
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }

/**
 * Q20: What is optional chaining?
 * 
 * Answer:
 * Safe way to access nested properties without errors if any part is null/undefined.
 */

const user = {
    name: "John",
    address: {
        city: "New York"
    }
};

console.log(user?.address?.city); // "New York"
console.log(user?.contact?.phone); // undefined (no error)

/**
 * Q21: What is nullish coalescing?
 * 
 * Answer:
 * Returns right side only if left is null or undefined (not other falsy values).
 */

const value1 = null ?? "default"; // "default"
const value2 = undefined ?? "default"; // "default"
const value3 = 0 ?? "default"; // 0 (not "default")
const value4 = "" ?? "default"; // "" (not "default")

// ============================================
// ADVANCED CONCEPTS
// ============================================

/**
 * Q22: What is currying?
 * 
 * Answer:
 * Converting a function that takes multiple arguments into a sequence
 * of functions that each take a single argument.
 */

function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(add(1)(2)(3)); // 6

// Arrow function syntax
const addArrow = a => b => c => a + b + c;

/**
 * Q23: What is memoization?
 * 
 * Answer:
 * Optimization technique that caches function results to avoid
 * redundant calculations.
 */

function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

const memoizedFactorial = memoize(function(n) {
    if (n <= 1) return 1;
    return n * memoizedFactorial(n - 1);
});

/**
 * Q24: What is debouncing and throttling?
 * 
 * Answer:
 * - Debouncing: Delay execution until after delay period
 * - Throttling: Limit execution to at most once per time period
 */

// Debounce
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
}

// Throttle
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// COMMON CODING CHALLENGES
// ============================================

/**
 * Q25: Reverse a string
 */

function reverseString(str) {
    return str.split("").reverse().join("");
}

// Without built-in methods
function reverseStringManual(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// How to call and response:
{
    console.log(reverseString("hello")); // "olleh"
    console.log(reverseStringManual("world")); // "dlrow"
}

/**
 * Q26: Check if string is palindrome
 */

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}

// How to call and response:
{
    console.log(isPalindrome("racecar")); // true
    console.log(isPalindrome("hello")); // false
    console.log(isPalindrome("A man a plan a canal Panama")); // true
}

/**
 * Q27: Find largest number in array
 */

function findLargest(arr) {
    return Math.max(...arr);
}

// Without Math.max
function findLargestManual(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// How to call and response:
{
    console.log(findLargest([1, 5, 3, 9, 2])); // 9
    console.log(findLargestManual([10, 20, 5, 15])); // 20
}

/**
 * Q28: Remove duplicates from array
 */

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Without Set
function removeDuplicatesManual(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

// How to call and response:
{
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]
    console.log(removeDuplicatesManual([1, 1, 2, 2, 3])); // [1, 2, 3]
}

/**
 * Q29: Flatten nested array
 */

function flattenArray(arr) {
    return arr.flat(Infinity);
}

// Without flat
function flattenArrayManual(arr) {
    let result = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArrayManual(item));
        } else {
            result.push(item);
        }
    }
    return result;
}

// How to call and response:
{
    console.log(flattenArray([1, [2, 3], [4, [5, 6]]])); // [1, 2, 3, 4, 5, 6]
    console.log(flattenArrayManual([1, [2, [3, 4]]])); // [1, 2, 3, 4]
}

/**
 * Q30: Implement bind function
 */

Function.prototype.myBind = function(context, ...args) {
    const fn = this;
    return function(...newArgs) {
        return fn.apply(context, [...args, ...newArgs]);
    };
};

// Usage
const obj = { name: "John" };
function greet(greeting) {
    return `${greeting}, ${this.name}`;
}

const boundGreet = greet.myBind(obj, "Hello");
console.log(boundGreet()); // "Hello, John"

/**
 * Q31: Implement debounce function
 */

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// How to call and response:
{
    const debouncedSearch = debounce((query) => {
        console.log("Searching for:", query);
    }, 300);

    debouncedSearch("hello");
    debouncedSearch("hello world");
    debouncedSearch("hello world javascript");
    // Response: (after 300ms) "Searching for: hello world javascript"
    // Only the last call executes after the delay
}

/**
 * Q32: Implement throttle function
 */

function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// How to call and response:
{
    const throttledScroll = throttle(() => {
        console.log("Scroll event fired");
    }, 1000);

    // If called multiple times within 1 second, only first call executes
    throttledScroll(); // Response: "Scroll event fired"
    throttledScroll(); // Response: (nothing - throttled)
    throttledScroll(); // Response: (nothing - throttled)
    // After 1 second, next call will execute
}

/**
 * Q33: Deep clone an object
 */

function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    
    if (obj instanceof Array) {
        return obj.map(item => deepClone(item));
    }
    
    if (typeof obj === "object") {
        const cloned = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                cloned[key] = deepClone(obj[key]);
            }
        }
        return cloned;
    }
}

// How to call and response:
{
    const originalObj = { a: 1, b: { c: 2 }, d: [3, 4] };
    const clonedObj = deepClone(originalObj);
    clonedObj.b.c = 99;
    clonedObj.d.push(5);
    console.log(originalObj.b.c); // 2 (unchanged)
    console.log(originalObj.d); // [3, 4] (unchanged)
    console.log(clonedObj.b.c); // 99 (changed)
    console.log(clonedObj.d); // [3, 4, 5] (changed)
}

/**
 * Q34: Check if two objects are equal
 */

function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;
    
    if (obj1 == null || typeof obj1 !== "object" ||
        obj2 == null || typeof obj2 !== "object") {
        return false;
    }
    
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false;
    
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    
    return true;
}

// How to call and response:
{
    console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true
    console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })); // false
    console.log(deepEqual([1, 2, 3], [1, 2, 3])); // true
}

/**
 * Q35: Implement Promise.all
 */

Promise.myAll = function(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            reject(new TypeError("Argument must be an array"));
            return;
        }
        
        const results = [];
        let completed = 0;
        
        if (promises.length === 0) {
            resolve(results);
            return;
        }
        
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value;
                    completed++;
                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });
    });
};

// How to call and response:
{
    Promise.myAll([
        Promise.resolve(1),
        Promise.resolve(2),
        Promise.resolve(3)
    ]).then(results => {
        console.log(results); // [1, 2, 3]
    });

    Promise.myAll([
        Promise.resolve(1),
        Promise.reject("Error"),
        Promise.resolve(3)
    ]).catch(error => {
        console.log(error); // "Error"
    });
}

/**
 * Q36: Implement Array.map
 */

Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

// How to call and response:
{
    const nums = [1, 2, 3, 4];
    const doubledNums = nums.myMap(n => n * 2);
    console.log(doubledNums); // [2, 4, 6, 8]

    const names = ["John", "Jane"];
    const greetings = names.myMap((name, index) => `Hello ${name} at index ${index}`);
    console.log(greetings); // ["Hello John at index 0", "Hello Jane at index 1"]
}

/**
 * Q37: Implement Array.filter
 */

Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

// How to call and response:
{
    const nums = [1, 2, 3, 4, 5, 6];
    const evens = nums.myFilter(n => n % 2 === 0);
    console.log(evens); // [2, 4, 6]

    const words = ["hello", "world", "javascript", "js"];
    const longWords = words.myFilter(word => word.length > 4);
    console.log(longWords); // ["hello", "world", "javascript"]
}

/**
 * Q38: Implement Array.reduce
 */

Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
    
    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    
    return accumulator;
};

// How to call and response:
{
    const nums = [1, 2, 3, 4, 5];
    const sum = nums.myReduce((acc, n) => acc + n, 0);
    console.log(sum); // 15

    const product = nums.myReduce((acc, n) => acc * n, 1);
    console.log(product); // 120

    const words = ["hello", "world", "javascript"];
    const sentence = words.myReduce((acc, word) => acc + " " + word, "");
    console.log(sentence.trim()); // "hello world javascript"
}

/**
 * Q39: Find factorial
 */

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Iterative
function factorialIterative(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// How to call and response:
{
    console.log(factorial(5)); // 120 (5 * 4 * 3 * 2 * 1)
    console.log(factorialIterative(4)); // 24 (4 * 3 * 2 * 1)
    console.log(factorial(0)); // 1
}

/**
 * Q40: Fibonacci sequence
 */

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Memoized
function fibonacciMemoized(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fibonacciMemoized(n - 1, memo) + fibonacciMemoized(n - 2, memo);
    return memo[n];
}

// Iterative
function fibonacciIterative(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

// How to call and response:
{
    console.log(fibonacci(7)); // 13 (0, 1, 1, 2, 3, 5, 8, 13)
    console.log(fibonacciMemoized(10)); // 55
    console.log(fibonacciIterative(8)); // 21
}

// ============================================
// CLASS-BASED OOP
// ============================================

/**
 * Q41: What is the difference between class and function constructor?
 * 
 * Answer:
 * Classes are syntactic sugar over constructor functions and prototypes.
 * Both create objects, but classes provide:
 * - Cleaner syntax
 * - Built-in inheritance with 'extends'
 * - Static methods
 * - Private fields (ES2022)
 * - Enforces 'new' keyword
 */

// Constructor function
function PersonOld(name) {
    this.name = name;
}
PersonOld.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

// ES6 Class (equivalent)
class Person {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
}

/**
 * Q42: Explain class inheritance in JavaScript
 * 
 * Answer:
 * Classes use 'extends' keyword for inheritance.
 * 'super' is used to call parent constructor and methods.
 */

class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    eat() {
        return `${this.name} is eating`;
    }
    
    sleep() {
        return `${this.name} is sleeping`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Canine"); // Call parent constructor
        this.breed = breed;
    }
    
    // Override parent method
    eat() {
        return `${this.name} the ${this.breed} is eating`;
    }
    
    // New method
    bark() {
        return `${this.name} is barking`;
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.eat()); // Overridden method
console.log(dog.sleep()); // Inherited method
console.log(dog.bark()); // Own method

/**
 * Q43: What are static methods and properties?
 * 
 * Answer:
 * Static members belong to the class itself, not instances.
 * Accessed via class name, not instance.
 */

class MathUtils {
    static PI = 3.14159; // Static property
    
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
}

console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.add(2, 3)); // 5

// Cannot access from instance
const utils = new MathUtils();
// utils.add(2, 3); // Error

/**
 * Q44: What are getters and setters in classes?
 * 
 * Answer:
 * Getters and setters allow computed properties and validation.
 * They look like properties but are methods.
 */

class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    
    get radius() {
        return this._radius;
    }
    
    set radius(value) {
        if (value > 0) {
            this._radius = value;
        } else {
            throw new Error("Radius must be positive");
        }
    }
    
    get area() {
        return Math.PI * this._radius ** 2;
    }
    
    get diameter() {
        return this._radius * 2;
    }
}

const circle = new Circle(5);
console.log(circle.radius); // 5 (getter)
console.log(circle.area); // 78.54... (computed getter)
circle.radius = 10; // Setter
console.log(circle.area); // 314.16...

/**
 * Q45: What are private fields in classes?
 * 
 * Answer:
 * Private fields (ES2022) are accessible only within the class.
 * Denoted with # prefix. Provide true encapsulation.
 */

class BankAccount {
    #balance = 0; // Private field
    #accountNumber; // Private field
    
    constructor(accountNumber, initialBalance = 0) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
        return this.#balance;
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
        }
        return this.#balance;
    }
    
    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount("12345", 100);
account.deposit(50);
console.log(account.getBalance()); // 150
// account.#balance; // Error - private field

/**
 * Q46: What is method overriding in classes?
 * 
 * Answer:
 * Child class can override parent class methods.
 * Use 'super' to call parent method.
 */

class Vehicle {
    start() {
        return "Vehicle started";
    }
    
    stop() {
        return "Vehicle stopped";
    }
}

class Car extends Vehicle {
    start() {
        return "Car engine started"; // Override
    }
    
    honk() {
        return super.start() + " and honking"; // Call parent method
    }
}

const car = new Car();
console.log(car.start()); // "Car engine started" (overridden)
console.log(car.stop()); // "Vehicle stopped" (inherited)
console.log(car.honk()); // "Vehicle started and honking"

/**
 * Q47: What is polymorphism in JavaScript classes?
 * 
 * Answer:
 * Same interface, different implementations.
 * Different classes can implement same method differently.
 */

class Shape {
    area() {
        throw new Error("area() must be implemented");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    
    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    area() {
        return Math.PI * this.radius ** 2;
    }
}

// Polymorphic behavior
const shapes = [
    new Rectangle(5, 10),
    new Circle(5)
];

shapes.forEach(shape => {
    console.log(shape.area()); // Different implementations
});

/**
 * Q48: What is the difference between abstract classes and interfaces?
 * 
 * Answer:
 * JavaScript doesn't have true abstract classes or interfaces, but we can simulate them.
 * Abstract class: Cannot be instantiated, must be extended
 * Interface: Defines contract (concept, not built-in)
 */

// Abstract class pattern
class AbstractShape {
    constructor() {
        if (this.constructor === AbstractShape) {
            throw new Error("Cannot instantiate abstract class");
        }
    }
    
    area() {
        throw new Error("area() must be implemented");
    }
    
    perimeter() {
        throw new Error("perimeter() must be implemented");
    }
}

class Square extends AbstractShape {
    constructor(side) {
        super();
        this.side = side;
    }
    
    area() {
        return this.side ** 2;
    }
    
    perimeter() {
        return this.side * 4;
    }
}

// const shape = new AbstractShape(); // Error
const square = new Square(5); // OK

/**
 * Q49: What are mixins in JavaScript classes?
 * 
 * Answer:
 * Mixins allow sharing behavior across classes.
 * JavaScript doesn't support multiple inheritance, but mixins provide similar functionality.
 */

// Mixin for flying
const CanFly = {
    fly() {
        return `${this.name} is flying`;
    }
};

// Mixin for swimming
const CanSwim = {
    swim() {
        return `${this.name} is swimming`;
    }
};

class Duck {
    constructor(name) {
        this.name = name;
    }
}

// Apply mixins
Object.assign(Duck.prototype, CanFly, CanSwim);

const duck = new Duck("Donald");
console.log(duck.fly()); // "Donald is flying"
console.log(duck.swim()); // "Donald is swimming"

// ============================================
// UNIQUE ADVANCED QUESTIONS
// ============================================

/**
 * Q50: What is the difference between Object.create() and new keyword?
 * 
 * Answer:
 * - Object.create(): Creates object with specified prototype, doesn't call constructor
 * - new: Creates instance using constructor function, calls constructor
 */

// Object.create
const proto = { greet: () => "Hello" };
const obj1 = Object.create(proto);
console.log(obj1.greet()); // "Hello"

// new
function Person(name) {
    this.name = name;
}
const obj2 = new Person("John");
console.log(obj2.name); // "John"

/**
 * Q51: Explain the difference between call, apply, and bind
 * 
 * Answer:
 * All three methods bind 'this' to a function:
 * - call: Calls function with 'this' and individual arguments
 * - apply: Calls function with 'this' and array of arguments
 * - bind: Returns new function with bound 'this' and optional arguments
 */

const person = {
    name: "John",
    greet: function(greeting, punctuation) {
        return `${greeting}, ${this.name}${punctuation}`;
    }
};

const anotherPerson = { name: "Jane" };

// call
console.log(person.greet.call(anotherPerson, "Hello", "!")); // "Hello, Jane!"

// apply
console.log(person.greet.apply(anotherPerson, ["Hi", "?"])); // "Hi, Jane?"

// bind
const boundGreet = person.greet.bind(anotherPerson, "Hey");
console.log(boundGreet("!")); // "Hey, Jane!"

/**
 * Q52: What is the difference between for...in and for...of loops?
 * 
 * Answer:
 * - for...in: Iterates over enumerable properties (keys/indexes)
 * - for...of: Iterates over iterable values (arrays, strings, etc.)
 */

const arr = ["a", "b", "c"];

// for...in - gets indexes
for (let index in arr) {
    console.log(index); // 0, 1, 2
}

// for...of - gets values
for (let value of arr) {
    console.log(value); // "a", "b", "c"
}

const obj = { a: 1, b: 2, c: 3 };

// for...in - gets keys
for (let key in obj) {
    console.log(key); // "a", "b", "c"
}

// for...of - doesn't work with plain objects
// for (let value of obj) { } // Error

/**
 * Q53: What is the difference between Object.keys(), Object.values(), and Object.entries()?
 * 
 * Answer:
 * - Object.keys(): Returns array of keys
 * - Object.values(): Returns array of values
 * - Object.entries(): Returns array of [key, value] pairs
 */

const obj = { a: 1, b: 2, c: 3 };

console.log(Object.keys(obj)); // ["a", "b", "c"]
console.log(Object.values(obj)); // [1, 2, 3]
console.log(Object.entries(obj)); // [["a", 1], ["b", 2], ["c", 3]]

/**
 * Q54: What is the difference between Promise.all() and Promise.allSettled()?
 * 
 * Answer:
 * - Promise.all(): Rejects if any promise rejects, returns all results if all succeed
 * - Promise.allSettled(): Waits for all promises to settle (resolve or reject), returns all results
 */

const promise1 = Promise.resolve(1);
const promise2 = Promise.reject("Error");
const promise3 = Promise.resolve(3);

// Promise.all - fails fast
Promise.all([promise1, promise2, promise3])
    .then(results => console.log(results))
    .catch(error => console.log(error)); // "Error"

// Promise.allSettled - waits for all
Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Promise ${index}:`, result.value);
            } else {
                console.log(`Promise ${index}:`, result.reason);
            }
        });
    });

/**
 * Q55: What is the difference between Promise.race() and Promise.any()?
 * 
 * Answer:
 * - Promise.race(): Returns first promise to settle (resolve or reject)
 * - Promise.any(): Returns first promise to fulfill (only resolves, ignores rejections)
 */

const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 100));
const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 500));
const reject = Promise.reject("Error");

// Promise.race - first to settle
Promise.race([fast, slow]).then(result => console.log(result)); // "Fast"

// Promise.any - first to fulfill
Promise.any([reject, fast, slow]).then(result => console.log(result)); // "Fast"

/**
 * Q56: What is a generator function and how does it work?
 * 
 * Answer:
 * Generator functions can be paused and resumed.
 * Use function* syntax and yield keyword.
 * Return iterator object.
 */

function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().done); // true

// Infinite generator
function* infiniteCounter() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const counter = infiniteCounter();
console.log(counter.next().value); // 0
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2

/**
 * Q57: What is a Proxy in JavaScript?
 * 
 * Answer:
 * Proxy allows intercepting and customizing operations on objects.
 * Can intercept property access, assignment, function calls, etc.
 */

const target = { message: "hello" };

const handler = {
    get: function(target, prop) {
        return prop in target ? target[prop] : "default";
    },
    set: function(target, prop, value) {
        if (prop === "age" && value < 0) {
            throw new Error("Age cannot be negative");
        }
        target[prop] = value;
        return true;
    },
    has: function(target, prop) {
        return prop in target;
    }
};

const proxy = new Proxy(target, handler);
console.log(proxy.message); // "hello"
console.log(proxy.unknown); // "default"
proxy.age = 25; // OK
// proxy.age = -5; // Error

/**
 * Q58: What is the difference between WeakMap and Map?
 * 
 * Answer:
 * - Map: Keys can be any type, not garbage collected, iterable
 * - WeakMap: Keys must be objects, garbage collected when key is removed, not iterable
 */

// Map
const map = new Map();
map.set("string", "value");
map.set(1, "number");
const objKey = {};
map.set(objKey, "object");
console.log(map.size); // 3

// WeakMap
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, "value");
// weakMap.set("string", "value"); // Error - keys must be objects
console.log(weakMap.get(obj)); // "value"
// weakMap.size; // undefined - not iterable

// Garbage collection
let objRef = { data: "test" };
weakMap.set(objRef, "data");
objRef = null; // objRef can be garbage collected

/**
 * Q59: What is the event loop and how does it work?
 * 
 * Answer:
 * JavaScript's concurrency model. Has:
 * - Call Stack: Executes synchronous code
 * - Callback Queue: Macrotasks (setTimeout, setInterval)
 * - Microtask Queue: Microtasks (Promises, queueMicrotask)
 * 
 * Execution order: Synchronous code → All microtasks → One macrotask → Repeat
 */

console.log("1"); // Synchronous

setTimeout(() => console.log("2"), 0); // Macrotask

Promise.resolve().then(() => console.log("3")); // Microtask

queueMicrotask(() => console.log("4")); // Microtask

console.log("5"); // Synchronous

// Output: 1, 5, 3, 4, 2
// Microtasks run before macrotasks

/**
 * Q60: What is the difference between setTimeout with 0ms and setImmediate?
 * 
 * Answer:
 * - setTimeout(fn, 0): Schedules callback in next event loop iteration
 * - setImmediate: Node.js only, executes in next iteration of event loop
 * Order is not guaranteed, depends on I/O operations
 */

// Browser
setTimeout(() => console.log("setTimeout"), 0);

// Node.js
// setImmediate(() => console.log("setImmediate"));

/**
 * Q61: How does JavaScript handle memory management?
 * 
 * Answer:
 * JavaScript uses automatic garbage collection (GC).
 * - Mark and Sweep algorithm
 * - Objects are collected when no longer referenced
 * - Circular references collected if no external references
 * - WeakMap/WeakSet don't prevent garbage collection
 */

// Memory leak example
function createLeak() {
    const largeData = new Array(1000000);
    window.data = largeData; // Global reference - never collected
}

// Proper cleanup
function createProper() {
    const largeData = new Array(1000000);
    // Use data
    // largeData = null; // Allow garbage collection
}

/**
 * Q62: What is the difference between null and undefined?
 * 
 * Answer:
 * - undefined: Variable declared but not assigned, missing property
 * - null: Explicitly set to represent "no value", intentional absence
 */

let a;
console.log(a); // undefined

let b = null;
console.log(b); // null

const obj = {};
console.log(obj.property); // undefined (property doesn't exist)

const obj2 = { value: null };
console.log(obj2.value); // null (explicitly set)

// Type checking
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (bug in JavaScript)

/**
 * Q63: What is the difference between slice() and splice()?
 * 
 * Answer:
 * - slice(): Returns new array, doesn't modify original, takes start and end
 * - splice(): Modifies original array, takes start, deleteCount, and items to add
 */

const arr = [1, 2, 3, 4, 5];

// slice - doesn't modify
const sliced = arr.slice(1, 4); // [2, 3, 4]
console.log(arr); // [1, 2, 3, 4, 5] (unchanged)

// splice - modifies
const spliced = arr.splice(1, 2, 10, 20); // [2, 3]
console.log(arr); // [1, 10, 20, 4, 5] (modified)

/**
 * Q64: What is the difference between substr(), substring(), and slice()?
 * 
 * Answer:
 * - substr(start, length): Deprecated, takes start and length
 * - substring(start, end): Swaps if start > end, doesn't support negative
 * - slice(start, end): Supports negative, doesn't swap
 */

const str = "Hello World";

console.log(str.substr(0, 5)); // "Hello" (deprecated)
console.log(str.substring(0, 5)); // "Hello"
console.log(str.slice(0, 5)); // "Hello"

console.log(str.substring(5, 0)); // "Hello" (swaps)
console.log(str.slice(5, 0)); // "" (doesn't swap)

console.log(str.slice(-5)); // "World" (negative support)
// console.log(str.substring(-5)); // "Hello World" (treats as 0)

/**
 * Q65: Implement a custom EventEmitter class
 */

class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }
    
    off(event, listener) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(l => l !== listener);
        }
    }
    
    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(...args));
        }
    }
    
    once(event, listener) {
        const onceWrapper = (...args) => {
            listener(...args);
            this.off(event, onceWrapper);
        };
        this.on(event, onceWrapper);
    }
}

// How to call and response:
{
    const emitter = new EventEmitter();

    // Register listener
    const listener = (data) => console.log("Received:", data);
    emitter.on("test", listener);

    // Emit event
    emitter.emit("test", "Hello"); 
    // Response: "Received: Hello"

    // Remove listener
    emitter.off("test", listener);
    emitter.emit("test", "Hello"); 
    // Response: (nothing - listener removed)

    // Once listener
    emitter.once("once", () => console.log("Once only"));
    emitter.emit("once"); 
    // Response: "Once only"
    emitter.emit("once"); 
    // Response: (nothing - listener auto-removed)
}

/**
 * Q66: What is the difference between encodeURI and encodeURIComponent?
 * 
 * Answer:
 * - encodeURI: Encodes entire URI, preserves special characters like : / ? # [ ]
 * - encodeURIComponent: Encodes URI component, encodes all special characters
 */

const uri = "https://example.com/path?name=John Doe&age=30";

console.log(encodeURI(uri));
// "https://example.com/path?name=John%20Doe&age=30"
// Preserves : / ? & =

console.log(encodeURIComponent(uri));
// "https%3A%2F%2Fexample.com%2Fpath%3Fname%3DJohn%20Doe%26age%3D30"
// Encodes everything

// Use encodeURIComponent for query parameters
const baseUrl = "https://example.com/search";
const query = "hello world";
const url = `${baseUrl}?q=${encodeURIComponent(query)}`;

/**
 * Q67: What is the difference between JSON.stringify and JSON.parse?
 * 
 * Answer:
 * - JSON.stringify: Converts JavaScript object to JSON string
 * - JSON.parse: Converts JSON string to JavaScript object
 */

const obj = {
    name: "John",
    age: 30,
    hobbies: ["reading", "coding"],
    address: {
        city: "New York"
    }
};

// stringify
const jsonString = JSON.stringify(obj);
console.log(jsonString);
// {"name":"John","age":30,"hobbies":["reading","coding"],"address":{"city":"New York"}}

// With replacer
const filtered = JSON.stringify(obj, ["name", "age"]); // Only name and age

// With space (pretty print)
const pretty = JSON.stringify(obj, null, 2);

// parse
const parsed = JSON.parse(jsonString);
console.log(parsed.name); // "John"

// With reviver
const withReviver = JSON.parse(jsonString, (key, value) => {
    if (key === "age") return value * 2; // Transform age
    return value;
});

/**
 * Q68: What is the difference between Symbol and Symbol.for?
 * 
 * Answer:
 * - Symbol(): Creates unique symbol, not in global registry
 * - Symbol.for(): Creates or retrieves symbol from global registry
 */

const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2); // false (different symbols)

const sym3 = Symbol.for("id");
const sym4 = Symbol.for("id");
console.log(sym3 === sym4); // true (same symbol from registry)

// Symbol.keyFor - get key from global symbol
console.log(Symbol.keyFor(sym3)); // "id"
console.log(Symbol.keyFor(sym1)); // undefined (not in registry)

/**
 * Q69: Implement a simple Promise from scratch
 */

class MyPromise {
    constructor(executor) {
        this.state = "pending";
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
        
        const resolve = (value) => {
            if (this.state === "pending") {
                this.state = "fulfilled";
                this.value = value;
                this.onFulfilledCallbacks.forEach(callback => callback(value));
            }
        };
        
        const reject = (reason) => {
            if (this.state === "pending") {
                this.state = "rejected";
                this.reason = reason;
                this.onRejectedCallbacks.forEach(callback => callback(reason));
            }
        };
        
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }
    
    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            if (this.state === "fulfilled") {
                try {
                    const result = onFulfilled ? onFulfilled(this.value) : this.value;
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            } else if (this.state === "rejected") {
                try {
                    const result = onRejected ? onRejected(this.reason) : this.reason;
                    resolve(result);
                } catch (error) {
                    reject(error);
                }
            } else {
                this.onFulfilledCallbacks.push((value) => {
                    try {
                        const result = onFulfilled ? onFulfilled(value) : value;
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                });
                
                this.onRejectedCallbacks.push((reason) => {
                    try {
                        const result = onRejected ? onRejected(reason) : reason;
                        resolve(result);
                    } catch (error) {
                        reject(error);
                    }
                });
            }
        });
    }
    
    catch(onRejected) {
        return this.then(null, onRejected);
    }
}

// How to call and response:
{
    const myPromise1 = new MyPromise((resolve, reject) => {
        setTimeout(() => resolve("Success"), 100);
    });

    myPromise1.then(value => {
        console.log(value); // Response: "Success"
        return value + "!";
    }).then(value => {
        console.log(value); // Response: "Success!"
    });

    const myPromise2 = new MyPromise((resolve, reject) => {
        reject("Error occurred");
    });

    myPromise2.catch(error => {
        console.log(error); // Response: "Error occurred"
    });
}

/**
 * Q70: What is the difference between arrow functions and regular functions?
 * 
 * Answer:
 * - Arrow functions: No 'this' binding, no 'arguments', cannot be constructors, shorter syntax
 * - Regular functions: Have 'this' binding, have 'arguments', can be constructors
 */

const obj = {
    name: "Object",
    regular: function() {
        console.log(this.name); // "Object"
        console.log(arguments); // Arguments object
    },
    arrow: () => {
        console.log(this.name); // undefined (no 'this' binding)
        // console.log(arguments); // Error - no 'arguments'
    }
};

// Constructor
function Person(name) {
    this.name = name;
}
const person = new Person("John"); // OK

// const ArrowPerson = (name) => { this.name = name; };
// const person2 = new ArrowPerson("John"); // Error - cannot be constructor

// How to call and response:
{
    obj.regular("arg1", "arg2"); 
    // Response: "Object" (this.name)
    // Response: Arguments(2) ["arg1", "arg2"]

    obj.arrow("arg1", "arg2"); 
    // Response: undefined (no 'this' binding)
    // Error if trying to access arguments

    console.log(person.name); // Response: "John"
}

/**
 * Q71: What is the 'arguments' object in JavaScript?
 * 
 * Answer:
 * The 'arguments' object is an array-like object available inside all
 * regular functions (not arrow functions) that contains the values of
 * the arguments passed to that function.
 * 
 * Key points:
 * - Array-like but not a real array (no array methods)
 * - Has length property
 * - Can be accessed by index
 * - Only available in regular functions, not arrow functions
 * - Can be converted to array using Array.from() or spread operator
 */

// Basic usage
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

// How to call and response:
{
    console.log(sum(1, 2, 3)); // 6
    console.log(sum(10, 20, 30, 40)); // 100
    console.log(sum()); // 0
}

// Arguments object properties
function demonstrateArguments() {
    console.log("Number of arguments:", arguments.length);
    console.log("First argument:", arguments[0]);
    console.log("Last argument:", arguments[arguments.length - 1]);
    console.log("Is array?", Array.isArray(arguments)); // false
    console.log("Type:", typeof arguments); // "object"
}

// How to call and response:
{
    demonstrateArguments("first", "second", "third");
    // Response: "Number of arguments: 3"
    // Response: "First argument: first"
    // Response: "Last argument: third"
    // Response: "Is array? false"
    // Response: "Type: object"
}

// Convert arguments to array
function convertToArray() {
    // Method 1: Array.from()
    const args1 = Array.from(arguments);
    console.log("Array.from():", args1);
    console.log("Can use map:", args1.map(x => x * 2));
    
    // Method 2: Spread operator
    const args2 = [...arguments];
    console.log("Spread operator:", args2);
    
    // Method 3: Array.prototype.slice.call()
    const args3 = Array.prototype.slice.call(arguments);
    console.log("slice.call():", args3);
    
    // Original arguments object (cannot use array methods directly)
    // arguments.map(x => x * 2); // Error - arguments.map is not a function
}

// How to call and response:
{
    convertToArray(1, 2, 3, 4);
    // Response: "Array.from(): [1, 2, 3, 4]"
    // Response: "Can use map: [2, 4, 6, 8]"
    // Response: "Spread operator: [1, 2, 3, 4]"
    // Response: "slice.call(): [1, 2, 3, 4]"
}

// Arguments in arrow functions (NOT available)
function regularFunction() {
    console.log("Regular function arguments:", arguments);
}

const arrowFunction = () => {
    // console.log(arguments); // Error: arguments is not defined
    // Arrow functions don't have their own arguments object
};

// How to call and response:
{
    regularFunction(1, 2, 3);
    // Response: "Regular function arguments: Arguments(3) [1, 2, 3]"
    
    // arrowFunction(1, 2, 3); // Would cause error if uncommented
}

// Accessing all arguments with rest parameters (modern approach)
function sumWithRest(...numbers) {
    // 'numbers' is a real array, not array-like
    return numbers.reduce((acc, num) => acc + num, 0);
}

// How to call and response:
{
    console.log(sumWithRest(1, 2, 3, 4)); // 10
    console.log(sumWithRest(10, 20)); // 30
    // 'numbers' is a real array, can use all array methods
}

// Arguments object is iterable
function iterateArguments() {
    // Can use for...of
    for (const arg of arguments) {
        console.log("Argument:", arg);
    }
    
    // Can use for...in (but iterates over indices as strings)
    for (const index in arguments) {
        console.log(`Index ${index}:`, arguments[index]);
    }
}

// How to call and response:
{
    iterateArguments("a", "b", "c");
    // Response: "Argument: a"
    // Response: "Argument: b"
    // Response: "Argument: c"
    // Response: "Index 0: a"
    // Response: "Index 1: b"
    // Response: "Index 2: c"
}

// Arguments object is mutable
function modifyArguments() {
    console.log("Original:", arguments[0]);
    arguments[0] = "modified";
    console.log("Modified:", arguments[0]);
}

// How to call and response:
{
    modifyArguments("original");
    // Response: "Original: original"
    // Response: "Modified: modified"
}

// Practical example: Function that accepts variable number of arguments
function createUser() {
    const args = Array.from(arguments);
    
    if (args.length === 1 && typeof args[0] === "object") {
        // Single object argument
        return { ...args[0] };
    } else if (args.length >= 2) {
        // Multiple arguments: name, age, email, etc.
        return {
            name: args[0],
            age: args[1],
            email: args[2] || "",
            ...(args[3] && { role: args[3] })
        };
    }
    
    return null;
}

// How to call and response:
{
    const user1 = createUser({ name: "John", age: 30 });
    console.log(user1); // { name: "John", age: 30 }
    
    const user2 = createUser("Jane", 25, "jane@example.com", "admin");
    console.log(user2); 
    // { name: "Jane", age: 25, email: "jane@example.com", role: "admin" }
}

// Summary comparison: arguments vs rest parameters
function oldWay() {
    // Using arguments object
    const args = Array.from(arguments);
    return args.reduce((a, b) => a + b, 0);
}

function newWay(...args) {
    // Using rest parameters (preferred in modern JavaScript)
    return args.reduce((a, b) => a + b, 0);
}

// How to call and response:
{
    console.log(oldWay(1, 2, 3)); // 6
    console.log(newWay(1, 2, 3)); // 6
    // Both work the same, but rest parameters are preferred:
    // - Real array (not array-like)
    // - Cleaner syntax
    // - Works in arrow functions
    // - More explicit about function signature
}
