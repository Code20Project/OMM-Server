/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
// 'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development'; // 환경변수 NODE_ENV를 설정 안 해줄 경우 test 객체 연결 정보로 DB 연결 설정
const config = require(`${__dirname}/../config/config.js`)[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter((file) => ((file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
