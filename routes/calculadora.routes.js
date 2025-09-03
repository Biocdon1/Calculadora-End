const express = require('express');
const router = express.Router();
const { calcular, ordenar } = require('../controllers/calculadoraControllers.js');

router.post('/calcular', calcular);
router.post('/ordenar', ordenar);

module.exports = router;