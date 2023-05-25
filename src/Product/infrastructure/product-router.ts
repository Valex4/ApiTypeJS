import express from "express";
import { deleteProductController, productController,addProductController1, getAllProductos } from "./Dependencies";
const productRouter = express.Router();
productRouter.post("/getById/:id", productController.run.bind(productController));
productRouter.post("/adding",addProductController1.run.bind(addProductController1));
productRouter.delete("/:id/delete", deleteProductController.run.bind(deleteProductController));
productRouter.get("/getAll", getAllProductos.run.bind(getAllProductos))

export {productRouter}