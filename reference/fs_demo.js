const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "test"), {}, (err) => {
  if (err) throw err;

  console.log("folder created");
});

fs.writeFile(
  path.join(__dirname, "test", "hello.txt"),
  "Hello World!",
  (err) => {
    if (err) throw err;

    console.log("file created");

    fs.appendFile(
      path.join(__dirname, "test", "hello.txt"),
      "I love nodejs!",
      (err) => {
        if (err) throw err;

        console.log("file witten");

        fs.rename(
          path.join(__dirname, "test", "hello.txt"),
          path.join(__dirname, "test", "hello_world.txt"),
          (err) => {
            if (err) throw err;

            console.log("rename");
          }
        );
      }
    );
  }
);

fs.readFile(path.join(__dirname, "test", "hello.txt"), "utf-8", (err, data) => {
  if (err) throw err;

  console.log("read file", data);
});
