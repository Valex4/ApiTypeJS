import { Product } from "./Product";
export interface AddProducts{
    addProduct(product:Product):Promise<void>;
}