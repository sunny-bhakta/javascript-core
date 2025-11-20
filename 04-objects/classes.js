/**
 * ES6 CLASSES
 * 
 * Classes are syntactic sugar over JavaScript's prototypal inheritance.
 * They provide a cleaner way to work with constructors and prototypes.
 */

// ============================================
// BASIC CLASS SYNTAX
// ============================================
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    getAge() {
        return this.age;
    }
}

const person = new Person("John", 30);
console.log(person.greet()); // "Hello, I'm John"

// ============================================
// CLASS INHERITANCE
// ============================================
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    eat() {
        return `${this.name} is eating`;
    }
    
    sleep() {
        return `${this.name} is sleeping`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Must call super() before using 'this'
        this.breed = breed;
    }
    
    bark() {
        return `${this.name} is barking`;
    }
    
    // Override parent method
    eat() {
        return `${this.name} the ${this.breed} is eating`;
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.eat()); // "Buddy the Golden Retriever is eating"
console.log(dog.sleep()); // "Buddy is sleeping" (inherited)
console.log(dog.bark()); // "Buddy is barking"

// ============================================
// STATIC METHODS
// ============================================
class MathUtils {
    static add(a, b) {
        return a + b;
    }
    
    static subtract(a, b) {
        return a - b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
}

console.log(MathUtils.add(5, 3)); // 8
// const math = new MathUtils();
// math.add(5, 3); // Error - static methods not accessible on instances

// Static methods in inheritance
class AdvancedMath extends MathUtils {
    static power(a, b) {
        return a ** b;
    }
}

console.log(AdvancedMath.add(2, 3)); // 5 (inherited)
console.log(AdvancedMath.power(2, 3)); // 8

// ============================================
// GETTERS AND SETTERS
// ============================================
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    
    get radius() {
        return this._radius;
    }
    
    set radius(value) {
        if (value > 0) {
            this._radius = value;
        } else {
            throw new Error("Radius must be positive");
        }
    }
    
    get area() {
        return Math.PI * this._radius ** 2;
    }
    
    get diameter() {
        return this._radius * 2;
    }
}

const circle = new Circle(5);
console.log(circle.radius); // 5
console.log(circle.area); // 78.54...
console.log(circle.diameter); // 10

circle.radius = 10;
console.log(circle.area); // 314.16...

// ============================================
// PRIVATE FIELDS (ES2022)
// ============================================
class BankAccount {
    #balance = 0; // Private field
    #accountNumber; // Private field
    
    constructor(accountNumber, initialBalance = 0) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
        return this.#balance;
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
        }
        return this.#balance;
    }
    
    getBalance() {
        return this.#balance;
    }
    
    getAccountNumber() {
        return this.#accountNumber;
    }
}

const account = new BankAccount("12345", 100);
account.deposit(50);
console.log(account.getBalance()); // 150
// console.log(account.#balance); // Error - private field

// ============================================
// STATIC FIELDS
// ============================================
class Counter {
    static count = 0; // Static field
    
    static increment() {
        Counter.count++;
        return Counter.count;
    }
    
    static getCount() {
        return Counter.count;
    }
}

Counter.increment();
Counter.increment();
console.log(Counter.getCount()); // 2

// ============================================
// ABSTRACT CLASSES (Pattern)
// ============================================
class Shape {
    constructor(color) {
        if (this.constructor === Shape) {
            throw new Error("Cannot instantiate abstract class");
        }
        this.color = color;
    }
    
    // Abstract method (must be overridden)
    getArea() {
        throw new Error("Method 'getArea()' must be implemented");
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
    }
}

const rect = new Rectangle("red", 5, 10);
console.log(rect.getArea()); // 50

// ============================================
// MIXINS WITH CLASSES
// ============================================
const CanFly = {
    fly() {
        return `${this.name} is flying`;
    }
};

const CanSwim = {
    swim() {
        return `${this.name} is swimming`;
    }
};

class Duck {
    constructor(name) {
        this.name = name;
    }
}

// Apply mixins
Object.assign(Duck.prototype, CanFly, CanSwim);

const duck = new Duck("Donald");
console.log(duck.fly()); // "Donald is flying"
console.log(duck.swim()); // "Donald is swimming"

// ============================================
// CLASS EXPRESSIONS
// ============================================
const Person2 = class {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        return `Hello, ${this.name}`;
    }
};

const person2 = new Person2("Jane");
console.log(person2.greet()); // "Hello, Jane"

// Named class expression
const Person3 = class NamedPerson {
    constructor(name) {
        this.name = name;
    }
    
    getName() {
        return this.name;
    }
};

// ============================================
// SUPER KEYWORD
// ============================================
class Parent {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        return `Hello from ${this.name}`;
    }
}

class Child extends Parent {
    constructor(name, age) {
        super(name); // Call parent constructor
        this.age = age;
    }
    
    greet() {
        return `${super.greet()} (age ${this.age})`; // Call parent method
    }
}

const child = new Child("Alice", 10);
console.log(child.greet()); // "Hello from Alice (age 10)"

// ============================================
// INSTANCEOF OPERATOR
// ============================================
console.log(child instanceof Child); // true
console.log(child instanceof Parent); // true
console.log(child instanceof Object); // true

// ============================================
// CLASS VS CONSTRUCTOR FUNCTION
// ============================================
// Classes are essentially syntactic sugar:

// Constructor function
function OldWay(name) {
    this.name = name;
}
OldWay.prototype.greet = function() {
    return `Hello, ${this.name}`;
};

// Class (equivalent)
class NewWay {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        return `Hello, ${this.name}`;
    }
}

// Both work the same, but classes are:
// - More readable
// - Enforce 'new' keyword
// - Better for inheritance
// - Support private fields

