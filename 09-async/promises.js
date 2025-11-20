/**
 * PROMISES IN JAVASCRIPT
 * 
 * Promises represent the eventual completion (or failure) of an asynchronous operation.
 */

// ============================================
// CREATING PROMISES
// ============================================
const promise = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Operation successful");
        } else {
            reject("Operation failed");
        }
    }, 1000);
});

// ============================================
// CONSUMING PROMISES
// ============================================
promise
    .then(result => {
        console.log(result); // "Operation successful"
    })
    .catch(error => {
        console.error(error); // "Operation failed"
    });

// ============================================
// PROMISE STATES
// ============================================
// 1. Pending - Initial state
// 2. Fulfilled - Operation completed successfully
// 3. Rejected - Operation failed

const pendingPromise = new Promise(() => {
    // Never resolves or rejects - stays pending
});

// ============================================
// CHAINING PROMISES
// ============================================
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id, name: "John" }), 100);
    });
}

function fetchPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => resolve([{ id: 1, title: "Post 1" }]), 100);
    });
}

fetchUser(1)
    .then(user => {
        console.log("User:", user);
        return fetchPosts(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
    })
    .catch(error => {
        console.error("Error:", error);
    });

// ============================================
// PROMISE.ALL() - Wait for all promises
// ============================================
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values); // [1, 2, 3]
    })
    .catch(error => {
        // If any promise rejects, all() rejects
        console.error(error);
    });

// Example with async operations
const urls = ["url1", "url2", "url3"];
const fetchPromises = urls.map(url => fetch(url));

Promise.all(fetchPromises)
    .then(responses => {
        console.log("All requests completed");
    })
    .catch(error => {
        console.error("One or more requests failed");
    });

// ============================================
// PROMISE.ALLSETTLED() - Wait for all (success or failure)
// ============================================
const promises = [
    Promise.resolve(1),
    Promise.reject("Error"),
    Promise.resolve(3)
];

Promise.allSettled(promises)
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`Promise ${index}:`, result.value);
            } else {
                console.log(`Promise ${index}:`, result.reason);
            }
        });
    });

// ============================================
// PROMISE.RACE() - First to settle wins
// ============================================
const fastPromise = new Promise(resolve => setTimeout(() => resolve("Fast"), 100));
const slowPromise = new Promise(resolve => setTimeout(() => resolve("Slow"), 500));

Promise.race([fastPromise, slowPromise])
    .then(result => {
        console.log(result); // "Fast"
    });

// ============================================
// PROMISE.ANY() - First to fulfill (ignores rejections)
// ============================================
const rejectPromise = Promise.reject("Error");
const fulfillPromise = Promise.resolve("Success");

Promise.any([rejectPromise, fulfillPromise])
    .then(result => {
        console.log(result); // "Success"
    })
    .catch(error => {
        // Only if all promises reject
        console.error(error);
    });

// ============================================
// PROMISE.RESOLVE() - Create resolved promise
// ============================================
const resolved = Promise.resolve("Resolved value");
resolved.then(value => console.log(value)); // "Resolved value"

// ============================================
// PROMISE.REJECT() - Create rejected promise
// ============================================
const rejected = Promise.reject("Rejected value");
rejected.catch(error => console.error(error)); // "Rejected value"

// ============================================
// ERROR HANDLING
// ============================================
function riskyOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            if (random > 0.5) {
                resolve("Success");
            } else {
                reject(new Error("Random failure"));
            }
        }, 100);
    });
}

riskyOperation()
    .then(result => console.log(result))
    .catch(error => console.error(error.message))
    .finally(() => {
        console.log("Operation completed");
    });

// ============================================
// PROMISE WITH FETCH API
// ============================================
function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error("Fetch error:", error);
            throw error;
        });
}

// ============================================
// CONVERTING CALLBACKS TO PROMISES
// ============================================
function callbackFunction(data, callback) {
    setTimeout(() => {
        callback(null, `Processed: ${data}`);
    }, 100);
}

// Convert to promise
function promiseFunction(data) {
    return new Promise((resolve, reject) => {
        callbackFunction(data, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

promiseFunction("test")
    .then(result => console.log(result))
    .catch(error => console.error(error));

// ============================================
// PROMISE UTILITIES
// ============================================

// Delay utility
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(1000).then(() => console.log("1 second passed"));

// Timeout wrapper
function withTimeout(promise, ms) {
    const timeout = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Timeout")), ms);
    });
    
    return Promise.race([promise, timeout]);
}

// Retry utility
function retry(fn, times) {
    return new Promise((resolve, reject) => {
        function attempt(remaining) {
            fn()
                .then(resolve)
                .catch(error => {
                    if (remaining > 1) {
                        attempt(remaining - 1);
                    } else {
                        reject(error);
                    }
                });
        }
        attempt(times);
    });
}

// ============================================
// SEQUENTIAL VS PARALLEL EXECUTION
// ============================================

// Sequential (one after another)
function sequential() {
    return fetchUser(1)
        .then(user => fetchPosts(user.id))
        .then(posts => fetchComments(posts[0].id));
}

// Parallel (all at once)
function parallel() {
    const userPromise = fetchUser(1);
    const postsPromise = fetchPosts(1);
    const commentsPromise = fetchComments(1);
    
    return Promise.all([userPromise, postsPromise, commentsPromise]);
}

