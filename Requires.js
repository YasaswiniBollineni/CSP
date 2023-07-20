const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const yashu = require('./Routes/yashu');
const varsha = require('./Routes/varsha');
const sri = require('./Routes/sri');
const signin = require('./Routes/signin');
const signup=require('./Routes/signup');
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/yashu', yashu);
app.use('/varsha',varsha);;
app.use('/sri',sri);
app.use('/signin',signin);
app.use('/signup',signup);


module.exports = app;