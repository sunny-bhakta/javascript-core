/**
 * ERROR HANDLING IN JAVASCRIPT
 * 
 * JavaScript provides try/catch/finally for error handling.
 */

// ============================================
// BASIC TRY/CATCH
// ============================================
try {
    // Code that might throw error
    throw new Error("Something went wrong");
} catch (error) {
    console.error("Error caught:", error.message);
}

// ============================================
// TRY/CATCH/FINALLY
// ============================================
try {
    console.log("Try block");
    throw new Error("Error");
} catch (error) {
    console.error("Catch block:", error.message);
} finally {
    console.log("Finally block - always executes");
}

// ============================================
// ERROR OBJECTS
// ============================================
try {
    throw new Error("Standard error");
} catch (error) {
    console.log(error.name); // "Error"
    console.log(error.message); // "Standard error"
    console.log(error.stack); // Stack trace
}

// ============================================
// BUILT-IN ERROR TYPES
// ============================================

// TypeError
try {
    null.someMethod();
} catch (error) {
    console.log(error instanceof TypeError); // true
}

// ReferenceError
try {
    console.log(undefinedVariable);
} catch (error) {
    console.log(error instanceof ReferenceError); // true
}

// SyntaxError (usually caught at parse time)
// try {
//     eval("invalid syntax !@#");
// } catch (error) {
//     console.log(error instanceof SyntaxError); // true
// }

// RangeError
try {
    new Array(-1);
} catch (error) {
    console.log(error instanceof RangeError); // true
}

// ============================================
// CUSTOM ERROR CLASSES
// ============================================
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = "NetworkError";
        this.statusCode = statusCode;
    }
}

try {
    throw new ValidationError("Invalid input", "email");
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Validation error in ${error.field}: ${error.message}`);
    }
}

// ============================================
// THROW STATEMENT
// ============================================
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

try {
    const result = divide(10, 0);
} catch (error) {
    console.error(error.message); // "Division by zero"
}

// ============================================
// ERROR HANDLING IN ASYNC FUNCTIONS
// ============================================
async function asyncOperation() {
    try {
        const result = await fetch("https://api.example.com/data");
        if (!result.ok) {
            throw new Error(`HTTP error! status: ${result.status}`);
        }
        return await result.json();
    } catch (error) {
        console.error("Async error:", error.message);
        throw error; // Re-throw if needed
    }
}

// ============================================
// ERROR HANDLING WITH PROMISES
// ============================================
function promiseOperation() {
    return new Promise((resolve, reject) => {
        // Simulate error
        reject(new Error("Promise rejected"));
    });
}

promiseOperation()
    .then(result => console.log(result))
    .catch(error => console.error("Promise error:", error.message))
    .finally(() => console.log("Promise completed"));

// ============================================
// MULTIPLE CATCH BLOCKS
// ============================================
function processData(data) {
    if (!data) {
        throw new ValidationError("Data is required", "data");
    }
    
    if (data.length === 0) {
        throw new ValidationError("Data cannot be empty", "data");
    }
    
    if (data.length > 100) {
        throw new RangeError("Data too large");
    }
    
    return data.map(item => item * 2);
}

try {
    const result = processData(null);
} catch (error) {
    if (error instanceof ValidationError) {
        console.error("Validation:", error.message);
    } else if (error instanceof RangeError) {
        console.error("Range:", error.message);
    } else {
        console.error("Unknown:", error.message);
    }
}

// ============================================
// NESTED TRY/CATCH
// ============================================
function outerFunction() {
    try {
        innerFunction();
    } catch (error) {
        console.error("Outer catch:", error.message);
    }
}

function innerFunction() {
    try {
        throw new Error("Inner error");
    } catch (error) {
        console.error("Inner catch:", error.message);
        throw error; // Re-throw to outer
    }
}

outerFunction();

// ============================================
// ERROR HANDLING IN LOOPS
// ============================================
const items = [1, 2, 3, null, 5];

// Continue on error
for (const item of items) {
    try {
        console.log(item * 2);
    } catch (error) {
        console.error("Error processing item:", error.message);
        continue; // Continue with next item
    }
}

// ============================================
// GLOBAL ERROR HANDLERS
// ============================================

// Browser
window.addEventListener("error", (event) => {
    console.error("Global error:", event.error);
});

// Unhandled promise rejection
window.addEventListener("unhandledrejection", (event) => {
    console.error("Unhandled promise rejection:", event.reason);
});

// Node.js
process.on("uncaughtException", (error) => {
    console.error("Uncaught exception:", error);
});

process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled rejection:", reason);
});

// ============================================
// ERROR BOUNDARIES (React Pattern)
// ============================================
class ErrorBoundary {
    constructor() {
        this.error = null;
    }
    
    execute(fn) {
        try {
            return fn();
        } catch (error) {
            this.error = error;
            return null;
        }
    }
    
    hasError() {
        return this.error !== null;
    }
    
    getError() {
        return this.error;
    }
}

const boundary = new ErrorBoundary();
boundary.execute(() => {
    throw new Error("Test error");
});

if (boundary.hasError()) {
    console.error("Caught error:", boundary.getError().message);
}

// ============================================
// VALIDATION WITH ERRORS
// ============================================
function validateUser(user) {
    const errors = [];
    
    if (!user.name || user.name.trim() === "") {
        errors.push(new ValidationError("Name is required", "name"));
    }
    
    if (!user.email || !user.email.includes("@")) {
        errors.push(new ValidationError("Valid email is required", "email"));
    }
    
    if (user.age && (user.age < 0 || user.age > 150)) {
        errors.push(new ValidationError("Age must be between 0 and 150", "age"));
    }
    
    if (errors.length > 0) {
        throw errors; // Throw array of errors
    }
    
    return true;
}

try {
    validateUser({ name: "", email: "invalid" });
} catch (errors) {
    if (Array.isArray(errors)) {
        errors.forEach(error => {
            console.error(`${error.field}: ${error.message}`);
        });
    }
}

// ============================================
// RETRY WITH ERROR HANDLING
// ============================================
async function retryWithBackoff(fn, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === maxRetries - 1) {
                throw error; // Last attempt failed
            }
            
            const delay = Math.pow(2, i) * 1000; // Exponential backoff
            console.log(`Retry ${i + 1} after ${delay}ms`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
}

// ============================================
// ERROR LOGGING
// ============================================
function logError(error, context = {}) {
    const errorLog = {
        message: error.message,
        stack: error.stack,
        name: error.name,
        timestamp: new Date().toISOString(),
        context
    };
    
    // Send to logging service
    console.error("Error logged:", errorLog);
    // In production: send to error tracking service
}

try {
    throw new Error("Test error");
} catch (error) {
    logError(error, { userId: 123, action: "processData" });
}

// ============================================
// BEST PRACTICES
// ============================================

// 1. Always handle errors
async function safeOperation() {
    try {
        return await riskyOperation();
    } catch (error) {
        // Always handle, don't ignore
        console.error(error);
        return null; // Or throw, depending on use case
    }
}

// 2. Use specific error types
function specificError() {
    throw new ValidationError("Specific error", "field");
}

// 3. Provide context in errors
function contextualError(data) {
    throw new Error(`Failed to process: ${JSON.stringify(data)}`);
}

// 4. Don't catch and ignore
// BAD:
// try {
//     riskyOperation();
// } catch (error) {
//     // Ignored - BAD!
// }

// GOOD:
try {
    riskyOperation();
} catch (error) {
    console.error("Operation failed:", error);
    // Handle appropriately
}

