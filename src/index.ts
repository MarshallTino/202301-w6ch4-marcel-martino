import "./LoadEnv.js";
import morgan from "morgan";
import express from "express";
import createDebugMessage from "debug";
import thingsThatiKnow from "./things.js";
import { getThing } from "./controllers/thingsController.js";
import thingsRouter from "./router/thingsThatiKnowRouter.js";

const port = process.env.PORT;
const debug = createDebugMessage("app");

const app = express();

app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log("Gholadsa");
  debug("app");
  next();
});

app.use("/things", thingsRouter);

app.listen(port);
