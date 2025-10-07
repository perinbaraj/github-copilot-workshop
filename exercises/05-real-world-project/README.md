
# Exercise 5: Real-World Project - Task Management API (60 minutes)

## Objective
Build a complete REST API for task management using GitHub Copilot to demonstrate real-world development workflow.

## Project Overview
You'll create a Task Management API with the following features:
- CRUD operations for tasks
- User authentication
- Task filtering and sorting
- Data validation
- Error handling
- Unit tests

## Step 1: Project Setup (10 minutes)

1. **Navigate to the project directory:**
```bash
cd exercises/05-real-world-project
```

2. **Initialize the project** (if not already done):
```bash
npm init -y
npm install express bcryptjs jsonwebtoken mongoose dotenv cors helmet
npm install --save-dev jest supertest nodemon
```

3. **Open [`package.json`](./package.json)** and let Copilot help you add scripts:
```javascript
// Add these scripts to package.json:
// "start": "node src/server.js",
// "dev": "nodemon src/server.js", 
// "test": "jest"
```

## Step 2: Basic Server Setup (10 minutes)

### Challenge 5.1: Express Server
Create [`src/server.js`](./src/server.js):

```javascript
// Create an Express server with the following requirements:
// - Use CORS and Helmet for security
// - Parse JSON bodies
// - Connect to MongoDB using mongoose
// - Handle 404 errors
// - Global error handler middleware
// - Server should run on PORT from environment or 3000
```

**Your task:** Let Copilot generate the complete server setup based on the comment.

### Challenge 5.2: Database Models
Create [`src/models/User.js`](./src/models/User.js):

```javascript
// Create a Mongoose schema for User with:
// - username: required, unique, string, min 3 chars
// - email: required, unique, valid email format
// - password: required, string, min 6 chars (will be hashed)
// - createdAt: default to current date
// - Include pre-save middleware to hash password using bcrypt
```

Create [`src/models/Task.js`](./src/models/Task.js):

```javascript
// Create a Mongoose schema for Task with:
// - title: required, string, max 100 chars
// - description: optional, string, max 500 chars  
// - completed: boolean, default false
// - priority: enum ['low', 'medium', 'high'], default 'medium'
// - dueDate: optional Date
// - userId: required, ObjectId reference to User
// - createdAt, updatedAt: timestamps
```

## Step 3: Authentication System (15 minutes)

### Challenge 5.3: Auth Middleware
Create [`src/middleware/auth.js`](./src/middleware/auth.js):

```javascript
// Create JWT authentication middleware that:
// - Extracts token from Authorization header (Bearer token)
// - Verifies JWT token using jsonwebtoken
// - Finds user by ID from token payload
// - Attaches user to req.user
// - Handles invalid/expired tokens with proper error responses
```

### Challenge 5.4: Auth Controller
Create [`src/controllers/authController.js`](./src/controllers/authController.js):

```javascript
// Create authentication controller with:
// 1. register function:
//    - Validate input data
//    - Check if user already exists
//    - Create new user
//    - Generate JWT token
//    - Return user data (without password) and token
//
// 2. login function:
//    - Validate credentials
//    - Compare password using bcrypt
//    - Generate JWT token
//    - Return user data and token
//
// 3. getProfile function:
//    - Return current user's profile (requires auth)
```

### Challenge 5.5: Auth Routes
Create [`src/routes/authRoutes.js`](./src/routes/authRoutes.js):

```javascript
// Create Express router with routes:
// POST /register - user registration
// POST /login - user login  
// GET /profile - get user profile (protected route)
```

## Step 4: Task Management Features (15 minutes)

### Challenge 5.6: Task Controller
Create [`src/controllers/taskController.js`](./src/controllers/taskController.js):

```javascript
// Create task controller with these functions:
// 1. getTasks - Get all tasks for authenticated user
//    - Support query params: completed, priority, sortBy, limit, skip
//    - Default sort by createdAt desc
//
// 2. getTaskById - Get single task by ID (must belong to user)
//
// 3. createTask - Create new task
//    - Validate required fields
//    - Associate with authenticated user
//
// 4. updateTask - Update existing task (only if user owns it)
//    - Partial updates allowed
//    - Validate data
//
// 5. deleteTask - Delete task (only if user owns it)
//
// 6. getTaskStats - Get task statistics for user
//    - Total tasks, completed, pending, by priority
```

### Challenge 5.7: Task Routes
Create [`src/routes/taskRoutes.js`](./src/routes/taskRoutes.js):

```javascript
// Create Express router with routes (all protected):
// GET /tasks - get user's tasks with filtering
// POST /tasks - create new task
// GET /tasks/stats - get task statistics
// GET /tasks/:id - get specific task
// PATCH /tasks/:id - update task
// DELETE /tasks/:id - delete task
```

### Challenge 5.8: Main App Setup
Update [`src/server.js`](./src/server.js) to include your routes:

```javascript
// Import and use the auth and task routes
// Mount authRoutes on /api/auth
// Mount taskRoutes on /api/tasks
```

## Step 5: Validation and Error Handling (10 minutes)

### Challenge 5.9: Validation Middleware
Create [`src/middleware/validation.js`](./src/middleware/validation.js):

```javascript
// Create validation middleware functions:
// 1. validateRegister - validate registration data
//    - username: required, 3-20 chars, alphanumeric
//    - email: required, valid email format
//    - password: required, min 6 chars, must contain number and letter
//
// 2. validateLogin - validate login data
//    - email: required, valid format
//    - password: required
//
// 3. validateTask - validate task creation/update
//    - title: required if creating, max 100 chars
//    - description: max 500 chars if provided
//    - priority: must be valid enum value if provided
//    - dueDate: must be valid future date if provided
```

### Challenge 5.10: Error Handler
Create [`src/middleware/errorHandler.js`](./src/middleware/errorHandler.js):

```javascript
// Create centralized error handling middleware that:
// - Handles MongoDB validation errors
// - Handles JWT errors  
// - Handles duplicate key errors
// - Handles cast errors (invalid ObjectId)
// - Returns consistent error response format
// - Logs errors in development mode
```

## Step 6: Testing (Bonus - if time permits)

### Challenge 5.11: API Tests
Create [`tests/api.test.js`](./tests/api.test.js):

```javascript
// Create integration tests using Jest and Supertest:
// 1. Test user registration and login
// 2. Test protected routes without token (should fail)
// 3. Test task CRUD operations
// 4. Test task filtering and sorting
// 5. Test error scenarios (invalid data, unauthorized access)
```

## Step 7: Environment Configuration

Create [`.env.example`](./.env.example):
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your-super-secret-jwt-key-here
NODE_ENV=development
```

Create [`.env`](./.env) with your actual values.

## Testing Your API

### Manual Testing Steps:

1. **Start the server:**
```bash
npm run dev
```

2. **Test with curl or Postman:**

**Register a user:**
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@example.com","password":"password123"}'
```

**Login:**
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

**Create a task (use token from login):**
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"title":"Learn Copilot","description":"Complete the workshop","priority":"high"}'
```

**Get tasks:**
```bash
curl -X GET http://localhost:3000/api/tasks \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🎯 Key Learning Objectives

By completing this exercise, you should understand how Copilot helps with:
- ✅ Rapid API development
- ✅ Consistent code patterns
- ✅ Error handling implementation
- ✅ Security best practices
- ✅ Database integration
- ✅ Testing strategies

## ✅ Success Criteria

- [ ] Server starts without errors
- [ ] User registration and login work
- [ ] JWT authentication protects routes
- [ ] All CRUD operations work for tasks
- [ ] Task filtering and sorting function correctly  
- [ ] Proper error handling throughout
- [ ] Code follows consistent patterns

## 🚀 Advanced Challenges

1. **Add Task Categories:** Extend the model to support task categories
2. **Task Sharing:** Allow users to share tasks with other users
3. **File Attachments:** Add support for task attachments
4. **Real-time Updates:** Implement WebSocket for real-time task updates
5. **API Documentation:** Generate Swagger/OpenAPI documentation

## 🐛 Common Issues & Copilot Fixes

If you encounter issues, try asking Copilot Chat:
- "This authentication middleware isn't working, can you help debug it?"
- "How can I improve the error handling in this controller?"
- "What's wrong with my MongoDB connection?"
- "Help me write better validation for this API endpoint"

## Next Step
Move to [Exercise 6: Advanced Techniques](../06-advanced-techniques/README.md)
