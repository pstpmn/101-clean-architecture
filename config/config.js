module.exports = {
    port: process.env.PORT || 3000,
    ip: process.env.HOST || '127.0.0.1',
    redis: {
        uri: process.env.REDIS_URL || 'redis://localhost:6379'
    },
    mysql: {
        host: 'db',
        database: 'basic',
        username: 'root',
        password: 'password',
        port: 3306
    },
    jwtSecret: process.env.JWT_SECRET || 'jkl!±@£!@ghj1237'
}
