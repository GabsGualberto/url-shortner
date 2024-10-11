const express = require('express');
const app = express();

const userRoutes = require('./src/routes/userRoutes');
const shortnerRoutes = require('./src/routes/shortUrlRoutes');

app.use(express.json());

app.use('/', userRoutes);
app.use('/', shortnerRoutes);

try{
    app.listen(3000);
    console.log(`server running in http://localhost:3000`);
}catch (error){
    console.log(error);
}

