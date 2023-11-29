import PersistenceFactory from "../dao/Factory.js";

import StealsService from "./repositories/StealsRepository.js";

const persistence = await PersistenceFactory.getPersistence();

const stealsDAO = persistence.stealsDAO;

export const stealsService = new StealsService(stealsDAO);