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
// const CONNECTION_HOST = process.env.CONNECTION_HOST;
// const CONNECTION_USER = process.env.CONNECTION_USER;
// const CONNECTION_PWD = process.env.CONNECTION_PWD;
// const CONNECTION_DB = process.env.CONNECTION_DB;
const DATABASE_URL = process.env.DATABASE_URL;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, './dist')));

app.use("/api", operationRoute);

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

// Create your .env file after pulling!!!

app.listen(PORT, async () => {
    const sequelize = new Sequelize(DATABASE_URL);
    await sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
});
