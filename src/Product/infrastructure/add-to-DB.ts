import { Product } from "../domain/Product";
import { AddProducts } from "../domain/add-product";
import * as mysql from 'mysql2/promise';

export class AddToDB implements AddProducts{
    async addProduct(product: Product): Promise<void> {
        const connection = await mysql.createConnection({host:'localhost', user: 'root', password:"Valiep04", database: 'products',namedPlaceholders: true});
        let result = await connection.execute("INSERT INTO products (id, name, description) values (?,?,?) ", [product.id, product.name, product.description])
        console.log("Imprimienod el resultado: ",  result);
    
    }
}