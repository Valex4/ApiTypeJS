import { GetInfoProduct } from "../application/GetInfoProduct";
import { ProductController } from "./product-controller";
import { FakeDB } from "./fakeDB";
import { AddProductController } from "./addProduct-controller";
import { AddProduct } from "../application/AddProduct";
import { AddToDB } from "./add-to-DB";
import { DeleteProduct } from "../application/DeleteProduct";
import { DeleeProduct } from "./deleteProdd";
import { DeleteProductController } from "./deleteProduct-controller";

const deletProduct= new DeleeProduct()
const fakeDB = new FakeDB();
const addToDB = new AddToDB();
export const deleteProduct = new DeleteProduct(deletProduct)
export const deleteProductController = new DeleteProductController(deleteProduct);
export const getInfoProduct = new GetInfoProduct(fakeDB);
export const productController = new ProductController(getInfoProduct);
export const addProductNew =  new AddProduct(addToDB);
export const addProductController1 = new AddProductController(addProductNew);


