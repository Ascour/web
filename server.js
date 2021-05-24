const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require("./routes/api/items");
//Initialisation d'Express
const app = express();

//Bodyparser middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;
//Connection to db
mongoose.connect(db).then(() => console.log("Mongoose connected ... ")).catch(err => console.log(err));

//router
app.use('/api/items', items);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started at port ${port}`));