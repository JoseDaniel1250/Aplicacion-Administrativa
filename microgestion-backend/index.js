const express = require('express');
const cors = require('cors');
const session = require('express-session');

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/productRoutes'); // Este sí existe

const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());

app.use(session({
    secret: 'clave-secreta',
    resave: false,
    saveUninitialized: false
}));

// Rutas
app.use(authRoutes);
app.use(productRoutes);

// Eliminar estas dos si las tienes:
/// const productosRoutes = require('./routes/productos');
/// app.use(productosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
