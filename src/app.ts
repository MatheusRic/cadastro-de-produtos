import "reflect-metadata";
import "express-async-errors";
import express from "express";
import productsRoutes from "./routes/products.routes";
import cityRoutes from "./routes/city.routes";
import handleErrorMiddleware from "./middlewares/handleError.middleware";

const app = express();
app.use(express.json());

app.use("/products", productsRoutes);
app.use("/city", cityRoutes);
app.use(handleErrorMiddleware);

export default app;
