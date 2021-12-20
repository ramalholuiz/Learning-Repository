const express = require("express");
const path = require("path");
// Import custom modules
const logger = require("./middleware/logger");

const PORT = process.env.PORT || 5000;
const app = express();

// Init middleware
app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Set Members API Routes
app.use("/api/members", require("./routes/api/members"));

app.listen(5000, () => console.log(`Server started on port ${PORT}`));
