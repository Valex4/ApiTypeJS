import { Request, Response } from "express";
import { AddProduct } from "../application/AddProduct";
export class AddProductController{
    constructor(private readonly add: AddProduct){
        
    }
    async run(req: Request, res: Response) {
        const productInfo = req.body;
        let {id, name, description} = req.body;
        console.log("Estamos recibiendo la informacion en el controlador: " + productInfo.name)
        await this.add.addProduct(id, name, description);
        res.status(200).send("Estamos recibiendo la informacion");
      }
}