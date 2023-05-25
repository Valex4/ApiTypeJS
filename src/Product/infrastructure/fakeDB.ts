import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/product-repository";
import { connectionDB } from "./Connection";

export class FakeDB implements ProductRepository{
    async getAllProducts(): Promise<[]> {
        const sql = "SELECT * FROM products";
        const params: any[] = [];

        let [rows]: any = await connectionDB(sql, params);
        return rows;


    }
    async addProduct(name: string, description: string): Promise<void> {
        const sql = "INSERT INTO products (name, description) values (?,?) ";
        const params = [name, description];

        let result = await connectionDB(sql, params);
         console.log("Imprimienod el resultado: ",result);
        
    }
    async deleteProduct(productId: string): Promise<string | null> {
        const sql = "DELETE FROM products where id = ? ";
        const params = [productId];
        let result = await connectionDB(sql, params);
        console.log("Imprimienod el resultado: ",  result);
         if(!result){
            return null;
        }else{
            return "eliminado correctamente";
        } 
        
    }

    async getById(productId: string): Promise<Product | null> {
        const sql = "SELECT * FROM products WHERE id = ? ";
        const params = [productId];
        let [rows]: any = await connectionDB(sql, params);
        if(!rows[0]){
            return null;
        }else{
            console.log("Estamos imprimiendo las rows :)", rows[0].name);
            let identifier:string = rows[0].id;
            let nameObject:string = rows[0].name;
            let descriptionObject:string = rows[0].description;
            console.log("hola"); 
            return new Product(identifier, nameObject, descriptionObject);
        }
    }
}