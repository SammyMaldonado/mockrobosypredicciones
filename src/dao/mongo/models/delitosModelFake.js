import mongoose from 'mongoose';

const delitosCollection = "delitosfaker";

// Definir el esquema del documento
const delitoSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    intersection: {
        type: String,
        required: true,
    },
    month: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    day: {
        type: String,
        required: true,
    },
    hour_range: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
    forecast: {
        type: Number,
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
});

// Crear el modelo a partir del esquema
const delitosModel = mongoose.model(delitosCollection, delitoSchema);

export default delitosModel;