/**
 * HOISTING IN JAVASCRIPT
 * 
 * Hoisting is JavaScript's behavior of moving declarations to the top.
 * Only declarations are hoisted, not initializations.
 */

// ============================================
// VAR HOISTING
// ============================================
// var declarations are hoisted and initialized with undefined

console.log(hoistedVar); // undefined (not error!)
var hoistedVar = "I'm hoisted";
console.log(hoistedVar); // "I'm hoisted"

// Equivalent to:
// var hoistedVar; // Declaration hoisted
// console.log(hoistedVar); // undefined
// hoistedVar = "I'm hoisted"; // Assignment stays in place
// console.log(hoistedVar); // "I'm hoisted"

// ============================================
// FUNCTION DECLARATION HOISTING
// ============================================
// Function declarations are fully hoisted

hoistedFunction(); // Works! Function is hoisted

function hoistedFunction() {
    console.log("I'm hoisted!");
}

// ============================================
// FUNCTION EXPRESSION HOISTING
// ============================================
// Function expressions are NOT hoisted (only var is hoisted)

// hoistedExpression(); // Error - not a function

var hoistedExpression = function() {
    console.log("I'm not fully hoisted");
};

// Equivalent to:
// var hoistedExpression; // Declaration hoisted (undefined)
// hoistedExpression(); // Error - undefined is not a function
// hoistedExpression = function() { ... }; // Assignment stays

// ============================================
// LET AND CONST HOISTING
// ============================================
// let and const are hoisted but not initialized (Temporal Dead Zone)

// console.log(hoistedLet); // Error - Cannot access before initialization
// console.log(hoistedConst); // Error - Cannot access before initialization

let hoistedLet = "I'm hoisted but in TDZ";
const hoistedConst = "Me too";

console.log(hoistedLet); // OK - after declaration
console.log(hoistedConst); // OK - after declaration

// ============================================
// ARROW FUNCTION HOISTING
// ============================================
// Arrow functions follow same rules as function expressions

// hoistedArrow(); // Error

const hoistedArrow = () => {
    console.log("I'm not hoisted");
};

// ============================================
// CLASS HOISTING
// ============================================
// Classes are hoisted but not initialized (like let/const)

// const instance = new HoistedClass(); // Error - TDZ

class HoistedClass {
    constructor() {
        this.value = "hoisted";
    }
}

const instance = new HoistedClass(); // OK - after declaration

// ============================================
// HOISTING ORDER
// ============================================
// 1. Function declarations (fully hoisted)
// 2. var declarations (hoisted, initialized with undefined)
// 3. let/const declarations (hoisted, but in TDZ)

console.log(typeof hoisted1); // "function" (function declaration wins)
console.log(typeof hoisted2); // "undefined" (var declaration)

function hoisted1() {
    return "function";
}

var hoisted2 = "variable";

// ============================================
// HOISTING IN DIFFERENT SCOPES
// ============================================
function hoistingExample() {
    console.log(innerVar); // undefined (hoisted)
    console.log(innerFunction()); // "I'm hoisted" (function hoisted)
    
    var innerVar = "I'm var";
    
    function innerFunction() {
        return "I'm hoisted";
    }
    
    // let and const are hoisted but in TDZ
    // console.log(innerLet); // Error
    let innerLet = "I'm let";
}

hoistingExample();

// ============================================
// COMMON HOISTING PITFALLS
// ============================================

// Pitfall 1: Variable shadowing
var name = "global";

function shadowExample() {
    console.log(name); // undefined (not "global"!)
    var name = "local";
    console.log(name); // "local"
}

shadowExample();

// Pitfall 2: Function vs variable
var myFunction = "I'm a variable";

function myFunction() {
    return "I'm a function";
}

console.log(typeof myFunction); // "string" (variable assignment wins)

// Pitfall 3: Multiple declarations
var multiple = 1;
var multiple = 2; // OK - redeclaration allowed
console.log(multiple); // 2

let multiple2 = 1;
// let multiple2 = 2; // Error - cannot redeclare

// ============================================
// BEST PRACTICES TO AVOID HOISTING ISSUES
// ============================================

// 1. Declare variables at the top
function goodPractice() {
    let a;
    let b;
    let c;
    
    // Use variables
    a = 1;
    b = 2;
    c = a + b;
}

// 2. Use let/const instead of var
// let and const have block scope and TDZ prevents errors

// 3. Declare functions before use (even though they're hoisted)
function goodFunction() {
    return "Good practice";
}

goodFunction(); // Clear and readable

// 4. Use function expressions for conditional definitions
let conditionalFunction;

if (true) {
    conditionalFunction = function() {
        return "Conditional";
    };
}

// ============================================
// HOISTING IN LOOPS
// ============================================
// var in loops - all iterations share same variable
var functions = [];

for (var i = 0; i < 3; i++) {
    functions.push(function() {
        return i; // All return 3 (final value)
    });
}

console.log(functions[0]()); // 3
console.log(functions[1]()); // 3
console.log(functions[2]()); // 3

// let in loops - each iteration has own variable
var functions2 = [];

for (let j = 0; j < 3; j++) {
    functions2.push(function() {
        return j; // Returns 0, 1, 2
    });
}

console.log(functions2[0]()); // 0
console.log(functions2[1]()); // 1
console.log(functions2[2]()); // 2

// ============================================
// HOISTING WITH CLASSES
// ============================================
// Class declarations are hoisted but not initialized

function createInstance() {
    // return new MyClass(); // Error - TDZ
    
    class MyClass {
        constructor() {
            this.value = "instance";
        }
    }
    
    return new MyClass(); // OK
}

// ============================================
// SUMMARY
// ============================================
/*
Hoisting Order (top to bottom):
1. Function declarations - fully hoisted, can be called
2. var declarations - hoisted, initialized with undefined
3. let/const declarations - hoisted, but in TDZ until declaration
4. Class declarations - hoisted, but in TDZ until declaration

Key Points:
- Only declarations are hoisted, not initializations
- Function declarations are fully hoisted
- var is function-scoped and hoisted
- let/const are block-scoped and in TDZ until declaration
- Use let/const to avoid hoisting issues
*/

