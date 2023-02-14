import { Router } from "express";

import createProductController from "../controllers/products/createProduct.controller";
import listProductsController from "../controllers/products/listProducts.controller";
import updateProductController from "../controllers/products/updateProduct.controller";
import deleteProductController from "../controllers/products/deleteProduct.controller";

const routes = Router();

routes.post("", createProductController);
routes.get("", listProductsController);
routes.patch("/:id", updateProductController);
routes.delete("/:id", deleteProductController);

export default routes;
