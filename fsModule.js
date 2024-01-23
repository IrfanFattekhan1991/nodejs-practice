const fs = require("fs");

//const files = fs.readdirSync("./");

//console.log(files);

fs.readdir("./", (err, files) => {
  if (files) console.log(files);
  else {
    console.log(err);
  }
});
