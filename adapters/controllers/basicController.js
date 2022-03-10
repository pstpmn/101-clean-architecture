const basic = require('../../applications/use_cases/basic/basic');

module.exports = function basicController(
    mysqlClient,
    playersRepository,
    playersRepositoryImpl,
) {
    const dbRepository = playersRepository(playersRepositoryImpl(mysqlClient));

    const loginUser = (req, res, next) => {
        basic(dbRepository)
            .then(async (data) => {
                res.send({data})
            })
            .catch(err => {
                console.log(err);
                res.send({ msg: 'error' })
            })
    };
    return {
        loginUser
    };
}
