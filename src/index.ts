import "./LoadEnv";
import morgan from "morgan";
import express from "express";

const app = express();

app.use(morgan("dev"));
