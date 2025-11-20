# Regular Expressions in JavaScript

This directory contains examples and documentation for regular expressions.

## Files

- **regex-basics.js** - Regex patterns, methods, flags, common patterns

## Key Concepts

### Creating Regex

- Literal: `/pattern/`
- Constructor: `new RegExp("pattern")`
- With flags: `/pattern/gi` or `new RegExp("pattern", "gi")`

### Character Classes

- `[abc]` - Any character in brackets
- `[^abc]` - Any character NOT in brackets
- `[a-z]` - Character range
- `\d` - Digit `[0-9]`
- `\w` - Word character `[a-zA-Z0-9_]`
- `\s` - Whitespace
- `.` - Any character (except newline)

### Quantifiers

- `*` - Zero or more
- `+` - One or more
- `?` - Zero or one
- `{n}` - Exactly n times
- `{n,}` - n or more
- `{n,m}` - Between n and m

### Anchors

- `^` - Start of string
- `$` - End of string
- `\b` - Word boundary

### Groups

- `(abc)` - Capturing group
- `(?:abc)` - Non-capturing group
- `(?<name>abc)` - Named group (ES2018)

### Lookahead/Lookbehind

- `(?=...)` - Positive lookahead
- `(?!...)` - Negative lookahead
- `(?<=...)` - Positive lookbehind
- `(?<!...)` - Negative lookbehind

### Flags

- `g` - Global (all matches)
- `i` - Case insensitive
- `m` - Multiline
- `s` - Dotall
- `u` - Unicode
- `y` - Sticky

### Regex Methods

- `test()` - Returns true/false
- `exec()` - Returns match or null
- `match()` - String method, returns matches
- `matchAll()` - Returns all matches
- `search()` - Returns index
- `replace()` - Replace matches
- `replaceAll()` - Replace all matches
- `split()` - Split by pattern

## Common Patterns

### Email
```javascript
/^[^\s@]+@[^\s@]+\.[^\s@]+$/
```

### Phone
```javascript
/^\+?[\d\s-()]+$/
```

### URL
```javascript
/^https?:\/\/.+/
```

### Password
```javascript
/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
```

## Best Practices

1. Use regex for pattern matching
2. Test regex thoroughly
3. Use appropriate flags
4. Consider performance for complex patterns
5. Use named groups for clarity
6. Escape special characters
7. Use non-capturing groups when not needed
8. Prefer string methods for simple operations

