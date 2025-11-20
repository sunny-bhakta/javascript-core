# Functions in JavaScript

This directory contains examples and documentation for functions in JavaScript.

## Files

- **function-types.js** - Function declarations, expressions, arrow functions, IIFE, generators
- **closures.js** - Closures, private variables, module pattern, memoization, currying

## Key Concepts

### Function Types

#### Function Declaration
- Hoisted to top of scope
- Can be called before declaration
- Syntax: `function name() {}`

#### Function Expression
- Not hoisted
- Assigned to variable
- Syntax: `const fn = function() {}`

#### Arrow Functions
- Shorter syntax
- No `this` binding (inherits from outer scope)
- No `arguments` object
- Cannot be used as constructors
- Syntax: `const fn = () => {}`

#### IIFE (Immediately Invoked Function Expression)
- Executes immediately
- Creates new scope
- Useful for avoiding global namespace pollution
- Syntax: `(function() {})()`

### Function Parameters

- **Default Parameters**: `function fn(param = defaultValue) {}`
- **Rest Parameters**: `function fn(...args) {}` - collects remaining arguments
- **Arguments Object**: Available in regular functions (not arrow functions)

### Closures

A closure is a function that has access to variables in its outer scope, even after the outer function has returned.

**Key Points:**
- Functions have access to outer scope variables
- Variables persist even after outer function returns
- Each closure has its own scope
- Useful for data privacy and function factories

**Common Use Cases:**
- Private variables
- Module pattern
- Memoization
- Currying and partial application
- Event handlers

### Higher-Order Functions

Functions that:
- Take other functions as arguments, or
- Return functions as results

Examples: `map`, `filter`, `reduce`, `forEach`

### Callback Functions

Functions passed as arguments to other functions, to be executed later.

### Recursion

Functions that call themselves. Must have:
- Base case (stopping condition)
- Recursive case (calls itself)

## Best Practices

1. Use arrow functions for short, simple functions
2. Use function declarations for hoisting needs
3. Use default parameters instead of checking for undefined
4. Be careful with closures in loops (use `let` instead of `var`)
5. Use closures for data privacy and encapsulation
6. Prefer named functions for better debugging
7. Use rest parameters instead of `arguments` object
8. Keep functions small and focused (single responsibility)

## Common Patterns

### Module Pattern
```javascript
const module = (function() {
    let private = 0;
    return {
        public: function() { return private; }
    };
})();
```

### Memoization
```javascript
const memoize = (fn) => {
    const cache = {};
    return (...args) => {
        const key = JSON.stringify(args);
        return cache[key] || (cache[key] = fn(...args));
    };
};
```

### Currying
```javascript
const curry = (fn) => {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return (...nextArgs) => curried(...args, ...nextArgs);
    };
};
```

