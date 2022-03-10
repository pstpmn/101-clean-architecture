const basicRoute = require('./basicRoute');
module.exports = function routes(app, express, mysqlClient) {
  app.use('/v1/basic', basicRoute(express, mysqlClient));
}