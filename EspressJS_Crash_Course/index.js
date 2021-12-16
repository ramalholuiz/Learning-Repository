// Import modules
const express = require("express");
const path = require("path");
const moment = require("moment");
// Import custom modules
const members = require("./Members.js");
const logger = require("./middleware/logger");

const PORT = process.env.PORT || 5000;
const app = express();

// Init middleware
app.use(logger);

// Gets all members
app.get("/api/members", (req, res) => res.json(members));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(5000, () => console.log(`Server started on port ${PORT}`));
