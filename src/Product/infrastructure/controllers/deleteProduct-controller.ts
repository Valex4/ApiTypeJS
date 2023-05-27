import { Request, Response } from "express";
import { DeleteProduct } from "../../application/DeleteProduct";
export class DeleteProductController{
    constructor(private readonly delProduct: DeleteProduct){
        
    }
    async run(req: Request, res: Response) {
        const id = req.params.id
        console.log("Estamos recibiendo la informacion en el controlador en eliminar: " + id)
        const resultado = await this.delProduct.deleteProduct(id);
        console.log("Imprimiendo el resultaod: ", resultado)
        res.status(200).send("Eliminado correctamente");
      }
}