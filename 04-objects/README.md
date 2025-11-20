# Objects in JavaScript

This directory contains examples and documentation for objects in JavaScript.

## Files

- **object-basics.js** - Object literals, methods, destructuring, 'this' keyword, property descriptors
- **prototypes.js** - Prototypal inheritance, constructor functions, prototype chain
- **classes.js** - ES6 classes, inheritance, static methods, private fields, getters/setters

## Key Concepts

### Object Basics

#### Object Literal
- Collection of key-value pairs
- Properties can be strings, numbers, or symbols
- Methods are functions as properties

#### Accessing Properties
- Dot notation: `obj.property`
- Bracket notation: `obj["property"]`
- Dynamic access: `obj[variable]`

#### Object Methods
- Functions defined as object properties
- Can use `this` to refer to the object
- Shorthand syntax: `{ method() {} }`

### Destructuring

Extract properties from objects:
```javascript
const { name, age } = person;
const { name: userName } = person; // Rename
const { city = "Unknown" } = person; // Default
```

### The 'this' Keyword

- In methods: refers to the object
- In arrow functions: refers to outer scope
- Can be bound with `call()`, `apply()`, `bind()`

### Prototypes

JavaScript uses prototypal inheritance:
- Every object has a prototype
- Properties/methods are looked up in prototype chain
- `Object.prototype` is at the top of the chain

### Constructor Functions

Functions used with `new` to create objects:
```javascript
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function() { ... };
```

### ES6 Classes

Syntactic sugar over prototypes:
- `class` keyword
- `constructor` method
- `extends` for inheritance
- `super` to call parent
- Static methods and fields
- Private fields with `#`

## Built-in Object Methods

- `Object.keys(obj)` - Array of keys
- `Object.values(obj)` - Array of values
- `Object.entries(obj)` - Array of [key, value] pairs
- `Object.assign(target, source)` - Copy properties
- `Object.create(proto)` - Create with prototype
- `Object.freeze(obj)` - Prevent modifications
- `Object.seal(obj)` - Prevent add/delete
- `Object.getPrototypeOf(obj)` - Get prototype

## Best Practices

1. Use object literals for simple objects
2. Use classes for complex objects with behavior
3. Prefer `const` for object declarations
4. Use destructuring for cleaner code
5. Understand `this` binding (use arrow functions carefully)
6. Use `Object.freeze()` for immutable objects
7. Prefer composition over deep inheritance
8. Use private fields (`#`) for encapsulation
9. Use getters/setters for computed properties
10. Understand prototype chain for debugging

## Common Patterns

### Factory Function
```javascript
function createUser(name) {
    return { name, greet: () => `Hello, ${name}` };
}
```

### Module Pattern
```javascript
const module = (function() {
    let private = 0;
    return { public: () => private };
})();
```

### Mixins
```javascript
Object.assign(MyClass.prototype, CanFly, CanSwim);
```

