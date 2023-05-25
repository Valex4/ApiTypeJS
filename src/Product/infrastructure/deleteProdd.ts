import { DeleteProducts } from "../domain/delete-product";
import * as mysql from 'mysql2/promise';
export class DeleeProduct implements DeleteProducts{

    async deleteProduct(productId: string): Promise<string | null> {
        const connection = await mysql.createConnection({host:'localhost', user: 'root', password:"Valiep04", database: 'products',namedPlaceholders: true});
        let result = await connection.execute("DELETE FROM products where id = ?", productId)
        console.log("Imprimienod el resultado: ",  result);

         if(!result){
            return null;
        }else{
            return "eliminado correctamente";
        } 
        
    }

}