import PersistenceFactory from "../dao/Factory.js";

import StealsService from "./repositories/StealsRepository.js";
import DelitosServiceFake from "./repositories/DelitosRepositoryFake.js";
import DelitosServiceReal from "./repositories/DelitosRepositoryReal.js";

const persistence = await PersistenceFactory.getPersistence();

const stealsDAO = persistence.stealsDAO;
const delitosFakeDAO = persistence.delitosFakeDAO;
const delitosRealDAO = persistence.delitosRealDAO;

export const stealsService = new StealsService(stealsDAO);
export const delitosServiceFake = new DelitosServiceFake(delitosFakeDAO);
export const delitosServiceReal = new DelitosServiceReal(delitosRealDAO);