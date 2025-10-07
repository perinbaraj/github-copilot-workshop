# Exercise 1: Setup & Basics (20 minutes)

## Objective
Get familiar with GitHub Copilot's basic functionality and interface.

## Step 1: Verify Your Setup (5 minutes)

1. **Open VS Code** in the workshop directory
2. **Check Copilot Status:**
   - Look for Copilot icon in the status bar (bottom right)
   - It should show as active (not crossed out)
3. **Open the file:** [`exercises/01-setup-and-basics/starter.js`](./starter.js)

## Step 2: Your First Copilot Suggestion (5 minutes)

1. **Delete everything** in [`starter.js`](./starter.js)
2. **Type this comment exactly:**
```javascript
// Function to calculate the area of a circle given radius
```
3. **Press Enter** and wait
4. **Watch Copilot suggest code** (gray text appears)
5. **Press Tab** to accept the suggestion

**🎯 Expected Result:** Copilot should suggest a function like:
```javascript
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}
```

## Step 3: Multiple Suggestions (5 minutes)

1. **Type this comment:**
```javascript
// Function to check if a number is prime
```
2. **Press Enter** and wait for suggestions
3. **Use Alt+] and Alt+[** to cycle through different suggestions
4. **Choose the suggestion you like best** and press Tab

## Step 4: Inline Completion (5 minutes)

1. **Start typing this function:**
```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    // Let Copilot complete the rest
```
2. **Stop typing after the comment**
3. **Wait for Copilot** to suggest the next line
4. **Press Tab** to accept
5. **Continue accepting suggestions** until the function is complete

## ✅ Success Criteria

- [ ] Copilot is working and showing suggestions
- [ ] You can cycle through multiple suggestions
- [ ] You've accepted at least 3 different suggestions
- [ ] You understand Tab, Alt+], Alt+[ shortcuts

## 🚀 Bonus Challenge

Try typing different comment styles and see how Copilot responds:
- `// TODO: Create a function that...`
- `/* This function should... */`
- `/** JSDoc style comment */`

## Next Step
Move to [Exercise 2: Comment-to-Code](../02-comment-to-code/README.md)
