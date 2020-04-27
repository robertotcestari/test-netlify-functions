const hello = (event, context, callback) => {
    callback(null, {
        statusCode: 200,
        body: "Eai capiauzada!!"
    })
}

module.exports = {
    handler: hello
}