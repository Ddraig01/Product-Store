import express, { Router } from "express";
import {
  deleteProduct,
  getProducts,
  createProducts,
  updateProduct,
} from "../controllers/product.contoller.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProducts);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

export default router;
