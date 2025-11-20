/**
 * SCOPE IN JAVASCRIPT
 * 
 * Scope determines the accessibility of variables, functions, and objects.
 * JavaScript has three types of scope:
 * 1. Global Scope
 * 2. Function Scope
 * 3. Block Scope (ES6)
 */

// ============================================
// GLOBAL SCOPE
// ============================================
// Variables declared outside any function are global
var globalVar = "I'm global";
let globalLet = "I'm also global";
const globalConst = "Me too";

function testGlobal() {
    console.log(globalVar); // Accessible
    console.log(globalLet); // Accessible
    console.log(globalConst); // Accessible
}

// ============================================
// FUNCTION SCOPE
// ============================================
function testFunctionScope() {
    var functionVar = "I'm in function scope";
    let functionLet = "Me too";
    const functionConst = "And me";
    
    console.log(functionVar); // Accessible
    console.log(functionLet); // Accessible
    console.log(functionConst); // Accessible
}

// console.log(functionVar); // Error - not accessible outside

// ============================================
// BLOCK SCOPE (ES6)
// ============================================
if (true) {
    var blockVar = "I'm var"; // Function scoped (not block scoped!)
    let blockLet = "I'm let"; // Block scoped
    const blockConst = "I'm const"; // Block scoped
}

console.log(blockVar); // "I'm var" (accessible!)
// console.log(blockLet); // Error - not accessible
// console.log(blockConst); // Error - not accessible

// Block scope with loops
for (var i = 0; i < 3; i++) {
    // i is accessible outside loop (var is function scoped)
}
console.log(i); // 3

for (let j = 0; j < 3; j++) {
    // j is block scoped
}
// console.log(j); // Error - not accessible

// ============================================
// LEXICAL SCOPING (CLOSURE)
// ============================================
function outer() {
    const outerVar = "I'm outer";
    
    function inner() {
        // Inner function has access to outer scope
        console.log(outerVar); // "I'm outer"
        
        const innerVar = "I'm inner";
        // Outer cannot access inner variables
    }
    
    inner();
    // console.log(innerVar); // Error - not accessible
}

// ============================================
// SCOPE CHAIN
// ============================================
const global = "global";

function level1() {
    const level1Var = "level1";
    
    function level2() {
        const level2Var = "level2";
        
        function level3() {
            // Can access all outer scopes
            console.log(global); // "global"
            console.log(level1Var); // "level1"
            console.log(level2Var); // "level2"
        }
        
        level3();
    }
    
    level2();
}

level1();

// ============================================
// VAR VS LET VS CONST SCOPE
// ============================================

// var - Function scoped
function varExample() {
    if (true) {
        var x = 1;
    }
    console.log(x); // 1 (accessible!)
}

// let - Block scoped
function letExample() {
    if (true) {
        let y = 1;
    }
    // console.log(y); // Error - not accessible
}

// const - Block scoped
function constExample() {
    if (true) {
        const z = 1;
    }
    // console.log(z); // Error - not accessible
}

// ============================================
// SHADOWING
// ============================================
const shadow = "global";

function shadowExample() {
    const shadow = "function"; // Shadows global
    console.log(shadow); // "function"
    
    if (true) {
        const shadow = "block"; // Shadows function
        console.log(shadow); // "block"
    }
    
    console.log(shadow); // "function"
}

shadowExample();
console.log(shadow); // "global"

// ============================================
// TEMPORAL DEAD ZONE (TDZ)
// ============================================
// let and const are in TDZ until declaration

// console.log(tdzLet); // Error - TDZ
// console.log(tdzConst); // Error - TDZ

let tdzLet = "declared";
const tdzConst = "declared";

console.log(tdzLet); // OK - declared
console.log(tdzConst); // OK - declared

// var is hoisted and initialized with undefined
console.log(tdzVar); // undefined (not error)
var tdzVar = "declared";

// ============================================
// STRICT MODE
// ============================================
"use strict";

function strictExample() {
    // In strict mode, undeclared variables cause errors
    // undeclared = "error"; // Error in strict mode
}

// ============================================
// IIFE FOR SCOPE ISOLATION
// ============================================
(function() {
    const private = "I'm private";
    // This variable is not accessible outside
})();

// console.log(private); // Error - not accessible

// ============================================
// MODULE SCOPE
// ============================================
// In ES6 modules, each file has its own scope
// Variables are not global unless explicitly exported

// module.js
// export const moduleVar = "exported";
// const privateVar = "private";

// ============================================
// SCOPE IN ARROW FUNCTIONS
// ============================================
const obj = {
    name: "Object",
    regular: function() {
        console.log(this.name); // "Object"
    },
    arrow: () => {
        console.log(this.name); // undefined (this is from outer scope)
    }
};

obj.regular(); // "Object"
obj.arrow(); // undefined

// ============================================
// COMMON SCOPE ISSUES
// ============================================

// Issue 1: Loop with var
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i); // Prints 3, 3, 3 (not 0, 1, 2)
    }, 100);
}

// Solution: Use let
for (let j = 0; j < 3; j++) {
    setTimeout(function() {
        console.log(j); // Prints 0, 1, 2
    }, 100);
}

// Solution: IIFE
for (var k = 0; k < 3; k++) {
    (function(index) {
        setTimeout(function() {
            console.log(index); // Prints 0, 1, 2
        }, 100);
    })(k);
}

