import { faker } from "@faker-js/faker";

export const generateDelitos = (latitud, longitud, hour, adress, type) => {

  // Generar un ID aleatorio
  const _id = faker.string.uuid();

  const latitudx = latitud;
  const longitudx = longitud;
  const hourx = hour;
  const adressx = adress;
  const typex = type;

  // Generar datos de propiedades
  const properties = {
    hour_range: hourx,
    intersection: adressx,
    latitude: latitudx,
    longitude: longitudx,
    type: typex,
    count: 1,
    forecast: 1
  };

  // Crear el objeto completo
  return {
    _id: _id,
    properties: properties
  };
};