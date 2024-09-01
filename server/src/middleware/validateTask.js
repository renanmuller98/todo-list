const validateTask = (req, res, next) => {
    if (req.body.title === "") {
        return res.status(400).send({ msg: "digite uma tarefa" })
    }

    next()
}

module.exports = validateTask