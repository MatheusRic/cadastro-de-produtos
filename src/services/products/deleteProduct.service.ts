import AppDataSource from "../../data-source";
import Products from "../../entities/products.entity";
import AppError from "../../errors/appError";

const deleteProductService = async (id: string) => {
  const productRepository = AppDataSource.getRepository(Products);

  const findProduct = await productRepository.findOneBy({ id });

  if (!findProduct) {
    throw new AppError("product not found", 404);
  }

  if (findProduct.status === "Inactive") {
    throw new AppError("Product deleted", 400);
  }

  await productRepository.update(id, {
    status: "Inactive",
    deleted_at: new Date(),
  });
};

export default deleteProductService;
