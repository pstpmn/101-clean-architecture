module.exports = function connection(Sequelize, config) {
    const connectToMysql = () => {
        const sequelize = new Sequelize(
            config.mysql.database, 
            config.mysql.username, 
            config.mysql.password, 
            {
                host: config.mysql.host, 
                dialect: 'mysql', 
                define: {
                    timestamps: false
                }
            });

        const db = {};

        db.Sequelize = Sequelize;
        db.sequelize = sequelize;

        //ส่วนนี้เป็นการ import model ของ table ใน database เข้ามาเพื่อตั้งต่า relation นะครับ
        db.players = require("./models/players")(sequelize, Sequelize);
        db.teams = require("./models/teams")(sequelize, Sequelize);
        //ส่วนนี้เป็นการตั้งต่า relation นะครับ โดยเป็นการบอกว่าใน 1 team มีได้หลาย player ง่ายๆ ก็คือ relation แบบ 1:M 
        db.teams.hasMany(
            db.players,
            {
                foreignKey: { name: 'tid', field: 'tid' }, //name ตรงสำคัญพยายามตั่งให้เป็นชื่อเดียวกับ FK ใน table ที่นำไปใช้นะครับ
            }
        );
        //ส่วนนี้เป็นการตั้ง relation แบบกลับกันกับด้านบน จริงแล้วเราไม่ตั้งก็ได้นะครับแต่ผมแนะนำให้ตั้งเอาไว้ เพราะเวลาที่เราไม่ได้ใส่ 
        //line นี้จะทำให้เราสามารถใช้  team ในการหา player ได้อย่างเดียวและไม่สามารถใช้ player หา team ได้
        db.players.belongsTo(db.teams, { foreignKey: 'tid' });
        return db;
    }

    const sync = (connected) => {
        connected.sequelize.sync()
            .then(() => { console.log('sync database success ..') })
            .catch(err => console.log(err))
    }

    return {
        connectToMysql,
        sync,
    };
}