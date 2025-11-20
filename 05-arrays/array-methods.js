/**
 * ARRAY METHODS IN JAVASCRIPT
 * 
 * Arrays have many built-in methods for manipulation and iteration.
 */

// ============================================
// MUTATING METHODS (Modify Original Array)
// ============================================

// push() - Add to end
const arr1 = [1, 2, 3];
arr1.push(4, 5);
console.log(arr1); // [1, 2, 3, 4, 5]

// pop() - Remove from end
const last = arr1.pop();
console.log(last); // 5
console.log(arr1); // [1, 2, 3, 4]

// unshift() - Add to beginning
arr1.unshift(0);
console.log(arr1); // [0, 1, 2, 3, 4]

// shift() - Remove from beginning
const first = arr1.shift();
console.log(first); // 0
console.log(arr1); // [1, 2, 3, 4]

// splice() - Add/remove at index
const arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 1); // Remove 1 element at index 2
console.log(arr2); // [1, 2, 4, 5]

arr2.splice(2, 0, 3); // Insert 3 at index 2
console.log(arr2); // [1, 2, 3, 4, 5]

arr2.splice(2, 1, 10); // Replace element at index 2
console.log(arr2); // [1, 2, 10, 4, 5]

// reverse() - Reverse array
const arr3 = [1, 2, 3];
arr3.reverse();
console.log(arr3); // [3, 2, 1]

// sort() - Sort array
const arr4 = [3, 1, 4, 1, 5];
arr4.sort();
console.log(arr4); // [1, 1, 3, 4, 5]

// Custom sort
const arr5 = [10, 2, 30, 4];
arr5.sort((a, b) => a - b); // Ascending
console.log(arr5); // [2, 4, 10, 30]

arr5.sort((a, b) => b - a); // Descending
console.log(arr5); // [30, 10, 4, 2]

// fill() - Fill array with value
const arr6 = new Array(5).fill(0);
console.log(arr6); // [0, 0, 0, 0, 0]

// ============================================
// NON-MUTATING METHODS (Return New Array)
// ============================================

// slice() - Extract portion of array
const arr7 = [1, 2, 3, 4, 5];
const sliced = arr7.slice(1, 4);
console.log(sliced); // [2, 3, 4]
console.log(arr7); // [1, 2, 3, 4, 5] (unchanged)

// concat() - Combine arrays
const arr8 = [1, 2];
const arr9 = [3, 4];
const combined = arr8.concat(arr9);
console.log(combined); // [1, 2, 3, 4]

// Spread operator (alternative to concat)
const combined2 = [...arr8, ...arr9];
console.log(combined2); // [1, 2, 3, 4]

// ============================================
// ITERATION METHODS
// ============================================

const numbers = [1, 2, 3, 4, 5];

// forEach() - Execute function for each element
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// map() - Transform each element
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter() - Filter elements
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// reduce() - Reduce to single value
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 15

// reduceRight() - Reduce from right
const diff = numbers.reduceRight((acc, n) => acc - n, 0);
console.log(diff); // -15

// find() - Find first matching element
const found = numbers.find(n => n > 3);
console.log(found); // 4

// findIndex() - Find index of first matching element
const index = numbers.findIndex(n => n > 3);
console.log(index); // 3

// some() - Check if any element matches
const hasEven = numbers.some(n => n % 2 === 0);
console.log(hasEven); // true

// every() - Check if all elements match
const allPositive = numbers.every(n => n > 0);
console.log(allPositive); // true

// ============================================
// SEARCH METHODS
// ============================================

const arr10 = [1, 2, 3, 4, 5];

// indexOf() - Find index of value
console.log(arr10.indexOf(3)); // 2
console.log(arr10.indexOf(10)); // -1 (not found)

// lastIndexOf() - Find last index of value
const arr11 = [1, 2, 3, 2, 1];
console.log(arr11.lastIndexOf(2)); // 3

// includes() - Check if array contains value
console.log(arr10.includes(3)); // true
console.log(arr10.includes(10)); // false

// ============================================
// ARRAY DESTRUCTURING
// ============================================

const arr12 = [1, 2, 3];

// Basic destructuring
const [a, b, c] = arr12;
console.log(a, b, c); // 1 2 3

// Skip elements
const [first, , third] = arr12;
console.log(first, third); // 1 3

// Default values
const [x, y, z = 0] = [1, 2];
console.log(x, y, z); // 1 2 0

// Rest operator
const [head, ...tail] = arr12;
console.log(head); // 1
console.log(tail); // [2, 3]

// Swap variables
let p = 1;
let q = 2;
[p, q] = [q, p];
console.log(p, q); // 2 1

// ============================================
// ARRAY CREATION
// ============================================

// Array literal
const arr13 = [1, 2, 3];

// Array constructor
const arr14 = new Array(1, 2, 3);
const arr15 = new Array(5); // Creates array with 5 empty slots

// Array.from() - Create from iterable
const arr16 = Array.from("hello");
console.log(arr16); // ["h", "e", "l", "l", "o"]

const arr17 = Array.from({ length: 5 }, (_, i) => i * 2);
console.log(arr17); // [0, 2, 4, 6, 8]

// Array.of() - Create from arguments
const arr18 = Array.of(1, 2, 3);
console.log(arr18); // [1, 2, 3]

// ============================================
// ARRAY PROPERTIES
// ============================================

const arr19 = [1, 2, 3];

// length
console.log(arr19.length); // 3

// Setting length (truncates or extends)
arr19.length = 5;
console.log(arr19); // [1, 2, 3, empty × 2]

arr19.length = 2;
console.log(arr19); // [1, 2]

// ============================================
// FLATTENING ARRAYS
// ============================================

const nested = [1, [2, 3], [4, [5, 6]]];

// flat() - Flatten one level
console.log(nested.flat()); // [1, 2, 3, 4, [5, 6]]

// flat(depth) - Flatten to specified depth
console.log(nested.flat(2)); // [1, 2, 3, 4, 5, 6]

// flatMap() - Map then flatten one level
const arr20 = [1, 2, 3];
const doubledAndFlattened = arr20.flatMap(n => [n, n * 2]);
console.log(doubledAndFlattened); // [1, 2, 2, 4, 3, 6]

// ============================================
// ARRAY TO STRING
// ============================================

const arr21 = [1, 2, 3];

// join() - Join elements with separator
console.log(arr21.join()); // "1,2,3"
console.log(arr21.join("-")); // "1-2-3"
console.log(arr21.join("")); // "123"

// toString()
console.log(arr21.toString()); // "1,2,3"

// ============================================
// CHAINING METHODS
// ============================================

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers2
    .filter(n => n % 2 === 0) // [2, 4, 6, 8, 10]
    .map(n => n * 2) // [4, 8, 12, 16, 20]
    .reduce((acc, n) => acc + n, 0); // 60

console.log(result); // 60

// ============================================
// MULTIDIMENSIONAL ARRAYS
// ============================================

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[1][2]); // 6

// Iterate
matrix.forEach(row => {
    row.forEach(cell => {
        console.log(cell);
    });
});

