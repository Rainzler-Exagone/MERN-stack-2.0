// import { Mongoose } from 'mongoose';
// import express from 'express';


require("dotenv").config();
const mongoose = require('mongoose');
const express = require("express");
const cors = require("cors");
const TaskRoute = require("./Routes/TaskRoute.js");

mongoose.connect(process.env.mongodb)
    .then((res) => {
        console.log("connected");
    })
    .catch((err) => {
        console.log(err);
    })

const app = express();

app.use(cors());

app.use(express.json());

app.use("/Task", TaskRoute);

app.get("/world", (req, res) => {
    res.send("Hello");
})

app.listen(process.env.port, () => {
    console.log("server is running");
})
