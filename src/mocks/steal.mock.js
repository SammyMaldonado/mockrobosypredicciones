import { faker } from '@faker-js/faker/locale/es';

// Función para obtener una comuna aleatoria entre "Lo Barnechea", "Las Condes" y "Vitacura"
const getRandomComuna = () => {
  const comunasPermitidas = ["Lo Barnechea", "Las Condes", "Vitacura"];
  const randomIndex = faker.number.int({ min: 0, max: comunasPermitidas.length - 1 });
  return comunasPermitidas[randomIndex];
}

// Función para obtener un tipo de robo aleatorio
const getRandomTipoRobo = () => {
  const tiposRobo = ["robo con intimidación", "hurto"];
  const randomIndex = faker.number.int({ min: 0, max: tiposRobo.length - 1 });
  return tiposRobo[randomIndex];
};

export const generateSteal = () => {
  const comuna = getRandomComuna();
  const tipoIncidente = getRandomTipoRobo();
  const fecha = faker.date.between({ from: '2020-01-01', to: '2023-11-19' }).toLocaleDateString("es-CL"); // Formato día/mes/año
  const hora = faker.date.recent().toLocaleTimeString("es-CL", { hour: '2-digit', minute: '2-digit', hour12: false });
  const coordenadas = {
    latitud: faker.location.latitude(),
    longitud: faker.location.longitude()
  };

  return {
    comuna,
    tipoIncidente,
    fecha,
    hora,
    coordenadas
  }
}