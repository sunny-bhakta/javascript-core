# Asynchronous JavaScript

This directory contains examples and documentation for asynchronous programming in JavaScript.

## Files

- **promises.js** - Promises, Promise methods, error handling
- **async-await.js** - async/await syntax, error handling, patterns
- **event-loop.js** - Event loop, call stack, microtasks, macrotasks

## Key Concepts

### Promises

A Promise represents the eventual completion (or failure) of an asynchronous operation.

**States:**
- Pending - Initial state
- Fulfilled - Operation succeeded
- Rejected - Operation failed

**Methods:**
- `then()` - Handle fulfillment
- `catch()` - Handle rejection
- `finally()` - Always executes

**Static Methods:**
- `Promise.all()` - Wait for all (fails if any fails)
- `Promise.allSettled()` - Wait for all (returns all results)
- `Promise.race()` - First to settle
- `Promise.any()` - First to fulfill
- `Promise.resolve()` - Create resolved promise
- `Promise.reject()` - Create rejected promise

### async/await

Syntactic sugar over promises making async code look synchronous.

**Key Points:**
- `async` functions always return Promises
- `await` pauses execution until promise settles
- Only works inside `async` functions
- Use `try/catch` for error handling

**Benefits:**
- Cleaner code than promise chains
- Easier error handling
- Better debugging

### Event Loop

JavaScript's concurrency model based on an event loop.

**Components:**
- Call Stack - Executes synchronous code
- Callback Queue (Macrotasks) - setTimeout, setInterval
- Microtask Queue - Promises, queueMicrotask

**Execution Order:**
1. All synchronous code
2. All microtasks
3. One macrotask
4. Repeat from step 2

## Best Practices

1. **Use async/await** for cleaner code
2. **Handle errors** with try/catch
3. **Use Promise.all()** for parallel operations
4. **Don't block event loop** - use setTimeout for long operations
5. **Use microtasks** for high-priority operations
6. **Batch operations** when possible
7. **Use Web Workers** for CPU-intensive tasks
8. **Avoid promise hell** - use async/await

## Common Patterns

### Sequential Execution
```javascript
async function sequential() {
    const a = await operation1();
    const b = await operation2(a);
    return b;
}
```

### Parallel Execution
```javascript
async function parallel() {
    const [a, b, c] = await Promise.all([
        operation1(),
        operation2(),
        operation3()
    ]);
    return { a, b, c };
}
```

### Error Handling
```javascript
async function withErrorHandling() {
    try {
        const result = await riskyOperation();
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
```

### Retry Pattern
```javascript
async function retry(fn, times) {
    for (let i = 0; i < times; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === times - 1) throw error;
        }
    }
}
```

### Timeout Pattern
```javascript
async function withTimeout(promise, ms) {
    const timeout = new Promise((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), ms)
    );
    return Promise.race([promise, timeout]);
}
```

## Microtasks vs Macrotasks

**Microtasks** (higher priority):
- Promise.then/catch/finally
- queueMicrotask()
- MutationObserver

**Macrotasks** (lower priority):
- setTimeout/setInterval
- I/O operations
- UI rendering

## Common Mistakes

1. **Forgetting await** - returns Promise instead of value
2. **Blocking event loop** - long synchronous operations
3. **Not handling errors** - unhandled promise rejections
4. **Sequential when parallel possible** - unnecessary waiting
5. **Promise hell** - nested promises instead of async/await

