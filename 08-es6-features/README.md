# ES6+ Features

This directory contains examples and documentation for ES6 and later JavaScript features.

## Files

- **destructuring.js** - Array and object destructuring
- **spread-rest.js** - Spread and rest operators
- **modules.js** - ES6 modules, import/export

## Key Concepts

### Destructuring

Extract values from arrays and objects into variables.

**Array Destructuring:**
```javascript
const [a, b, c] = array;
const [first, , third] = array; // Skip
const [head, ...tail] = array; // Rest
const [x, y, z = 0] = array; // Default
```

**Object Destructuring:**
```javascript
const { name, age } = obj;
const { name: userName } = obj; // Rename
const { city = "Unknown" } = obj; // Default
const { address: { city } } = obj; // Nested
```

### Spread Operator

Expands iterables into individual elements.

**With Arrays:**
```javascript
const combined = [...arr1, ...arr2];
const copy = [...arr];
```

**With Objects:**
```javascript
const merged = { ...obj1, ...obj2 };
const copy = { ...obj };
```

**In Function Calls:**
```javascript
func(...args);
Math.max(...numbers);
```

### Rest Operator

Collects remaining elements into an array.

**In Functions:**
```javascript
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
```

**In Destructuring:**
```javascript
const [first, ...rest] = array;
const { name, ...other } = obj;
```

### Modules

ES6 module system for organizing code.

**Export:**
- Named: `export const value = 1;`
- Default: `export default class MyClass {}`
- Mixed: Both named and default

**Import:**
- Named: `import { value } from "./module.js"`
- Default: `import MyClass from "./module.js"`
- All: `import * as module from "./module.js"`
- Dynamic: `const module = await import("./module.js")`

## Best Practices

1. Use destructuring for cleaner code
2. Use spread for copying arrays/objects
3. Use rest for flexible function parameters
4. Use modules to organize code
5. Prefer named exports for multiple values
6. Use default export for single main value
7. Use dynamic imports for code splitting

## Common Patterns

### Clone Object
```javascript
const clone = { ...original };
```

### Merge Objects
```javascript
const merged = { ...defaults, ...overrides };
```

### Remove Property
```javascript
const { password, ...user } = userWithPassword;
```

### Function with Rest
```javascript
function log(...args) {
    console.log(...args);
}
```

### Module Barrel
```javascript
// index.js
export * from "./module1.js";
export * from "./module2.js";
```

