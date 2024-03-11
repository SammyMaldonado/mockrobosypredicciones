import mongoose from 'mongoose';

const delitosCollection = "delitos";

// Definir el esquema del documento
const delitoSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    properties: {
        name: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true
        },
        hour: {
            type: Date,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    }
});

// Crear el modelo a partir del esquema
const delitosModel = mongoose.model(delitosCollection, delitoSchema);

export default delitosModel;