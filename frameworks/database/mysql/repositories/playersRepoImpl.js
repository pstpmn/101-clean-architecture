module.exports = (mysqlClient) => {
    const add = () => {
        info = mysqlClient.players.create({
            name: data.name,
            age: data.age,
            position: data.position,
            tid: data.tid,
        });
    }

    const findAll = async () => {
        return await mysqlClient.players.findAll()
    }


    return {
        add,
        findAll
    }
}