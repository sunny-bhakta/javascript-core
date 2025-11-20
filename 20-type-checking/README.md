# Type Checking & Validation

This directory contains examples and documentation for type checking and validation in JavaScript.

## Files

- **type-checking.js** - typeof, instanceof, type guards, validation

## Key Concepts

### typeof Operator

Returns string indicating type of operand.

**Returns:**
- `"string"` - String
- `"number"` - Number (including NaN)
- `"boolean"` - Boolean
- `"undefined"` - Undefined
- `"object"` - Object, Array, null (bug!)
- `"function"` - Function
- `"symbol"` - Symbol
- `"bigint"` - BigInt

**Limitations:**
- `typeof null` returns `"object"` (bug)
- Arrays return `"object"`
- Need additional checks for these

### instanceof Operator

Checks if object is instance of constructor.

```javascript
[] instanceof Array; // true
obj instanceof MyClass; // true
```

**Limitations:**
- Doesn't work across iframes
- Primitives return false
- Can be fooled by prototype manipulation

### Type Checking Methods

**Array:**
- `Array.isArray()` - Best way to check arrays

**Number:**
- `Number.isNaN()` - Check for NaN
- `Number.isFinite()` - Check if finite
- `Number.isInteger()` - Check if integer
- `Number.isSafeInteger()` - Check if safe integer

**Object:**
- `Object.prototype.toString.call()` - Get type string

### Type Guards

Functions that narrow types.

```javascript
function isString(value) {
    return typeof value === "string";
}
```

### Validation

Check if values meet criteria.

**Common Validations:**
- Email format
- Number ranges
- String length
- Required properties
- Format patterns

## Best Practices

1. **Use strict equality** (`===`) for type checking
2. **Use Array.isArray()** for arrays
3. **Use Number.isNaN()** instead of global isNaN()
4. **Check for null explicitly** (typeof bug)
5. **Use type guards** for complex checks
6. **Validate user input** before processing
7. **Use validation schemas** for complex data

## Common Patterns

### Check if Value Exists
```javascript
value != null; // Not null and not undefined
```

### Check Array
```javascript
Array.isArray(value);
```

### Check NaN
```javascript
Number.isNaN(value);
```

### Type Guard
```javascript
function isString(value): value is string {
    return typeof value === "string";
}
```

### Validation Schema
```javascript
const schema = {
    name: (v) => typeof v === "string",
    age: (v) => Number.isInteger(v) && v > 0
};
```

## Type Coercion

JavaScript automatically converts types in some contexts.

**Examples:**
- `"5" + 3` → `"53"` (string concatenation)
- `"5" - 3` → `2` (number subtraction)
- `true + 1` → `2` (boolean to number)

**Avoid:**
- Use strict equality (`===`)
- Explicit type conversion
- Type guards before operations

