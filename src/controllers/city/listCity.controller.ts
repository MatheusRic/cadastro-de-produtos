import createCityService from "../../services/citys/createCity.service";
import { Request, Response } from "express";

const listCityController = async (req: Request, res: Response) => {
  const city = await createCityService();
  res.status(200).json(city);
};

export default listCityController;
