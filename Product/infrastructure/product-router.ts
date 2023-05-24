import express from "express";
import { productController } from "./dependencies";

const productRouter = express.Router();

productRouter.post("/:id/welcome", productController.run.bind(productController));
export {productRouter}