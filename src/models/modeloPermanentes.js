const { Schema, model } = require('mongoose');
const schema = new Schema(
  {
    fecha: {
      type: String,
      required: true,
    },
    telefonoCasa: String,
    emailInstitucion: String,
    emailPersonal: {
      type: String,
      required: true,
    },
    telefonoPersonal: {
      type: String,
      required: true,
    },
    nombre: {
      type: String,
      require: true,
    },
    segundoNombre: String,
    apellido: {
      type: String,
      require: true,
    },
    seundoApellido: String,
    dpi: {
      type: String,
      require: true,
      unique: true,
    },
    nit: String,
    puestoFuncional: String,
    puestoNominal: {
      type: String,
      require: true,
    },
    area: {
      type: String,
      require: true,
    },
  },
);

module.exports = model('modeloPermanentes', schema);
