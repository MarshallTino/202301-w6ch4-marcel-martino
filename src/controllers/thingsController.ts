import { type NextFunction, type Request, type Response } from "express";
import thingsThatiKnow from "../things.js";

export const getThing = (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const thing = thingsThatiKnow.find((thing) => thing.id === +id);
  res.json({ thing });
};

export const getThings = (req: Request, res: Response, next: NextFunction) => {
  res.json(thingsThatiKnow);
};
