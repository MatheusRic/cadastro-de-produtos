import { IProductRequest } from "../../interfaces/products";
import AppDataSource from "../../data-source";
import Products from "../../entities/products.entity";
import AppError from "../../errors/appError";

const createProductService = async ({
  name,
  quantity,
  category,
}: IProductRequest): Promise<Products> => {
  const productRepository = AppDataSource.getRepository(Products);
  const findProduct = await productRepository.findOneBy({ name });

  if (findProduct) {
    throw new AppError("this product is aready exists", 400);
  }

  const product = productRepository.create({
    name,
    quantity,
    category,
  });

  await productRepository.save(product);

  return product;
};

export default createProductService;
