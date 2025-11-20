/**
 * MODERN JAVASCRIPT FEATURES (ES2015+)
 * 
 * Features introduced in ES6 and later versions.
 */

// ============================================
// OPTIONAL CHAINING (?.) - ES2020
// ============================================

const user = {
    name: "John",
    address: {
        city: "New York"
    }
};

// Safe property access
console.log(user?.address?.city); // "New York"
console.log(user?.contact?.phone); // undefined (no error)

// Safe method calls
const result = user?.getName?.(); // undefined if method doesn't exist

// Safe array access
const arr = [1, 2, 3];
console.log(arr?.[0]); // 1
console.log(arr?.[10]); // undefined

// ============================================
// NULLISH COALESCING (??) - ES2020
// ============================================

// Returns right side only if left is null or undefined
const value1 = null ?? "default"; // "default"
const value2 = undefined ?? "default"; // "default"
const value3 = 0 ?? "default"; // 0 (not null/undefined)
const value4 = "" ?? "default"; // "" (not null/undefined)
const value5 = false ?? "default"; // false (not null/undefined)

// Common use case
const config = {
    port: process.env.PORT ?? 3000,
    apiUrl: process.env.API_URL ?? "http://localhost"
};

// ============================================
// BIGINT - ES2020
// ============================================

// Create BigInt
const big1 = 9007199254740991n; // Literal
const big2 = BigInt(9007199254740991); // Constructor

// Operations
const sum = big1 + big2;
const product = big1 * 2n;

// Cannot mix with Number
// const mixed = big1 + 1; // Error

// Comparison works
console.log(big1 > 1000); // true

// ============================================
// DYNAMIC IMPORTS - ES2020
// ============================================

// Load module conditionally
async function loadModule() {
    if (condition) {
        const module = await import("./module.js");
        module.doSomething();
    }
}

// With default export
const { default: MyClass } = await import("./MyClass.js");

// ============================================
// TOP-LEVEL AWAIT - ES2022
// ============================================

// In modules, can use await at top level
// const data = await fetch("https://api.example.com/data");
// export default data;

// ============================================
// PRIVATE CLASS FIELDS - ES2022
// ============================================

class BankAccount {
    #balance = 0; // Private field
    #accountNumber; // Private field
    
    constructor(accountNumber, initialBalance = 0) {
        this.#accountNumber = accountNumber;
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        this.#balance += amount;
    }
    
    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount("12345", 100);
// account.#balance; // Error - private field

// ============================================
// STATIC CLASS FIELDS - ES2022
// ============================================

class Counter {
    static count = 0; // Static field
    
    static increment() {
        Counter.count++;
        return Counter.count;
    }
}

Counter.increment();
console.log(Counter.count); // 1

// ============================================
// PRIVATE METHODS - ES2022
// ============================================

class MyClass {
    #privateMethod() {
        return "Private";
    }
    
    publicMethod() {
        return this.#privateMethod(); // Can call private method
    }
}

const instance = new MyClass();
// instance.#privateMethod(); // Error - private method

// ============================================
// STRING METHODS - ES2015+
// ============================================

// startsWith / endsWith
const str = "Hello World";
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("World")); // true

// includes
console.log(str.includes("lo")); // true

// repeat
console.log("ha".repeat(3)); // "hahaha"

// padStart / padEnd
console.log("5".padStart(3, "0")); // "005"
console.log("5".padEnd(3, "0")); // "500"

// ============================================
// ARRAY METHODS - ES2015+
// ============================================

// Array.from
const arrayLike = { length: 3, 0: "a", 1: "b", 2: "c" };
const arr = Array.from(arrayLike); // ["a", "b", "c"]

// Array.of
const arr2 = Array.of(1, 2, 3); // [1, 2, 3]

// find / findIndex
const numbers = [1, 2, 3, 4, 5];
const found = numbers.find(n => n > 3); // 4
const index = numbers.findIndex(n => n > 3); // 3

// includes
console.log(numbers.includes(3)); // true

// flat / flatMap
const nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat()); // [1, 2, 3, 4, [5, 6]]
console.log(nested.flat(2)); // [1, 2, 3, 4, 5, 6]

// ============================================
// OBJECT METHODS - ES2015+
// ============================================

const obj = { a: 1, b: 2, c: 3 };

// Object.keys
console.log(Object.keys(obj)); // ["a", "b", "c"]

// Object.values
console.log(Object.values(obj)); // [1, 2, 3]

// Object.entries
console.log(Object.entries(obj)); // [["a", 1], ["b", 2], ["c", 3]]

// Object.assign
const merged = Object.assign({}, obj, { d: 4 }); // { a: 1, b: 2, c: 3, d: 4 }

// Object.fromEntries
const entries = [["a", 1], ["b", 2]];
const newObj = Object.fromEntries(entries); // { a: 1, b: 2 }

// ============================================
// SYMBOLS - ES2015
// ============================================

// Create symbol
const sym1 = Symbol("description");
const sym2 = Symbol("description");
console.log(sym1 === sym2); // false (each symbol is unique)

// Use as property key
const obj2 = {
    [sym1]: "value"
};
console.log(obj2[sym1]); // "value"

// Well-known symbols
const iterable = {
    [Symbol.iterator]: function* () {
        yield 1;
        yield 2;
        yield 3;
    }
};

// ============================================
// MAP AND SET - ES2015
// ============================================

// Map - Key-value pairs
const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
console.log(map.get("key1")); // "value1"
console.log(map.size); // 2

// Set - Unique values
const set = new Set([1, 2, 3, 3, 4]);
console.log(set.size); // 4 (duplicate removed)
set.add(5);
console.log(set.has(3)); // true

// ============================================
// WEAKMAP AND WEAKSET - ES2015
// ============================================

// WeakMap - Keys must be objects, garbage collected
const weakMap = new WeakMap();
const objKey = {};
weakMap.set(objKey, "value");
console.log(weakMap.get(objKey)); // "value"

// WeakSet - Values must be objects, garbage collected
const weakSet = new WeakSet();
weakSet.add(objKey);
console.log(weakSet.has(objKey)); // true

// ============================================
// GENERATORS - ES2015
// ============================================

function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// Generator with parameter
function* countTo(n) {
    for (let i = 1; i <= n; i++) {
        yield i;
    }
}

for (const num of countTo(5)) {
    console.log(num); // 1, 2, 3, 4, 5
}

// ============================================
// PROXIES - ES2015
// ============================================

const target = { message: "hello" };
const handler = {
    get: function(target, prop) {
        return prop in target ? target[prop] : "default";
    },
    set: function(target, prop, value) {
        target[prop] = value;
        return true;
    }
};

const proxy = new Proxy(target, handler);
console.log(proxy.message); // "hello"
console.log(proxy.unknown); // "default"

// ============================================
// REFLECT - ES2015
// ============================================

const obj3 = { a: 1 };

// Reflect.get
console.log(Reflect.get(obj3, "a")); // 1

// Reflect.set
Reflect.set(obj3, "b", 2);
console.log(obj3.b); // 2

// Reflect.has
console.log(Reflect.has(obj3, "a")); // true

// Reflect.deleteProperty
Reflect.deleteProperty(obj3, "b");

