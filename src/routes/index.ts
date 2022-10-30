import { Router } from "express";
import { adminPermission } from "../middlewares/permission.middleware";
import { adminRouter } from "./admin";
import { publicRouter } from "./public";

export const router: Router = Router();

router.use("/admin", adminPermission, adminRouter);
router.use("/public", publicRouter);
