const events = require("events");
const eventEmitter = new events.EventEmitter();

// create an event handler
const chitkar = () => {
  console.log("mata karap amar");
};
// assign the handler an event
eventEmitter.on("scream", chitkar).chitkar;
// firing event
eventEmitter.emit("scream");
