// delitos.controller.js

import { generateDelitos } from "../mocks/delitos.mock.js";
import { delitosService } from "../services/index.js";


const getRandomDelitos = async (req, res) => {
  try {
    const delitos = [];
    //Endpoint que va a devolver 100 delitos de prueba.
    for (let i = 0; i < 20000; i++) {
      delitos.push(generateDelitos());
    }
    res.send({ status: "success", payload: delitos });
  } catch (error) {
    console.log(error);
  }
}

const createRandomDelitos = async (req, res) => {
  try {

    //const delitos1 = await delitosService.getDelitos();
    delitos1.map(delitosx => {
      const latitud = delitosx.location.coordinates[1];
      const longitud = delitosx.location.coordinates[0];
      const hour = delitosx.properties.hour;
      const adress = delitosx.properties.intersection;
      const year = delitosx.properties.year;
      randomDelitos.push(generateDelitos(latitud, longitud, hour, adress, year));
    })
    //console.log(delitos1);



    const limit = 5
    const randomDelitos = [];

    //Endpoint que devolvera 100 datos de robos de prueba
    for (let i = 0; i < limit; i++) {
      randomDelitos.push(generateDelitos('Hola'));
    }
    console.log(randomDelitos)

    // Agregando los datos generados a la base de datos
    const createDelitos = await delitosService.createDelitos(randomDelitos);

    res.send({ status: "success", payload: createDelitos });
  } catch (error) {
    console.log(error);
    /* res.status(500).send({ status: "error", error: 'Error interno del servidor' }); */
  }
}

export default {
  getRandomDelitos,
  createRandomDelitos
}