/**
 * CLOSURES IN JAVASCRIPT
 * 
 * A closure is a function that has access to variables in its outer (enclosing)
 * lexical scope, even after the outer function has returned.
 * 
 * Closures are created every time a function is created.
 */

// ============================================
// BASIC CLOSURE EXAMPLE
// ============================================
function outerFunction(x) {
    // Outer function's variable
    const outerVariable = x;
    
    // Inner function (closure)
    function innerFunction(y) {
        // Can access outerVariable even after outerFunction returns
        return outerVariable + y;
    }
    
    return innerFunction;
}

const closure = outerFunction(10);
console.log(closure(5)); // 15

// ============================================
// CLOSURE WITH PRIVATE VARIABLES
// ============================================
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
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1
// count is not directly accessible
// console.log(counter.count); // undefined

// ============================================
// CLOSURE IN LOOPS (COMMON PITFALL)
// ============================================
// Problem: All closures share the same variable
function createFunctions() {
    const functions = [];
    for (var i = 0; i < 3; i++) {
        functions.push(function() {
            return i; // All return 3 (final value)
        });
    }
    return functions;
}

const funcs = createFunctions();
console.log(funcs[0]()); // 3 (not 0!)
console.log(funcs[1]()); // 3 (not 1!)
console.log(funcs[2]()); // 3 (not 2!)

// Solution 1: Use let instead of var
function createFunctionsFixed1() {
    const functions = [];
    for (let i = 0; i < 3; i++) { // let creates new binding each iteration
        functions.push(function() {
            return i;
        });
    }
    return functions;
}

// Solution 2: IIFE to create new scope
function createFunctionsFixed2() {
    const functions = [];
    for (var i = 0; i < 3; i++) {
        functions.push((function(index) {
            return function() {
                return index;
            };
        })(i));
    }
    return functions;
}

// Solution 3: bind
function createFunctionsFixed3() {
    const functions = [];
    for (var i = 0; i < 3; i++) {
        functions.push(function(index) {
            return index;
        }.bind(null, i));
    }
    return functions;
}

// ============================================
// MODULE PATTERN WITH CLOSURES
// ============================================
const myModule = (function() {
    // Private variables
    let privateVar = 0;
    const privateFunction = function() {
        return privateVar;
    };
    
    // Public API
    return {
        increment: function() {
            privateVar++;
        },
        getValue: function() {
            return privateFunction();
        }
    };
})();

myModule.increment();
console.log(myModule.getValue()); // 1
// console.log(myModule.privateVar); // undefined

// ============================================
// MEMOIZATION WITH CLOSURES
// ============================================
function memoize(fn) {
    const cache = {}; // Private cache
    
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

// Example: Memoized factorial
const memoizedFactorial = memoize(function(n) {
    if (n <= 1) return 1;
    return n * memoizedFactorial(n - 1);
});

console.log(memoizedFactorial(5)); // Calculates
console.log(memoizedFactorial(5)); // Returns cached value

// ============================================
// PARTIAL APPLICATION WITH CLOSURES
// ============================================
function multiply(a, b, c) {
    return a * b * c;
}

function partial(fn, ...partialArgs) {
    return function(...remainingArgs) {
        return fn(...partialArgs, ...remainingArgs);
    };
}

const multiplyBy2 = partial(multiply, 2);
console.log(multiplyBy2(3, 4)); // 24 (2 * 3 * 4)

// ============================================
// CURRYING WITH CLOSURES
// ============================================
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}

const curriedAdd = curry(function(a, b, c) {
    return a + b + c;
});

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6

// ============================================
// EVENT HANDLERS WITH CLOSURES
// ============================================
function setupButton(buttonId, message) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', function() {
        // Closure captures 'message' variable
        alert(message);
    });
}

// ============================================
// DATA PRIVACY WITH CLOSURES
// ============================================
function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private
    
    return {
        deposit: function(amount) {
            balance += amount;
            return balance;
        },
        withdraw: function(amount) {
            if (amount <= balance) {
                balance -= amount;
                return balance;
            } else {
                throw new Error("Insufficient funds");
            }
        },
        getBalance: function() {
            return balance;
        }
    };
}

const account = createBankAccount(100);
account.deposit(50);
console.log(account.getBalance()); // 150
// balance is not directly accessible

// ============================================
// FUNCTION FACTORY WITH CLOSURES
// ============================================
function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// ============================================
// CLOSURE SCOPE CHAIN
// ============================================
function outer() {
    const outerVar = "outer";
    
    function middle() {
        const middleVar = "middle";
        
        function inner() {
            const innerVar = "inner";
            // Can access all outer scopes
            console.log(innerVar, middleVar, outerVar);
        }
        
        return inner;
    }
    
    return middle();
}

const innerFunc = outer();
innerFunc(); // "inner middle outer"

