/**
 * MEMOIZATION IN JAVASCRIPT
 * 
 * Memoization is an optimization technique that caches function results
 * to avoid redundant calculations.
 */

// ============================================
// BASIC MEMOIZATION
// ============================================
function memoize(fn) {
    const cache = {};
    
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
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);
console.log(memoizedFactorial(5)); // Calculates
console.log(memoizedFactorial(5)); // Returns cached

// ============================================
// MEMOIZATION WITH MAP
// ============================================
function memoizeWithMap(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

// ============================================
// MEMOIZATION WITH WEAKMAP
// ============================================
function memoizeWithWeakMap(fn) {
    const cache = new WeakMap();
    
    return function(obj) {
        if (cache.has(obj)) {
            return cache.get(obj);
        }
        
        const result = fn(obj);
        cache.set(obj, result);
        return result;
    };
}

// ============================================
// FIBONACCI WITH MEMOIZATION
// ============================================
function fibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

console.log(fibonacci(50)); // Fast with memoization

// ============================================
// MEMOIZATION WITH CUSTOM KEY GENERATOR
// ============================================
function memoizeWithKey(fn, keyGenerator) {
    const cache = {};
    
    return function(...args) {
        const key = keyGenerator ? keyGenerator(...args) : JSON.stringify(args);
        
        if (cache[key]) {
            return cache[key];
        }
        
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

// Custom key for object arguments
const memoizedWithCustomKey = memoizeWithKey(
    (obj) => obj.value * 2,
    (obj) => obj.id // Use id as key
);

// ============================================
// MEMOIZATION WITH TTL (Time To Live)
// ============================================
function memoizeWithTTL(fn, ttl = 60000) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        const cached = cache[key];
        
        if (cached && Date.now() - cached.timestamp < ttl) {
            return cached.value;
        }
        
        const result = fn.apply(this, args);
        cache[key] = {
            value: result,
            timestamp: Date.now()
        };
        
        return result;
    };
}

// ============================================
// MEMOIZATION FOR ASYNC FUNCTIONS
// ============================================
function memoizeAsync(fn) {
    const cache = {};
    
    return async function(...args) {
        const key = JSON.stringify(args);
        
        if (cache[key]) {
            return cache[key];
        }
        
        const promise = fn.apply(this, args);
        cache[key] = promise;
        
        // Handle errors - remove from cache on error
        promise.catch(() => {
            delete cache[key];
        });
        
        return promise;
    };
}

// ============================================
// MEMOIZATION WITH LRU CACHE
// ============================================
class LRUCache {
    constructor(maxSize = 100) {
        this.maxSize = maxSize;
        this.cache = new Map();
    }
    
    get(key) {
        if (this.cache.has(key)) {
            // Move to end (most recently used)
            const value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value);
            return value;
        }
        return undefined;
    }
    
    set(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.maxSize) {
            // Remove least recently used (first item)
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        this.cache.set(key, value);
    }
}

function memoizeLRU(fn, maxSize = 100) {
    const cache = new LRUCache(maxSize);
    
    return function(...args) {
        const key = JSON.stringify(args);
        const cached = cache.get(key);
        
        if (cached !== undefined) {
            return cached;
        }
        
        const result = fn.apply(this, args);
        cache.set(key, result);
        return result;
    };
}

// ============================================
// PRACTICAL EXAMPLE: EXPENSIVE CALCULATION
// ============================================
function expensiveCalculation(n) {
    console.log(`Calculating for ${n}...`);
    let result = 0;
    for (let i = 0; i < n * 1000000; i++) {
        result += i;
    }
    return result;
}

const memoizedExpensive = memoize(expensiveCalculation);
console.log(memoizedExpensive(10)); // Calculates
console.log(memoizedExpensive(10)); // Returns cached (no calculation)

// ============================================
// MEMOIZATION FOR API CALLS
// ============================================
async function fetchUserData(userId) {
    const response = await fetch(`/api/users/${userId}`);
    return response.json();
}

const memoizedFetch = memoizeAsync(fetchUserData);
// First call - makes API request
const user1 = await memoizedFetch(1);
// Second call with same ID - returns cached
const user2 = await memoizedFetch(1);

