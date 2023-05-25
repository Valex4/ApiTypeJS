import { ProductRepository } from "../domain/product-repository";
export class GetInfoProduct{

    constructor(private readonly productRepository: ProductRepository){}

    async getInfo(idProduct: string){

        const product = await this.productRepository.getById(idProduct);

        if(!product){
            console.log("Id not found: " + idProduct);
        }else{
            console.log("Estamos obteniendo la informacion del producto con el id: ", idProduct);
            console.log("El producto : ", product.name)
            console.log("Con la descripcion: ", product.description)
            return product;
        }
    }
}