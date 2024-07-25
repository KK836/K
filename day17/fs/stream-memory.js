const fs = require("fs");

console.log("before: ", process.memoryUsage);

const readStream = fs.createReadStream("./big.text");
const writeStream = fs.createWriteStream("./big3.text");

readStream.pipe(writeStream);
readStream.on("end", () => {
  console.log("stream:", process.memoryUsage().rss);
});
