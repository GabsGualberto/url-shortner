const express = require('express');
const app = express();

const userRoutes = require('./src/routes/userRoutes');


app.use(express.json());

app.use('/', userRoutes);


try{
    app.listen(3000);
    console.log(`server running in http://localhost:3000`);
}catch (error){
    console.log(error);
}

