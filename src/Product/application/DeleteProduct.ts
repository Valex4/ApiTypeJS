import { FakeDB } from "../infrastructure/fakeDB";
export class DeleteProduct{

    constructor(private readonly dProduct: FakeDB){
    }

    async deleteProduct(idProduct: string){

        const product = await this.dProduct.deleteProduct(idProduct);

        if(!product){
            console.log("Id not found: " + idProduct);
        }else{
            console.log("Estamos eliminando el id: ", idProduct);

        }
    }
}