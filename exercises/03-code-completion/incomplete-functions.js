// GitHub Copilot Workshop - Exercise 3: Code Completion Mastery
// Complete the partially written functions below using Copilot's suggestions

console.log("=== Exercise 3: Code Completion Challenges ===");

// =============================================================================
// STEP 1: FUNCTION COMPLETION (10 minutes)
// =============================================================================

// Challenge 3.1: Complete the API Call
// Instructions: Position cursor after the comment, press Enter, let Copilot suggest next lines
// Continue accepting suggestions until function is complete

async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        // Let Copilot complete the rest
    } catch (error) {
        // Let Copilot complete error handling
    }
}

// Challenge 3.2: Complete the Class
// Instructions: Complete all methods: addItem, removeItem, calculateTotal, checkout
// Let Copilot complete each method when you position cursor after the comment

class ShoppingCart {
    constructor() {
        this.items = [];
        this.total = 0;
    }
    
    addItem(product, quantity) {
        // Let Copilot complete this method
    }

    removeItem(productId) {
        // Let Copilot complete this method
    }

    calculateTotal() {
        // Let Copilot complete this method
    }

    checkout() {
        // Let Copilot complete this method
    }
}

// =============================================================================
// STEP 2: PATTERN RECOGNITION (10 minutes)
// =============================================================================

// Challenge 3.3: Loop Patterns
// Instructions: Start typing each pattern and let Copilot complete

// Pattern 1: Array processing
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(
    // Let Copilot complete the arrow function
);

// Pattern 2: Object iteration
const user = { name: 'John', age: 30, city: 'New York' };
for (const [key, value] of Object.entries(user)) {
    // Let Copilot complete the loop body
}

// Pattern 3: Async operations
const urls = ['url1', 'url2', 'url3'];
const promises = urls.map(async (url) => {
    // Let Copilot complete the async operation
});

// Challenge 3.4: Error Handling Patterns
// Instructions: Let Copilot suggest error handling for each condition

function processData(data) {
    if (!data) {
        // Let Copilot suggest error handling
    }
        
    if (typeof data !== 'object') {
        // Let Copilot suggest validation error
    }
        
    try {
        // Let Copilot suggest the main logic
    } catch (error) {
        // Let Copilot suggest error handling
    }
}

// =============================================================================
// STEP 3: ADVANCED COMPLETION (10 minutes)
// =============================================================================

// Challenge 3.5: Express.js Routes
// Instructions: Let Copilot complete each route handler

const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
    // Let Copilot complete the route handler
});

app.post('/api/users', (req, res) => {
    // Let Copilot complete the POST handler
});

app.put('/api/users/:id', (req, res) => {
    // Let Copilot complete the PUT handler
});

// Challenge 3.6: React Component
// Instructions: Let Copilot complete the useEffect and component logic

const React = require('react'); // For Node.js compatibility
const { useState, useEffect } = React;

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Let Copilot complete the effect
    }, [userId]);

    return (
        // Let Copilot complete the JSX return
        null
    );
}

// =============================================================================
// STEP 4: CONTEXT-AWARE COMPLETION
// =============================================================================

// Challenge 3.7: Building on Previous Code
// Instructions: Use the ShoppingCart class from Challenge 3.2
// Copilot should understand the cart context and suggest appropriate code

function processCheckout(cart, paymentMethod) {
    // Copilot should understand the cart context and suggest appropriate code
}

// Additional function that works with ShoppingCart
function generateInvoice(cart, customerInfo) {
    // Let Copilot complete this function that uses the cart
}

// =============================================================================
// TESTING AREA
// =============================================================================

// Test your completed functions here
// Let Copilot help generate test code for your functions

console.log("=== Testing Completed Functions ===");

// Example: Test the ShoppingCart class
// Uncomment and let Copilot complete the test cases
// const cart = new ShoppingCart();
// Let Copilot suggest test cases here
