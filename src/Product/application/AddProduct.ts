import { Product } from "../domain/Product";
import { AddToDB } from "../infrastructure/add-to-DB"
export class AddProduct{
    constructor(
        private readonly addToDB: AddToDB
       
    ){}

    async addProduct(id:string, name:string, description:string){
       const productN: Product = new Product(id, name, description)
       const newProduct = await this.addToDB.addProduct(productN);
        console.log(newProduct);
        console.log("Nos esta llegando la info al application: ", productN) 
    }

    

}