# Design Patterns

This directory contains examples and documentation for design patterns in JavaScript.

## Files

- **design-patterns.js** - Creational, structural, and behavioral patterns

## Pattern Categories

### Creational Patterns

Create objects in a controlled way.

**Patterns:**
- **Singleton** - Single instance
- **Factory** - Create objects without specifying class
- **Builder** - Construct complex objects step by step
- **Prototype** - Clone objects

### Structural Patterns

Compose objects into larger structures.

**Patterns:**
- **Module** - Encapsulate code
- **Facade** - Simplify interface
- **Adapter** - Adapt interface
- **Decorator** - Add behavior dynamically

### Behavioral Patterns

Define communication between objects.

**Patterns:**
- **Observer** - One-to-many dependency
- **Pub/Sub** - Event-driven communication
- **Strategy** - Interchangeable algorithms
- **Command** - Encapsulate requests
- **Chain of Responsibility** - Pass requests along chain
- **State** - Change behavior with state

## JavaScript-Specific Patterns

### Mixin Pattern

Share behavior across classes.

```javascript
Object.assign(MyClass.prototype, CanFly, CanSwim);
```

### Revealing Module Pattern

Expose only public API.

```javascript
const Module = (function() {
    let private = 0;
    return {
        public: () => private
    };
})();
```

## Best Practices

1. **Use patterns appropriately** - Don't over-engineer
2. **Understand the problem** - Choose right pattern
3. **Keep it simple** - Prefer simple solutions
4. **Follow JavaScript idioms** - Use language features
5. **Document patterns** - Explain why used

## When to Use

### Singleton
- Database connections
- Configuration objects
- Logging

### Factory
- Creating objects based on type
- Complex object creation
- Dependency injection

### Observer
- Event systems
- Model-View updates
- Reactive programming

### Strategy
- Multiple algorithms
- Runtime algorithm selection
- Eliminate conditionals

## Common Patterns in JavaScript

### Module Pattern
Most common for encapsulation.

### Observer Pattern
Used in event systems, React, Vue.

### Factory Pattern
Used in React.createElement, jQuery.

### Decorator Pattern
Used in higher-order functions, middleware.

