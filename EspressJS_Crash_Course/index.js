const express = require("express");
const path = require("path");
const moment = require("moment");
const members = require("./Members.js");

const PORT = process.env.PORT || 5000;
const app = express();

const logger = (req, res, next) => {
  console.log(
    `${req.protocol}://${req.get("host")}${
      req.originalUrl
    }: ${moment().format()}`
  );
  next();
};

// Init middleware
app.use(logger);

// Gets all members
app.get("/api/members", (req, res) => res.json(members));

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(5000, () => console.log(`Server started on port ${PORT}`));
