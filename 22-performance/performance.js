/**
 * PERFORMANCE OPTIMIZATION IN JAVASCRIPT
 * 
 * Techniques to improve JavaScript performance:
 * - Debouncing
 * - Throttling
 * - Lazy Loading
 * - Code Splitting
 * - Memory Management
 * - Algorithm Optimization
 */

// ============================================
// DEBOUNCING
// ============================================

// Debounce - Execute after delay, cancel if called again
function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Example: Search input
const searchInput = document.querySelector("#search");
const debouncedSearch = debounce((query) => {
    console.log("Searching for:", query);
    // Perform search
}, 300);

// searchInput.addEventListener("input", (e) => {
//     debouncedSearch(e.target.value);
// });

// ============================================
// THROTTLING
// ============================================

// Throttle - Execute at most once per interval
function throttle(func, limit) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}

// Example: Scroll handler
const throttledScroll = throttle(() => {
    console.log("Scrolled");
    // Handle scroll
}, 100);

// window.addEventListener("scroll", throttledScroll);

// ============================================
// LAZY LOADING
// ============================================

// Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll("img[data-src]");
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Lazy load modules
async function lazyLoadModule() {
    const module = await import("./heavy-module.js");
    return module;
}

// ============================================
// CODE SPLITTING
// ============================================

// Dynamic import for code splitting
async function loadFeature(featureName) {
    switch(featureName) {
        case "chart":
            return await import("./features/chart.js");
        case "table":
            return await import("./features/table.js");
        default:
            return null;
    }
}

// Load on demand
// const chartModule = await loadFeature("chart");

// ============================================
// MEMORY OPTIMIZATION
// ============================================

// 1. Avoid memory leaks
function cleanup() {
    // Remove event listeners
    element.removeEventListener("click", handler);
    
    // Clear intervals
    clearInterval(intervalId);
    
    // Nullify references
    largeData = null;
}

// 2. Use object pooling
class ObjectPool {
    constructor(createFn, resetFn, initialSize = 10) {
        this.createFn = createFn;
        this.resetFn = resetFn;
        this.pool = [];
        
        for (let i = 0; i < initialSize; i++) {
            this.pool.push(createFn());
        }
    }
    
    acquire() {
        return this.pool.pop() || this.createFn();
    }
    
    release(obj) {
        this.resetFn(obj);
        this.pool.push(obj);
    }
}

// Usage
const pool = new ObjectPool(
    () => ({ x: 0, y: 0 }),
    (obj) => { obj.x = 0; obj.y = 0; }
);

const obj = pool.acquire();
// Use object
pool.release(obj);

// ============================================
// ALGORITHM OPTIMIZATION
// ============================================

// 1. Use efficient data structures
// Map instead of object for frequent additions/deletions
const map = new Map(); // O(1) operations
map.set("key", "value");
map.get("key");

// Set for unique values
const set = new Set(); // O(1) operations
set.add("value");
set.has("value");

// 2. Cache results (memoization)
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

const memoizedExpensive = memoize((n) => {
    // Expensive calculation
    let result = 0;
    for (let i = 0; i < n * 1000000; i++) {
        result += i;
    }
    return result;
});

// 3. Batch DOM operations
function batchDOMUpdates() {
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < 1000; i++) {
        const div = document.createElement("div");
        div.textContent = `Item ${i}`;
        fragment.appendChild(div);
    }
    
    document.body.appendChild(fragment); // Single DOM update
}

// ============================================
// PERFORMANCE MONITORING
// ============================================

// Performance API
function measurePerformance(name, fn) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
    return result;
}

// Usage
measurePerformance("Array operation", () => {
    const arr = new Array(1000000).fill(0).map((_, i) => i * 2);
});

// Memory usage
if (performance.memory) {
    console.log("Used:", performance.memory.usedJSHeapSize);
    console.log("Total:", performance.memory.totalJSHeapSize);
    console.log("Limit:", performance.memory.jsHeapSizeLimit);
}

// ============================================
// OPTIMIZATION TECHNIQUES
// ============================================

// 1. Use requestAnimationFrame for animations
function animate() {
    // Animation code
    requestAnimationFrame(animate);
}
// animate();

// 2. Use Web Workers for CPU-intensive tasks
// main.js
// const worker = new Worker("worker.js");
// worker.postMessage({ data: largeData });
// worker.onmessage = (e) => {
//     console.log("Result:", e.data);
// };

// 3. Virtual scrolling for large lists
function virtualScroll(items, containerHeight, itemHeight) {
    const visibleCount = Math.ceil(containerHeight / itemHeight);
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = startIndex + visibleCount;
    
    return items.slice(startIndex, endIndex);
}

// 4. Use CSS transforms instead of position changes
// element.style.transform = "translateX(100px)"; // GPU accelerated
// Instead of: element.style.left = "100px";

// ============================================
// BUNDLE OPTIMIZATION
// ============================================

// Tree shaking - Remove unused code
// Use ES6 modules for tree shaking

// Minification - Reduce file size
// Use tools like Terser, UglifyJS

// Compression - Gzip/Brotli
// Enable on server

// ============================================
// NETWORK OPTIMIZATION
// ============================================

// 1. HTTP/2 Server Push
// Push critical resources

// 2. Prefetch/Preload
// <link rel="prefetch" href="resource.js">
// <link rel="preload" href="critical.css" as="style">

// 3. Service Workers for caching
// Cache API responses

// ============================================
// RENDERING OPTIMIZATION
// ============================================

// 1. Avoid forced reflows
// Batch style reads/writes
function batchStyles() {
    // Read all styles first
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    
    // Then write all styles
    element.style.width = width + 10 + "px";
    element.style.height = height + 10 + "px";
}

// 2. Use will-change for animations
// element.style.willChange = "transform";

// 3. Use contain CSS property
// element.style.contain = "layout style paint";

// ============================================
// DATABASE QUERY OPTIMIZATION
// ============================================

// 1. Pagination
function paginate(items, page, pageSize) {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return items.slice(start, end);
}

// 2. Indexing (concept)
// Use indexes for fast lookups

// 3. Caching queries
const queryCache = new Map();
function cachedQuery(key, queryFn) {
    if (queryCache.has(key)) {
        return queryCache.get(key);
    }
    const result = queryFn();
    queryCache.set(key, result);
    return result;
}

// ============================================
// BEST PRACTICES
// ============================================

/*
1. Profile before optimizing
2. Measure performance
3. Optimize bottlenecks
4. Use appropriate data structures
5. Cache expensive operations
6. Lazy load resources
7. Code split large bundles
8. Minimize DOM manipulation
9. Use Web Workers for heavy tasks
10. Monitor memory usage
*/

