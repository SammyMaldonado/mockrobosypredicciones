// delitos.controller.js

import { generateDelitos } from "../mocks/delitos.mock.js";
import { delitosServiceFake } from "../services/index.js";
import { delitosServiceReal } from "../services/index.js";


const getDelitosReales = async (req, res) => {
  try {
    const delitos = await delitosServiceReal.getDelitos();
    res.send({ status: "success", payload: delitos });
  } catch (error) {
    console.log(error);
  }
}

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

const ubicacionAleatoria = () => {
  const latitudInicial = 40.7128; // Ejemplo: Latitud de Nueva York
  const longitudInicial = -74.0060; // Ejemplo: Longitud de Nueva York

  // Convertir latitud y longitud a metros (aproximadamente)
  const latitudMetros = latitudInicial * 111000; // Aproximadamente 111,000 metros por grado de latitud
  const longitudMetros = longitudInicial * 83000; // Aproximadamente 83,000 metros por grado de longitud

  // Generar ángulo aleatorio en radianes
  const angulo = Math.random() * 2 * Math.PI;

  // Generar distancia aleatoria entre 10 y 15 metros
  const distancia = Math.random() * 5 + 10;

  // Calcular nuevas coordenadas
  const nuevaLatitudMetros = latitudMetros + distancia * Math.cos(angulo);
  const nuevaLongitudMetros = longitudMetros + distancia * Math.sin(angulo);

  // Convertir las nuevas coordenadas a grados
  const nuevaLatitud = nuevaLatitudMetros / 111000;
  const nuevaLongitud = nuevaLongitudMetros / 83000;

  console.log(nuevaLatitud);
  console.log(nuevaLongitud);

  return { latitud: nuevaLatitud, longitud: nuevaLongitud };
}

const createRandomDelitos = async (req, res) => {
  try {

    const delitos1 = await delitosServiceReal.getDelitos();
    delitos1.slice(0, 5).map(delitosx => {
      const latitud = delitosx.location.coordinates[1];
      const longitud = delitosx.location.coordinates[0];
      const hour = delitosx.properties.hour;
      const intersection = delitosx.properties.address;
      const year = delitosx.properties.year;
      const ubicacionRandom = ubicacionAleatoria();
      console.log(ubicacionRandom);

      //randomDelitos.push(generateDelitos(latitud, longitud, hour, adress, year));
    })

    res.send({ status: "success", payload: delitos1.slice(0, 5) });

    /* 
        const limit = 5
        const randomDelitos = [];
    
        //Endpoint que devolvera 100 datos de robos de prueba
        for (let i = 0; i < limit; i++) {
          randomDelitos.push(generateDelitos('Hola'));
        }
        console.log(randomDelitos)
    
        // Agregando los datos generados a la base de datos
        const createDelitos = await delitosServiceFake.createDelitos(randomDelitos); */

    //res.send({ status: "success", payload: createDelitos });
  } catch (error) {
    console.log(error);
    /* res.status(500).send({ status: "error", error: 'Error interno del servidor' }); */
  }
}

export default {
  getDelitosReales,
  getRandomDelitos,
  createRandomDelitos
}