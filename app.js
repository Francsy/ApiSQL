const express = require('express')
const cowsay = require('cowsay')
const morgan = require('morgan')

require('dotenv').config()

//Middleware
const error404 = require('./middlewares/error404')

// Módulos de Rutas
const entriesApiRoutes = require('./routes/entriesApiRoutes')
const authorApiRoutes = require('./routes/authorApiRoutes')

const app = express()
const port = 3000

app.use(morgan('dev'))

// Middlewares
app.use(express.json()); // Habilitar tipo de dato a recibir
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.status(200).json({ msg: "Hello World" });
  })

//Rutas 
app.use('/api/entries',entriesApiRoutes); // Rutas API entries
app.use('/api/author', authorApiRoutes);
app.use(error404); // Middleware Para ruta no encontrada (404)

app.listen(port, () => {
    console.log(
        cowsay.say({
            text: `Lo estoy dando todo en en http://localhost:${port}!!!!`,
            e: "oO",
            T: "U "
        }))
})