const operationRoute = require("./routes/operations");
const authMiddleware = require('./controllers/authMiddleware')
const { Sequelize } = require('sequelize');
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require('path');
const bodyParser = require("body-parser");
dotenv.config();


const PORT = process.env.PORT;
const CONNECTION_HOST = process.env.CONNECTION_HOST;
const CONNECTION_USER = process.env.CONNECTION_USER;
const CONNECTION_PWD = process.env.CONNECTION_PWD;
const CONNECTION_DB = process.env.CONNECTION_DB;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, './dist')));

app.use("/api",authMiddleware, operationRoute);

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

// Create your .env file after pulling!!!

app.listen(PORT, async () => {
  try {
    const sequelize = new Sequelize(`postgres://${CONNECTION_USER}:${CONNECTION_PWD}@${CONNECTION_HOST}:5432/${CONNECTION_DB}`);
    await sequelize.authenticate();
    console.log('success');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
