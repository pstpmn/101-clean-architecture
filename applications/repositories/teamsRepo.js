module.exports = function teamsRepository(repository) {
    const findAll = () => repository.findAll();
    return {
        findAll,
    };
}