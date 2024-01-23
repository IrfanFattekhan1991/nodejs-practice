const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();

//registering a listener
logger.on("message logged", (arg) => {
  console.log("listener called", arg);
});

logger.log("message");
