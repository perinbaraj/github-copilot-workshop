# Exercise 3: Code Completion Mastery (30 minutes)

## Objective
Master Copilot's code completion capabilities and learn to work with partial code.

## Step 1: Function Completion (10 minutes)

Open [`exercises/03-code-completion/incomplete-functions.js`](./incomplete-functions.js)

### Challenge 3.1: Complete the API Call
```javascript
async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        // Let Copilot complete the rest
```

**Your task:** 
1. Position cursor after the comment
2. Press Enter and let Copilot suggest next lines
3. Continue accepting suggestions until function is complete

### Challenge 3.2: Complete the Class
```javascript
class ShoppingCart {
    constructor() {
        this.items = [];
        this.total = 0;
    }
    
    addItem(product, quantity) {
        // Let Copilot complete this method
```

**Your task:** Complete all methods: `addItem`, `removeItem`, `calculateTotal`, `checkout`

## Step 2: Pattern Recognition (10 minutes)

### Challenge 3.3: Loop Patterns
Start typing these patterns and let Copilot complete:

```javascript
// Pattern 1: Array processing
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(
// Let Copilot complete the arrow function

// Pattern 2: Object iteration
const user = { name: 'John', age: 30, city: 'New York' };
for (const [key, value] of Object.entries(user)) {
    // Let Copilot complete the loop body

// Pattern 3: Async operations
const urls = ['url1', 'url2', 'url3'];
const promises = urls.map(async (url) => {
    // Let Copilot complete the async operation
```

### Challenge 3.4: Error Handling Patterns
```javascript
function processData(data) {
    if (!data) {
        // Let Copilot suggest error handling
        
    if (typeof data !== 'object') {
        // Let Copilot suggest validation error
        
    try {
        // Let Copilot suggest the main logic
```

## Step 3: Advanced Completion (10 minutes)

### Challenge 3.5: Express.js Routes
```javascript
const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
    // Let Copilot complete the route handler

app.post('/api/users', (req, res) => {
    // Let Copilot complete the POST handler

app.put('/api/users/:id', (req, res) => {
    // Let Copilot complete the PUT handler
```

### Challenge 3.6: React Component
```javascript
import React, { useState, useEffect } from 'react';

function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Let Copilot complete the effect
```

## Step 4: Context-Aware Completion

### Challenge 3.7: Building on Previous Code
Using the `ShoppingCart` class from Challenge 3.2:

```javascript
// Now create a checkout process
function processCheckout(cart, paymentMethod) {
    // Copilot should understand the cart context and suggest appropriate code
```

## 🎯 Completion Techniques

1. **Start with Structure:**
   ```javascript
   function myFunction() {
       // Type the skeleton first
       if (condition) {
           // Then let Copilot fill details
   ```

2. **Use Meaningful Variable Names:**
   ```javascript
   const userEmail = // Copilot will suggest email-related operations
   const productPrice = // Copilot will suggest price-related operations
   ```

3. **Provide Context with Imports:**
   ```javascript
   const fs = require('fs');
   // Now Copilot knows you're working with file system
   ```

## ✅ Success Criteria

- [ ] You've completed at least 5 of the 7 challenges
- [ ] You understand how to position cursor for optimal suggestions
- [ ] You can work with Copilot's multi-line completions
- [ ] You recognize how context affects suggestions

## 🔍 Debugging Exercise

**Intentional Bug Challenge:**
1. Accept a Copilot suggestion that has a subtle bug
2. Run the code and observe the error
3. Use Copilot to help fix the bug


## Next Step
Move to [Exercise 4: Copilot Chat](../04-copilot-chat/README.md)
