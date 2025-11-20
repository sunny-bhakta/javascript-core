/**
 * VARIABLES IN JAVASCRIPT
 * 
 * JavaScript has three ways to declare variables:
 * 1. var - Function scoped, can be redeclared and reassigned
 * 2. let - Block scoped, can be reassigned but not redeclared
 * 3. const - Block scoped, cannot be reassigned or redeclared
 */

// ============================================
// VAR - Function Scoped
// ============================================
var name = "John";
var age = 30;
var name = "Jane"; // Can redeclare with var

function exampleVar() {
    var x = 1;
    if (true) {
        var x = 2; // Same variable, function scoped
        console.log(x); // 2
    }
    console.log(x); // 2 (not 1!)
}

// ============================================
// LET - Block Scoped
// ============================================
let count = 0;
count = 10; // Can reassign

function exampleLet() {
    let y = 1;
    if (true) {
        let y = 2; // Different variable, block scoped
        console.log(y); // 2
    }
    console.log(y); // 1
}

// Cannot redeclare in same scope
// let count = 5; // Error: Identifier 'count' has already been declared

// ============================================
// CONST - Block Scoped, Immutable
// ============================================
const PI = 3.14159;
const MAX_SIZE = 100;

// Cannot reassign
// PI = 3.14; // Error: Assignment to constant variable

// const with objects/arrays - reference is constant, but content can change
const person = {
    name: "John",
    age: 30
};

person.age = 31; // OK - modifying property
// person = {}; // Error - cannot reassign

const numbers = [1, 2, 3];
numbers.push(4); // OK - modifying array
// numbers = []; // Error - cannot reassign

// ============================================
// BEST PRACTICES
// ============================================
// 1. Use const by default
// 2. Use let when you need to reassign
// 3. Avoid var in modern JavaScript
// 4. Use meaningful variable names

const userName = "John"; // Good
let counter = 0; // Good
// var data = []; // Avoid in modern code

// ============================================
// VARIABLE NAMING CONVENTIONS
// ============================================
// camelCase for variables and functions
const firstName = "John";
const lastName = "Doe";

// UPPER_SNAKE_CASE for constants
const API_BASE_URL = "https://api.example.com";
const MAX_RETRY_ATTEMPTS = 3;

// Descriptive names
const userAccountBalance = 1000; // Good
const bal = 1000; // Bad - not descriptive

