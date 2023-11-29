export default class StealsService {
  constructor(dao) {
    this.dao = dao;
  }

  getAllSteals = (params) => {
    return this.dao.getSteals(params);
  }

  createSteals = (array) => {
    return this.dao.createSteals(array);
  }

  updateSteals = (filter, array) => {
    return this.dao.updateSteals(filter, array);
  }

  deleteSteals = (array) => {
    return this.dao.deleteSteals(array);
  }
}