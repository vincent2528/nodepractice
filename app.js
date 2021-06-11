const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("logging", (arg) => {
  console.log(arg.message);
});

emitter.emit("logging", { message: "Hello" });
