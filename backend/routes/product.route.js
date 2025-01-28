import express from "express";
import {
  createProduct,
  deleteProdcut,
  getProducts,
  updateProduct,
} from "../controller/product.controller.js";

const router = express.Router();

router.get("/", getProducts);

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProdcut);

export default router;
