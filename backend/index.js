const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Model import
const { connection } = require('./models/connection');

// app initialization
const app = express();

require('dotenv').config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: `http://localhost:3000` }));

// Routers
const acronymRouter = require('./routes/acronym');
const randomRouter = require('./routes/random');

// DB Connection
connection();

app.use('/acronym', acronymRouter);
app.use('/random', randomRouter);

const port = process.env.PORT || 5000;

app.listen(5000, () => console.log(`App running on port ${5000}`));
