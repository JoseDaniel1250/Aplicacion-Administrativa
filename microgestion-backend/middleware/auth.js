// middleware/auth.js
module.exports = (req, res, next) => {
    if (!req.session || !req.session.user) {
        return res.status(401).json({ success: false, message: 'No autorizado. Inicia sesión.' });
    }

    next(); // usuario autenticado, continuar
};
