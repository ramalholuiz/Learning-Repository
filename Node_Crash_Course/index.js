const http = require("http");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (error, content) => {
        if (error) throw error;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }
  if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (error, content) => {
        if (error) throw error;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }

  if (req.url === "/api/users") {
    const users = [
      {
        name: "Bob Smith",
        age: "40",
      },
      {
        name: "Renato Andrade",
        age: "29",
      },
    ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
