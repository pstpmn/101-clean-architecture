module.exports = function testController(

) {

    const loginUser = (req, res, next) => {
        console.log(1);
        res.json({ name: 'kang' })
    };

    return {
        loginUser
    };
}
