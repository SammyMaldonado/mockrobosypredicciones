import { faker } from "@faker-js/faker";

export const generateDelitos = (latitud, longitud, hour, adress, year) => {
  // Generar un ID aleatorio
  const _id = faker.string.uuid();

  // Generar un número aleatorio
  const number = faker.string.numeric();

  // Generar datos de ubicación
  const location = {
    coordinates: [faker.location.latitude(), faker.location.longitude()],
    type: "Point"
  };


  const latitudx = latitud;
  const longitudx = longitud;
  const hourx = hour;
  const adressx = adress;
  const yearx = year;

  // Generar datos de propiedades
  const properties = {
    name: faker.date.anytime(),
    date: faker.date.past(),
    hour: hourx,
    address: adressx, //faker.location.streetAddress() + ', ' + faker.location.city() + ', ' + faker.location.country(),
    year: yearx,//faker.date.past().getFullYear(),
    description: faker.lorem.sentence(),
    category: "DOMICILIO",
    status: "CONSUMADO"
  };

  // Crear el objeto completo
  return {
    _id: _id,
    number: number,
    location: location,
    properties: properties
  };
};