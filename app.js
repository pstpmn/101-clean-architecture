const config = require('./config/config');
const serverConfig = require('./frameworks/webserver/express/server');
const routes = require('./frameworks/webserver/express/routes');
const mysql = require('./frameworks/database/mysql/connection');

const { Sequelize } = require('sequelize');

// import framework
const express = require('express');

// init mysql db
const mysqlDb = mysql(Sequelize, config);
const mysqlClient = mysqlDb.connectToMysql();
mysqlDb.sync(mysqlClient);

// // express init
const app = express();
serverConfig(app, config).startServer();
routes(app, express, mysqlClient);




// Fastify
// const config = require('./config/config');
// const serverConfig = require('./frameworks/webserver/fastify/server');
// const routes = require('./frameworks/webserver/fastify/routes');
// const mysql = require('./frameworks/database/mysql/connection');
// const app = require('fastify')({ logger: true })
// const { Sequelize } = require('sequelize');

// // init mysql db
// const mysqlDb = mysql(Sequelize, config);
// const mysqlClient = mysqlDb.connectToMysql();
// mysqlDb.sync(mysqlClient);

// // // express init
// serverConfig(app, config).startServer();
// routes(app , mysqlClient);