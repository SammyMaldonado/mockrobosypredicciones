import { generateSteal } from "../mocks/steal.mock.js";
import { stealsService } from "../services/index.js";

const getSteals = async (req, res) => {
  try {
    const steals = await stealsService.getAllSteals();
    res.send({ status: "success", payload: steals })
  } catch (error) {
    res.status(500).send({ status: "error", error: 'Error interno del servidor' });
  }
}

const createRandomSteals = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 200
    const randomSteals = [];

    //Endpoint que devolvera 100 datos de robos de prueba
    for (let i = 0; i < limit; i++) {
      randomSteals.push(generateSteal());
    }

    // Agregando los datos generados a la base de datos
    const createdSteals = await stealsService.createSteals(randomSteals);

    res.send({ status: "success", payload: createdSteals });
  } catch (error) {
    res.status(500).send({ status: "error", error: 'Error interno del servidor' });
  }
}

const updateRandomSteals = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 200;
    const updatedSteals = [];

    // Generar nuevos datos de robos aleatorios
    for (let i = 0; i < limit; i++) {
      updatedSteals.push(generateSteal());
    }

    const result = await stealsService.deleteSteals();

    //Agregando los nuevos productos a la base de datos
    const createdSteals = await stealsService.createSteals(updatedSteals);
    res.send({ status: "success", payload: createdSteals })
  } catch (error) {
    res.status(500).send({ status: "error", error: 'Error interno del servidor' });
  }
}

const deleteSteals = async (req, res) => {
  try {
    const deletedSteals = await stealsService.deleteSteals();
    res.send({ status: "success", message: 'Los datos se han eliminado correctamente' });
  } catch (error) {
    res.status(500).send({ status: "error", error: 'Error interno del servidor' });
  }
}

export default {
  getSteals,
  createRandomSteals,
  updateRandomSteals,
  deleteSteals
}