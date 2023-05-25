import { ProductRepository } from "../domain/product-repository";
export class getAllProducts{
    constructor(private readonly productRepository: ProductRepository){}

    async getAllProducts(){

        const product: any[] = await this.productRepository.getAllProducts();

        if(!product){
            console.log("No tenemos nada en base de datos");
        }else{
            console.log("Imprimiendo todos los productos: ", product)
            return product;
        }
    }
}