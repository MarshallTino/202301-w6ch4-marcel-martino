import { Router } from "express";
import { getThing, getThings } from "../controllers/thingsController.js";

// eslint-disable-next-line new-cap
const thingsRouter = Router();

thingsRouter.get("/:id", getThing);
thingsRouter.get("/", getThings);

export default thingsRouter;
