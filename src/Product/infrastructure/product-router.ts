import express from "express";
import { deleteProductController, productController } from "./Dependencies";
import { addProductController1 } from "./Dependencies";
const productRouter = express.Router();
productRouter.post("/:id/welcome", productController.run.bind(productController));
productRouter.post("/adding",addProductController1.run.bind(addProductController1));
productRouter.post("/:id/delete", deleteProductController.run.bind(deleteProductController));
export {productRouter}