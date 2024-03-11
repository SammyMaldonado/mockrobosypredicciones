// delitos.controller.js

import { generateDelitos } from "../mocks/delitos.mock.js";
import { delitosServiceFake } from "../services/index.js";
import { delitosServiceReal } from "../services/index.js";
import { faker } from "@faker-js/faker/locale/es";


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

const ubicacionAleatoria = (latitud, longitud, rangoMin, rangoMax) => {
  // Función para calcular la distancia entre dos puntos en la tierra (en metros)
  const calcularDistancia = (lat1, lon1, lat2, lon2) => {
    const radioTierra = 6371000; // Radio de la Tierra en metros
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = radioTierra * c;
    return distancia;
  };

  const latitudGrados = latitud * Math.PI / 180;
  const longitudGrados = longitud * Math.PI / 180;

  let nuevaLatitudGrados, nuevaLongitudGrados;
  let distanciaAleatoria;

  // Garantizar que la distancia esté en el rango de 10 a 20 metros
  do {
    const anguloAleatorio = Math.random() * 2 * Math.PI; // Ángulo aleatorio en radianes
    distanciaAleatoria = Math.random() * (rangoMax - rangoMin) + rangoMin; // Distancia aleatoria en metros

    // Calcular nueva latitud y longitud utilizando la fórmula haversine
    nuevaLatitudGrados = Math.asin(Math.sin(latitudGrados) * Math.cos(distanciaAleatoria / 6371000) +
      Math.cos(latitudGrados) * Math.sin(distanciaAleatoria / 6371000) * Math.cos(anguloAleatorio));
    nuevaLongitudGrados = longitudGrados + Math.atan2(Math.sin(anguloAleatorio) * Math.sin(distanciaAleatoria / 6371000) * Math.cos(latitudGrados),
      Math.cos(distanciaAleatoria / 6371000) - Math.sin(latitudGrados) * Math.sin(nuevaLatitudGrados));

    // Convertir latitud y longitud de nuevo a grados
    nuevaLatitudGrados *= 180 / Math.PI;
    nuevaLongitudGrados *= 180 / Math.PI;
  } while (calcularDistancia(latitud, longitud, nuevaLatitudGrados, nuevaLongitudGrados) < rangoMin || calcularDistancia(latitud, longitud, nuevaLatitudGrados, nuevaLongitudGrados) > rangoMax);

  return { latitud: nuevaLatitudGrados, longitud: nuevaLongitudGrados };
};

// const createRandomDelitos = async (req, res) => {
//   try {

//     const delitos1 = await delitosServiceReal.getDelitos();
//     const randomDelitos = [];

//     delitos1.slice(0, 5).map(delitosx => {
//       //const ubicacionOriginal = { latitud, longitud };
//       const ubicacionRandom = ubicacionAleatoria(delitosx.location.coordinates[1], delitosx.location.coordinates[0], 10, 20);

//       //console.log(delitosx.properties);

//       const intersection = delitosx.properties.address;
//       const month = faker.date.month();
//       const year = "2024"
//       const day = faker.date.weekday();
//       const hour = delitosx.properties.hour;
//       const type = delitosx.properties.description;
//       const count = delitosx.properties.count;
//       const forecast = delitosx.properties.forecast;
//       const latitud = ubicacionRandom.latitud;
//       const longitud = ubicacionRandom.longitud;


//       // Agregar la nueva ubicación aleatoria al objeto delito
//       delitosx.location.coordinates = [ubicacionRandom.longitud, ubicacionRandom.latitud];

//       // Imprimir las ubicaciones en console.log
//       //console.log("Ubicación Original:", ubicacionOriginal);
//       //console.log("Ubicación Aleatoria:", { latitud: ubicacionRandom.latitud, longitud: ubicacionRandom.longitud });

//       randomDelitos.push(generateDelitos(intersection, month, year, day, hour, type, count, forecast, latitud, longitud));
//     })

//     // Agregando los datos generados a la base de datos
//     const createDelitos = await delitosServiceFake.createDelitos(randomDelitos);


//     res.send({ status: "success", payload: createDelitos });
//   } catch (error) {
//     console.log(error);
//     /* res.status(500).send({ status: "error", error: 'Error interno del servidor' }); */
//   }
// }

const createRandomDelitos = async (req, res) => {
  try {
    // Suponiendo que delitos1 ya contiene datos válidos
    const delitos1 = await delitosServiceReal.getDelitos();
    const randomDelitos = delitos1.slice(0, 5).map(delitosx => {
      const ubicacionRandom = ubicacionAleatoria(delitosx.location.coordinates[1], delitosx.location.coordinates[0], 10, 20);

      // Asegúrate de que estos valores sean válidos y no `undefined`
      const intersection = delitosx.properties.address;
      const month = faker.date.month();
      const year = "2024";
      const day = faker.date.weekday();
      const hour = delitosx.properties.hour;
      const type = delitosx.properties.description;
      const count = 1; // Asumiendo un valor estático para el ejemplo
      const forecast = 1; // Asumiendo un valor estático para el ejemplo
      const latitude = ubicacionRandom.latitud;
      const longitude = ubicacionRandom.longitud;

      return generateDelitos(intersection, month, year, day, hour, type, count, forecast, latitude, longitude);
    });

    await delitosServiceFake.createDelitos(randomDelitos)
    .then(result => {
      console.log("Delitos insertados con éxito", result);
      res.send({ status: "success", payload: result });
    })
    .catch(error => {
      console.error("Error insertando delitos", error);
      res.status(500).send({ status: "error", message: 'Error insertando datos en la base de datos' });
    });

} catch (error) {
  console.error(error);
  res.status(500).send({ status: "error", message: 'Error interno del servidor' });
}
};


export default {
  getDelitosReales,
  getRandomDelitos,
  createRandomDelitos
}