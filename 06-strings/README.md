# Strings in JavaScript

This directory contains examples and documentation for strings in JavaScript.

## Files

- **string-methods.js** - All string methods, template literals, manipulation

## Key Concepts

### String Creation

- Single quotes: `'Hello'`
- Double quotes: `"Hello"`
- Template literals: `` `Hello` ``
- String constructor: `new String("Hello")`

### Template Literals (ES6)

- String interpolation: `` `Hello ${name}` ``
- Multiline strings
- Tagged templates
- Expression evaluation

### String Properties

- `length` - String length

### Accessing Characters

- `charAt(index)` - Get character at index
- `[index]` - Bracket notation
- `charCodeAt(index)` - Get character code

### Searching

- `indexOf(substring, start)` - Find first occurrence
- `lastIndexOf(substring)` - Find last occurrence
- `includes(substring)` - Check if contains
- `startsWith(substring)` - Check if starts with
- `endsWith(substring)` - Check if ends with
- `search(regex)` - Search with regex
- `match(regex)` - Match regex
- `matchAll(regex)` - All matches

### Extracting Substrings

- `substring(start, end)` - Extract substring
- `slice(start, end)` - Extract (supports negative)
- `substr()` - Deprecated

### Modifying

- `toUpperCase()` - Convert to uppercase
- `toLowerCase()` - Convert to lowercase
- `trim()` - Remove whitespace from ends
- `trimStart()` / `trimLeft()` - Remove from start
- `trimEnd()` / `trimRight()` - Remove from end

### Replacing

- `replace(search, replace)` - Replace first
- `replaceAll(search, replace)` - Replace all
- Both support regex

### Splitting and Joining

- `split(separator, limit)` - Split into array
- `join(separator)` - Join array (Array method)

### Padding

- `padStart(length, padString)` - Pad at start
- `padEnd(length, padString)` - Pad at end

### Other Methods

- `repeat(count)` - Repeat string
- `codePointAt(index)` - Get code point
- `String.fromCharCode()` - Create from code
- `String.fromCodePoint()` - Create from code point
- `localeCompare(str)` - Compare strings
- `toLocaleUpperCase()` - Locale-aware uppercase
- `toLocaleLowerCase()` - Locale-aware lowercase

## Important Notes

1. **Strings are immutable** - Methods return new strings
2. Use template literals for interpolation
3. Use `includes()` instead of `indexOf() !== -1`
4. Use `slice()` instead of `substr()`
5. Be careful with `substring()` - it swaps if start > end
6. Use `trim()` to clean user input
7. Use `split()` and `join()` for string manipulation

## Best Practices

1. Use template literals for string interpolation
2. Use `includes()` for substring checks
3. Use `trim()` on user input
4. Use `slice()` for substring extraction
5. Use regex with `replace()` for complex replacements
6. Use `split()` and array methods for complex manipulation
7. Use `padStart()`/`padEnd()` for formatting
8. Consider locale methods for internationalization

## Common Patterns

### Capitalize First Letter
```javascript
str.charAt(0).toUpperCase() + str.slice(1)
```

### Reverse String
```javascript
str.split("").reverse().join("")
```

### Check Palindrome
```javascript
str === str.split("").reverse().join("")
```

### Remove Whitespace
```javascript
str.trim().replace(/\s+/g, " ")
```

### Extract Numbers
```javascript
str.match(/\d+/g)
```

