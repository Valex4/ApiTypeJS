import * as mysql from 'mysql2/promise';

const configuration ={
        host:'localhost', user: 'root', password:"Valiep04", database: 'products',namedPlaceholders: true
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
