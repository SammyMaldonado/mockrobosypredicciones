// import { faker } from "@faker-js/faker";

// export const generateDelitos = (intersection, month, year, day, hour, type, count, forecast, latitude, longitude) => {

//   // Generar un ID aleatorio
//   const _id = faker.string.uuid();

//   const adressx = intersection;
//   const monthx = month;
//   const yearx = year;
//   const dayx = day;
//   const hourx = hour;
//   const typex = type;
//   const countx = count
//   const forecastx = forecast;
//   const latitudx = latitude;
//   const longitudx = longitude;


//   // Generar datos de propiedades
//   const properties = {
//     _id: _id,
//     intersection: adressx,
//     month: monthx,
//     year: 2024,
//     day: dayx,
//     hour_range: hourx,
//     type: typex,
//     count: 1,
//     forecast: 1,
//     latitude: latitudx,
//     longitude: longitudx,
//   };

//   // Crear el objeto completo
//   return {
//     properties: properties
//   };
// };

import { faker } from "@faker-js/faker";

export const generateDelitos = (intersection, month, year, day, hour_range, type, count, forecast, latitude, longitude) => {
  return {
    intersection,
    month,
    year: parseInt(year, 10), // Asegurar que es un número
    day,
    hour_range,
    type,
    count: parseInt(count, 10), // Asegurar que es un número
    forecast: parseFloat(forecast), // Asegurar que es un número
    latitude: parseFloat(latitude), // Asegurar que es un número
    longitude: parseFloat(longitude), // Asegurar que es un número
  };
};
