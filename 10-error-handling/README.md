# Error Handling in JavaScript

This directory contains examples and documentation for error handling in JavaScript.

## Files

- **try-catch.js** - try/catch/finally, error types, custom errors, async error handling

## Key Concepts

### try/catch/finally

**try block:**
- Code that might throw an error
- Execution stops at first error

**catch block:**
- Handles errors thrown in try block
- Receives error object
- Optional - can have try/finally without catch

**finally block:**
- Always executes
- Runs even if error is thrown
- Useful for cleanup

### Error Objects

**Built-in Error Types:**
- `Error` - Generic error
- `TypeError` - Wrong type
- `ReferenceError` - Undefined variable
- `SyntaxError` - Syntax error (usually parse-time)
- `RangeError` - Value out of range
- `URIError` - URI handling error

**Error Properties:**
- `name` - Error type name
- `message` - Error message
- `stack` - Stack trace

### Custom Errors

Create custom error classes by extending `Error`:
```javascript
class CustomError extends Error {
    constructor(message, context) {
        super(message);
        this.name = "CustomError";
        this.context = context;
    }
}
```

### throw Statement

Throw errors explicitly:
```javascript
if (condition) {
    throw new Error("Error message");
}
```

### Error Handling Patterns

#### Async Functions
```javascript
async function asyncOp() {
    try {
        return await operation();
    } catch (error) {
        console.error(error);
        throw error; // Re-throw if needed
    }
}
```

#### Promises
```javascript
promise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log("Done"));
```

#### Multiple Error Types
```javascript
try {
    operation();
} catch (error) {
    if (error instanceof ValidationError) {
        // Handle validation error
    } else if (error instanceof NetworkError) {
        // Handle network error
    } else {
        // Handle other errors
    }
}
```

## Best Practices

1. **Always handle errors** - Don't ignore them
2. **Use specific error types** - Easier to handle
3. **Provide context** - Include relevant information
4. **Log errors** - For debugging and monitoring
5. **Re-throw when appropriate** - Let caller handle
6. **Use finally for cleanup** - Always executes
7. **Validate input** - Catch errors early
8. **Handle async errors** - Use try/catch with await
9. **Set up global handlers** - Catch unhandled errors
10. **Don't catch and ignore** - Always do something

## Common Patterns

### Validation
```javascript
function validate(data) {
    if (!data) {
        throw new ValidationError("Data required");
    }
}
```

### Retry with Backoff
```javascript
async function retry(fn, times) {
    for (let i = 0; i < times; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === times - 1) throw error;
            await delay(1000 * (i + 1));
        }
    }
}
```

### Error Logging
```javascript
function logError(error, context) {
    console.error({
        message: error.message,
        stack: error.stack,
        context,
        timestamp: new Date()
    });
}
```

## Global Error Handlers

### Browser
```javascript
window.addEventListener("error", (event) => {
    console.error("Global error:", event.error);
});

window.addEventListener("unhandledrejection", (event) => {
    console.error("Unhandled rejection:", event.reason);
});
```

### Node.js
```javascript
process.on("uncaughtException", (error) => {
    console.error("Uncaught exception:", error);
});

process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled rejection:", reason);
});
```

## Common Mistakes

1. **Catching and ignoring** - Always handle errors
2. **Catching too broadly** - Be specific
3. **Not providing context** - Include relevant info
4. **Not logging errors** - Hard to debug
5. **Swallowing errors** - Don't hide problems
6. **Not re-throwing** - Sometimes caller should handle
7. **Error in catch block** - Can cause infinite loop

