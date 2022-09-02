const fs = require("fs");

const readstream = fs.createReadStream("./data.txt");
readstream.on("data", (chunk) => {
  console.log("....................");
  console.log(chunk);
});
