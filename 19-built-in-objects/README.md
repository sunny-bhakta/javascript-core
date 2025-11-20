# Built-in Objects & Methods

This directory contains examples and documentation for JavaScript built-in objects and methods.

## Files

- **built-in-objects.js** - Math, Date, JSON, Number, String, Array, Object methods

## Key Objects

### Math Object

Mathematical operations and constants.

**Constants:**
- `Math.PI` - Pi
- `Math.E` - Euler's number
- `Math.LN2` - Natural log of 2

**Methods:**
- `round()`, `floor()`, `ceil()`, `trunc()` - Rounding
- `max()`, `min()` - Min/Max
- `pow()`, `sqrt()`, `cbrt()` - Powers and roots
- `random()` - Random number
- `sin()`, `cos()`, `tan()` - Trigonometry
- `log()`, `log10()`, `log2()` - Logarithms
- `abs()`, `sign()` - Absolute value and sign

### Date Object

Date and time operations.

**Creation:**
- `new Date()` - Current date/time
- `new Date(year, month, day)` - Specific date
- `new Date(string)` - Parse string
- `new Date(timestamp)` - From timestamp

**Get Methods:**
- `getFullYear()`, `getMonth()`, `getDate()`
- `getHours()`, `getMinutes()`, `getSeconds()`
- `getTime()` - Timestamp
- UTC variants available

**Set Methods:**
- `setFullYear()`, `setMonth()`, `setDate()`
- `setHours()`, `setMinutes()`, `setSeconds()`

**Formatting:**
- `toString()`, `toDateString()`, `toTimeString()`
- `toISOString()`, `toLocaleString()`

### JSON Object

JSON serialization and parsing.

**Methods:**
- `JSON.stringify(obj)` - Convert to JSON string
- `JSON.parse(string)` - Parse JSON string

**Options:**
- Replacer function (filter/transform)
- Space parameter (pretty print)
- Reviver function (transform on parse)

### Number Object

Number operations and constants.

**Constants:**
- `MAX_VALUE`, `MIN_VALUE`
- `MAX_SAFE_INTEGER`, `MIN_SAFE_INTEGER`
- `POSITIVE_INFINITY`, `NEGATIVE_INFINITY`
- `NaN`, `EPSILON`

**Static Methods:**
- `isFinite()`, `isInteger()`, `isNaN()`, `isSafeInteger()`
- `parseFloat()`, `parseInt()`

**Instance Methods:**
- `toFixed()`, `toPrecision()`, `toExponential()`
- `toString()` - With radix (base)

### String Object

String manipulation methods.

**Search:**
- `indexOf()`, `lastIndexOf()`, `search()`
- `match()`, `includes()`, `startsWith()`, `endsWith()`

**Extract:**
- `slice()`, `substring()`, `substr()` (deprecated)

**Modify:**
- `replace()`, `replaceAll()`
- `toUpperCase()`, `toLowerCase()`
- `trim()`, `trimStart()`, `trimEnd()`

**Other:**
- `split()`, `join()` (Array method)
- `padStart()`, `padEnd()`, `repeat()`
- `charAt()`, `charCodeAt()`, `codePointAt()`

### Array Object

Array static methods.

**Static Methods:**
- `Array.from()` - Create from array-like
- `Array.of()` - Create from arguments
- `Array.isArray()` - Check if array

### Object Methods

Object utility methods.

**Methods:**
- `Object.keys()` - Get keys
- `Object.values()` - Get values
- `Object.entries()` - Get [key, value] pairs
- `Object.assign()` - Copy properties
- `Object.create()` - Create with prototype
- `Object.freeze()` - Prevent modifications
- `Object.seal()` - Prevent add/delete
- `Object.fromEntries()` - Create from entries

## Best Practices

1. **Use Math methods** for mathematical operations
2. **Use Date methods** for date manipulation
3. **Use JSON** for serialization (not eval)
4. **Use Number methods** for number validation
5. **Use String methods** for string manipulation
6. **Use Object methods** for object operations
7. **Check browser support** for newer methods

## Common Patterns

### Random Number
```javascript
Math.floor(Math.random() * (max - min + 1)) + min;
```

### Date Formatting
```javascript
date.toLocaleDateString("en-US");
```

### JSON with Error Handling
```javascript
try {
    const obj = JSON.parse(jsonString);
} catch (error) {
    console.error("Invalid JSON");
}
```

### Number Validation
```javascript
if (Number.isFinite(value) && Number.isInteger(value)) {
    // Valid integer
}
```

