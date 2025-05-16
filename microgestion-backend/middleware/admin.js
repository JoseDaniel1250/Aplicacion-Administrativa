// middleware/admin.js
module.exports = (req, res, next) => {
    if (!req.session || !req.session.user || !req.session.user.isAdmin) {
        return res.status(403).json({ success: false, message: 'Acceso denegado. Solo administradores.' });
    }

    next(); // usuario es administrador, continuar
};
