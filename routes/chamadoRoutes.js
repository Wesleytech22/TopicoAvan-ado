const express = require('express');
const router = express.Router();
const chamado = require('../controllers/chamadosController.js')

router.post('/', chamado.criar);
router.get('/', chamado.listar);


module.exports = router;
