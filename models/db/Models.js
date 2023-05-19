const { Sequelize } = require('sequelize')
const initModels = require('./init-models')
const dotenv = require("dotenv");
dotenv.config();

const CONNECTION_HOST = process.env.CONNECTION_HOST;
const CONNECTION_USER = process.env.CONNECTION_USER;
const CONNECTION_PWD = process.env.CONNECTION_PWD;
const CONNECTION_DB = process.env.CONNECTION_DB;

const getModels = () => {
  const sequelize = new Sequelize(`postgres://${CONNECTION_USER}:${CONNECTION_PWD}@${CONNECTION_HOST}:5432/${CONNECTION_DB}`);
  const models = initModels(sequelize);
  return models;
}

module.exports = getModels();
