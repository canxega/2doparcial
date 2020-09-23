const { Schema, model } = require('mongoose');
const schema = new Schema(
  {
    fecha: { type: String, required: true },
    nombre: { type: String, required: true },
    telefono: { type: String, required: true },
    lugar: { type: String, required: true },
    puesto: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = model('modeloTemporales', schema);;
