import express from "express";
import { ProductController } from "./controller";

const router = express.Router();
router.get("/last", ProductController.getLast);
router.get("/", ProductController.getAllProducts);
router.get("/:category", ProductController.getProductsByCategory);
router.get("/:id", ProductController.getProductById);
router.post("/", ProductController.createProduct);
router.patch("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);
export const ProductRouter = router;
