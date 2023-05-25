import { Product } from "./Product";
export interface ProductRepository{
    getById(productId: string): Promise<Product | null>;
}

