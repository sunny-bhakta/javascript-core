/**
 * ES6 MODULES
 * 
 * ES6 modules provide a way to organize and share code between files.
 * Each module has its own scope and can export/import values.
 */

// ============================================
// NAMED EXPORTS
// ============================================
// math.js
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// Or export at the end
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

export { multiply, divide };

// ============================================
// DEFAULT EXPORT
// ============================================
// calculator.js
export default class Calculator {
    add(a, b) {
        return a + b;
    }
}

// Or
// export default function calculator() { ... }

// ============================================
// NAMED IMPORTS
// ============================================
// main.js
import { PI, add, subtract } from "./math.js";

console.log(PI); // 3.14159
console.log(add(2, 3)); // 5

// Import with alias
import { add as sum, subtract as diff } from "./math.js";

// Import all
import * as math from "./math.js";
console.log(math.PI); // 3.14159
console.log(math.add(2, 3)); // 5

// ============================================
// DEFAULT IMPORT
// ============================================
import Calculator from "./calculator.js";
const calc = new Calculator();

// Or with alias
import MyCalculator from "./calculator.js";

// ============================================
// MIXED IMPORTS
// ============================================
import Calculator, { PI } from "./calculator.js";

// ============================================
// RE-EXPORTING
// ============================================
// utils.js
export { add, subtract } from "./math.js";
export { default as Calculator } from "./calculator.js";

// ============================================
// DYNAMIC IMPORTS
// ============================================
// Load module conditionally
async function loadModule() {
    const module = await import("./math.js");
    console.log(module.PI);
}

// Or
if (condition) {
    import("./math.js").then(module => {
        console.log(module.PI);
    });
}

// ============================================
// MODULE SCOPE
// ============================================
// Each module has its own scope
const privateVar = "I'm private"; // Not exported, not accessible outside

export const publicVar = "I'm public";

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Barrel export (index.js)
// export { add, subtract } from "./math.js";
// export { Calculator } from "./calculator.js";

// Pattern 2: Default + named exports
// export default class MyClass { ... }
// export function helper() { ... }

// Pattern 3: Re-export with namespace
// export * as utils from "./utils.js";

