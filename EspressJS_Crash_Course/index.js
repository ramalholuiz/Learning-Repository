const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(5000, () => console.log(`Server started on port ${PORT}`));
