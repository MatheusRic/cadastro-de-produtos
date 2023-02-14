import ibgeApi from "../../axios";
import AppDataSource from "../../data-source";
import City from "../../entities/city.entity";

const createCityService = async () => {
  const cityRepository = AppDataSource.getRepository(City);

  const ibge = await ibgeApi();

  const citys = ibge.forEach(async (elem: any) => {
    const findCity = await cityRepository.findOneBy({ id_ibge: elem.id });

    if (!findCity) {
      const city = cityRepository.create({
        id_ibge: elem.id,
        name: elem.nome,
      });

      await cityRepository.save(city);
    }
  });

  const myCitys = await cityRepository.find();

  return myCitys;
};

export default createCityService;
