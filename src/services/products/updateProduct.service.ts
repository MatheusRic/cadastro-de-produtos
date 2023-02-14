import { IProductUpdate } from "../../interfaces/products";
import AppDataSource from "../../data-source";
import Products from "../../entities/products.entity";
import AppError from "../../errors/appError";

const updateProductService = async (
  { name, category, quantity }: IProductUpdate,
  id: string
): Promise<Products> => {
  const productRepository = AppDataSource.getRepository(Products);

  const findProducts = await productRepository.findOneBy({ id });

  if (!findProducts) {
    throw new AppError("product not found", 404);
  }

  await productRepository.update(id, {
    name: name ? name : findProducts.name,
    category: category ? category : findProducts.category,
    quantity: quantity ? quantity : findProducts.quantity,
  });

  const updatedProduct = await productRepository.findOneBy({ id });

  return updatedProduct!;
};

export default updateProductService;
