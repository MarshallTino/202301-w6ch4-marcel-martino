import debug from "debug";
import { type Request, type Response } from "express";
import thingsThatiKnow from "../things.js";

export const getThing = (req: Request, res: Response) => {
  const { id } = req.params;
  const thing = thingsThatiKnow.find((thing) => thing.id === +id);
  if (!thing) {
    res.status(404).json({ error: "No Thing found" });
  }

  res.status(200).json({ thing });
};

export const getThings = (req: Request, res: Response) => {
  res.status(200).json(thingsThatiKnow);
};

export const deleteThing = (req: Request, res: Response) => {
  const { id } = req.params;
  const thing = thingsThatiKnow.find((thing) => thing.id === +id);
  thingsThatiKnow.splice(0, thing?.id);
  if (!thing) {
    res.status(404).json({ error: "No Thing found" });
  }

  res.status(200).json(thingsThatiKnow);
};
