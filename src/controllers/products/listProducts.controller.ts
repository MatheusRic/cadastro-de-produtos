import { Response, Request } from "express";
import listProductsService from "../../services/products/listProducts.service";

const listProductsController = async (req: Request, res: Response) => {
  const products = await listProductsService();
  return res.status(200).json(products);
};

export default listProductsController;
