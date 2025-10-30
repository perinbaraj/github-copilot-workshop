// Sample data for testing during the hackathon
// Use these datasets in your challenges and projects

// User Management Sample Data
const sampleUsers = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", age: 28, department: "Engineering", salary: 75000, role: "Senior Developer" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", age: 35, department: "Marketing", salary: 65000, role: "Marketing Manager" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", age: 42, department: "Engineering", salary: 85000, role: "Tech Lead" },
    { id: 4, name: "Diana Prince", email: "diana@example.com", age: 31, department: "Design", salary: 70000, role: "UX Designer" },
    { id: 5, name: "Edward Wilson", email: "edward@example.com", age: 27, department: "Engineering", salary: 68000, role: "Junior Developer" },
    { id: 6, name: "Fiona Garcia", email: "fiona@example.com", age: 39, department: "Marketing", salary: 72000, role: "Content Strategist" },
    { id: 7, name: "George Miller", email: "george@example.com", age: 33, department: "Sales", salary: 78000, role: "Sales Manager" },
    { id: 8, name: "Helen Davis", email: "helen@example.com", age: 29, department: "Design", salary: 66000, role: "Visual Designer" },
    { id: 9, name: "Ian Thompson", email: "ian@example.com", age: 37, department: "Engineering", salary: 92000, role: "Senior Engineer" },
    { id: 10, name: "Julia Martinez", email: "julia@example.com", age: 26, department: "Marketing", salary: 58000, role: "Marketing Coordinator" }
];

// Product Catalog Sample Data
const sampleProducts = [
    { id: 101, name: "Wireless Bluetooth Headphones", price: 129.99, category: "Electronics", inStock: true, rating: 4.5, reviews: 230 },
    { id: 102, name: "Ceramic Coffee Mug", price: 12.99, category: "Kitchen", inStock: true, rating: 4.2, reviews: 89 },
    { id: 103, name: "Leather Notebook", price: 24.99, category: "Stationery", inStock: false, rating: 4.7, reviews: 156 },
    { id: 104, name: "Smartphone Stand", price: 19.99, category: "Electronics", inStock: true, rating: 4.1, reviews: 67 },
    { id: 105, name: "Yoga Mat", price: 39.99, category: "Fitness", inStock: true, rating: 4.6, reviews: 203 },
    { id: 106, name: "Desk Lamp", price: 45.99, category: "Office", inStock: true, rating: 4.3, reviews: 78 },
    { id: 107, name: "Water Bottle", price: 18.99, category: "Kitchen", inStock: true, rating: 4.4, reviews: 112 },
    { id: 108, name: "Wireless Mouse", price: 29.99, category: "Electronics", inStock: false, rating: 4.2, reviews: 145 },
    { id: 109, name: "Plant Pot", price: 16.99, category: "Home", inStock: true, rating: 4.0, reviews: 34 },
    { id: 110, name: "Phone Case", price: 22.99, category: "Electronics", inStock: true, rating: 4.5, reviews: 298 }
];

// Task Management Sample Data
const sampleTasks = [
    { id: 1, title: "Learn GitHub Copilot basics", completed: true, priority: "high", category: "learning", dueDate: "2024-01-15", createdAt: "2024-01-10" },
    { id: 2, title: "Complete daily challenge", completed: false, priority: "high", category: "work", dueDate: "2024-01-16", createdAt: "2024-01-12" },
    { id: 3, title: "Review pull requests", completed: false, priority: "medium", category: "work", dueDate: "2024-01-17", createdAt: "2024-01-13" },
    { id: 4, title: "Buy groceries", completed: false, priority: "low", category: "personal", dueDate: "2024-01-18", createdAt: "2024-01-14" },
    { id: 5, title: "Build amazing project", completed: false, priority: "high", category: "hackathon", dueDate: "2024-01-19", createdAt: "2024-01-15" },
    { id: 6, title: "Write documentation", completed: false, priority: "medium", category: "work", dueDate: "2024-01-20", createdAt: "2024-01-16" },
    { id: 7, title: "Plan weekend trip", completed: false, priority: "low", category: "personal", dueDate: "2024-01-21", createdAt: "2024-01-17" },
    { id: 8, title: "Fix production bug", completed: true, priority: "high", category: "work", dueDate: "2024-01-14", createdAt: "2024-01-12" },
    { id: 9, title: "Attend team meeting", completed: true, priority: "medium", category: "work", dueDate: "2024-01-15", createdAt: "2024-01-13" },
    { id: 10, title: "Exercise for 30 minutes", completed: false, priority: "medium", category: "health", dueDate: "2024-01-16", createdAt: "2024-01-15" }
];

// Financial Data Sample
const sampleTransactions = [
    { id: 1, amount: -45.67, category: "Food", description: "Grocery shopping", date: "2024-01-15", type: "expense" },
    { id: 2, amount: 3200.00, category: "Salary", description: "Monthly salary", date: "2024-01-01", type: "income" },
    { id: 3, amount: -89.99, category: "Entertainment", description: "Movie tickets", date: "2024-01-12", type: "expense" },
    { id: 4, amount: -1200.00, category: "Housing", description: "Rent payment", date: "2024-01-01", type: "expense" },
    { id: 5, amount: -65.43, category: "Transportation", description: "Gas station", date: "2024-01-10", type: "expense" },
    { id: 6, amount: 500.00, category: "Freelance", description: "Side project payment", date: "2024-01-08", type: "income" },
    { id: 7, amount: -123.45, category: "Shopping", description: "Online purchase", date: "2024-01-14", type: "expense" },
    { id: 8, amount: -29.99, category: "Subscriptions", description: "Netflix subscription", date: "2024-01-05", type: "expense" },
    { id: 9, amount: -78.90, category: "Food", description: "Restaurant dinner", date: "2024-01-13", type: "expense" },
    { id: 10, amount: -34.56, category: "Utilities", description: "Phone bill", date: "2024-01-03", type: "expense" }
];

// Quiz/Learning Sample Data
const sampleQuizQuestions = [
    {
        id: 1,
        question: "What is the primary purpose of GitHub Copilot?",
        options: ["Code compilation", "AI-assisted code generation", "Version control", "Project management"],
        correctAnswer: 1,
        category: "GitHub Copilot",
        difficulty: "easy"
    },
    {
        id: 2,
        question: "Which command opens Copilot Chat in VS Code?",
        options: ["Ctrl+Shift+C", "Ctrl+Shift+I", "Ctrl+Alt+C", "Ctrl+Shift+P"],
        correctAnswer: 1,
        category: "VS Code",
        difficulty: "medium"
    },
    {
        id: 3,
        question: "What does the /fix command do in Copilot Chat?",
        options: ["Formats code", "Fixes bugs and issues", "Creates documentation", "Runs tests"],
        correctAnswer: 1,
        category: "Copilot Chat",
        difficulty: "easy"
    },
    {
        id: 4,
        question: "Which JavaScript method creates a new array with all elements that pass a test?",
        options: ["map()", "filter()", "reduce()", "forEach()"],
        correctAnswer: 1,
        category: "JavaScript",
        difficulty: "medium"
    },
    {
        id: 5,
        question: "What is the time complexity of binary search?",
        options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
        correctAnswer: 1,
        category: "Algorithms",
        difficulty: "hard"
    }
];

// Weather Data Sample (for weather dashboard projects)
const sampleWeatherData = [
    { city: "New York", temperature: 22, humidity: 65, condition: "Sunny", windSpeed: 12, pressure: 1013 },
    { city: "London", temperature: 15, humidity: 78, condition: "Cloudy", windSpeed: 8, pressure: 1008 },
    { city: "Tokyo", temperature: 18, humidity: 72, condition: "Rainy", windSpeed: 6, pressure: 1011 },
    { city: "Sydney", temperature: 25, humidity: 60, condition: "Partly Cloudy", windSpeed: 15, pressure: 1015 },
    { city: "Paris", temperature: 19, humidity: 70, condition: "Foggy", windSpeed: 4, pressure: 1009 },
    { city: "Mumbai", temperature: 32, humidity: 85, condition: "Hot", windSpeed: 10, pressure: 1007 },
    { city: "Cairo", temperature: 28, humidity: 45, condition: "Sunny", windSpeed: 18, pressure: 1012 },
    { city: "Vancouver", temperature: 16, humidity: 80, condition: "Rainy", windSpeed: 7, pressure: 1010 }
];

// Game Development Sample Data
const sampleGameData = {
    rooms: [
        { id: 1, name: "Forest Entrance", description: "A dark forest path leads deeper into the woods.", exits: { north: 2, east: 3 }, items: ["stick", "rock"] },
        { id: 2, name: "Ancient Tree", description: "A massive oak tree with strange carvings.", exits: { south: 1, west: 4 }, items: ["mysterious_key"] },
        { id: 3, name: "River Crossing", description: "A babbling brook blocks your path.", exits: { west: 1, north: 5 }, items: ["rope"] },
        { id: 4, name: "Cave Entrance", description: "A dark cave opening yawns before you.", exits: { east: 2 }, items: ["torch"] },
        { id: 5, name: "Mountain Peak", description: "You've reached the summit! The view is breathtaking.", exits: { south: 3 }, items: ["treasure_chest"] }
    ],
    items: [
        { id: "stick", name: "Wooden Stick", description: "A sturdy piece of wood", usable: true },
        { id: "rock", name: "Smooth Rock", description: "A perfectly round stone", usable: true },
        { id: "mysterious_key", name: "Mysterious Key", description: "An ornate key with strange symbols", usable: true },
        { id: "rope", name: "Strong Rope", description: "Useful for climbing or binding", usable: true },
        { id: "torch", name: "Burning Torch", description: "Lights up dark places", usable: true },
        { id: "treasure_chest", name: "Golden Treasure Chest", description: "Contains untold riches!", usable: false }
    ],
    characters: [
        { id: 1, name: "Wise Owl", location: 2, dialogue: "Hoot! The key opens many doors, but choose wisely.", friendly: true },
        { id: 2, name: "River Troll", location: 3, dialogue: "None shall pass without solving my riddle!", friendly: false },
        { id: 3, name: "Mountain Guide", location: 5, dialogue: "Congratulations on reaching the peak, adventurer!", friendly: true }
    ]
};

// Color Palette Sample Data (for ASCII art, UI projects)
const sampleColorPalettes = {
    retro: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7", "#DDA0DD"],
    professional: ["#2C3E50", "#34495E", "#7F8C8D", "#BDC3C7", "#ECF0F1", "#3498DB"],
    nature: ["#27AE60", "#16A085", "#F39C12", "#E67E22", "#8E44AD", "#2980B9"],
    sunset: ["#FF7675", "#FDCB6E", "#6C5CE7", "#FD79A8", "#E17055", "#00B894"],
    ocean: ["#0984e3", "#74b9ff", "#00cec9", "#55efc4", "#fd79a8", "#fdcb6e"]
};

// Text Processing Sample Data
const sampleTextData = {
    articles: [
        {
            title: "The Future of AI in Development",
            content: "Artificial Intelligence is revolutionizing how we write code. GitHub Copilot represents just the beginning of this transformation.",
            author: "Jane Developer",
            date: "2024-01-15",
            tags: ["AI", "Development", "Future"]
        },
        {
            title: "Best Practices for Clean Code",
            content: "Writing maintainable code is an art. Here are some principles that every developer should follow for better code quality.",
            author: "John Coder",
            date: "2024-01-12",
            tags: ["Best Practices", "Clean Code", "Development"]
        }
    ],
    quotes: [
        "The best error message is the one that never shows up.",
        "Code is like humor. When you have to explain it, it's bad.",
        "Programming isn't about what you know; it's about what you can figure out.",
        "The most important property of a program is whether it accomplishes the intention of its user.",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
    ],
    loremIpsum: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
};

// Math/Calculator Sample Data
const sampleMathProblems = [
    { expression: "2 + 3 * 4", result: 14, difficulty: "easy" },
    { expression: "sin(π/2)", result: 1, difficulty: "medium" },
    { expression: "log(100)", result: 2, difficulty: "medium" },
    { expression: "sqrt(144)", result: 12, difficulty: "easy" },
    { expression: "2^10", result: 1024, difficulty: "medium" },
    { expression: "(15 + 25) / 8", result: 5, difficulty: "easy" },
    { expression: "cos(0)", result: 1, difficulty: "medium" },
    { expression: "factorial(5)", result: 120, difficulty: "hard" }
];

// Performance Testing Sample Data
const generateLargeDataset = (size) => {
    const dataset = [];
    for (let i = 0; i < size; i++) {
        dataset.push({
            id: i + 1,
            name: `User ${i + 1}`,
            email: `user${i + 1}@example.com`,
            score: Math.floor(Math.random() * 100),
            active: Math.random() > 0.3,
            category: ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)],
            timestamp: new Date(Date.now() - Math.random() * 10000000000).toISOString()
        });
    }
    return dataset;
};

// Utility Functions for Sample Data
const sampleDataUtils = {
    // Get random item from array
    randomItem: (array) => array[Math.floor(Math.random() * array.length)],
    
    // Get random subset of array
    randomSubset: (array, count) => {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    },
    
    // Generate random user
    randomUser: () => {
        const firstNames = ["Alex", "Sam", "Jordan", "Casey", "Riley", "Avery", "Quinn", "Sage"];
        const lastNames = ["Smith", "Johnson", "Brown", "Davis", "Wilson", "Garcia", "Miller", "Martinez"];
        return {
            id: Math.floor(Math.random() * 10000),
            name: `${sampleDataUtils.randomItem(firstNames)} ${sampleDataUtils.randomItem(lastNames)}`,
            email: `user${Math.floor(Math.random() * 1000)}@example.com`,
            age: Math.floor(Math.random() * 50) + 18
        };
    },
    
    // Generate random task
    randomTask: () => {
        const taskTypes = ["Learn", "Build", "Fix", "Review", "Test", "Deploy", "Document", "Optimize"];
        const subjects = ["feature", "bug", "API", "UI", "database", "security", "performance", "documentation"];
        return {
            id: Math.floor(Math.random() * 10000),
            title: `${sampleDataUtils.randomItem(taskTypes)} ${sampleDataUtils.randomItem(subjects)}`,
            completed: Math.random() > 0.6,
            priority: sampleDataUtils.randomItem(["low", "medium", "high"]),
            category: sampleDataUtils.randomItem(["work", "personal", "learning", "project"])
        };
    }
};

// Export all sample data
module.exports = {
    sampleUsers,
    sampleProducts,
    sampleTasks,
    sampleTransactions,
    sampleQuizQuestions,
    sampleWeatherData,
    sampleGameData,
    sampleColorPalettes,
    sampleTextData,
    sampleMathProblems,
    generateLargeDataset,
    sampleDataUtils
};

// Usage Examples:
console.log("📊 Sample data loaded! Available datasets:");
console.log("- sampleUsers: User management data");
console.log("- sampleProducts: E-commerce product catalog");
console.log("- sampleTasks: Task management data");
console.log("- sampleTransactions: Financial tracking data");
console.log("- sampleQuizQuestions: Quiz/learning application data");
console.log("- sampleWeatherData: Weather dashboard data");
console.log("- sampleGameData: Text adventure game data");
console.log("- sampleColorPalettes: Color schemes for UI projects");
console.log("- sampleTextData: Text processing and content data");
console.log("- sampleMathProblems: Calculator and math application data");
console.log("- generateLargeDataset(size): Generate large datasets for performance testing");
console.log("- sampleDataUtils: Utility functions for generating random data");

// Quick test
console.log("\n🎯 Quick sample:");
console.log("Random user:", sampleDataUtils.randomUser());
console.log("Random task:", sampleDataUtils.randomTask());