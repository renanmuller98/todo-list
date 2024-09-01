const express = require('express')
const router = require('./routes/taskRoutes')
const app = express()
const mongoose = require('mongoose')

app.use(express.json())

app.use('/api', router)

mongoose.connect(`mongodb+srv://renanmullercarmo:teste123@cluster0.frchc.mongodb.net/`)

app.listen(3333, () => {
    console.log('Servidor iniciado')
})