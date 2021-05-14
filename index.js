
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(cors())

// console.log('Url de mongo => ' + process.env.MONGO_URL)
mongoose.connect( process.env.MONGO_URL  );

const CustomersRouter = require('./api/customers/customers.router');
app.use('/customers', CustomersRouter )


app.listen(3000, (err) => {
    if (err) {
        console.error({err})
    } else {
        console.log('Servidor corriendo en el puerto 3000');
    }
})