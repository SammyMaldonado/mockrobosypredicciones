import delitosModel from '../models/delitosModelFake.js';

export default class DelitosManagerFake {
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