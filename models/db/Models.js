const { Sequelize } = require("sequelize");
const initModels = require("./init-models");
const dotenv = require("dotenv");
dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL;

const getModels = () => {
  const sequelize = new Sequelize(DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
  });
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
    });
  // const sequelize = new Sequelize(`postgres://${CONNECTION_USER}:${CONNECTION_PWD}@${CONNECTION_HOST}:5432/${CONNECTION_DB}`);
  const models = initModels(sequelize);
  return models;
};

module.exports = getModels();
