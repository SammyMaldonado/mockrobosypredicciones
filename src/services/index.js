import PersistenceFactory from "../dao/Factory.js";

import StealsService from "./repositories/StealsRepository.js";
import DelitosService from "./repositories/DelitosRepository.js";

const persistence = await PersistenceFactory.getPersistence();

const stealsDAO = persistence.stealsDAO;
const delitosDAO = persistence.delitosDAO;

export const stealsService = new StealsService(stealsDAO);
export const delitosService = new DelitosService(delitosDAO);