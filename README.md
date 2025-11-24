# JavaScript Core Concepts

This repository contains examples and explanations of core JavaScript concepts.

## Table of Contents

### 1. Fundamentals
- Variables (`var`, `let`, `const`)
- Data Types (Primitive & Reference)
- Type Conversion & Coercion
- Operators (Arithmetic, Logical, Comparison, Assignment)
- Comments

### 2. Control Flow
- Conditional Statements (`if`, `else`, `else if`, `switch`)
- Loops (`for`, `while`, `do-while`, `for...in`, `for...of`)
- Break and Continue
- Ternary Operator

### 3. Functions
- Function Declarations
- Function Expressions
- Arrow Functions
- Function Parameters & Arguments
- Default Parameters
- Rest Parameters
- Spread Operator
- Higher-Order Functions
- Callback Functions
- IIFE (Immediately Invoked Function Expressions)
- Recursion
- Closures

### 4. Objects
- Object Literals
- Object Properties & Methods
- `this` Keyword
- Object Destructuring
- Object Methods (`Object.keys()`, `Object.values()`, `Object.entries()`)
- Object.assign()
- Object.create()
- Prototypes & Prototype Chain
- Constructor Functions
- Classes (ES6)

### 5. Arrays
- Array Methods (`push`, `pop`, `shift`, `unshift`, `splice`, `slice`)
- Array Iteration (`forEach`, `map`, `filter`, `reduce`, `find`, `some`, `every`)
- Array Destructuring
- Spread Operator with Arrays
- Multidimensional Arrays

### 6. Strings
- String Methods (`charAt`, `substring`, `slice`, `split`, `join`, `replace`, `toUpperCase`, `toLowerCase`)
- Template Literals
- String Interpolation

### 7. Scope & Hoisting
- Global Scope
- Function Scope
- Block Scope
- Lexical Scoping
- Variable Hoisting
- Function Hoisting

### 8. ES6+ Features
- Let and Const
- Arrow Functions
- Template Literals
- Destructuring (Arrays & Objects)
- Default Parameters
- Rest & Spread Operators
- Classes
- Modules (import/export)
- Promises
- Async/Await
- Generators
- Symbols
- Map & Set
- WeakMap & WeakSet

### 9. Asynchronous JavaScript
- Callbacks
- Promises
- Async/Await
- Event Loop
- Callback Queue
- Microtasks & Macrotasks
- setTimeout & setInterval
- fetch API

### 10. Error Handling
- Try-Catch-Finally
- Throw Statement
- Error Objects
- Custom Errors

### 11. Regular Expressions
- Pattern Matching
- Regex Methods (`test()`, `exec()`, `match()`, `replace()`)
- Regex Flags

### 12. DOM Manipulation
- Selecting Elements
- Modifying Elements
- Event Handling
- Event Listeners
- Event Bubbling & Capturing
- Event Delegation

### 13. Advanced Concepts
- Closures
- Currying
- Memoization
- Debouncing & Throttling
- Prototypal Inheritance
- Mixins
- Factory Functions
- Module Pattern
- Revealing Module Pattern
- Singleton Pattern

### 14. JavaScript Engine & Runtime
- Execution Context
- Call Stack
- Memory Management
- Garbage Collection
- Stack Overflow

### 15. Built-in Objects & Methods
- Math Object
- Date Object
- JSON (`JSON.parse()`, `JSON.stringify()`)
- Number Methods
- String Methods
- Array Methods

### 16. Type Checking & Validation
- typeof Operator
- instanceof Operator
- Type Checking Methods
- Type Guards

### 17. Functional Programming
- Pure Functions
- Immutability
- Higher-Order Functions
- Function Composition
- Map, Filter, Reduce
- Currying & Partial Application

### 18. Object-Oriented Programming
- Classes
- Inheritance
- Encapsulation
- Polymorphism
- Abstraction
- Static Methods
- Getters & Setters
- Private Fields

### 19. Modern JavaScript Features
- Optional Chaining (`?.`)
- Nullish Coalescing (`??`)
- BigInt
- Dynamic Imports
- Top-level Await
- Private Class Fields
- Static Class Fields

### 20. Browser APIs
- Local Storage & Session Storage
- Geolocation API
- Canvas API
- Web Workers
- Service Workers
- IndexedDB

### 21. Testing Concepts
- Unit Testing
- Test Frameworks (Jest, Mocha)
- Assertions
- Mocking & Stubbing

### 22. Performance Optimization
- Debouncing
- Throttling
- Lazy Loading
- Code Splitting
- Memory Leaks Prevention

### 23. Design Patterns
- Module Pattern
- Singleton Pattern
- Factory Pattern
- Observer Pattern
- Pub/Sub Pattern
- Strategy Pattern

### 24. Best Practices
- Code Style & Formatting
- Naming Conventions
- Code Organization
- Error Handling Best Practices
- Performance Best Practices
- Security Best Practices

---

## Directory Structure

This repository is organized by concept categories:

```
javascript-core/
├── 01-fundamentals/       # Variables, data types, operators
│   ├── variables.js
│   ├── data-types.js
│   ├── operators.js
│   └── README.md
├── 02-control-flow/       # Conditionals, loops
│   ├── conditionals.js
│   ├── loops.js
│   └── README.md
├── 03-functions/          # Function types, closures
│   ├── function-types.js
│   ├── closures.js
│   └── README.md
├── 04-objects/            # Objects, prototypes, classes
│   ├── object-basics.js
│   ├── prototypes.js
│   ├── classes.js
│   └── README.md
├── 05-arrays/             # Array methods, iteration
│   ├── array-methods.js
│   └── README.md
├── 06-strings/            # String methods, template literals
│   ├── string-methods.js
│   └── README.md
├── 07-scope-hoisting/     # Scope, hoisting, TDZ
│   ├── scope.js
│   ├── hoisting.js
│   └── README.md
├── 08-es6-features/       # ES6+ features
│   ├── destructuring.js
│   ├── spread-rest.js
│   ├── modules.js
│   └── README.md
├── 09-async/              # Promises, async/await, event loop
│   ├── promises.js
│   ├── async-await.js
│   ├── event-loop.js
│   └── README.md
├── 10-error-handling/     # Error handling patterns
│   ├── try-catch.js
│   └── README.md
├── 11-advanced/           # Advanced concepts
│   ├── currying.js
│   ├── memoization.js
│   └── README.md
├── 12-regex/              # Regular expressions
│   ├── regex-basics.js
│   └── README.md
├── 13-dom/                 # DOM manipulation
│   ├── dom-manipulation.js
│   └── README.md
├── 14-functional-programming/ # Functional programming concepts
│   ├── fp-concepts.js
│   └── README.md
├── 15-oop/                 # Object-oriented programming
│   ├── oop-concepts.js
│   └── README.md
├── 16-modern-features/     # Modern JavaScript features
│   ├── modern-js.js
│   └── README.md
├── 17-browser-apis/        # Browser storage APIs
│   ├── storage.js
│   └── README.md
├── 18-js-engine-runtime/   # JavaScript engine & runtime
│   ├── engine-runtime.js
│   └── README.md
├── 19-built-in-objects/    # Built-in objects & methods
│   ├── built-in-objects.js
│   └── README.md
├── 20-type-checking/       # Type checking & validation
│   ├── type-checking.js
│   └── README.md
├── 21-testing/             # Testing concepts
│   ├── testing.js
│   └── README.md
├── 22-performance/         # Performance optimization
│   ├── performance.js
│   └── README.md
├── 23-design-patterns/     # Design patterns
│   ├── design-patterns.js
│   └── README.md
├── 24-best-practices/      # Best practices
│   ├── best-practices.js
│   └── README.md
└── 25-interview/           # Interview questions & answers
    ├── interview-questions.js
    └── README.md
```

## How to Use This Repository

1. **Browse by Category**: Each directory contains related concepts with examples
2. **Read the README**: Each directory has a README explaining key concepts
3. **Study the Code**: Each `.js` file contains comprehensive examples with comments
4. **Run Examples**: You can run the JavaScript files in Node.js or browser console
5. **Practice**: Modify examples to understand concepts better

## Quick Start

```bash
# Navigate to a concept directory
cd 01-fundamentals

# Read the README for overview
cat README.md

# Study the examples
node variables.js
```

## Features

- ✅ **Comprehensive Examples**: Every concept has working code examples
- ✅ **Well Documented**: Each file has detailed comments explaining concepts
- ✅ **Organized Structure**: Concepts grouped by category
- ✅ **Best Practices**: Includes best practices and common patterns
- ✅ **Real-world Patterns**: Practical examples you can use

## Resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [ECMAScript Specification](https://tc39.es/ecma262/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)

