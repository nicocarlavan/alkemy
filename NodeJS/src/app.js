const express = require('express');
const app = express();
const path = require('path');


const mainRouter = require('./routes/main');


const publicPath = path.resolve(__dirname, '../public');

app.use('/api/records', mainRouter);
app.use(express.static(publicPath));



app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000')
});