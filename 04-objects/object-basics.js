/**
 * OBJECTS IN JAVASCRIPT
 * 
 * Objects are collections of key-value pairs (properties).
 * JavaScript objects are dynamic - properties can be added/removed.
 */

// ============================================
// OBJECT LITERAL
// ============================================
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Accessing properties
console.log(person.name); // "John" (dot notation)
console.log(person["age"]); // 30 (bracket notation)

// Dynamic property access
const property = "name";
console.log(person[property]); // "John"

// ============================================
// OBJECT METHODS
// ============================================
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract(a, b) { // Shorthand method syntax
        return a - b;
    },
    multiply: (a, b) => a * b,
    divide(a, b) {
        return a / b;
    }
};

console.log(calculator.add(5, 3)); // 8

// Method with 'this'
const person2 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    // Arrow function doesn't have its own 'this'
    getFullName: () => {
        // 'this' refers to outer scope, not person2
        return `${this.firstName} ${this.lastName}`; // undefined undefined
    }
};

console.log(person2.fullName()); // "John Doe"

// ============================================
// ADDING AND MODIFYING PROPERTIES
// ============================================
const car = {
    make: "Toyota"
};

// Add properties
car.model = "Camry";
car.year = 2020;
car["color"] = "blue";

// Modify properties
car.year = 2021;

// Delete properties
delete car.color;

// ============================================
// COMPUTED PROPERTY NAMES
// ============================================
const propName = "dynamic";
const obj = {
    [propName]: "value",
    [`${propName}2`]: "value2"
};

console.log(obj.dynamic); // "value"
console.log(obj.dynamic2); // "value2"

// ============================================
// OBJECT DESTRUCTURING
// ============================================
const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};

// Basic destructuring
const { name, age } = user;
console.log(name, age); // "John" 30

// Renaming variables
const { name: userName, age: userAge } = user;
console.log(userName, userAge); // "John" 30

// Default values
const { name: n, city = "Unknown" } = user;
console.log(n, city); // "John" "Unknown"

// Nested destructuring
const user2 = {
    name: "Jane",
    address: {
        street: "123 Main St",
        city: "New York"
    }
};

const { address: { city: userCity } } = user2;
console.log(userCity); // "New York"

// Rest in destructuring
const { name: n2, ...rest } = user;
console.log(rest); // { age: 30, email: "john@example.com" }

// ============================================
// OBJECT METHODS (Built-in)
// ============================================

// Object.keys() - returns array of keys
const keys = Object.keys(user);
console.log(keys); // ["name", "age", "email"]

// Object.values() - returns array of values
const values = Object.values(user);
console.log(values); // ["John", 30, "john@example.com"]

// Object.entries() - returns array of [key, value] pairs
const entries = Object.entries(user);
console.log(entries); // [["name", "John"], ["age", 30], ["email", "john@example.com"]]

// Object.assign() - copies properties from source to target
const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2, c: 3 }

// Object.assign() for cloning (shallow copy)
const clone = Object.assign({}, user);
console.log(clone); // { name: "John", age: 30, email: "john@example.com" }

// Object.freeze() - prevents modifications
const frozen = Object.freeze({ x: 1 });
// frozen.x = 2; // Error in strict mode
// delete frozen.x; // Error
console.log(frozen.x); // 1

// Object.seal() - prevents adding/deleting, but allows modification
const sealed = Object.seal({ x: 1 });
sealed.x = 2; // OK
// sealed.y = 3; // Error
// delete sealed.x; // Error

// Object.create() - creates object with specified prototype
const proto = { greet: function() { return "Hello"; } };
const newObj = Object.create(proto);
console.log(newObj.greet()); // "Hello"

// ============================================
// THIS KEYWORD
// ============================================
const person3 = {
    name: "John",
    greet: function() {
        return `Hello, I'm ${this.name}`;
    },
    greetArrow: () => {
        return `Hello, I'm ${this.name}`; // 'this' is not person3
    }
};

console.log(person3.greet()); // "Hello, I'm John"
console.log(person3.greetArrow()); // "Hello, I'm undefined"

// 'this' in methods
const obj2 = {
    value: 10,
    getValue: function() {
        return this.value;
    },
    getValueArrow: () => {
        return this.value; // 'this' refers to outer scope
    }
};

console.log(obj2.getValue()); // 10
console.log(obj2.getValueArrow()); // undefined

// 'this' binding
const obj3 = {
    name: "Original"
};

function getName() {
    return this.name;
}

// call() - calls function with specific 'this'
console.log(getName.call(obj3)); // "Original"

// apply() - same as call, but arguments as array
console.log(getName.apply(obj3)); // "Original"

// bind() - creates new function with bound 'this'
const boundGetName = getName.bind(obj3);
console.log(boundGetName()); // "Original"

// ============================================
// PROPERTY DESCRIPTORS
// ============================================
const obj4 = {};

// Define property with descriptor
Object.defineProperty(obj4, "readOnly", {
    value: 42,
    writable: false,
    enumerable: true,
    configurable: false
});

// obj4.readOnly = 100; // Error in strict mode
console.log(obj4.readOnly); // 42

// Get property descriptor
const descriptor = Object.getOwnPropertyDescriptor(obj4, "readOnly");
console.log(descriptor);

// Getters and Setters
const obj5 = {
    _value: 0,
    get value() {
        return this._value;
    },
    set value(newValue) {
        if (newValue >= 0) {
            this._value = newValue;
        }
    }
};

obj5.value = 10;
console.log(obj5.value); // 10
obj5.value = -5; // Ignored (setter validation)
console.log(obj5.value); // 10

// ============================================
// SPREAD OPERATOR WITH OBJECTS
// ============================================
const obj6 = { a: 1, b: 2 };
const obj7 = { c: 3, d: 4 };

// Spread to create new object
const merged = { ...obj6, ...obj7 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// Override properties
const updated = { ...obj6, b: 20 };
console.log(updated); // { a: 1, b: 20 }

// ============================================
// OBJECT COMPARISON
// ============================================
const obj8 = { a: 1 };
const obj9 = { a: 1 };
const obj10 = obj8;

console.log(obj8 === obj9); // false (different references)
console.log(obj8 === obj10); // true (same reference)

// Shallow comparison
function shallowEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false;
    
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) return false;
    }
    
    return true;
}

console.log(shallowEqual(obj8, obj9)); // true

