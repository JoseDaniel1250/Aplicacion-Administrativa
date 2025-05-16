const express = require('express');
const router = express.Router();
const { crearProducto, obtenerProductos } = require('../controllers/productController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');

// Ruta para crear un producto (solo admin)
router.post('/productos', auth, admin, crearProducto);

// Ruta para obtener productos (todos los usuarios logueados)
router.get('/productos', auth, obtenerProductos);

module.exports = router;
