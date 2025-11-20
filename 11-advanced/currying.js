/**
 * CURRYING IN JAVASCRIPT
 * 
 * Currying is the technique of converting a function that takes multiple arguments
 * into a sequence of functions that each take a single argument.
 */

// ============================================
// BASIC CURRYING
// ============================================
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
console.log(addArrow(1)(2)(3)); // 6

// ============================================
// PARTIAL APPLICATION
// ============================================
function multiply(a, b, c) {
    return a * b * c;
}

function partial(fn, ...partialArgs) {
    return function(...remainingArgs) {
        return fn(...partialArgs, ...remainingArgs);
    };
}

const multiplyBy2 = partial(multiply, 2);
console.log(multiplyBy2(3, 4)); // 24

// ============================================
// GENERIC CURRY FUNCTION
// ============================================
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4)); // 24
console.log(curriedMultiply(2, 3)(4)); // 24
console.log(curriedMultiply(2)(3, 4)); // 24

// ============================================
// PRACTICAL EXAMPLES
// ============================================

// Curried filter
const filter = predicate => array => array.filter(predicate);

const getEvens = filter(n => n % 2 === 0);
console.log(getEvens([1, 2, 3, 4, 5])); // [2, 4]

// Curried map
const map = fn => array => array.map(fn);

const double = map(n => n * 2);
console.log(double([1, 2, 3])); // [2, 4, 6]

// Curried reduce
const reduce = (fn, initial) => array => array.reduce(fn, initial);

const sum = reduce((a, b) => a + b, 0);
console.log(sum([1, 2, 3, 4])); // 10

// ============================================
// COMPOSITION WITH CURRYING
// ============================================
const pipe = (...fns) => value => fns.reduce((acc, fn) => fn(acc), value);

const doubleThenFilter = pipe(
    map(n => n * 2),
    filter(n => n > 5)
);

console.log(doubleThenFilter([1, 2, 3, 4, 5])); // [6, 8, 10]

// ============================================
// CURRIED API CALLS
// ============================================
const fetch = (baseURL) => (endpoint) => (options) => {
    return fetch(`${baseURL}${endpoint}`, options);
};

const api = fetch("https://api.example.com");
const getUsers = api("/users");
const getPosts = api("/posts");

// ============================================
// CURRIED EVENT HANDLERS
// ============================================
const handleEvent = (eventType) => (handler) => (element) => {
    element.addEventListener(eventType, handler);
};

const onClick = handleEvent("click");
const onHover = handleEvent("mouseenter");

const handleClick = onClick(console.log);
// handleClick(buttonElement);

// ============================================
// ADVANCED CURRYING
// ============================================
function advancedCurry(fn, arity = fn.length) {
    return function curried(...args) {
        if (args.length >= arity) {
            return fn(...args);
        }
        return function(...nextArgs) {
            return curried(...args, ...nextArgs);
        };
    };
}

const curriedLog = advancedCurry(console.log, 2);
curriedLog("Hello")("World"); // "Hello World"

// ============================================
// PLACEHOLDER SUPPORT
// ============================================
const _ = Symbol("placeholder");

function curryWithPlaceholder(fn) {
    return function curried(...args) {
        const hasPlaceholder = args.some(arg => arg === _);
        
        if (!hasPlaceholder && args.length >= fn.length) {
            return fn(...args);
        }
        
        return function(...nextArgs) {
            const newArgs = args.map(arg => 
                arg === _ && nextArgs.length ? nextArgs.shift() : arg
            );
            return curried(...newArgs, ...nextArgs);
        };
    };
}

const curriedSub = curryWithPlaceholder((a, b, c) => a - b - c);
console.log(curriedSub(10)(_, 5)(3)); // 2 (10 - 5 - 3)

