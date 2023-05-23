import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/product-repository";

const products: Product[] = [    
    { 
        id:"1",
        name:"Chocolate abuelita",
        description:"Chocolate fascninante"
    },
    {
        id:"2",
        name:"Gansito marinela",
        description:"Excelente sabor"
    }
];

export class FakeDB implements ProductRepository{
    async getById(productId: string): Promise<Product | null> {
        const productFound = products.find((product) => product.id === productId);

        if(!productFound){
            return null;
        }else{
            return new Product(productFound.id, productFound.name, productFound.description);
        }




    }
}