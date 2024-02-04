const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const emailRoutes = require('./routes/emailRoutes');
const cors = require('cors');

const app = express();

require('dotenv').config();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
    origin: "*"
}));

const PORT = process.env.PORT;

app.use(emailRoutes);

try {
    mongoose.connect(process.env.DB_URL).then((result) => {
        console.log("DB CONNECTED");
        app.listen(PORT, () => {
            console.log("Server started in PORT: "+PORT);
        });
    }).catch((err) => {
        console.log("ERROR");
        console.log(err);
    }); 
} catch (err) {
    console.log(err);
}