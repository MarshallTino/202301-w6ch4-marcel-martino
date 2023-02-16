import "./LoadEnv.js";
import morgan from "morgan";
import express from "express";
import createDebugMessage from "debug";
import thingsThatiKnow from "./things.js";

const port = process.env.PORT;
const debug = createDebugMessage("app");

const app = express();
app.use((req, res, next) => {
  console.log("Gholadsa");
  debug("app");
  next();
});

app.get("/things", (req, res) => {
  console.log("a request to / has been received");
  res.json(thingsThatiKnow);
});

app.use(morgan("dev"));
debug("app");

app.listen(port);
