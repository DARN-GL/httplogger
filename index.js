const express = require("express");
const chalk = require("chalk");

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Custom logger middleware
app.use((req, res, next) => {
    console.log(chalk.blue("========================================"));
    console.log(chalk.green.bold("New Request:"));
    console.log(chalk.yellow(`Method: ${req.method}`));
    console.log(chalk.cyan(`URL: ${req.originalUrl}`));
    console.log(chalk.magenta("Headers:", JSON.stringify(req.headers, null, 2)));
    if (Object.keys(req.body).length > 0) {
        console.log(chalk.red("Body:", JSON.stringify(req.body, null, 2)));
    }
    console.log(chalk.blue("========================================"));
    next();
});

// Example route
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

// Start the server
app.listen(PORT, () => {
    console.log(chalk.green(`Server is running on http://localhost:${PORT}`));
});
