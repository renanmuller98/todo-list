const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title: String,
    done: Boolean,
    date: String
})

const Tasks = mongoose.model('Tasks', taskSchema)

module.exports = Tasks