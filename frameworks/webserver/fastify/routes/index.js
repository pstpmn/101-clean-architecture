const basicController = require('../../../../adapters/controllers/testController');
const playersDbRepoMysql = require('../../../database/mysql/repositories/playersRepoImpl')
const playersRepo = require('../../../../applications/repositories/playersRepo');

module.exports = function routes(app, mysqlClient) {
    app.register((instance, opts, next) => {
        const controller = basicController();
        instance.get('/', controller.loginUser)
        next()
    }, { prefix: 'user' })
    // app.get('/', (request, reply) => {
    //     reply.send({ hello: 'world' })
    // })
    // app.register(basicRoute, { prefix: '/v1' })
}