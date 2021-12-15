const fs = require("fs");
const path = require("path");

// Obs.: all file system operations are asynchronous unless you call 'fs.methodNameSync(...args)'

// Create folder
fs.mkdir(path, paramethers, callback);
fs.mkdir(path.join(__dirname, "/test"), {}, error => {
  if (error) throw error;
  console.log("Folder created...");
});

// Create and write to a file
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "hello world!",
  error => {
    if (error) throw error;
    console.log("File written to...");

    // Append file after created. This needs to be inside, since its a asynchronous operation
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      " I love nodeJS!",
      error => {
        if (error) throw error;
        console.log("File appended...");
      }
    );
  }
);

// Read file
fs.readFile(
  path.join(__dirname, "test", "hello.txt"),
  "utf8",
  (error, data) => {
    if (error) throw error;
    console.log(data);
  }
);

// Rename file
fs.rename(
  path.join(__dirname, "test", "hello.txt"),
  path.join(__dirname, "test", "helloworld.txt"),
  error => {
    if (error) throw error;
    console.log("File renamed...");
  }
);
