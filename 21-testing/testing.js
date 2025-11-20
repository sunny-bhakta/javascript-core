/**
 * TESTING CONCEPTS IN JAVASCRIPT
 * 
 * Testing is crucial for reliable code:
 * - Unit Testing
 * - Test Frameworks
 * - Assertions
 * - Mocking & Stubbing
 * - Test Structure
 */

// ============================================
// BASIC TEST STRUCTURE
// ============================================

// Simple test function
function test(description, fn) {
    try {
        fn();
        console.log(`✓ ${description}`);
    } catch (error) {
        console.error(`✗ ${description}`);
        console.error(error);
    }
}

// Assertion function
function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`Expected ${expected}, got ${actual}`);
            }
        },
        toEqual(expected) {
            if (JSON.stringify(actual) !== JSON.stringify(expected)) {
                throw new Error(`Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
            }
        },
        toBeTruthy() {
            if (!actual) {
                throw new Error(`Expected truthy value, got ${actual}`);
            }
        },
        toBeFalsy() {
            if (actual) {
                throw new Error(`Expected falsy value, got ${actual}`);
            }
        }
    };
}

// Example test
test("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
});

// ============================================
// UNIT TESTING
// ============================================

// Function to test
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Unit tests
test("add function", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
});

test("multiply function", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, 5)).toBe(-5);
    expect(multiply(0, 10)).toBe(0);
});

// ============================================
// TESTING ASYNC CODE
// ============================================

// Async test function
async function testAsync(description, fn) {
    try {
        await fn();
        console.log(`✓ ${description}`);
    } catch (error) {
        console.error(`✗ ${description}`);
        console.error(error);
    }
}

// Async function to test
async function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => resolve({ data: "test" }), 100);
    });
}

// Async test
testAsync("fetchData returns data", async () => {
    const result = await fetchData();
    expect(result.data).toBe("test");
});

// ============================================
// TESTING WITH JEST (Example)
// ============================================

// Jest-style test structure
/*
describe("Math functions", () => {
    test("adds 1 + 2 to equal 3", () => {
        expect(add(1, 2)).toBe(3);
    });
    
    test("multiplies 2 * 3 to equal 6", () => {
        expect(multiply(2, 3)).toBe(6);
    });
    
    describe("Edge cases", () => {
        test("handles negative numbers", () => {
            expect(add(-1, -2)).toBe(-3);
        });
        
        test("handles zero", () => {
            expect(multiply(5, 0)).toBe(0);
        });
    });
});
*/

// ============================================
// MOCKING FUNCTIONS
// ============================================

// Original function
function getCurrentTime() {
    return new Date().getTime();
}

// Mock function
function createMockFunction(returnValue) {
    let callCount = 0;
    const calls = [];
    
    const mockFn = function(...args) {
        callCount++;
        calls.push({ args, returnValue });
        return returnValue;
    };
    
    mockFn.getCallCount = () => callCount;
    mockFn.getCalls = () => calls;
    mockFn.reset = () => {
        callCount = 0;
        calls.length = 0;
    };
    
    return mockFn;
}

// Usage
const mockGetTime = createMockFunction(1234567890);
test("mock function", () => {
    const time = mockGetTime();
    expect(time).toBe(1234567890);
    expect(mockGetTime.getCallCount()).toBe(1);
});

// ============================================
// STUBBING
// ============================================

// Original function
function fetchUser(id) {
    // Would make API call
    return { id, name: "User" };
}

// Stub function
function stubFetchUser(id) {
    return { id, name: "Stubbed User" };
}

// Test with stub
test("user fetch with stub", () => {
    const user = stubFetchUser(1);
    expect(user.id).toBe(1);
    expect(user.name).toBe("Stubbed User");
});

// ============================================
// SPYING
// ============================================

// Create spy
function createSpy(originalFn) {
    let callCount = 0;
    const calls = [];
    
    const spy = function(...args) {
        callCount++;
        calls.push({ args });
        if (originalFn) {
            return originalFn.apply(this, args);
        }
    };
    
    spy.getCallCount = () => callCount;
    spy.getCalls = () => calls;
    spy.wasCalled = () => callCount > 0;
    spy.wasCalledWith = (...args) => {
        return calls.some(call => 
            JSON.stringify(call.args) === JSON.stringify(args)
        );
    };
    
    return spy;
}

// Usage
const originalFn = (a, b) => a + b;
const spy = createSpy(originalFn);

test("spy tracks calls", () => {
    spy(1, 2);
    expect(spy.wasCalled()).toBe(true);
    expect(spy.getCallCount()).toBe(1);
    expect(spy.wasCalledWith(1, 2)).toBe(true);
});

// ============================================
// TESTING ERRORS
// ============================================

function expectToThrow(fn, errorMessage) {
    try {
        fn();
        throw new Error("Expected function to throw");
    } catch (error) {
        if (errorMessage && !error.message.includes(errorMessage)) {
            throw new Error(`Expected error message to include "${errorMessage}"`);
        }
        return true;
    }
}

// Function that throws
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero");
    }
    return a / b;
}

// Test error case
test("divide throws on zero", () => {
    expectToThrow(() => divide(10, 0), "Division by zero");
});

// ============================================
// TEST SETUP AND TEARDOWN
// ============================================

// Setup function
function beforeEach(fn) {
    // Run before each test
    fn();
}

// Teardown function
function afterEach(fn) {
    // Run after each test
    fn();
}

// Example
let testData;

beforeEach(() => {
    testData = { count: 0 };
});

test("test with setup", () => {
    testData.count++;
    expect(testData.count).toBe(1);
});

// ============================================
// TESTING DOM MANIPULATION
// ============================================

// Mock DOM element
function createMockElement(tagName = "div") {
    return {
        tagName: tagName.toUpperCase(),
        textContent: "",
        innerHTML: "",
        classList: {
            add: () => {},
            remove: () => {},
            contains: () => false
        },
        addEventListener: () => {},
        style: {}
    };
}

// Test DOM manipulation
test("DOM manipulation", () => {
    const element = createMockElement("div");
    element.textContent = "Hello";
    expect(element.textContent).toBe("Hello");
});

// ============================================
// INTEGRATION TESTING EXAMPLE
// ============================================

// Integration test (tests multiple functions together)
function processOrder(items, discount) {
    const subtotal = items.reduce((sum, item) => sum + item.price, 0);
    const discountAmount = subtotal * discount;
    const total = subtotal - discountAmount;
    return { subtotal, discountAmount, total };
}

test("processOrder integration", () => {
    const items = [
        { price: 10 },
        { price: 20 },
        { price: 30 }
    ];
    const result = processOrder(items, 0.1);
    expect(result.subtotal).toBe(60);
    expect(result.discountAmount).toBe(6);
    expect(result.total).toBe(54);
});

// ============================================
// TEST COVERAGE
// ============================================

// Simple coverage tracking
const coverage = {
    functions: new Set(),
    branches: new Set()
};

function trackCoverage(functionName) {
    coverage.functions.add(functionName);
}

function getCoverage() {
    return {
        functions: coverage.functions.size,
        branches: coverage.branches.size
    };
}

// ============================================
// BEST PRACTICES
// ============================================

/*
1. Write tests before code (TDD)
2. Test one thing at a time
3. Use descriptive test names
4. Keep tests independent
5. Test edge cases
6. Test error cases
7. Use mocks for external dependencies
8. Keep tests fast
9. Maintain test coverage
10. Refactor tests with code
*/

