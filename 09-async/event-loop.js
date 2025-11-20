/**
 * EVENT LOOP IN JAVASCRIPT
 * 
 * JavaScript is single-threaded but uses an event loop for asynchronous operations.
 * Understanding the event loop is crucial for writing efficient async code.
 */

// ============================================
// CALL STACK
// ============================================
// JavaScript has a single call stack (LIFO - Last In First Out)

function first() {
    console.log("First");
    second();
}

function second() {
    console.log("Second");
    third();
}

function third() {
    console.log("Third");
}

first();
// Output: First, Second, Third

// ============================================
// SYNCHRONOUS CODE
// ============================================
console.log("1");
console.log("2");
console.log("3");
// Output: 1, 2, 3 (in order)

// ============================================
// ASYNCHRONOUS CODE WITH SETTIMEOUT
// ============================================
console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 0);

console.log("End");
// Output: Start, End, Timeout 1
// setTimeout is asynchronous, even with 0ms delay

// ============================================
// EVENT LOOP PHASES
// ============================================
// 1. Call Stack - Executes synchronous code
// 2. Callback Queue (Task Queue) - Holds callbacks from setTimeout, setInterval
// 3. Microtask Queue - Holds callbacks from Promises, queueMicrotask

console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
// Output: 1, 4, 3, 2
// Microtasks (Promises) run before macrotasks (setTimeout)

// ============================================
// MICROTASKS VS MACROTASKS
// ============================================
console.log("Start");

// Macrotask
setTimeout(() => console.log("Macrotask"), 0);

// Microtask
Promise.resolve().then(() => console.log("Microtask"));

// Another microtask
queueMicrotask(() => console.log("Queue Microtask"));

console.log("End");
// Output: Start, End, Microtask, Queue Microtask, Macrotask

// ============================================
// PROMISE MICROTASKS
// ============================================
Promise.resolve()
    .then(() => console.log("Promise 1"))
    .then(() => console.log("Promise 2"));

Promise.resolve()
    .then(() => console.log("Promise 3"));

// Output: Promise 1, Promise 3, Promise 2
// All microtasks from same level run before next level

// ============================================
// ASYNC/AWAIT AND EVENT LOOP
// ============================================
async function asyncFunction() {
    console.log("Async start");
    await Promise.resolve();
    console.log("Async end");
}

console.log("Before async");
asyncFunction();
console.log("After async");
// Output: Before async, Async start, After async, Async end
// await pauses function, but doesn't block call stack

// ============================================
// SETTIMEOUT VS SETIMMEDIATE (Node.js)
// ============================================
// In Node.js:
setTimeout(() => console.log("setTimeout"), 0);
setImmediate(() => console.log("setImmediate"));
// Order is not guaranteed, depends on I/O

// ============================================
// PROCESS.NEXTICK (Node.js)
// ============================================
// process.nextTick runs before any other async operation
process.nextTick(() => console.log("nextTick"));

Promise.resolve().then(() => console.log("Promise"));

setTimeout(() => console.log("setTimeout"), 0);
// Output: nextTick, Promise, setTimeout

// ============================================
// BLOCKING THE EVENT LOOP
// ============================================
// DON'T DO THIS - blocks event loop
function blockingOperation() {
    const start = Date.now();
    while (Date.now() - start < 5000) {
        // Blocking for 5 seconds
    }
    console.log("Blocking done");
}

// DO THIS - non-blocking
function nonBlockingOperation() {
    setTimeout(() => {
        console.log("Non-blocking done");
    }, 5000);
}

// ============================================
// WEB WORKERS (Browser)
// ============================================
// Web Workers run in separate thread, don't block main thread

// main.js
const worker = new Worker("worker.js");
worker.postMessage("Hello");
worker.onmessage = (e) => {
    console.log("From worker:", e.data);
};

// worker.js
// self.onmessage = (e) => {
//     const result = heavyComputation(e.data);
//     self.postMessage(result);
// };

// ============================================
// REQUESTANIMATIONFRAME (Browser)
// ============================================
// Runs before next repaint, optimized for animations
function animate() {
    // Animation code
    requestAnimationFrame(animate);
}
// animate();

// ============================================
// EVENT LOOP VISUALIZATION
// ============================================
function demonstrateEventLoop() {
    console.log("1. Synchronous");
    
    setTimeout(() => console.log("2. Macrotask"), 0);
    
    Promise.resolve()
        .then(() => {
            console.log("3. Microtask 1");
            return Promise.resolve();
        })
        .then(() => console.log("4. Microtask 2"));
    
    queueMicrotask(() => console.log("5. Queue Microtask"));
    
    console.log("6. Synchronous");
}

demonstrateEventLoop();
// Output: 1, 6, 3, 5, 4, 2

// ============================================
// BEST PRACTICES
// ============================================

// 1. Don't block event loop
// Use setTimeout for long operations
function processLargeData(data) {
    const chunkSize = 1000;
    let index = 0;
    
    function processChunk() {
        const chunk = data.slice(index, index + chunkSize);
        // Process chunk
        
        index += chunkSize;
        if (index < data.length) {
            setTimeout(processChunk, 0); // Yield to event loop
        }
    }
    
    processChunk();
}

// 2. Use microtasks for priority operations
function highPriorityOperation() {
    Promise.resolve().then(() => {
        // This runs before setTimeout callbacks
    });
}

// 3. Batch DOM updates
function batchDOMUpdates() {
    // Use requestAnimationFrame for visual updates
    requestAnimationFrame(() => {
        // Update DOM
    });
}

// ============================================
// EVENT LOOP SUMMARY
// ============================================
/*
Event Loop Order:
1. Execute all synchronous code (call stack)
2. Execute all microtasks (Promise.then, queueMicrotask)
3. Execute one macrotask (setTimeout, setInterval)
4. Repeat from step 2

Key Points:
- JavaScript is single-threaded
- Event loop handles asynchronous operations
- Microtasks have higher priority than macrotasks
- Don't block the event loop
- Use Web Workers for CPU-intensive tasks
*/

