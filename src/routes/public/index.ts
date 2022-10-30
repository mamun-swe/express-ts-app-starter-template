import { Router } from "express";
import { demoRouters } from "./demo.routes";

export const publicRouter: Router = Router();

publicRouter.use("/demo", demoRouters);
