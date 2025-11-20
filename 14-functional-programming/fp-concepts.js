/**
 * FUNCTIONAL PROGRAMMING CONCEPTS IN JAVASCRIPT
 * 
 * Functional programming emphasizes:
 * - Pure functions
 * - Immutability
 * - Higher-order functions
 * - Function composition
 */

// ============================================
// PURE FUNCTIONS
// ============================================

// Pure function - Same input always gives same output, no side effects
function add(a, b) {
    return a + b; // Pure - no side effects
}

// Impure function - Has side effects
let counter = 0;
function impureAdd(a) {
    counter++; // Side effect - modifies external state
    return a + counter;
}

// Pure function with objects
function addToObject(obj, key, value) {
    return { ...obj, [key]: value }; // Returns new object
}

// ============================================
// IMMUTABILITY
// ============================================

// Mutable (BAD)
const arr1 = [1, 2, 3];
arr1.push(4); // Mutates original array

// Immutable (GOOD)
const arr2 = [1, 2, 3];
const arr3 = [...arr2, 4]; // New array

// Immutable object update
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, b: 3 }; // New object

// ============================================
// HIGHER-ORDER FUNCTIONS
// ============================================

// Function that takes function as argument
function map(array, fn) {
    const result = [];
    for (let item of array) {
        result.push(fn(item));
    }
    return result;
}

const doubled = map([1, 2, 3], x => x * 2); // [2, 4, 6]

// Function that returns function
function multiplyBy(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = multiplyBy(2);
console.log(double(5)); // 10

// ============================================
// MAP, FILTER, REDUCE
// ============================================

const numbers = [1, 2, 3, 4, 5];

// map - Transform each element
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter - Select elements
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce - Reduce to single value
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15

// Chaining
const result = numbers
    .filter(n => n % 2 === 0)
    .map(n => n * 2)
    .reduce((acc, n) => acc + n, 0); // 12

// ============================================
// FUNCTION COMPOSITION
// ============================================

// Compose functions (right to left)
const compose = (...fns) => (value) => 
    fns.reduceRight((acc, fn) => fn(acc), value);

// Pipe functions (left to right)
const pipe = (...fns) => (value) => 
    fns.reduce((acc, fn) => fn(acc), value);

// Example
const add1 = x => x + 1;
const multiply2 = x => x * 2;
const subtract3 = x => x - 3;

const composed = compose(subtract3, multiply2, add1);
console.log(composed(5)); // (5 + 1) * 2 - 3 = 9

const piped = pipe(add1, multiply2, subtract3);
console.log(piped(5)); // ((5 + 1) * 2) - 3 = 9

// ============================================
// CURRYING
// ============================================

// Curried function
const add = a => b => c => a + b + c;
console.log(add(1)(2)(3)); // 6

// Generic curry
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return function(...nextArgs) {
            return curried(...args, ...nextArgs);
        };
    };
}

const curriedMultiply = curry((a, b, c) => a * b * c);
console.log(curriedMultiply(2)(3)(4)); // 24

// ============================================
// PARTIAL APPLICATION
// ============================================

function partial(fn, ...partialArgs) {
    return function(...remainingArgs) {
        return fn(...partialArgs, ...remainingArgs);
    };
}

function multiply(a, b, c) {
    return a * b * c;
}

const multiplyBy2 = partial(multiply, 2);
console.log(multiplyBy2(3, 4)); // 24

// ============================================
// RECURSION
// ============================================

// Factorial
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Tail recursion (optimized)
function factorialTail(n, acc = 1) {
    if (n <= 1) return acc;
    return factorialTail(n - 1, n * acc);
}

// ============================================
// IMMUTABLE DATA OPERATIONS
// ============================================

// Update array immutably
function updateArray(arr, index, value) {
    return [...arr.slice(0, index), value, ...arr.slice(index + 1)];
}

// Remove from array immutably
function removeFromArray(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

// Update nested object immutably
function updateNested(obj, path, value) {
    const [key, ...rest] = path;
    if (rest.length === 0) {
        return { ...obj, [key]: value };
    }
    return {
        ...obj,
        [key]: updateNested(obj[key] || {}, rest, value)
    };
}

// ============================================
// FUNCTIONAL UTILITIES
// ============================================

// Identity function
const identity = x => x;

// Constant function
const constant = x => () => x;

// Flip arguments
const flip = fn => (a, b) => fn(b, a);

// Once - Execute only once
function once(fn) {
    let called = false;
    let result;
    return function(...args) {
        if (!called) {
            called = true;
            result = fn(...args);
        }
        return result;
    };
}

// Memoize
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) return cache[key];
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

// ============================================
// FUNCTIONAL ARRAY METHODS
// ============================================

const data = [1, 2, 3, 4, 5];

// find - Find first matching
const found = data.find(x => x > 3); // 4

// findIndex - Find index
const index = data.findIndex(x => x > 3); // 3

// some - Check if any matches
const hasEven = data.some(x => x % 2 === 0); // true

// every - Check if all match
const allPositive = data.every(x => x > 0); // true

// flatMap - Map then flatten
const flatMapped = data.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6, ...]

// ============================================
// FUNCTIONAL OBJECT OPERATIONS
// ============================================

// Object.keys, Object.values, Object.entries
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj); // ["a", "b", "c"]
const values = Object.values(obj); // [1, 2, 3]
const entries = Object.entries(obj); // [["a", 1], ["b", 2], ["c", 3]]

// Transform object
const doubled = Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, value * 2])
); // { a: 2, b: 4, c: 6 }

// ============================================
// FUNCTIONAL PATTERNS
// ============================================

// Maybe/Option pattern
class Maybe {
    constructor(value) {
        this.value = value;
    }
    
    static of(value) {
        return new Maybe(value);
    }
    
    map(fn) {
        return this.value == null ? Maybe.of(null) : Maybe.of(fn(this.value));
    }
    
    getOrElse(defaultValue) {
        return this.value == null ? defaultValue : this.value;
    }
}

const maybeValue = Maybe.of(5)
    .map(x => x * 2)
    .map(x => x + 1)
    .getOrElse(0); // 11

// Either pattern
class Either {
    constructor(value) {
        this.value = value;
    }
    
    static left(value) {
        return new Left(value);
    }
    
    static right(value) {
        return new Right(value);
    }
}

class Left extends Either {
    map() {
        return this;
    }
    
    fold(leftFn, rightFn) {
        return leftFn(this.value);
    }
}

class Right extends Either {
    map(fn) {
        return Right.of(fn(this.value));
    }
    
    fold(leftFn, rightFn) {
        return rightFn(this.value);
    }
}

