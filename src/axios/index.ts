import axios from "axios";

async function ibgeApi() {
  const response = await axios.get(
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios"
  );
  return response.data;
}

export default ibgeApi;
