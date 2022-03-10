module.exports = function basic(playersRepository) {
    try{
        return playersRepository.findAll(1);
    }catch(err){
        throw err;
    }
}