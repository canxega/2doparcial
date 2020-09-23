const { Router } = require('express');

const {
  obtenerUsuarios,
  agregarUsuarios,
  eleminiarUsuarios,
  actualizarUsuarios,
} = require('../controllers/controladorPermanentes');

const router = Router();

router.route('/').get(obtenerUsuarios).post(agregarUsuarios);

router.route('/:id').put(actualizarUsuarios).delete(eleminiarUsuarios);

module.exports = router;
