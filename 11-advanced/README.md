# Advanced JavaScript Concepts

This directory contains examples and documentation for advanced JavaScript concepts.

## Files

- **currying.js** - Currying, partial application, function composition
- **memoization.js** - Memoization, caching, optimization techniques

## Key Concepts

### Currying

Converting a function that takes multiple arguments into a sequence of functions that each take a single argument.

**Benefits:**
- Partial application
- Function composition
- Reusability
- Cleaner code

**Example:**
```javascript
const add = a => b => c => a + b + c;
add(1)(2)(3); // 6
```

**Use Cases:**
- Event handlers
- API calls
- Data transformations
- Functional programming

### Memoization

Caching function results to avoid redundant calculations.

**Benefits:**
- Performance optimization
- Reduce computation time
- Cache expensive operations

**Example:**
```javascript
const memoized = memoize(expensiveFunction);
memoized(5); // Calculates
memoized(5); // Returns cached
```

**Use Cases:**
- Expensive calculations
- API calls
- Recursive functions
- Dynamic programming

## Best Practices

### Currying
1. Use for functions with multiple parameters
2. Enable partial application
3. Compose functions easily
4. Keep functions pure

### Memoization
1. Use for expensive operations
2. Consider cache size limits
3. Handle async functions properly
4. Clear cache when needed
5. Use appropriate cache strategy (LRU, TTL)

## Common Patterns

### Curried Functions
```javascript
const filter = predicate => array => array.filter(predicate);
const getEvens = filter(n => n % 2 === 0);
```

### Memoized Recursion
```javascript
function fibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}
```

### Function Composition
```javascript
const pipe = (...fns) => value => fns.reduce((acc, fn) => fn(acc), value);
```

