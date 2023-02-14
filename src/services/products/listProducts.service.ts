import AppDataSource from "../../data-source";
import Products from "../../entities/products.entity";

const listProductsService = async (param: any): Promise<Products[]> => {
  const productRepository = AppDataSource.getRepository(Products);

  if (param) {
    const products = await productRepository.find({ withDeleted: true });
    return products;
  }

  const products = await productRepository.find();

  return products;
};

export default listProductsService;
