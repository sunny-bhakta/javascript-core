/**
 * ASYNC/AWAIT IN JAVASCRIPT
 * 
 * async/await is syntactic sugar over promises, making asynchronous code look synchronous.
 */

// ============================================
// ASYNC FUNCTIONS
// ============================================
// async functions always return a Promise
async function asyncFunction() {
    return "Hello";
}

asyncFunction().then(result => console.log(result)); // "Hello"

// Equivalent to:
function promiseFunction() {
    return Promise.resolve("Hello");
}

// ============================================
// AWAIT KEYWORD
// ============================================
async function fetchData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
}

// await pauses execution until promise settles
// Only works inside async functions

// ============================================
// ERROR HANDLING WITH TRY/CATCH
// ============================================
async function riskyOperation() {
    try {
        const result = await someAsyncOperation();
        return result;
    } catch (error) {
        console.error("Error:", error);
        throw error; // Re-throw if needed
    }
}

// ============================================
// SEQUENTIAL EXECUTION
// ============================================
async function sequential() {
    const user = await fetchUser(1); // Wait for this
    const posts = await fetchPosts(user.id); // Then wait for this
    const comments = await fetchComments(posts[0].id); // Then wait for this
    return { user, posts, comments };
}

// ============================================
// PARALLEL EXECUTION
// ============================================
async function parallel() {
    // Start all promises at once
    const [user, posts, comments] = await Promise.all([
        fetchUser(1),
        fetchPosts(1),
        fetchComments(1)
    ]);
    
    return { user, posts, comments };
}

// ============================================
// AWAIT IN LOOPS
// ============================================
async function processItems(items) {
    // Sequential processing
    for (const item of items) {
        await processItem(item); // Wait for each
    }
    
    // Parallel processing
    await Promise.all(items.map(item => processItem(item)));
}

// ============================================
// ASYNC ARROW FUNCTIONS
// ============================================
const asyncArrow = async () => {
    const result = await someOperation();
    return result;
};

// In array methods
const results = await Promise.all(
    items.map(async (item) => {
        return await processItem(item);
    })
);

// ============================================
// ASYNC CLASS METHODS
// ============================================
class ApiClient {
    async fetchData(url) {
        const response = await fetch(url);
        return response.json();
    }
    
    async postData(url, data) {
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data)
        });
        return response.json();
    }
}

const client = new ApiClient();
const data = await client.fetchData("https://api.example.com/data");

// ============================================
// COMBINING MULTIPLE ASYNC OPERATIONS
// ============================================
async function complexOperation() {
    try {
        // Step 1: Fetch user
        const user = await fetchUser(1);
        
        // Step 2: Fetch user's posts and profile in parallel
        const [posts, profile] = await Promise.all([
            fetchPosts(user.id),
            fetchProfile(user.id)
        ]);
        
        // Step 3: Process posts
        const processedPosts = await Promise.all(
            posts.map(async (post) => {
                const comments = await fetchComments(post.id);
                return { ...post, comments };
            })
        );
        
        return {
            user,
            posts: processedPosts,
            profile
        };
    } catch (error) {
        console.error("Operation failed:", error);
        throw error;
    }
}

// ============================================
// AWAIT WITH PROMISE.ALLSETTLED()
// ============================================
async function fetchMultiple(urls) {
    const results = await Promise.allSettled(
        urls.map(url => fetch(url))
    );
    
    const successful = results
        .filter(r => r.status === "fulfilled")
        .map(r => r.value);
    
    const failed = results
        .filter(r => r.status === "rejected")
        .map(r => r.reason);
    
    return { successful, failed };
}

// ============================================
// TIMEOUT WITH ASYNC/AWAIT
// ============================================
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function withTimeout(promise, ms) {
    const timeout = delay(ms).then(() => {
        throw new Error("Timeout");
    });
    
    return Promise.race([promise, timeout]);
}

async function fetchWithTimeout(url, timeoutMs) {
    try {
        const response = await withTimeout(fetch(url), timeoutMs);
        return await response.json();
    } catch (error) {
        if (error.message === "Timeout") {
            console.error("Request timed out");
        } else {
            console.error("Request failed:", error);
        }
        throw error;
    }
}

// ============================================
// RETRY PATTERN WITH ASYNC/AWAIT
// ============================================
async function retry(fn, times) {
    for (let i = 0; i < times; i++) {
        try {
            return await fn();
        } catch (error) {
            if (i === times - 1) throw error;
            await delay(1000 * (i + 1)); // Exponential backoff
        }
    }
}

// Usage
async function fetchWithRetry(url) {
    return retry(async () => {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Request failed");
        return response.json();
    }, 3);
}

// ============================================
// ASYNC GENERATORS
// ============================================
async function* asyncGenerator() {
    for (let i = 0; i < 5; i++) {
        await delay(100);
        yield i;
    }
}

async function consumeAsyncGenerator() {
    for await (const value of asyncGenerator()) {
        console.log(value); // 0, 1, 2, 3, 4
    }
}

// ============================================
// TOP-LEVEL AWAIT (ES2022)
// ============================================
// In modules, you can use await at top level

// module.js
// const data = await fetch("https://api.example.com/data");
// export default data;

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Early return on error
async function getUserData(userId) {
    const user = await fetchUser(userId);
    if (!user) return null;
    
    const posts = await fetchPosts(userId);
    return { user, posts };
}

// Pattern 2: Conditional async
async function conditionalAsync(condition) {
    if (condition) {
        return await fetchData();
    }
    return null;
}

// Pattern 3: Fire and forget
function fireAndForget() {
    logEvent("user_action").catch(console.error);
}

// Pattern 4: Batch processing
async function processBatch(items, batchSize) {
    for (let i = 0; i < items.length; i += batchSize) {
        const batch = items.slice(i, i + batchSize);
        await Promise.all(batch.map(item => processItem(item)));
    }
}

