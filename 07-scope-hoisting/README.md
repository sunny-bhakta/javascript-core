# Scope and Hoisting in JavaScript

This directory contains examples and documentation for scope and hoisting in JavaScript.

## Files

- **scope.js** - Global, function, and block scope, lexical scoping, scope chain
- **hoisting.js** - Variable and function hoisting, temporal dead zone

## Key Concepts

### Scope Types

#### Global Scope
- Variables declared outside any function
- Accessible from anywhere
- Can pollute global namespace

#### Function Scope
- Variables declared inside function
- Accessible only within function
- `var` is function-scoped

#### Block Scope (ES6)
- Variables declared in blocks (`{}`)
- `let` and `const` are block-scoped
- More predictable than function scope

### Scope Chain

JavaScript looks up variables in scope chain:
1. Current scope
2. Outer function scope
3. Global scope

### Lexical Scoping

Functions have access to variables in their outer (lexical) scope, even after outer function returns (closures).

### Hoisting

JavaScript moves declarations to the top of their scope.

#### var Hoisting
- Declaration hoisted
- Initialized with `undefined`
- Can access before declaration (returns `undefined`)

#### Function Declaration Hoisting
- Fully hoisted
- Can call before declaration
- Function and body are hoisted

#### let/const Hoisting
- Declarations hoisted
- Not initialized (Temporal Dead Zone)
- Cannot access before declaration (error)

#### Function Expression Hoisting
- Only `var` declaration hoisted (if using `var`)
- Function not hoisted
- Cannot call before assignment

### Temporal Dead Zone (TDZ)

Period between start of scope and declaration where `let`/`const` cannot be accessed.

## Best Practices

1. **Use `let` and `const`** instead of `var`
   - Block scope prevents many issues
   - TDZ prevents accidental access

2. **Declare variables at top of scope**
   - Makes code clearer
   - Avoids hoisting confusion

3. **Use function declarations for hoisting needs**
   - If you need to call before definition

4. **Be aware of scope in loops**
   - Use `let` in `for` loops
   - Each iteration gets own variable

5. **Avoid global variables**
   - Use modules or IIFE
   - Prevent namespace pollution

6. **Understand closure scope**
   - Variables persist in closures
   - Be careful with loops

## Common Issues

### Issue 1: Loop with var
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // 3, 3, 3
}
// Solution: Use let
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // 0, 1, 2
}
```

### Issue 2: Variable Shadowing
```javascript
var name = "global";
function test() {
    console.log(name); // undefined (not "global"!)
    var name = "local";
}
```

### Issue 3: Function vs Variable
```javascript
var fn = "variable";
function fn() { return "function"; }
console.log(typeof fn); // "string" (variable wins)
```

## Scope Comparison

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Hoisted | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| Redeclare | Yes | No | No |
| Reassign | Yes | Yes | No |

## Hoisting Order

1. Function declarations (fully hoisted)
2. var declarations (hoisted, undefined)
3. let/const declarations (hoisted, TDZ)
4. Class declarations (hoisted, TDZ)

