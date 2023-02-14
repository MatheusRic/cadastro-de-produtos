import createProductService from "../../services/products/createProduct.service";
import { Request, Response } from "express";
import { IProductRequest } from "../../interfaces/products";

const createProductController = async (req: Request, res: Response) => {
  const product: IProductRequest = req.body;
  const createProduct = await createProductService(product);
  return res.status(201).json(createProduct);
};

export default createProductController;
