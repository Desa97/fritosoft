const express = require('express');
const CRutas = require('../../controlador/cliente/ClienteControlador');
const router = express.Router();

router.post('/crear', CRutas.crearCliente);
module.exports = router; 