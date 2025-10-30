// GitHub Copilot Workshop - Exercise 5: API Testing
// Optional: Use this file to test your task storage functions

const taskStore = require('./taskStore');

// Test the task storage functions
function testTaskStore() {
    console.log("Testing Task Store Functions...\n");
    
    // Test getAllTasks
    console.log("1. Initial tasks:", taskStore.getAllTasks());
    
    // Test addTask
    const newTask = {
        title: "Test Task",
        description: "This is a test task"
    };
    const addedTask = taskStore.addTask(newTask);
    console.log("2. Added task:", addedTask);
    
    // Test getTaskById
    const retrievedTask = taskStore.getTaskById(addedTask.id);
    console.log("3. Retrieved task:", retrievedTask);
    
    // Test updateTask
    const updatedTask = taskStore.updateTask(addedTask.id, { completed: true });
    console.log("4. Updated task:", updatedTask);
    
    // Test deleteTask
    const deletedTask = taskStore.deleteTask(addedTask.id);
    console.log("5. Deleted task:", deletedTask);
    
    console.log("6. Final tasks:", taskStore.getAllTasks());
}

// Uncomment to run tests:
// testTaskStore();

