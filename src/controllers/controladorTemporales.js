const modeloTemporales = require('../models/modeloTemporales');

const obtenerUsuarios = function (req, res) {
  modeloTemporales
    .find()
    .then((users) => res.json(users))
    .catch((error) => {
      console.log(error);
      res.send(error.message);
    });
};

const eleminiarUsuarios = function (req, res) {
  modeloTemporales
    .findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: 'usuario eliminado' }))
    .catch((error) => {
      res.send(error.message);
    });
};

const actualizarUsuarios = function (req, res) {
  TemporaryUserModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json({ message: 'usuario actualizado' }))
    .catch((error) => {
      res.send(error.message);
    });
};

const agregarUsuarios = function (req, res) {
  const nuevoModelo = new modeloTemporales(req.body);
  nuevoModelo
    .save()
    .then(() => res.json({ message: 'usuario agregado' }))
    .catch((error) => {
      res.send(error.message);
    });
};

module.exports = {
  obtenerUsuarios,
  agregarUsuarios,
  eleminiarUsuarios,
  actualizarUsuarios
};
