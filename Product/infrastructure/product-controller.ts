import { Request, Response } from "express";
import { GetInfoProduct } from "../application/GetInfoProduct";
export class ProductController {
  constructor(private readonly getInfoProduct : GetInfoProduct){
  }
  async run(req: Request, res: Response) {
    const productId = req.params.id;
    await this.getInfoProduct.getInfo(productId);
    res.status(200).send();
  }
}
