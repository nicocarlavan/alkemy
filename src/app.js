const express = require('express');
const app = express();

const mainRouter = require('./routes/main');


app.use('/api/records', mainRouter);


app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000')
});