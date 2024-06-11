import express from "express";
const app = express();
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDatabase } from "./config/dbconnect.js";
import errorMiddleware from "./middlewares/errors.js";

//Handle uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`ERROR : ${err}`);
  console.log("Shudding down due to uncaught exception");
  process.exit(1);
});

dotenv.config({ path: "backend/config/config.env" });

//connecting to database
connectDatabase();

app.use(
  express.json({
    limit: "10mb",
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
  })
);
app.use(cookieParser());

//import all routes
import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/order.js";
import paymentRoutes from "./routes/payment.js";

app.use("/api/v1", productRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1", orderRoutes);
app.use("/api/v1", paymentRoutes);

//Using error Middleware
app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
  console.log(
    `Server Started : ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

//handle and unhandle promise rejection

process.on("uncaughtException", (err) => {
  console.log(`ERROR : ${err}`);
  console.log("Shutting Down the Server due to Unhandled Promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
