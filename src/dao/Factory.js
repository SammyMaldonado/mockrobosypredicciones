import MongoSingleton from "../../MongoSingleton.js";
import config from "../config/config.js";

const persistence = "MONGO";

// En este punto se define que DAO (manager) es el que va a estar trabajando segun el caso.

export default class PersistenceFactory {
  static async getPersistence() {
    let stealsDAO;
    let delitosFakeDAO;
    let delitosRealDAO;

    switch (config.PERSISTENCE) {
      case "MONGO":
        MongoSingleton.getInstance();
        const { default: StealsManager } = await import('./mongo/Managers/StealsManager.js');
        const { default: delitosManagerFake } = await import('./mongo/Managers/DelitosManagerFake.js');
        const { default: delitosManagerReal } = await import('./mongo/Managers/DelitosManagerReal.js');
        stealsDAO = new StealsManager();
        delitosFakeDAO = new delitosManagerFake();
        delitosRealDAO = new delitosManagerReal();
        break;

      //Agregar mas casos según sea necesario
    }
    return {
      stealsDAO,
      delitosFakeDAO,
      delitosRealDAO
    };
  }
}