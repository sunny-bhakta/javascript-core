/**
 * DESIGN PATTERNS IN JAVASCRIPT
 * 
 * Common design patterns for solving recurring problems:
 * - Creational Patterns
 * - Structural Patterns
 * - Behavioral Patterns
 */

// ============================================
// CREATIONAL PATTERNS
// ============================================

// 1. Singleton Pattern
class Singleton {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        return this;
    }
    
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // true

// 2. Factory Pattern
class AnimalFactory {
    static create(type, name) {
        switch(type) {
            case "dog":
                return new Dog(name);
            case "cat":
                return new Cat(name);
            default:
                throw new Error("Unknown animal type");
        }
    }
}

class Dog {
    constructor(name) {
        this.name = name;
        this.type = "dog";
    }
}

class Cat {
    constructor(name) {
        this.name = name;
        this.type = "cat";
    }
}

const dog = AnimalFactory.create("dog", "Buddy");

// 3. Builder Pattern
class PizzaBuilder {
    constructor() {
        this.pizza = {};
    }
    
    setSize(size) {
        this.pizza.size = size;
        return this;
    }
    
    setCrust(crust) {
        this.pizza.crust = crust;
        return this;
    }
    
    addTopping(topping) {
        if (!this.pizza.toppings) {
            this.pizza.toppings = [];
        }
        this.pizza.toppings.push(topping);
        return this;
    }
    
    build() {
        return this.pizza;
    }
}

const pizza = new PizzaBuilder()
    .setSize("large")
    .setCrust("thin")
    .addTopping("cheese")
    .addTopping("pepperoni")
    .build();

// 4. Prototype Pattern
const carPrototype = {
    wheels: 4,
    start() {
        return "Car started";
    },
    stop() {
        return "Car stopped";
    }
};

function createCar(brand, model) {
    const car = Object.create(carPrototype);
    car.brand = brand;
    car.model = model;
    return car;
}

const car1 = createCar("Toyota", "Camry");

// ============================================
// STRUCTURAL PATTERNS
// ============================================

// 1. Module Pattern
const MyModule = (function() {
    let privateVar = 0;
    
    function privateFunction() {
        return privateVar;
    }
    
    return {
        publicMethod: function() {
            return privateFunction();
        },
        increment: function() {
            privateVar++;
        }
    };
})();

// 2. Revealing Module Pattern
const RevealingModule = (function() {
    let privateVar = 0;
    
    function privateFunction() {
        return privateVar;
    }
    
    function publicMethod() {
        return privateFunction();
    }
    
    return {
        publicMethod: publicMethod
    };
})();

// 3. Facade Pattern
class API {
    constructor() {
        this.baseURL = "https://api.example.com";
    }
    
    get(endpoint) {
        return fetch(`${this.baseURL}${endpoint}`)
            .then(res => res.json());
    }
    
    post(endpoint, data) {
        return fetch(`${this.baseURL}${endpoint}`, {
            method: "POST",
            body: JSON.stringify(data)
        }).then(res => res.json());
    }
}

// Facade simplifies complex API
const api = new API();
api.get("/users");
api.post("/users", { name: "John" });

// 4. Adapter Pattern
class OldAPI {
    request() {
        return "old format";
    }
}

class NewAPI {
    fetch() {
        return "new format";
    }
}

class APIAdapter {
    constructor(api) {
        this.api = api;
    }
    
    request() {
        if (this.api.fetch) {
            return this.api.fetch();
        }
        return this.api.request();
    }
}

// 5. Decorator Pattern
function withLogging(fn) {
    return function(...args) {
        console.log(`Calling ${fn.name} with`, args);
        const result = fn.apply(this, args);
        console.log(`Result:`, result);
        return result;
    };
}

function add(a, b) {
    return a + b;
}

const loggedAdd = withLogging(add);
loggedAdd(2, 3); // Logs call and result

// ============================================
// BEHAVIORAL PATTERNS
// ============================================

// 1. Observer Pattern
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
        console.log(`${this.name} received:`, data);
    }
}

const subject = new Subject();
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify("Hello!");

// 2. Pub/Sub Pattern
class EventBus {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
}

const eventBus = new EventBus();
eventBus.on("user:login", (user) => {
    console.log("User logged in:", user);
});
eventBus.emit("user:login", { name: "John" });

// 3. Strategy Pattern
class PaymentStrategy {
    pay(amount) {
        throw new Error("pay() must be implemented");
    }
}

class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
        return `Paid $${amount} with credit card`;
    }
}

class PayPalPayment extends PaymentStrategy {
    pay(amount) {
        return `Paid $${amount} with PayPal`;
    }
}

class PaymentProcessor {
    constructor(strategy) {
        this.strategy = strategy;
    }
    
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    
    processPayment(amount) {
        return this.strategy.pay(amount);
    }
}

const processor = new PaymentProcessor(new CreditCardPayment());
processor.processPayment(100);
processor.setStrategy(new PayPalPayment());
processor.processPayment(100);

// 4. Command Pattern
class Command {
    execute() {
        throw new Error("execute() must be implemented");
    }
}

class LightOnCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }
    
    execute() {
        return this.light.turnOn();
    }
}

class LightOffCommand extends Command {
    constructor(light) {
        super();
        this.light = light;
    }
    
    execute() {
        return this.light.turnOff();
    }
}

class RemoteControl {
    constructor() {
        this.command = null;
    }
    
    setCommand(command) {
        this.command = command;
    }
    
    pressButton() {
        return this.command.execute();
    }
}

// 5. Chain of Responsibility
class Handler {
    constructor() {
        this.next = null;
    }
    
    setNext(handler) {
        this.next = handler;
        return handler;
    }
    
    handle(request) {
        if (this.next) {
            return this.next.handle(request);
        }
        return null;
    }
}

class AuthHandler extends Handler {
    handle(request) {
        if (request.user) {
            console.log("Authenticated");
            return super.handle(request);
        }
        return "Not authenticated";
    }
}

class ValidationHandler extends Handler {
    handle(request) {
        if (request.data) {
            console.log("Validated");
            return super.handle(request);
        }
        return "Invalid data";
    }
}

const auth = new AuthHandler();
const validation = new ValidationHandler();
auth.setNext(validation);

auth.handle({ user: "John", data: "test" });

// 6. State Pattern
class State {
    handle(context) {
        throw new Error("handle() must be implemented");
    }
}

class ConcreteStateA extends State {
    handle(context) {
        console.log("State A");
        context.setState(new ConcreteStateB());
    }
}

class ConcreteStateB extends State {
    handle(context) {
        console.log("State B");
        context.setState(new ConcreteStateA());
    }
}

class Context {
    constructor() {
        this.state = new ConcreteStateA();
    }
    
    setState(state) {
        this.state = state;
    }
    
    request() {
        this.state.handle(this);
    }
}

const context = new Context();
context.request(); // State A
context.request(); // State B

// ============================================
// JAVASCRIPT-SPECIFIC PATTERNS
// ============================================

// 1. Mixin Pattern
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

Object.assign(Duck.prototype, CanFly, CanSwim);

// 2. Revealing Constructor Pattern
class PromiseLike {
    constructor(executor) {
        let resolve, reject;
        const promise = new Promise((res, rej) => {
            resolve = res;
            reject = rej;
        });
        
        executor(resolve, reject);
        return promise;
    }
}

// 3. Proxy Pattern (using Proxy)
const target = { message: "hello" };
const handler = {
    get: function(target, prop) {
        return prop in target ? target[prop] : "default";
    }
};

const proxy = new Proxy(target, handler);
console.log(proxy.message); // "hello"
console.log(proxy.unknown); // "default"

