
// GitHub Copilot Workshop - Exercise 4: Copilot Chat Mastery
// This file contains complex and inefficient code for optimization practice with Copilot Chat

console.log("=== Exercise 4: Copilot Chat - Complex Code Examples ===");

// =============================================================================
// CHALLENGE 4.4: CODE OPTIMIZATION
// =============================================================================
// Instructions: Select this inefficient function and ask Copilot Chat:
// "How can I optimize this function for better performance?"

function findDuplicates(arr) {
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                if (!duplicates.includes(arr[i])) {
                    duplicates.push(arr[i]);
                }
            }
        }
    }
    return duplicates;
}

// =============================================================================
// CHALLENGE 4.5: REFACTORING PRACTICE
// =============================================================================
// Instructions: Select this nested function and ask Copilot Chat:
// "Please refactor this to be more readable and maintainable"

function processUser(user) {
    if (user && user.name && user.email && user.age) {
        if (user.age >= 18) {
            if (user.email.includes('@')) {
                return {
                    valid: true,
                    message: 'User is valid',
                    canVote: user.age >= 18,
                    emailValid: user.email.includes('@')
                };
            } else {
                return { valid: false, message: 'Invalid email' };
            }
        } else {
            return { valid: false, message: 'User too young' };
        }
    } else {
        return { valid: false, message: 'Missing required fields' };
    }
}

// =============================================================================
// ADDITIONAL COMPLEX CODE FOR OPTIMIZATION PRACTICE
// =============================================================================

// Inefficient 1: O(n²) search in sorted array
function searchInSortedArray(sortedArray, target) {
    for (let i = 0; i < sortedArray.length; i++) {
        for (let j = 0; j < sortedArray.length; j++) {
            if (sortedArray[j] === target) {
                return j;
            }
        }
    }
    return -1;
}

// Inefficient 2: Unnecessary object creation and string concatenation
function generateReport(users) {
    let report = "";
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let userInfo = {
            name: user.name,
            email: user.email,
            status: user.active ? "Active" : "Inactive"
        };
        report = report + "Name: " + userInfo.name + ", ";
        report = report + "Email: " + userInfo.email + ", ";
        report = report + "Status: " + userInfo.status + "\n";
    }
    return report;
}

// Inefficient 3: Multiple array iterations instead of single pass
function analyzeNumbers(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    const even = numbers.filter(num => num % 2 === 0);
    const odd = numbers.filter(num => num % 2 !== 0);
    const positive = numbers.filter(num => num > 0);
    const negative = numbers.filter(num => num < 0);
    
    return {
        sum,
        max,
        min,
        evenCount: even.length,
        oddCount: odd.length,
        positiveCount: positive.length,
        negativeCount: negative.length,
        average: sum / numbers.length
    };
}

// Inefficient 4: Recursive function without memoization
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Inefficient 5: DOM manipulation in loops
function updateUserList(users) {
    const container = document.getElementById('user-list');
    container.innerHTML = ''; // Clear existing content
    
    for (let i = 0; i < users.length; i++) {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `<h3>${users[i].name}</h3><p>${users[i].email}</p>`;
        userDiv.style.border = '1px solid #ccc';
        userDiv.style.margin = '10px';
        userDiv.style.padding = '15px';
        container.appendChild(userDiv); // Causes reflow on each iteration
    }
}

// Inefficient 6: Synchronous API calls in sequence
async function fetchAllUserData(userIds) {
    const results = [];
    for (const id of userIds) {
        try {
            const response = await fetch(`/api/users/${id}`);
            const userData = await response.json();
            results.push(userData);
        } catch (error) {
            console.error(`Failed to fetch user ${id}:`, error);
            results.push(null);
        }
    }
    return results;
}

// Inefficient 7: Memory-intensive string operations
function processLargeText(text) {
    let result = text;
    
    // Multiple string operations that create new strings each time
    result = result.replace(/\s+/g, ' '); // Replace multiple spaces with single space
    result = result.trim(); // Trim whitespace
    result = result.toLowerCase(); // Convert to lowercase
    result = result.replace(/[^\w\s]/g, ''); // Remove special characters
    
    // Split and rejoin (unnecessary memory usage)
    const words = result.split(' ');
    const uniqueWords = [];
    for (const word of words) {
        if (!uniqueWords.includes(word)) {
            uniqueWords.push(word);
        }
    }
    
    return uniqueWords.join(' ');
}

// Inefficient 8: Nested loops for data transformation
function mergeUserProfiles(users, profiles, settings) {
    const merged = [];
    
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        let userProfile = null;
        let userSettings = null;
        
        // Inefficient nested search
        for (let j = 0; j < profiles.length; j++) {
            if (profiles[j].userId === user.id) {
                userProfile = profiles[j];
                break;
            }
        }
        
        for (let k = 0; k < settings.length; k++) {
            if (settings[k].userId === user.id) {
                userSettings = settings[k];
                break;
            }
        }
        
        merged.push({
            ...user,
            profile: userProfile,
            settings: userSettings
        });
    }
    
    return merged;
}

// Inefficient 9: Poor caching strategy
class DataManager {
    constructor() {
        this.cache = {};
    }
    
    async getData(key) {
        // Always fetches from API, cache never used effectively
        console.log('Fetching from API...');
        const data = await this.fetchFromAPI(key);
        this.cache[key] = {
            data: data,
            timestamp: Date.now()
        };
        return data;
    }
    
    async fetchFromAPI(key) {
        // Simulate API call
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({ key, data: `Data for ${key}`, timestamp: Date.now() });
            }, 1000);
        });
    }
}

// Inefficient 10: Complex validation with repetitive code
function validateFormData(formData) {
    const errors = [];
    
    // Repetitive validation logic
    if (!formData.firstName) {
        errors.push({ field: 'firstName', message: 'First name is required' });
    } else if (formData.firstName.length < 2) {
        errors.push({ field: 'firstName', message: 'First name must be at least 2 characters' });
    } else if (formData.firstName.length > 50) {
        errors.push({ field: 'firstName', message: 'First name must be less than 50 characters' });
    }
    
    if (!formData.lastName) {
        errors.push({ field: 'lastName', message: 'Last name is required' });
    } else if (formData.lastName.length < 2) {
        errors.push({ field: 'lastName', message: 'Last name must be at least 2 characters' });
    } else if (formData.lastName.length > 50) {
        errors.push({ field: 'lastName', message: 'Last name must be less than 50 characters' });
    }
    
    if (!formData.email) {
        errors.push({ field: 'email', message: 'Email is required' });
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.push({ field: 'email', message: 'Invalid email format' });
    }
    
    if (!formData.phone) {
        errors.push({ field: 'phone', message: 'Phone is required' });
    } else if (!/^\d{10}$/.test(formData.phone)) {
        errors.push({ field: 'phone', message: 'Phone must be 10 digits' });
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

// =============================================================================
// TESTING FUNCTIONS
// =============================================================================

function performanceTest() {
    console.log("=== Performance Testing ===");
    
    // Test findDuplicates with large array
    const largeArray = Array.from({ length: 1000 }, (_, i) => Math.floor(Math.random() * 100));
    
    console.time("findDuplicates");
    const duplicates = findDuplicates(largeArray);
    console.timeEnd("findDuplicates");
    
    // Test fibonacci with larger numbers (will be very slow)
    console.time("fibonacci(30)");
    const fib30 = fibonacci(30);
    console.timeEnd("fibonacci(30)");
    
    console.log("Duplicates found:", duplicates.length);
    console.log("Fibonacci(30):", fib30);
}

// Uncomment to run performance tests (warning: may be slow!)
// performanceTest();

// =============================================================================
// CHALLENGE 4.6: TEST GENERATION PRACTICE
// =============================================================================
// Instructions: Select this function and ask Copilot Chat:
// "/tests Generate comprehensive test cases for this function"
// Then ask: "What edge cases should I test?"

// Note: This function already exists above, but here's a reference for the challenge
// You can select the analyzeNumbers function from the existing code above

// =============================================================================
// CHALLENGE 4.7: SECURITY ANALYSIS PRACTICE  
// =============================================================================
// Instructions: Select this function and ask Copilot Chat:
// "Analyze this code for security vulnerabilities and input validation issues"

// Simple user input processing (has security concerns)
function processUserInput(userInput) {
    // Direct string concatenation - potential XSS
    const welcomeMessage = "<h1>Welcome " + userInput.name + "!</h1>";
    
    // No input sanitization
    const query = "SELECT * FROM users WHERE id = " + userInput.id;
    
    // Eval usage - dangerous
    if (userInput.calculation) {
        const result = eval(userInput.calculation);
        return { message: welcomeMessage, query: query, result: result };
    }
    
    return { message: welcomeMessage, query: query };
}

// File path handling (path traversal vulnerability)
function getFileContent(fileName) {
    const fs = require('fs');
    const path = './uploads/' + fileName; // No path validation
    
    try {
        return fs.readFileSync(path, 'utf8');
    } catch (error) {
        return null;
    }
}

// =============================================================================
// INSTRUCTIONS FOR PARTICIPANTS
// =============================================================================

/*
HOW TO USE THIS FILE FOR OPTIMIZATION PRACTICE:

1. CODE OPTIMIZATION:
   - Select the findDuplicates function
   - Ask Copilot Chat: "How can I optimize this function for better performance?"
   - Ask follow-up: "What's the time complexity difference?"
   - Implement the suggested improvements

2. REFACTORING PRACTICE:
   - Select the processUser function
   - Ask Copilot Chat: "Please refactor this to be more readable and maintainable"
   - Ask: "What design patterns would improve this code?"

3. TEST GENERATION PRACTICE:
   - Select the analyzeNumbers function
   - Ask: "/tests Generate comprehensive test cases for this function"
   - Ask: "What edge cases should I test?"
   - Implement the suggested tests

4. SECURITY ANALYSIS:
   - Select the processUserInput function
   - Ask: "Analyze this code for security vulnerabilities and input validation issues"
   - Ask: "How can I improve input sanitization?"
   - Ask: "What are the security best practices for form validation?"

5. PERFORMANCE ANALYSIS:
   - Select any inefficient function
   - Ask: "Analyze the performance issues in this code"
   - Ask: "What's the Big O complexity and how can it be improved?"

4. MODERN JAVASCRIPT TECHNIQUES:
   - Select functions and ask: "How can I modernize this code using ES6+ features?"
   - Ask: "What JavaScript best practices should I apply here?"

5. SPECIFIC OPTIMIZATION QUERIES:
   - "How can I reduce memory usage in this function?"
   - "What caching strategies would improve this code?"
   - "How can I make this code more functional/immutable?"
   - "What are the security implications of this code?"

ADVANCED CHALLENGES:
- Ask Copilot to optimize the entire file
- Request specific performance benchmarks
- Ask for alternative algorithmic approaches
- Request modern architectural patterns
*/
