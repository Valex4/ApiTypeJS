import { Request, Response } from "express";
import { getAllProducts } from "../application/getAllProducts";
export class getAllC {
  constructor(private readonly getAllP: getAllProducts){
  }
  async run(req: Request, res: Response) {

    const produ = await this.getAllP.getAllProducts();
    console.log("Imprimiendo el produ: ", produ)
    
    if(produ == null){
      res.status(404).send("Usuario no encontrado");
    }else{
      res.status(200).json(produ);
    }
    
  }
}