import express from "express";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import userRoutes from "./routes/admin.js";
import authRoutes from "./routes/auth.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import "dotenv/config";

const port = process.env.NODE_PORT || 3000;

console.log('port', process.env.NODE_PORT)

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on http://localhost:${port}`));
