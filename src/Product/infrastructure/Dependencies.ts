import { GetInfoProduct } from "../application/GetInfoProduct";
import { ProductController } from "./controllers/product-controller";
import { FakeDB } from "./fakeDB";
import { AddProductController } from "./controllers/addProduct-controller";
import { AddProduct } from "../application/AddProduct";
import { DeleteProduct } from "../application/DeleteProduct";
import { DeleteProductController } from "./controllers/deleteProduct-controller";
import { getAllProducts } from "../application/getAllProducts";
import { getAllC } from "./controllers/getAll-controller";

const fakeDB = new FakeDB();
export const getAll = new getAllProducts(fakeDB);
export const getAllProductos = new getAllC(getAll); 
export const deleteProduct = new DeleteProduct(fakeDB)
export const deleteProductController = new DeleteProductController(deleteProduct);
export const getInfoProduct = new GetInfoProduct(fakeDB);
export const productController = new ProductController(getInfoProduct);
export const addProductNew =  new AddProduct(fakeDB);
export const addProductController1 = new AddProductController(addProductNew);


