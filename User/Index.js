const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { connect } = require('nats');

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://swarangitarkar:<password>@cluster0.jusbown.mongodb.net/'{
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const nats = connect({
    servers: ['nats://localhost:4222'],
    name: 'node-app'
});