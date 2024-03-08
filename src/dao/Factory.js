import MongoSingleton from "../../MongoSingleton.js";
import config from "../config/config.js";

const persistence = "MONGO";

// En este punto se define que DAO (manager) es el que va a estar trabajando segun el caso.

export default class PersistenceFactory {
  static async getPersistence() {
    let stealsDAO;
    let delitosDAO;

    switch (config.PERSISTENCE) {
      case "MONGO":
        MongoSingleton.getInstance();
        const { default: StealsManager } = await import('./mongo/Managers/StealsManager.js');
        const { default: delitosManager } = await import('./mongo/Managers/DelitosManager.js');
        stealsDAO = new StealsManager();
        delitosDAO = new delitosManager();
        break;

      //Agregar mas casos según sea necesario
    }
    return {
      stealsDAO,
      delitosDAO
    };
  }
}