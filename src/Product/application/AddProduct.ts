import { FakeDB } from "../infrastructure/fakeDB";
export class AddProduct{
    constructor(
        private readonly addToDB: FakeDB
       
    ){}

    async addProduct(name:string, description:string){
       
       const newProduct = await this.addToDB.addProduct(name, description);
        console.log(newProduct);
        console.log("Nos esta llegando la info al application: ") 

        return newProduct;
    }

    

}