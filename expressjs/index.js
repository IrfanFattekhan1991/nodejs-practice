const express = require("express");
const logger = require("./middleware/logger");
const courses = require("./routes/courses");
const home = require("./routes/home");
const authenticate = require("./middleware/authentication");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api/courses", courses);
app.use("/", home);
app.use(logger);
app.use(authenticate);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to the port ${port}...`));
