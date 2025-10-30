# Exercise 2: Comment-to-Code Magic (30 minutes)

## Objective
Learn how to write effective comments that generate high-quality code.

## Step 1: Basic Data Structures (10 minutes)

Open [`exercises/02-comment-to-code/challenges.js`](./challenges.js) and complete these challenges:

### Challenge 2.1: Array Operations
```javascript
// Create a function that removes duplicates from an array and returns sorted unique values
```
**Your task:** Type the comment, let Copilot generate the function, then test it.

### Challenge 2.2: Object Manipulation
```javascript
// Function to merge two objects, with the second object's properties overriding the first
```

### Challenge 2.3: String Processing
```javascript
// Function to convert a string to title case (first letter of each word capitalized)
```

## Step 2: Algorithm Implementation (10 minutes)

### Challenge 2.4: Sorting Algorithm
```javascript
// Implement bubble sort algorithm that sorts an array of numbers in ascending order
// Include comments explaining each step
```

### Challenge 2.5: Search Algorithm
```javascript
// Binary search function that returns the index of target element in sorted array
// Return -1 if element is not found
```

## Step 3: Complex Business Logic (10 minutes)

### Challenge 2.6: Date Calculations
```javascript
// Function to calculate business days between two dates
// Exclude weekends (Saturday and Sunday)
// Parameters: startDate, endDate (both Date objects)
// Return: number of business days
```

### Challenge 2.7: Validation Function
```javascript
// Create a password validator function that checks:
// - At least 8 characters long
// - Contains uppercase and lowercase letters
// - Contains at least one number
// - Contains at least one special character (!@#$%^&*)
// Returns object with isValid boolean and array of failed criteria
```

## Step 4: Test Your Functions

For each function you created:

1. **Add test cases** by typing:
```javascript
// Test cases for [function-name]:
```

2. **Let Copilot generate test code**

3. **Run the tests** in VS Code terminal:
```bash
node exercises/02-comment-to-code/challenges.js
```

## 💡 Pro Tips for Better Comments

1. **Be Specific:**
   - ❌ "Function to sort array"
   - ✅ "Function to sort array of objects by age property in descending order"

2. **Include Parameters:**
   - ❌ "Calculate discount"
   - ✅ "Calculate discount percentage based on order total and customer type"

3. **Specify Return Values:**
   - ❌ "Validate email"
   - ✅ "Validate email format and return boolean true if valid"

## ✅ Success Criteria

- [ ] All 7 functions are generated and working
- [ ] You've written test cases for at least 3 functions
- [ ] You understand how comment specificity affects code quality
- [ ] Your functions handle edge cases (empty arrays, null values, etc.)

## 🚀 Bonus Challenges

1. **Error Handling:** Add comments for error handling and see how Copilot implements it
2. **Performance:** Ask Copilot to optimize one of your functions
3. **Documentation:** Generate JSDoc comments for your functions

## Next Step
Move to [Exercise 3: Code Completion](../03-code-completion/README.md)
