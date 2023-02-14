import { IProductUpdate } from "../../interfaces/products";
import updateProductService from "../../services/products/updateProduct.service";
import { Request, Response } from "express";

const updateProductController = async (req: Request, res: Response) => {
  const product: IProductUpdate = req.body;
  const id: string = req.params.id;
  const updatedProduct = await updateProductService(product, id);
  return res
    .status(200)
    .json({ message: "Product updated", product: updatedProduct });
};

export default updateProductController;
