import mongoose from "mongoose";

const stealsCollection = "steals";

/* Schema de Mongo */
const stealSchema = new mongoose.Schema({
  comuna: {
    type: String,
    required: true
  },
  tipoIncidente: {
    type: String,
    required: true
  },
  fecha: {
    type: String,
    required: true
  },
  hora: {
    type: String,
    required: true
  },
  coordenadas: {
    latitud: {
      type: Number,
      required: true
    },
    longitud: {
      type: Number,
      required: true
    }
  }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });


const stealsModel = mongoose.model(stealsCollection, stealSchema);

export default stealsModel;