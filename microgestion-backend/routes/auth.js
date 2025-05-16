const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    // Validación básica
    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: 'Email y contraseña son requeridos'
        });
    }

    try {
        // Consulta segura con parámetros
        const [rows] = await db.query(
            'SELECT id, email FROM users WHERE email = ? AND password = ?',
            [email, password]
        );

        if (rows.length === 0) {
            return res.status(401).json({
                success: false,
                message: 'Credenciales incorrectas'
            });
        }

        // Respuesta exitosa
        res.json({
            success: true,
            user: {
                id: rows[0].id,
                email: rows[0].email,
                isAdmin: true
            }
        });

    } catch (err) {
        console.error('Error en /login:', err);
        res.status(500).json({
            success: false,
            message: 'Error en el servidor. Contacta al administrador.'
        });
    }
});

module.exports = router;
