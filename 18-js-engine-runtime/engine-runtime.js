/**
 * JAVASCRIPT ENGINE & RUNTIME
 * 
 * Understanding how JavaScript executes code:
 * - Execution Context
 * - Call Stack
 * - Memory Management
 * - Garbage Collection
 * - Event Loop
 */

// ============================================
// EXECUTION CONTEXT
// ============================================

// Global Execution Context
// Created when script first runs
// Contains global object (window in browser, global in Node.js)
// Contains 'this' reference

console.log(this); // Global object

// Function Execution Context
// Created when function is called
function example() {
    // New execution context created
    const localVar = "local";
    console.log(localVar);
}

example();

// ============================================
// CALL STACK
// ============================================

// LIFO (Last In First Out) data structure
// Tracks function calls

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
    // Call stack: third -> second -> first -> global
}

first();
// Output: First, Second, Third

// Stack overflow example
function recursive() {
    recursive(); // Infinite recursion causes stack overflow
}
// recursive(); // Uncomment to see stack overflow

// ============================================
// MEMORY MANAGEMENT
// ============================================

// Stack Memory (Primitive values)
let num = 10; // Stored in stack
let str = "hello"; // Stored in stack

// Heap Memory (Objects, arrays, functions)
let obj = { name: "John" }; // Reference stored in stack, object in heap
let arr = [1, 2, 3]; // Reference in stack, array in heap

// Memory allocation
function allocateMemory() {
    const largeArray = new Array(1000000).fill(0);
    return largeArray;
}

// ============================================
// GARBAGE COLLECTION
// ============================================

// Automatic memory management
// Removes objects that are no longer referenced

function createObject() {
    const obj = { data: "temporary" };
    return obj;
}

const reference = createObject();
// obj is still referenced, not garbage collected

// Unreference to allow garbage collection
// reference = null; // Now obj can be garbage collected

// ============================================
// MEMORY LEAKS
// ============================================

// Common memory leak patterns

// 1. Global variables
function leak1() {
    window.data = new Array(1000000); // Global, never garbage collected
}

// 2. Closures holding references
function leak2() {
    const largeData = new Array(1000000);
    return function() {
        console.log(largeData.length); // Closure holds reference
    };
}

// 3. Event listeners not removed
function leak3() {
    const button = document.querySelector("button");
    button.addEventListener("click", function() {
        // Listener holds reference to button
    });
    // If button removed, listener still holds reference
}

// 4. Timers not cleared
function leak4() {
    const interval = setInterval(() => {
        // Interval keeps running
    }, 1000);
    // clearInterval(interval); // Must clear
}

// ============================================
// EXECUTION PHASES
// ============================================

// 1. Creation Phase (Hoisting)
// - Variable declarations hoisted
// - Function declarations hoisted
// - 'this' binding
// - Outer environment reference

// 2. Execution Phase
// - Code executed line by line
// - Assignments made
// - Function calls executed

// Example
console.log(x); // undefined (hoisted)
var x = 5;
console.log(x); // 5

// ============================================
// SCOPE CHAIN
// ============================================

// Each execution context has reference to outer environment
// Forms a chain for variable lookup

const globalVar = "global";

function outer() {
    const outerVar = "outer";
    
    function inner() {
        const innerVar = "inner";
        // Can access: innerVar, outerVar, globalVar
        console.log(innerVar, outerVar, globalVar);
    }
    
    inner();
}

outer();

// ============================================
// 'THIS' BINDING
// ============================================

// 'this' is determined by how function is called

// Global context
console.log(this); // Global object

// Function context
function regularFunction() {
    console.log(this); // Global object (or undefined in strict mode)
}

// Method context
const obj = {
    name: "Object",
    method: function() {
        console.log(this.name); // "Object"
    }
};

obj.method();

// Arrow functions
const arrowObj = {
    name: "Arrow",
    method: () => {
        console.log(this); // Inherits from outer scope
    }
};

// ============================================
// CLOSURES AND MEMORY
// ============================================

// Closures keep outer scope in memory
function createClosure() {
    const largeData = new Array(1000).fill(0);
    
    return function() {
        // Closure holds reference to largeData
        // largeData stays in memory as long as closure exists
        return largeData.length;
    };
}

const closure = createClosure();
// largeData still in memory

// ============================================
// PERFORMANCE CONSIDERATIONS
// ============================================

// 1. Avoid deep call stacks
function deepRecursion(depth) {
    if (depth <= 0) return;
    return deepRecursion(depth - 1); // Deep stack
}

// 2. Use iteration instead of recursion when possible
function iterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 3. Avoid memory leaks
// - Remove event listeners
// - Clear intervals/timeouts
// - Nullify large references
// - Avoid global variables

// 4. Use weak references when appropriate
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, "data");
// obj can be garbage collected if no other references

// ============================================
// DEBUGGING EXECUTION
// ============================================

// Stack trace
function a() {
    b();
}

function b() {
    c();
}

function c() {
    console.trace(); // Shows call stack
}

a();

// Error stack
try {
    throw new Error("Test error");
} catch (error) {
    console.log(error.stack); // Stack trace
}

// ============================================
// RUNTIME ENVIRONMENT
// ============================================

// Browser Runtime
// - JavaScript Engine (V8, SpiderMonkey, etc.)
// - Web APIs (DOM, fetch, setTimeout, etc.)
// - Event Loop
// - Callback Queue

// Node.js Runtime
// - JavaScript Engine (V8)
// - Node APIs (fs, http, etc.)
// - Event Loop
// - Callback Queue

// ============================================
// MEMORY PROFILING
// ============================================

// Chrome DevTools Memory Profiler
// - Take heap snapshot
// - Compare snapshots
// - Find memory leaks
// - Analyze memory usage

// Performance API
if (performance.memory) {
    console.log("Used:", performance.memory.usedJSHeapSize);
    console.log("Total:", performance.memory.totalJSHeapSize);
    console.log("Limit:", performance.memory.jsHeapSizeLimit);
}

// ============================================
// OPTIMIZATION TIPS
// ============================================

// 1. Minimize global variables
// 2. Use const/let instead of var
// 3. Avoid creating functions in loops
// 4. Use object pooling for frequently created objects
// 5. Debounce/throttle event handlers
// 6. Use requestAnimationFrame for animations
// 7. Lazy load modules
// 8. Use Web Workers for CPU-intensive tasks

