import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const sanitizeEnvValue = (value?: string) => {
  if (!value) return "";
  return value.trim().replace(/^['"]|['"]$/g, "");
};

export const connectDB = async () => {
  const mongoUrl =
    sanitizeEnvValue(process.env.url) ||
    sanitizeEnvValue(process.env.MONGODB_URL);

  if (!mongoUrl) {
    throw new Error("MongoDB URL is missing. Set 'url' or 'MONGODB_URL'.");
  }

  try {
    const connect = await mongoose.connect(mongoUrl);

    if (connect.connection.readyState === 1) {
      console.log("MongoDB connected successfully");
    } else {
      console.log("MongoDB connection is not ready");
    }
  } catch (error) {
    console.log("MongoDB connection error", error);
    throw error;
  }
};
