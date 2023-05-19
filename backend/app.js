const express = require("express");
const dotenv = require("dotenv");
const Product = require("./models/operation");
const operationRoute = require("./routes/operations");
const cors = require("cors");
const path = require('path');
const bodyParser = require("body-parser");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, './dist')));

app.use("/api", operationRoute);

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

// Create your .env file after pulling!!!
app.listen(process.env.PORT);
