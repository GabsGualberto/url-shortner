const express = require('express');
const sequelize = require('./config/database');
const app = express();

const userRoutes = require('./routes/userRoutes');
const shortnerRoutes = require('./routes/shortUrlRoutes');



app.use(express.json());

app.use('/', userRoutes);
app.use('/', shortnerRoutes);

sequelize.sync().then(() => {
    console.log('Sync database');
  }).catch(err => console.error('Sync database error: ', err));
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`server running in: ${PORT}`);
  });

