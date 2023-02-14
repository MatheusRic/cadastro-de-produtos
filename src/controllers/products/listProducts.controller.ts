import { Response, Request } from "express";
import listProductsService from "../../services/products/listProducts.service";

const listProductsController = async (req: Request, res: Response) => {
  const param = req.query["true"];
  const products = await listProductsService(param);
  return res.status(200).json(products);
};

export default listProductsController;
