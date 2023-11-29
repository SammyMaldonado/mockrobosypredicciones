import stealsModel from '../models/steals.js';

export default class StealManager {
  getSteals = (params) => {
    return stealsModel.find(params).lean();
  }

  createSteals = (array) => {
    return stealsModel.insertMany(array);   //inserta un array de datos en la DB
  }

  updateSteals = (filter, array) => {
    return stealsModel.updateMany(filter, array);
  }

  deleteSteals = (array) => {
    return stealsModel.deleteMany(array);
  }
}