# Modern JavaScript Features

This directory contains examples and documentation for modern JavaScript features (ES2015+).

## Files

- **modern-js.js** - Optional chaining, nullish coalescing, BigInt, private fields, and more

## Key Features

### Optional Chaining (?.) - ES2020

Safely access nested properties without errors.

```javascript
user?.address?.city; // undefined if any part is null/undefined
user?.getName?.(); // Safe method call
arr?.[0]; // Safe array access
```

### Nullish Coalescing (??) - ES2020

Returns right side only if left is `null` or `undefined`.

```javascript
const value = input ?? "default"; // Only if input is null/undefined
```

**Difference from `||`:**
- `??` only checks for `null`/`undefined`
- `||` checks for any falsy value

### BigInt - ES2020

Arbitrary precision integers.

```javascript
const big = 9007199254740991n;
const big2 = BigInt(9007199254740991);
```

### Dynamic Imports - ES2020

Load modules conditionally.

```javascript
const module = await import("./module.js");
```

### Top-Level Await - ES2022

Use `await` at module top level.

```javascript
const data = await fetch("...");
export default data;
```

### Private Class Fields - ES2022

Private fields and methods in classes.

```javascript
class MyClass {
    #private = 0;
    #privateMethod() { }
}
```

### Static Class Fields - ES2022

Static properties in classes.

```javascript
class MyClass {
    static count = 0;
}
```

### Symbols - ES2015

Unique, immutable identifiers.

```javascript
const sym = Symbol("description");
obj[sym] = "value";
```

### Map and Set - ES2015

- **Map**: Key-value pairs (any type as key)
- **Set**: Collection of unique values

### WeakMap and WeakSet - ES2015

- **WeakMap**: Map with object keys (garbage collected)
- **WeakSet**: Set with object values (garbage collected)

### Generators - ES2015

Functions that can be paused and resumed.

```javascript
function* gen() {
    yield 1;
    yield 2;
}
```

### Proxies - ES2015

Intercept and customize operations.

```javascript
const proxy = new Proxy(target, handler);
```

### Reflect - ES2015

Reflection API for object operations.

```javascript
Reflect.get(obj, "prop");
Reflect.set(obj, "prop", value);
```

## String Methods (ES2015+)

- `startsWith()` - Check if starts with
- `endsWith()` - Check if ends with
- `includes()` - Check if contains
- `repeat()` - Repeat string
- `padStart()` / `padEnd()` - Pad string

## Array Methods (ES2015+)

- `Array.from()` - Create from array-like
- `Array.of()` - Create from arguments
- `find()` / `findIndex()` - Find element
- `includes()` - Check if contains
- `flat()` / `flatMap()` - Flatten array

## Object Methods (ES2015+)

- `Object.keys()` - Get keys
- `Object.values()` - Get values
- `Object.entries()` - Get [key, value] pairs
- `Object.assign()` - Copy properties
- `Object.fromEntries()` - Create from entries

## Best Practices

1. Use optional chaining for safe property access
2. Use nullish coalescing for default values
3. Use BigInt for large integers
4. Use private fields for encapsulation
5. Use Map/Set when appropriate
6. Use dynamic imports for code splitting
7. Use generators for lazy evaluation

## Browser Support

Check [caniuse.com](https://caniuse.com) for feature support:
- Optional chaining: Modern browsers
- Nullish coalescing: Modern browsers
- Private fields: Modern browsers
- BigInt: Modern browsers

## Transpilation

Use Babel to transpile modern features for older browsers:
- `@babel/preset-env` - Transpile ES6+ features
- `core-js` - Polyfills for missing features

