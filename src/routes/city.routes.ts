import { Router } from "express";

import listCityController from "../controllers/city/listCity.controller";

const routes = Router();

routes.get("", listCityController);

export default routes;
