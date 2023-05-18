const express = require('express')
const dotenv = require('dotenv')
const Product = require('./models/operation')
const operationRoute = require('./routes/operations')
dotenv.config()

const app = express();


app.use(express.json());

app.use('/api', operationRoute)

app.use('/', (req, res) =>{
    res.json({message: "Endpoint not valid"});
}
)




app.listen(process.env.PORT)