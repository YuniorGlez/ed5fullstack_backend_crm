
const express = require('express');
const app = express();

app.use(express.json());

const CustomersRouter = require('./api/customers/customers.router');
app.use('/customers', CustomersRouter )


app.listen(3000, (err) => {
    if (err) {
        console.error({err})
    } else {
        console.log('Servidor corriendo en el puerto 3000');
    }
})