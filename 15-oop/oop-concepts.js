/**
 * OBJECT-ORIENTED PROGRAMMING IN JAVASCRIPT
 * 
 * OOP concepts in JavaScript:
 * - Encapsulation
 * - Inheritance
 * - Polymorphism
 * - Abstraction
 */

// ============================================
// ENCAPSULATION
// ============================================

// Using closures for private variables
function createCounter() {
    let count = 0; // Private variable
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
// count is not directly accessible

// Using classes with private fields (ES2022)
class BankAccount {
    #balance = 0; // Private field
    
    constructor(initialBalance = 0) {
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
}

const account = new BankAccount(100);
account.deposit(50);
// account.#balance; // Error - private field

// ============================================
// INHERITANCE
// ============================================

// Base class
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    eat() {
        return `${this.name} is eating`;
    }
    
    sleep() {
        return `${this.name} is sleeping`;
    }
    
    makeSound() {
        return `${this.name} makes a sound`;
    }
}

// Derived class
class Dog extends Animal {
    constructor(name, breed) {
        super(name, "Canine"); // Call parent constructor
        this.breed = breed;
    }
    
    // Override method
    makeSound() {
        return `${this.name} barks`;
    }
    
    // New method
    fetch() {
        return `${this.name} fetches the ball`;
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.eat()); // "Buddy is eating" (inherited)
console.log(dog.makeSound()); // "Buddy barks" (overridden)
console.log(dog.fetch()); // "Buddy fetches the ball" (new method)

// ============================================
// POLYMORPHISM
// ============================================

// Same interface, different implementations
class Shape {
    area() {
        throw new Error("area() must be implemented");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    
    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    area() {
        return Math.PI * this.radius ** 2;
    }
}

// Polymorphic behavior
const shapes = [
    new Rectangle(5, 10),
    new Circle(5)
];

shapes.forEach(shape => {
    console.log(shape.area()); // Different implementations
});

// ============================================
// ABSTRACTION
// ============================================

// Abstract class pattern
class Vehicle {
    constructor(brand, model) {
        if (this.constructor === Vehicle) {
            throw new Error("Cannot instantiate abstract class");
        }
        this.brand = brand;
        this.model = model;
    }
    
    start() {
        throw new Error("start() must be implemented");
    }
    
    stop() {
        return `${this.brand} ${this.model} stopped`;
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand, model);
    }
    
    start() {
        return `${this.brand} ${this.model} engine started`;
    }
}

// ============================================
// STATIC METHODS AND PROPERTIES
// ============================================

class MathUtils {
    static PI = 3.14159; // Static property
    
    static add(a, b) {
        return a + b;
    }
    
    static subtract(a, b) {
        return a - b;
    }
}

console.log(MathUtils.PI); // 3.14159
console.log(MathUtils.add(5, 3)); // 8

// ============================================
// GETTERS AND SETTERS
// ============================================

class Temperature {
    constructor(celsius) {
        this._celsius = celsius;
    }
    
    get celsius() {
        return this._celsius;
    }
    
    set celsius(value) {
        if (value < -273.15) {
            throw new Error("Temperature below absolute zero");
        }
        this._celsius = value;
    }
    
    get fahrenheit() {
        return this._celsius * 9/5 + 32;
    }
    
    set fahrenheit(value) {
        this._celsius = (value - 32) * 5/9;
    }
}

const temp = new Temperature(25);
console.log(temp.fahrenheit); // 77
temp.fahrenheit = 100;
console.log(temp.celsius); // 37.78

// ============================================
// MIXINS (Multiple Inheritance Pattern)
// ============================================

// Mixin for flying
const CanFly = {
    fly() {
        return `${this.name} is flying`;
    }
};

// Mixin for swimming
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
// FACTORY PATTERN
// ============================================

class AnimalFactory {
    static create(type, name) {
        switch(type) {
            case "dog":
                return new Dog(name, "Mixed");
            case "cat":
                return new Cat(name);
            default:
                throw new Error("Unknown animal type");
        }
    }
}

const dog = AnimalFactory.create("dog", "Buddy");

// ============================================
// SINGLETON PATTERN
// ============================================

class Database {
    constructor() {
        if (Database.instance) {
            return Database.instance;
        }
        Database.instance = this;
        this.connection = "Connected";
    }
    
    query(sql) {
        return `Executing: ${sql}`;
    }
}

const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2); // true (same instance)

// ============================================
// OBSERVER PATTERN
// ============================================

class Subject {
    constructor() {
        this.observers = [];
    }
    
    subscribe(observer) {
        this.observers.push(observer);
    }
    
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    
    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }
    
    update(data) {
        console.log(`${this.name} received: ${data}`);
    }
}

const subject = new Subject();
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify("Hello!"); // Both observers notified

// ============================================
// PROTOTYPE-BASED INHERITANCE
// ============================================

function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    return `${this.name} is eating`;
};

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    return `${this.name} barks`;
};

const myDog = new Dog("Buddy", "Labrador");
console.log(myDog.eat()); // "Buddy is eating"
console.log(myDog.bark()); // "Buddy barks"

// ============================================
// COMPOSITION OVER INHERITANCE
// ============================================

// Instead of deep inheritance, compose behaviors
class Engine {
    start() {
        return "Engine started";
    }
}

class Wheels {
    rotate() {
        return "Wheels rotating";
    }
}

class Car {
    constructor() {
        this.engine = new Engine();
        this.wheels = new Wheels();
    }
    
    drive() {
        return `${this.engine.start()}, ${this.wheels.rotate()}`;
    }
}

const car = new Car();
console.log(car.drive());

