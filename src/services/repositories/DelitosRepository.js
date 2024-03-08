export default class DelitosService {
  constructor(dao) {
    this.dao = dao;
  }

  getDelitos = (params) => {
    return this.dao.getDelitos(params);
  }

  createDelitos = (array) => {
    return this.dao.createDelitos(array);
  }

  updateDelitos = (filter, array) => {
    return this.dao.updateDelitos(filter, array);
  }

  deleteDelitos = (array) => {
    return this.dao.deleteDelitos(array);
  }
}