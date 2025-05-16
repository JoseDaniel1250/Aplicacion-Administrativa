const connection = require('../db');

exports.crearProducto = (req, res) => {
    const { nombre, imagen, cantidad, precio_compra, precio_venta } = req.body;

    if (!nombre || !cantidad || !precio_compra || !precio_venta) {
        return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }

    const sql = `INSERT INTO productos (nombre, imagen, cantidad, precio_compra, precio_venta)
                 VALUES (?, ?, ?, ?, ?)`;

    connection.query(sql, [nombre, imagen || '', cantidad, precio_compra, precio_venta], (err, result) => {
        if (err) return res.status(500).json({ error: 'Error al insertar producto' });

        res.status(201).json({ success: true, message: 'Producto creado correctamente' });
    });
};

exports.obtenerProductos = (req, res) => {
    const sql = `SELECT id, nombre, imagen, cantidad, precio_venta${req.user.isAdmin ? ', precio_compra' : ''} FROM productos`;

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'Error al obtener productos' });

        res.json({ success: true, productos: results });
    });
};
