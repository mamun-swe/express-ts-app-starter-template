import express from "express";
import * as DemoController from "../../controllers/admin/demo.controller";

export const demoRouters = express.Router();

demoRouters.get("/", DemoController.index);
