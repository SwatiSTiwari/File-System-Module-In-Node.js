////////////////////////////////////////// file module in node //////////////////////////////////////////////////

const fs = require("fs");
fs.readFile("hii.txt", (err, data) => {
  if (!err) {
    console.log(data.toString());
  }
});

//=================================== read file =====================================

const http = require("http");

http
  .createServer((req, resp) => {
    fs.readFile("index.html", (err, data) => {
      resp.writeHead(200, { "Content-Type": "text/html" });
      resp.write(data);
      resp.end();
    });
  })
  .listen(5000);

//=================================== create file =====================================

fs.appendFile("createFile.txt", "now we are creating  file ", (err) => {
  if (!err) {
    console.log("file created successfully");
  }
});

//=================================== update file =====================================

fs.appendFile("createFile.txt", "now we are updating  file", (err) => {
  if (!err) {
    console.log("file updated successfully");
  }
});

//=================================== delete file =====================================

fs.unlink("hii.txt", (err) => {
  if (!err) {
    console.log("file deleted successfully");
  }
});
