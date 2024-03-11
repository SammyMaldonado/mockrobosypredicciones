import delitosModel from '../models/delitosModelReal.js';

export default class StealManager {
    getDelitos = (params) => {
        return delitosModel.find(params).lean();
    }

    createDelitos = (array) => {
        return delitosModel.insertMany(array);   //inserta un array de datos en la DB
    }

    updateDelitos = (filter, array) => {
        return delitosModel.updateMany(filter, array);
    }

    deleteDelitos = (array) => {
        return delitosModel.deleteMany(array);
    }
}