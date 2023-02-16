import { Router } from "express";
import {
  deleteThing,
  getThing,
  getThings,
} from "../controllers/thingsController.js";

// eslint-disable-next-line new-cap
const thingsRouter = Router();

thingsRouter.get("/:id", getThing);
thingsRouter.get("/", getThings);
thingsRouter.delete("/:id", deleteThing);

export default thingsRouter;
