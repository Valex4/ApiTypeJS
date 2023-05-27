import * as mysql from 'mysql2/promise';
import dotenv from "dotenv"
import path from 'path';
const envPath = path.resolve("src", '..', '.env');
console.log("Imprimiendo el envpath")
console.log(envPath)
dotenv.config({ path: envPath });
const configuration ={
        host:process.env.MY_SQL_DB_HOST, user:process.env.MY_SQL_DB_USER, password:process.env.MY_SQL_DB_PASSWORD, database:process.env.MY_SQL_DB_DATABASE,namedPlaceholders: true
}

export const connectionDB = async (sql:string, parameters:any[]) =>{
    const conn = await mysql.createConnection(configuration);
    try{
        const success = await conn.execute(sql, parameters);
        return success
    }finally{
        await conn.end();
    }
}
