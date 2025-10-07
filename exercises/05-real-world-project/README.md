# Exercise 5: Mini Task Manager with Simple UI (45 minutes)

## Objective
Build a complete task manager with both API and web interface using GitHub Copilot.

## Project Overview
Create a Task Manager with:
- Simple task CRUD operations
- In-memory storage (no database setup required)
- REST API backend
- Interactive HTML frontend
- Real-time UI updates

## Step 1: Basic Server (10 minutes)

### Challenge 5.1: Express Server Setup
Create [`src/server.js`](./src/server.js):

```javascript
// Create an Express server that:
// - Uses express and cors
// - Serves static files from 'public' directory
// - Listens on port 3000
// - Has a welcome route at GET /
// - Console logs when server starts
```

## Step 2: Task Storage (10 minutes)

### Challenge 5.2: Task Data Management
Create [`src/taskStore.js`](./src/taskStore.js):

```javascript
// Create an in-memory task storage system with:
// - Array to store tasks with structure: { id, title, description, completed, createdAt }
// - Functions: getAllTasks(), getTaskById(id), addTask(task), updateTask(id, updates), deleteTask(id)
// - Auto-generate IDs and timestamps
// - Sample tasks for demonstration
```

## Step 3: API Routes (10 minutes)

### Challenge 5.3: Task API Routes
Update [`src/server.js`](./src/server.js) to add API routes:

```javascript
// Add these REST API routes:
// GET /api/tasks - get all tasks
// POST /api/tasks - create new task (requires title)
// PUT /api/tasks/:id - update task (toggle completed or edit details)
// DELETE /api/tasks/:id - delete task
// Include proper JSON responses and error handling
```

## Step 4: Frontend UI (10 minutes)

### Challenge 5.4: Task Manager Interface
Create [`public/index.html`](./public/index.html):

```html
<!-- Create a task manager interface with:
- Title "Task Manager"
- Form to add new tasks (title and description inputs)
- List to display all tasks with checkboxes for completion
- Delete buttons for each task
- Simple styling with CSS
- JavaScript to interact with the API
-->
```

### Challenge 5.5: Frontend JavaScript
Create [`public/app.js`](./public/app.js):

```javascript
// Create JavaScript functionality for:
// - Fetch and display all tasks on page load
// - Add new tasks via form submission
// - Toggle task completion status
// - Delete tasks
// - Update UI without page refresh
// - Handle API errors gracefully
```

## Step 5: Testing (5 minutes)

### Challenge 5.6: Test Your Application

**Start server:**
```bash
node src/server.js
```

**Open in browser:**
```
http://localhost:3000
```

**Test functionality:**
- ✅ Add new tasks using the form
- ✅ Mark tasks as complete/incomplete
- ✅ Delete tasks
- ✅ Page updates without refresh

**Test API directly:**
```bash
# Get all tasks
curl http://localhost:3000/api/tasks

# Create task via API
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"API Test Task","description":"Created via curl"}'
```

## ✅ Success Criteria

- [ ] Server starts and serves both API and frontend
- [ ] Web interface loads at http://localhost:3000
- [ ] Can add tasks through the web form
- [ ] Can mark tasks complete/incomplete by clicking
- [ ] Can delete tasks using delete buttons
- [ ] UI updates immediately without page refresh
- [ ] API endpoints work independently

## 🚀 Bonus Challenges (if time permits)

1. **Enhanced Styling:** Add better CSS/Bootstrap styling
2. **Task Filtering:** Add buttons to show All/Completed/Pending tasks
3. **Task Editing:** Add inline editing capability
4. **Local Storage:** Persist tasks in browser storage
5. **Task Counter:** Show count of completed vs total tasks

## 🎨 UI Preview

Your completed app should look something like:

```
Task Manager
============

Add New Task:
[Title Input] [Description Input] [Add Task Button]

My Tasks:
☐ Learn GitHub Copilot          [Delete]
☑ Complete Exercise 4           [Delete]  
☐ Build Task Manager API        [Delete]
```

