const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const linkRoute = require('./routes/linkRoute.js');

// Adicione o middleware para análise JSON aqui
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;

db.on('error', (error) => {
    console.log(error); 
});

db.once('open', () => {
    console.log('Database connected');    
});

app.use('/', linkRoute);

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});