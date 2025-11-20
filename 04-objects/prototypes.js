/**
 * PROTOTYPES AND PROTOTYPAL INHERITANCE
 * 
 * JavaScript uses prototypal inheritance - objects inherit from other objects.
 * Every object has a prototype (except Object.prototype).
 */

// ============================================
// PROTOTYPE CHAIN
// ============================================
const obj = {};
console.log(obj.toString); // function (from Object.prototype)

// Checking prototype
console.log(Object.getPrototypeOf(obj) === Object.prototype); // true

// ============================================
// CONSTRUCTOR FUNCTIONS
// ============================================
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding method to prototype
Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

// Adding property to prototype
Person.prototype.species = "Homo sapiens";

const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

console.log(person1.greet()); // "Hello, I'm John"
console.log(person2.greet()); // "Hello, I'm Jane"
console.log(person1.species); // "Homo sapiens"

// All instances share the same prototype
console.log(person1.greet === person2.greet); // true

// ============================================
// PROTOTYPE INHERITANCE
// ============================================
function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    return `${this.name} is eating`;
};

function Dog(name, breed) {
    Animal.call(this, name); // Call parent constructor
    this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    return `${this.name} is barking`;
};

const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.eat()); // "Buddy is eating" (inherited)
console.log(dog.bark()); // "Buddy is barking" (own method)

// ============================================
// ES6 CLASSES (Syntactic Sugar for Prototypes)
// ============================================
class Animal2 {
    constructor(name) {
        this.name = name;
    }
    
    eat() {
        return `${this.name} is eating`;
    }
}

class Dog2 extends Animal2 {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }
    
    bark() {
        return `${this.name} is barking`;
    }
}

const dog2 = new Dog2("Max", "Labrador");
console.log(dog2.eat()); // "Max is eating"
console.log(dog2.bark()); // "Max is barking"

// ============================================
// PROTOTYPE METHODS
// ============================================
function Vehicle(type) {
    this.type = type;
}

Vehicle.prototype.start = function() {
    return `${this.type} started`;
};

Vehicle.prototype.stop = function() {
    return `${this.type} stopped`;
};

// Override in child
function Car(brand) {
    Vehicle.call(this, "Car");
    this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Override parent method
Car.prototype.start = function() {
    return `${this.brand} car started with a roar!`;
};

const car = new Car("Toyota");
console.log(car.start()); // "Toyota car started with a roar!"
console.log(car.stop()); // "Car stopped" (inherited)

// ============================================
// OBJECT.CREATE() FOR PROTOTYPES
// ============================================
const animalProto = {
    eat() {
        return `${this.name} is eating`;
    }
};

const dogProto = Object.create(animalProto);
dogProto.bark = function() {
    return `${this.name} is barking`;
};

function createDog(name) {
    const dog = Object.create(dogProto);
    dog.name = name;
    return dog;
}

const myDog = createDog("Rex");
console.log(myDog.eat()); // "Rex is eating"
console.log(myDog.bark()); // "Rex is barking"

// ============================================
// CHECKING PROTOTYPE RELATIONSHIPS
// ============================================
const animal = new Animal("Generic");
const myCar = new Car("Honda");

// instanceof operator
console.log(myCar instanceof Car); // true
console.log(myCar instanceof Vehicle); // true
console.log(myCar instanceof Object); // true

// isPrototypeOf()
console.log(Car.prototype.isPrototypeOf(myCar)); // true
console.log(Vehicle.prototype.isPrototypeOf(myCar)); // true

// hasOwnProperty() - checks if property is own (not inherited)
console.log(myCar.hasOwnProperty("brand")); // true
console.log(myCar.hasOwnProperty("start")); // false (inherited)

// ============================================
// PROTOTYPE POLLUTION (Security Concern)
// ============================================
// Be careful: modifying prototypes affects all instances

// DON'T DO THIS (usually):
// Array.prototype.myMethod = function() { ... };

// ============================================
// STATIC METHODS AND PROPERTIES
// ============================================
function Calculator() {}

// Static method (on constructor, not prototype)
Calculator.add = function(a, b) {
    return a + b;
};

console.log(Calculator.add(2, 3)); // 5

// With ES6 classes
class Calculator2 {
    static add(a, b) {
        return a + b;
    }
    
    static subtract(a, b) {
        return a - b;
    }
}

console.log(Calculator2.add(5, 3)); // 8

// ============================================
// MIXINS (Multiple Inheritance Pattern)
// ============================================
const canEat = {
    eat() {
        return `${this.name} is eating`;
    }
};

const canFly = {
    fly() {
        return `${this.name} is flying`;
    }
};

function Bird(name) {
    this.name = name;
}

// Mix in behaviors
Object.assign(Bird.prototype, canEat, canFly);

const bird = new Bird("Eagle");
console.log(bird.eat()); // "Eagle is eating"
console.log(bird.fly()); // "Eagle is flying"

