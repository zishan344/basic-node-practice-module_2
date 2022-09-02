const http = require("http");
const url = require("url");
const fs = require("fs");
const events = require("events");
const eventEmitter = new events.EventEmitter();
const port = 8080;
const server = http.createServer((req, res) => {
  // const url_address =
  //   "http://localhost:8080/contact?name=marouful&country=bangladesh";
  // const parsed_url = url.parse(url_address, true);
  // console.log(parsed_url);
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<p>Welcome to Full Stack Development</p>");
    res.end();
  } else if (req.url === "/filetext") {
    /*  fs.readFile("./first.txt", (err, data) => {
      if (err) {
        res.write("Failed To Read Data");
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    }); */
    /*  const data = fs.readFileSync("./first.txt");
    res.write(data);
    res.end(); */

    /*     fs.writeFile("first.txt", "Hello Node js", (err) => {
      if (err) {
        res.write("Data failed to write");
        res.end();
      } else {
        res.write("data written successfully");
        res.end();
      }
    }); */
    /* fs.appendFile("first.txt", "No I am good programmer", (err) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.write("data update successfully");
        res.end();
      }
    }); */
    fs.unlink("t.js", (err) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.write("deleted file succesfully");
        res.end();
      }
    });
  }
});
server.listen(port, () => {
  console.log("server listening on" + port);
});
