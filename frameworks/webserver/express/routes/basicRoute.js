const basicController = require('../../../../adapters/controllers/basicController');
const playersDbRepoMysql = require('../../../database/mysql/repositories/playersRepoImpl')
const playersRepo = require('../../../../applications/repositories/playersRepo');

module.exports = function basicRoute(express, mysqlClient) {
    const router = express.Router();
    const controller = basicController(
        mysqlClient,
        playersRepo,
        playersDbRepoMysql
    );
    router.route('/').get(controller.loginUser);
    return router;
}
