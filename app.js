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
  console.log("Server started")
});
