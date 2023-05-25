import { Request, Response } from "express";
import { GetInfoProduct } from "../application/GetInfoProduct";
export class ProductController {
  constructor(private readonly getInfoProduct : GetInfoProduct){
  }
  async run(req: Request, res: Response) {
    const productId = req.params.id;
    console.log("REcibiendo en el controlador el id: ", productId)
    const produ = await this.getInfoProduct.getInfo(productId);
    console.log("Imprimiendo el produ: ", produ)
    if(produ == null){
      res.status(404).send("Usuario no encontrado");
    }else{
      res.status(200).json(produ);
    }
    
  }
}
