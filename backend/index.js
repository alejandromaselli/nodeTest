const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { connection } = require("./models/connection");

require("dotenv").config();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routers
const acronymRouter = require("./routes/acronym");
const randomRouter = require("./routes/random");

// DB Connection
connection();

app.use("/acronym", acronymRouter);
app.use('/random', randomRouter)

app.listen(5000, () => console.log(`App running on port ${5000}`));
