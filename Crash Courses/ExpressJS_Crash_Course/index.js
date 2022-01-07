const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
// Import custom modules
const logger = require("./middleware/logger");
const members = require("./Members");

const PORT = process.env.PORT || 5000;
const app = express();

// Init middleware
app.use(logger);

// Handlebars Middleware
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get("/", (req, res) =>
  res.render("index", {
    title: "Member App",
    members,
  })
);

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Set Members API Routes
app.use("/api/members", require("./routes/api/members"));

app.listen(5000, () => console.log(`Server started on port ${PORT}`));
