import AppDataSource from "../../data-source";
import Products from "../../entities/products.entity";

const listProductsService = async (): Promise<Products[]> => {
  const productRepository = AppDataSource.getRepository(Products);

  const products = await productRepository.find({ withDeleted: true });

  return products;
};

export default listProductsService;
