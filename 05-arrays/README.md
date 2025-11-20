# Arrays in JavaScript

This directory contains examples and documentation for arrays in JavaScript.

## Files

- **array-methods.js** - All array methods, iteration, destructuring, manipulation

## Key Concepts

### Array Creation

- Array literal: `[1, 2, 3]`
- Array constructor: `new Array(1, 2, 3)`
- `Array.from()` - Create from iterable
- `Array.of()` - Create from arguments

### Mutating Methods (Modify Original)

- `push()` - Add to end
- `pop()` - Remove from end
- `unshift()` - Add to beginning
- `shift()` - Remove from beginning
- `splice()` - Add/remove at index
- `reverse()` - Reverse array
- `sort()` - Sort array
- `fill()` - Fill with value

### Non-Mutating Methods (Return New)

- `slice()` - Extract portion
- `concat()` - Combine arrays
- Spread operator: `[...arr1, ...arr2]`

### Iteration Methods

- `forEach()` - Execute for each (no return)
- `map()` - Transform each element (returns new array)
- `filter()` - Filter elements (returns new array)
- `reduce()` - Reduce to single value
- `reduceRight()` - Reduce from right
- `find()` - Find first matching element
- `findIndex()` - Find index of first match
- `some()` - Check if any matches
- `every()` - Check if all match

### Search Methods

- `indexOf()` - Find index of value
- `lastIndexOf()` - Find last index
- `includes()` - Check if contains value

### Array Destructuring

```javascript
const [a, b, c] = array;
const [first, , third] = array; // Skip
const [head, ...tail] = array; // Rest
const [x, y, z = 0] = array; // Default
```

### Flattening

- `flat(depth)` - Flatten to depth
- `flatMap()` - Map then flatten

## Best Practices

1. Use `map()` when transforming elements
2. Use `filter()` when selecting elements
3. Use `reduce()` when reducing to single value
4. Prefer non-mutating methods when possible
5. Use `forEach()` for side effects only
6. Chain methods for readable code
7. Use destructuring for cleaner code
8. Use `includes()` instead of `indexOf() !== -1`
9. Use spread operator instead of `concat()`
10. Be careful with `sort()` - it mutates!

## Common Patterns

### Transform and Filter
```javascript
const result = array
    .filter(x => x > 0)
    .map(x => x * 2);
```

### Sum Array
```javascript
const sum = array.reduce((acc, n) => acc + n, 0);
```

### Remove Duplicates
```javascript
const unique = [...new Set(array)];
```

### Find Object in Array
```javascript
const user = users.find(u => u.id === userId);
```

### Group By
```javascript
const grouped = array.reduce((acc, item) => {
    const key = item.category;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
}, {});
```

