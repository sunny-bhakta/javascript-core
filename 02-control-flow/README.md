# Control Flow in JavaScript

This directory contains examples and documentation for control flow concepts in JavaScript.

## Files

- **conditionals.js** - if/else statements, switch statements, ternary operator
- **loops.js** - for, while, do-while, for...in, for...of loops, break, continue

## Key Concepts

### Conditional Statements

#### if/else
- Basic decision making
- Supports multiple conditions with `else if`
- Can be nested for complex logic

#### switch
- Useful for multiple discrete values
- Uses `break` to prevent fall-through
- Has `default` case for unmatched values

#### Ternary Operator
- Concise conditional expressions
- Syntax: `condition ? valueIfTrue : valueIfFalse`
- Can be nested (but use sparingly)

### Loops

#### for Loop
- Most common loop type
- Syntax: `for (initialization; condition; increment)`
- Best for known number of iterations

#### while Loop
- Continues while condition is true
- May not execute if condition is false initially
- Good for unknown number of iterations

#### do-while Loop
- Executes at least once
- Checks condition after execution
- Useful when you need guaranteed execution

#### for...in Loop
- Iterates over object properties
- Returns keys/indexes
- Not recommended for arrays (use for...of)

#### for...of Loop
- Iterates over iterable values (arrays, strings, Sets, Maps)
- Returns actual values
- Modern, preferred for arrays

### Control Flow Keywords

- **break** - Exits the loop immediately
- **continue** - Skips to next iteration
- **Labels** - Can label loops for breaking outer loops

## Best Practices

1. Use `for...of` for arrays instead of `for...in`
2. Always use `break` in switch cases (unless intentional fall-through)
3. Prefer early returns in functions over nested if-else
4. Use array methods (map, filter, reduce) for functional approach
5. Avoid deep nesting - use guard clauses
6. Use meaningful variable names in loops
7. Cache array length in loops if performance is critical

## Common Patterns

### Early Return Pattern
```javascript
function process(data) {
    if (!data) return null;
    if (!data.isValid) return null;
    // Main logic
}
```

### Guard Clauses
```javascript
if (condition1) return;
if (condition2) return;
// Main logic
```

### Loop with Break
```javascript
for (let item of items) {
    if (item.isTarget) {
        process(item);
        break;
    }
}
```

