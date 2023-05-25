import { Product } from "./Product";
export interface ProductRepository{
    getById(productId: string): Promise<Product | null>;
    addProduct(name:string, description:string):Promise<void>;
    deleteProduct(productId: string): Promise<string | null>;
    getAllProducts(): Promise<[]>;
}

