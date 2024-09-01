const express = require('express')
const router = require('./routes/taskRoutes')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config();

app.use(express.json())

app.use('/api', router)

dbUser = process.env.DB_USER
dbPassword = process.env.DB_PASSWORD
port = process.env.PORT

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.frchc.mongodb.net/`)

app.listen(port || 3333, () => {
    console.log('Servidor iniciado')
})