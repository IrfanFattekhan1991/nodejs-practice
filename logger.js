const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    //Send an HTTP request
    console.log(message);

    this.emit("message logged", { id: 1, name: "Irfan" });
  }
}

module.exports = Logger;
