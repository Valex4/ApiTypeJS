import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/product-repository";
import * as mysql from 'mysql2/promise';

export class FakeDB implements ProductRepository{
    async getById(productId: string): Promise<Product | null> {
        const connection = await mysql.createConnection({host:'localhost', user: 'root', password:"Valiep04", database: 'products',namedPlaceholders: true});

        const [rows]: any  = await connection.execute('SELECT * FROM products WHERE id = ?', productId);
        console.log("Estamos imprimiendo las rows :)", rows[0].name);
        if(!rows[0]){
            return null;
        }else{
            let identifier:string = rows[0].id;
            let nameObject:string = rows[0].name;
            let descriptionObject:string = rows[0].description;
            console.log("hola"); 
            return new Product(identifier, nameObject, descriptionObject);
        }
    }
}