# Functional Programming in JavaScript

This directory contains examples and documentation for functional programming concepts.

## Files

- **fp-concepts.js** - Pure functions, immutability, higher-order functions, composition

## Key Concepts

### Pure Functions

Functions that:
- Always return same output for same input
- Have no side effects
- Don't modify external state

**Benefits:**
- Easier to test
- Easier to reason about
- Can be memoized
- Thread-safe

### Immutability

Data that cannot be changed after creation.

**Benefits:**
- Prevents bugs
- Easier to track changes
- Better for concurrency

**Techniques:**
- Spread operator (`...`)
- Array methods (map, filter, reduce)
- Object.assign() or spread

### Higher-Order Functions

Functions that:
- Take functions as arguments, or
- Return functions

Examples: `map`, `filter`, `reduce`, `forEach`

### Function Composition

Combining simple functions to build complex ones.

**Compose** (right to left):
```javascript
compose(f, g, h)(x) === f(g(h(x)))
```

**Pipe** (left to right):
```javascript
pipe(f, g, h)(x) === h(g(f(x)))
```

### Currying

Converting multi-argument functions into single-argument functions.

```javascript
const add = a => b => c => a + b + c;
add(1)(2)(3); // 6
```

### Recursion

Functions that call themselves.

**Benefits:**
- Cleaner code
- Natural for tree/graph structures

**Tail Recursion:**
- Optimized recursion
- Last operation is recursive call

## Functional Array Methods

- `map()` - Transform each element
- `filter()` - Select elements
- `reduce()` - Reduce to single value
- `find()` - Find first match
- `some()` - Check if any matches
- `every()` - Check if all match
- `flatMap()` - Map then flatten

## Best Practices

1. **Prefer pure functions** - Easier to test and reason about
2. **Use immutability** - Avoid mutations
3. **Compose functions** - Build complex from simple
4. **Use higher-order functions** - More declarative
5. **Avoid side effects** - Keep functions pure
6. **Use recursion** - For recursive data structures
7. **Chain operations** - Readable and declarative

## Common Patterns

### Transform Data
```javascript
const result = data
    .filter(x => x > 0)
    .map(x => x * 2)
    .reduce((acc, x) => acc + x, 0);
```

### Compose Functions
```javascript
const process = pipe(
    filter(x => x > 0),
    map(x => x * 2),
    reduce((a, b) => a + b, 0)
);
```

### Immutable Update
```javascript
const updated = { ...obj, key: newValue };
const newArray = [...array, newItem];
```

## Functional vs Imperative

**Imperative** (HOW):
```javascript
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        sum += numbers[i] * 2;
    }
}
```

**Functional** (WHAT):
```javascript
const sum = numbers
    .filter(n => n > 0)
    .map(n => n * 2)
    .reduce((a, b) => a + b, 0);
```

