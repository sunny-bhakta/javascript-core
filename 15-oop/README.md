# Object-Oriented Programming in JavaScript

This directory contains examples and documentation for OOP concepts in JavaScript.

## Files

- **oop-concepts.js** - Encapsulation, inheritance, polymorphism, abstraction, design patterns

## Key Concepts

### Encapsulation

Hiding internal implementation and exposing only necessary interface.

**Techniques:**
- Private fields (`#`) - ES2022
- Closures - Traditional approach
- Getters/Setters - Controlled access

### Inheritance

Creating new classes based on existing ones.

**ES6 Classes:**
```javascript
class Child extends Parent {
    constructor() {
        super(); // Call parent constructor
    }
}
```

**Prototype-based:**
```javascript
Child.prototype = Object.create(Parent.prototype);
```

### Polymorphism

Same interface, different implementations.

**Method Overriding:**
- Child class overrides parent method
- Different behavior for same method name

### Abstraction

Hiding complexity, showing only essential features.

**Abstract Classes:**
- Cannot be instantiated
- Must be extended
- Define interface

### Static Methods/Properties

Belong to class, not instances.

```javascript
class MathUtils {
    static PI = 3.14159;
    static add(a, b) { return a + b; }
}
```

### Getters and Setters

Control property access.

```javascript
get value() { return this._value; }
set value(v) { this._value = v; }
```

## Design Patterns

### Factory Pattern

Create objects without specifying exact class.

```javascript
class Factory {
    static create(type) {
        switch(type) {
            case "A": return new TypeA();
            case "B": return new TypeB();
        }
    }
}
```

### Singleton Pattern

Ensure only one instance exists.

```javascript
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
    }
}
```

### Observer Pattern

One-to-many dependency between objects.

- Subject maintains list of observers
- Notifies observers of state changes

### Mixins

Share behavior across classes.

```javascript
Object.assign(MyClass.prototype, CanFly, CanSwim);
```

## Best Practices

1. **Use classes** for OOP structure
2. **Prefer composition** over deep inheritance
3. **Use private fields** for encapsulation
4. **Override methods** for polymorphism
5. **Use static methods** for utility functions
6. **Abstract base classes** for common interface
7. **Design patterns** for common problems

## Composition vs Inheritance

**Inheritance** (IS-A):
```javascript
class Dog extends Animal { }
```

**Composition** (HAS-A):
```javascript
class Car {
    constructor() {
        this.engine = new Engine();
    }
}
```

**Prefer composition** when:
- Relationship is "has-a" not "is-a"
- Need flexibility
- Avoid deep hierarchies

## Common Patterns

### Base Class
```javascript
class Base {
    constructor() {
        if (this.constructor === Base) {
            throw new Error("Abstract class");
        }
    }
}
```

### Method Override
```javascript
class Child extends Parent {
    method() {
        super.method(); // Call parent
        // Child implementation
    }
}
```

### Private Fields
```javascript
class MyClass {
    #private = 0;
    getPrivate() { return this.#private; }
}
```

