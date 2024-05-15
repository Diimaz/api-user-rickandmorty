const handleHttpError = (res, message='Not found', code=404) => {
    res.status(code)
    res.send({error: message})
}

module.exports = { handleHttpError }