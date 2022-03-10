module.exports = function serverConfig(app, config) {
    const startServer = () => {
        app.listen(config.port, () => {
            console.log(`Listening at http://localhost:${config.port}`);
        });
    }

    return {
        startServer
    }
}