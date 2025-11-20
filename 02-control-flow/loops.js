/**
 * LOOPS IN JAVASCRIPT
 * 
 * JavaScript provides several loop constructs:
 * 1. for loop
 * 2. while loop
 * 3. do-while loop
 * 4. for...in loop
 * 5. for...of loop
 * 6. Array iteration methods
 */

// ============================================
// FOR LOOP
// ============================================
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// Loop through array
const fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Reverse loop
for (let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}

// Multiple variables
for (let i = 0, j = 10; i < 5; i++, j--) {
    console.log(`i: ${i}, j: ${j}`);
}

// ============================================
// WHILE LOOP
// ============================================
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// Infinite loop (be careful!)
// while (true) {
//     console.log("This runs forever");
// }

// ============================================
// DO-WHILE LOOP
// ============================================
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 5);

// Executes at least once
let x = 10;
do {
    console.log(x); // Prints 10
    x++;
} while (x < 5); // Condition is false, but loop ran once

// ============================================
// FOR...IN LOOP (Objects)
// ============================================
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Iterating over array (not recommended - use for...of)
const arr = [10, 20, 30];
for (let index in arr) {
    console.log(`Index: ${index}, Value: ${arr[index]}`);
}

// ============================================
// FOR...OF LOOP (Iterables)
// ============================================
// Arrays
const numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
    console.log(num);
}

// Strings
const text = "Hello";
for (let char of text) {
    console.log(char);
}

// Sets
const mySet = new Set([1, 2, 3]);
for (let value of mySet) {
    console.log(value);
}

// Maps
const myMap = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);
for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}

// ============================================
// BREAK STATEMENT
// ============================================
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Exits the loop
    }
    console.log(i); // 0, 1, 2, 3, 4
}

// Break in nested loops
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outer; // Breaks out of outer loop
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}

// ============================================
// CONTINUE STATEMENT
// ============================================
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skips to next iteration
    }
    console.log(i); // 1, 3, 5, 7, 9 (odd numbers only)
}

// ============================================
// ARRAY ITERATION METHODS
// ============================================

// forEach
const items = ["a", "b", "c"];
items.forEach((item, index) => {
    console.log(`${index}: ${item}`);
});

// map - creates new array
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - creates new array with filtered items
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// reduce - reduces array to single value
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

// find - finds first matching element
const found = numbers.find(n => n > 3);
console.log(found); // 4

// some - checks if any element matches
const hasEven = numbers.some(n => n % 2 === 0);
console.log(hasEven); // true

// every - checks if all elements match
const allPositive = numbers.every(n => n > 0);
console.log(allPositive); // true

// ============================================
// COMMON PATTERNS
// ============================================

// Loop with index and value
for (let [index, value] of numbers.entries()) {
    console.log(`Index ${index}: ${value}`);
}

// Loop through object entries
for (let [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
}

// Loop through object keys
for (let key of Object.keys(person)) {
    console.log(key);
}

// Loop through object values
for (let value of Object.values(person)) {
    console.log(value);
}

// Nested loops
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let row of matrix) {
    for (let cell of row) {
        console.log(cell);
    }
}

// ============================================
// PERFORMANCE CONSIDERATIONS
// ============================================

// Cache array length (for older browsers)
const largeArray = new Array(1000).fill(0);
for (let i = 0, len = largeArray.length; i < len; i++) {
    // Process items
}

// Use for...of for arrays (modern, readable)
for (let item of largeArray) {
    // Process items
}

// Use forEach for side effects
largeArray.forEach(item => {
    // Process items
});

