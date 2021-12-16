// Import modules
const express = require("express");
const path = require("path");
// Import custom modules
const members = require("./Members.js");
const logger = require("./middleware/logger");

const PORT = process.env.PORT || 5000;
const app = express();

// Init middleware
app.use(logger);

// Gets all members
app.get("/api/members", (req, res) => res.json(members));
// Get single member
app.get("/api/members/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(5000, () => console.log(`Server started on port ${PORT}`));
