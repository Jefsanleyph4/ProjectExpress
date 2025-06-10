const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');

dotenv.config();
const app = express();

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connecté'))
  .catch(err => console.error('Erreur MongoDB:', err));

app.use('/api', authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Serveur en marche : http://localhost:${process.env.PORT}`);
});
