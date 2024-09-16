import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173/create", // Allow only frontend origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    credentials: true, // If you're using cookies/auth
  })
);

app.use(express.json());

app.use("/api/products", productRoutes);
connectDB();
app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
});
