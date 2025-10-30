
// GitHub Copilot Workshop - Exercise 4: Copilot Chat Mastery
// This file contains code with various issues for debugging with Copilot Chat

console.log("=== Exercise 4: Copilot Chat - Buggy Code Examples ===");

// =============================================================================
// CHALLENGE 4.1: CODE EXPLANATION
// =============================================================================
// Instructions: Select this function and use /explain in Copilot Chat

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const right = arr.filter(x => x > pivot);
    const middle = arr.filter(x => x === pivot);
    return [...quickSort(left), ...middle, ...quickSort(right)];
}

// =============================================================================
// CHALLENGE 4.2: BUG DETECTION
// =============================================================================
// Instructions: Select this buggy function and use /fix in Copilot Chat

function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.lenght;  // BUG: typo - 'lenght' instead of 'length'
}

// Test the buggy function (this will cause errors):
// console.log(calculateAverage([1, 2, 3, 4, 5])); // Should be 3, but will throw "Cannot read properties of undefined"

// =============================================================================
// ADDITIONAL BUGGY FUNCTIONS FOR PRACTICE
// =============================================================================

// Bug 1: Off-by-one error in array access
function getLastElement(arr) {
    return arr[arr.length];  // BUG: should be arr.length - 1
}

// Bug 2: Infinite loop potential
function countdown(n) {
    while (n > 0) {
        console.log(n);
        // BUG: Missing n-- or n = n - 1
    }
    console.log("Done!");
}

// Bug 3: Incorrect null/undefined handling
function getUserName(user) {
    return user.name.toUpperCase();  // BUG: user or user.name might be null/undefined
}

// Bug 4: Array mutation instead of returning new array
function addToAllNumbers(numbers, valueToAdd) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] += valueToAdd;  // BUG: mutating original array
    }
    return numbers;
}

// Bug 5: Incorrect async handling
async function fetchUserData(userId) {
    const response = fetch(`/api/users/${userId}`);  // BUG: missing await
    const data = response.json();  // BUG: missing await
    return data;
}

// Bug 6: Memory leak with event listeners
function setupButton() {
    const button = document.createElement('button');
    setInterval(() => {
        button.addEventListener('click', () => {  // BUG: adding listener repeatedly
            console.log('Button clicked');
        });
    }, 1000);
    return button;
}

// Bug 7: Incorrect comparison operator
function isEqual(a, b) {
    return a = b;  // BUG: assignment instead of comparison
}

// Bug 8: Scope issue with var in loops
function createButtons() {
    const buttons = [];
    for (var i = 0; i < 5; i++) {  // BUG: var instead of let
        buttons.push(() => {
            console.log(`Button ${i} clicked`);  // Will always log "Button 5 clicked"
        });
    }
    return buttons;
}

// Bug 9: Incorrect object property access
function getNestedProperty(obj, path) {
    const keys = path.split('.');
    let current = obj;
    for (const key of keys) {
        current = current[key];  // BUG: no null/undefined checks
    }
    return current;
}

// Bug 10: Race condition in async operations
async function processItems(items) {
    const results = [];
    for (const item of items) {
        results.push(processItem(item));  // BUG: not awaiting async operation
    }
    return results;
}

async function processItem(item) {
    // Simulate async operation
    return new Promise(resolve => {
        setTimeout(() => resolve(item * 2), 100);
    });
}

// =============================================================================
// CHALLENGE 4.3: DOCUMENTATION GENERATION EXAMPLES
// =============================================================================
// Instructions: Select any function above and use /doc in Copilot Chat

// Example function for documentation practice:
function complexCalculation(data, options) {
    const { multiplier = 1, offset = 0, precision = 2 } = options || {};
    return data
        .filter(item => item.value > 0)
        .map(item => ((item.value * multiplier) + offset).toFixed(precision))
        .sort((a, b) => parseFloat(a) - parseFloat(b));
}

// =============================================================================
// TESTING FUNCTIONS (Use these to verify fixes)
// =============================================================================

function testFunctions() {
    console.log("=== Testing Functions ===");
    
    // Test calculateAverage (after fixing)
    try {
        console.log("Average test:", calculateAverage([1, 2, 3, 4, 5]));
    } catch (error) {
        console.error("calculateAverage error:", error.message);
    }
    
    // Test getLastElement (after fixing)
    try {
        console.log("Last element test:", getLastElement([1, 2, 3, 4, 5]));
    } catch (error) {
        console.error("getLastElement error:", error.message);
    }
    
    // Test getUserName (after fixing)
    try {
        console.log("User name test:", getUserName({ name: "john" }));
        console.log("Null user test:", getUserName(null));
    } catch (error) {
        console.error("getUserName error:", error.message);
    }
    
    // Test isEqual (after fixing)
    console.log("Equality test:", isEqual(5, 5), isEqual(5, "5"));
    
    // Add more tests as you fix the functions
}

// Uncomment to run tests:
// testFunctions();

// =============================================================================
// INSTRUCTIONS FOR PARTICIPANTS
// =============================================================================

/*
HOW TO USE THIS FILE:

1. EXPLANATION PRACTICE:
   - Select the quickSort function
   - Open Copilot Chat (Ctrl+Shift+I)
   - Type: /explain
   - Read and ask follow-up questions

2. BUG FIXING PRACTICE:
   - Select calculateAverage function
   - Type: /fix in Chat
   - Apply the suggested fix
   - Test the function

3. DOCUMENTATION PRACTICE:
   - Select complexCalculation function
   - Type: /doc in Chat
   - Add the generated JSDoc comments

4. ADDITIONAL PRACTICE:
   - Try fixing other buggy functions
   - Use Chat to explain why each bug occurs
   - Ask for alternative implementations
   - Request performance optimizations

5. ADVANCED CHALLENGES:
   - Ask Chat to identify ALL bugs in this file
   - Request security vulnerability analysis
   - Ask for modern JavaScript refactoring suggestions
*/
