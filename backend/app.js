const express = require('express')
const dotenv = require('dotenv')
const Product = require('./models/operation')
const operationRoute = require('./routes/operations')
const cors = require('cors')
dotenv.config()

const app = express();

app.use(cors())
app.use(express.json());

app.use('/api', operationRoute)

app.use('/', (req, res) =>{
    res.json({message: "Endpoint not valid"});
}
)



// Create your .env file after pulling!!!
app.listen(process.env.PORT)