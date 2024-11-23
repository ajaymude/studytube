import express from "express";
import authRouter from "./authRoute.js";
import userRoute from "./userRoute.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/verify", userRoute);

export default router;
