const Tasks = require('../models/taskModel')

const getTasks = async (req, res) => {
    try {
        const tasks = await Tasks.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const addTasks = async (req, res) => {
    const task = new Tasks({
        title: req.body.title,
        done: false,
        date: new Date().toUTCString()
    })

    try {
        await task.save()
        res.status(201).json(task)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const deleteTask = async (req, res) => {
    const taskId = req.params.id

    try {
        await Tasks.deleteOne({ _id: taskId })
        res.status(201).send('Task deleted')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const updateTask = async (req, res) => {
    const taskId = req.params.id
    const update = req.body

    try {
        await Tasks.updateOne({ _id: taskId }, update)
        res.status(201).send('Task updated')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getTasks,
    addTasks,
    deleteTask,
    updateTask,
}