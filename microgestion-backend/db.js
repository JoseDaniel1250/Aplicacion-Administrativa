const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // Cambia por tu usuario de MySQL
    password: '5TAjB$2M', // Cambia por tu contraseña
    database: 'microgestion_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Verificación de conexión al iniciar
pool.getConnection()
    .then(connection => {
        console.log('Conectado a MySQL');
        connection.release();
    })
    .catch(err => {
        console.error('Error de conexión a MySQL:', err.message);
    });

module.exports = pool;