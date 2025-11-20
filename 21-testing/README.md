# Testing Concepts

This directory contains examples and documentation for testing in JavaScript.

## Files

- **testing.js** - Unit testing, mocking, stubbing, test structure

## Key Concepts

### Unit Testing

Testing individual units of code in isolation.

**Characteristics:**
- Fast execution
- Isolated tests
- Test one thing
- Easy to debug

### Test Structure

**Arrange-Act-Assert (AAA):**
1. Arrange - Set up test data
2. Act - Execute code
3. Assert - Verify results

### Assertions

Check if conditions are met.

**Common Assertions:**
- `toBe()` - Strict equality
- `toEqual()` - Deep equality
- `toBeTruthy()` - Truthy value
- `toBeFalsy()` - Falsy value
- `toThrow()` - Function throws

### Mocking

Replace dependencies with controlled versions.

**Use Cases:**
- External APIs
- Database calls
- File system
- Time-dependent code

### Stubbing

Replace function with simpler version.

**Difference from Mock:**
- Stub returns predefined value
- Mock tracks calls and behavior

### Spy

Track function calls without replacing.

**Use Cases:**
- Verify function was called
- Check call arguments
- Track call count

### Test Frameworks

**Popular Frameworks:**
- Jest - Most popular
- Mocha - Flexible
- Jasmine - BDD style
- Vitest - Fast, Vite-based

## Best Practices

1. **Write tests first** (TDD)
2. **Test one thing** per test
3. **Use descriptive names**
4. **Keep tests independent**
5. **Test edge cases**
6. **Test error cases**
7. **Use mocks** for dependencies
8. **Keep tests fast**
9. **Maintain coverage**
10. **Refactor tests** with code

## Test Types

### Unit Tests
Test individual functions/components.

### Integration Tests
Test multiple components together.

### End-to-End Tests
Test complete user flows.

## Common Patterns

### Test Structure
```javascript
test("description", () => {
    // Arrange
    const input = setup();
    
    // Act
    const result = function(input);
    
    // Assert
    expect(result).toBe(expected);
});
```

### Async Test
```javascript
test("async test", async () => {
    const result = await asyncFunction();
    expect(result).toBe(expected);
});
```

### Mock Function
```javascript
const mockFn = jest.fn();
mockFn.mockReturnValue(42);
expect(mockFn()).toBe(42);
```

### Error Test
```javascript
test("throws error", () => {
    expect(() => function()).toThrow("Error message");
});
```

## Test Coverage

Measure how much code is tested.

**Metrics:**
- Line coverage
- Function coverage
- Branch coverage
- Statement coverage

**Tools:**
- Istanbul/nyc
- Jest coverage
- c8

