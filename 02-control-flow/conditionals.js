/**
 * CONDITIONAL STATEMENTS IN JAVASCRIPT
 * 
 * JavaScript provides several ways to make decisions:
 * 1. if/else statements
 * 2. switch statements
 * 3. Ternary operator
 */

// ============================================
// IF STATEMENT
// ============================================
let age = 18;

if (age >= 18) {
    console.log("You are an adult");
}

// ============================================
// IF-ELSE STATEMENT
// ============================================
let temperature = 25;

if (temperature > 30) {
    console.log("It's hot outside");
} else {
    console.log("It's not too hot");
}

// ============================================
// IF-ELSE IF-ELSE STATEMENT
// ============================================
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

// ============================================
// NESTED IF STATEMENTS
// ============================================
let isLoggedIn = true;
let userRole = "admin";

if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("Welcome, Admin!");
    } else {
        console.log("Welcome, User!");
    }
} else {
    console.log("Please log in");
}

// ============================================
// SWITCH STATEMENT
// ============================================
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend!");
        break;
    default:
        console.log("Midweek day");
}

// Switch with multiple cases (fall-through)
let month = 2;
let daysInMonth;

switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        daysInMonth = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        daysInMonth = 30;
        break;
    case 2:
        daysInMonth = 28; // Simplified (ignoring leap years)
        break;
    default:
        daysInMonth = 0;
}

// ============================================
// TERNARY OPERATOR (Conditional Operator)
// ============================================
let userAge = 20;
let message = userAge >= 18 ? "Adult" : "Minor";
console.log(message); // "Adult"

// Nested ternary
let grade = 85;
let letterGrade = grade >= 90 ? "A" :
                 grade >= 80 ? "B" :
                 grade >= 70 ? "C" :
                 grade >= 60 ? "D" : "F";

// ============================================
// LOGICAL OPERATORS IN CONDITIONALS
// ============================================
let isActive = true;
let hasPermission = true;

// AND (&&)
if (isActive && hasPermission) {
    console.log("Access granted");
}

// OR (||)
let isAdmin = false;
let isModerator = true;

if (isAdmin || isModerator) {
    console.log("Can moderate");
}

// NOT (!)
if (!isActive) {
    console.log("Account is inactive");
}

// ============================================
// NULLISH COALESCING IN CONDITIONALS
// ============================================
let userName = null;
let displayName = userName ?? "Guest";
console.log(displayName); // "Guest"

// ============================================
// OPTIONAL CHAINING IN CONDITIONALS
// ============================================
const user = {
    profile: {
        name: "John",
        email: "john@example.com"
    }
};

if (user?.profile?.email) {
    console.log("Email:", user.profile.email);
}

// ============================================
// COMMON PATTERNS
// ============================================

// Early return pattern
function processUser(user) {
    if (!user) {
        return "No user provided";
    }
    
    if (!user.isActive) {
        return "User is inactive";
    }
    
    // Main logic here
    return "User processed successfully";
}

// Guard clauses
function calculateDiscount(price, isMember, hasCoupon) {
    if (price <= 0) return 0;
    if (!isMember && !hasCoupon) return 0;
    
    let discount = 0;
    if (isMember) discount += 0.1;
    if (hasCoupon) discount += 0.05;
    
    return price * discount;
}

// ============================================
// TRUTHY/FALSY CHECKS
// ============================================
let value = "";

// Check for truthy value
if (value) {
    console.log("Has value");
} else {
    console.log("No value"); // This will execute
}

// Explicit checks
if (value !== null && value !== undefined) {
    console.log("Value exists");
}

// Modern approach
if (value != null) { // Checks for both null and undefined
    console.log("Value exists");
}

