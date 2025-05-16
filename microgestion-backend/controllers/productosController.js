const db = require('../db');

// Crear un producto
exports.crearProducto = (req, res) => {
    const { nombre, imagen, cantidad, precio_compra, precio_venta } = req.body;

    if (!nombre || !cantidad || !precio_compra || !precio_venta) {
        return res.status(400).json({ success: false, message: 'Faltan campos obligatorios' });
    }

    const query = `
        INSERT INTO productos (nombre, imagen, cantidad, precio_compra, precio_venta)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(query, [nombre, imagen, cantidad, precio_compra, precio_venta], (err, result) => {
        if (err) return res.status(500).json({ success: false, message: 'Error al agregar producto' });

        res.json({ success: true, message: 'Producto agregado correctamente', productoId: result.insertId });
    });
};

// Obtener productos
exports.obtenerProductos = (req, res) => {
    const query = 'SELECT * FROM productos';

    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ success: false, message: 'Error al obtener productos' });

        res.json({ success: true, productos: results });
    });
};
