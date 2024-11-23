// npm packages
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
dotenv.config();
// created module
import router from "./src/routes/routes.js";
import { connectDB } from "./src/config/db.js";

const app = express();
const PORT = process.env.PORT;

// middleware
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/v1", router);

// error handlers
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

app.listen(PORT, () => {
  console.log("Server is running on " + PORT);
  connectDB();
});
