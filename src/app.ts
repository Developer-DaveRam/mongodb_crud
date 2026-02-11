import { connectDB } from "./db/db.js";
import dotenv from "dotenv";
import express from "express";
import swaggerui from "swagger-ui-express";
import swaggerDoc from "./config/swagger-output.json" with { type: "json" };
import userRoute from "./router/user.Router.js";
import paymentRouter from "./router/Payment.Service.js";

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT?.trim() || 3000);

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/swagger", swaggerui.serve, swaggerui.setup(swaggerDoc));
app.use("/User", userRoute);
app.use("/Payments", paymentRouter);

app.listen(PORT, () => {
  console.log(`Server is on port http://localhost:${PORT}`);
});
