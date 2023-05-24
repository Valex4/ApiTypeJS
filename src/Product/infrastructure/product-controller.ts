import { Request, Response } from "express";
import { GetInfoProduct } from "../application/GetInfoProduct";
export class ProductController {
  constructor(private readonly getInfoProduct : GetInfoProduct){
  }
  async run(req: Request, res: Response) {
    const productId = req.params.id;
    console.log("REcibiendo en el controlador el id: ", productId)
    await this.getInfoProduct.getInfo(productId);
    res.status(200).send("Hola tus datos ya estan listos");
  }
}
