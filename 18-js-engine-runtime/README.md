# JavaScript Engine & Runtime

This directory contains examples and documentation for JavaScript engine and runtime concepts.

## Files

- **engine-runtime.js** - Execution context, call stack, memory management, garbage collection

## Key Concepts

### Execution Context

Environment where JavaScript code is executed.

**Types:**
- **Global Context**: Created when script runs
- **Function Context**: Created when function is called
- **Eval Context**: Created when eval() is called

**Components:**
- Variable environment
- Lexical environment
- 'this' binding
- Outer environment reference

### Call Stack

LIFO (Last In First Out) data structure tracking function calls.

**Characteristics:**
- One call stack per thread
- Tracks execution context
- Stack overflow on deep recursion
- Synchronous execution

### Memory Management

**Stack Memory:**
- Stores primitive values
- Fixed size
- Fast access
- Automatically managed

**Heap Memory:**
- Stores objects, arrays, functions
- Dynamic size
- Slower access
- Garbage collected

### Garbage Collection

Automatic memory management removing unreferenced objects.

**Mark and Sweep Algorithm:**
1. Mark objects that are reachable
2. Sweep unmarked objects
3. Compact memory

**When objects are collected:**
- No references to object
- Circular references (if no external references)
- Weak references don't prevent collection

### Memory Leaks

Memory that is no longer needed but not released.

**Common Causes:**
- Global variables
- Closures holding references
- Event listeners not removed
- Timers not cleared
- DOM references

### Execution Phases

**Creation Phase:**
- Hoisting
- 'this' binding
- Outer environment setup

**Execution Phase:**
- Code execution
- Variable assignments
- Function calls

### Scope Chain

Chain of execution contexts for variable lookup.

**Lookup Process:**
1. Current execution context
2. Outer execution context
3. Continue up chain
4. Global context

## Best Practices

1. **Avoid memory leaks**
   - Remove event listeners
   - Clear intervals/timeouts
   - Nullify large references

2. **Minimize global variables**
   - Use modules
   - Use IIFE
   - Use const/let

3. **Avoid deep recursion**
   - Use iteration when possible
   - Use tail recursion
   - Set recursion limits

4. **Use weak references**
   - WeakMap for object keys
   - WeakSet for object values
   - Allow garbage collection

5. **Profile memory usage**
   - Use DevTools profiler
   - Monitor heap size
   - Find memory leaks

## Common Issues

### Stack Overflow
```javascript
function infinite() {
    infinite(); // Too deep recursion
}
```

### Memory Leak
```javascript
window.data = largeArray; // Global, never collected
```

### Closure Leak
```javascript
function leak() {
    const large = new Array(1000000);
    return () => large.length; // Holds reference
}
```

## Debugging

### Stack Trace
```javascript
console.trace(); // Show call stack
```

### Memory Profiling
- Chrome DevTools Memory tab
- Take heap snapshots
- Compare snapshots
- Find memory leaks

### Performance API
```javascript
performance.memory.usedJSHeapSize
```

