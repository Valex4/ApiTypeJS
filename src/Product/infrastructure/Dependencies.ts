import { GetInfoProduct } from "../application/GetInfoProduct";
import { ProductController } from "./product-controller";
import { FakeDB } from "./fakeDB";
const fakeDB = new FakeDB();
export const getInfoProduct = new GetInfoProduct(fakeDB);
export const productController = new ProductController(getInfoProduct);