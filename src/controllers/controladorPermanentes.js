const modeloPermanentes = require('../models/modeloPermanentes');

const obtenerUsuarios = function (req, res) {
  modeloPermanentes
    .find()
    .then((users) => res.json(users))
    .catch((error) => {
      console.log(error);
      res.send(error.message);
    });
};

const eleminiarUsuarios = function (req, res) {
  modeloPermanentes
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
  const nuevoModelo = new modeloPermanentes(req.body);
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
