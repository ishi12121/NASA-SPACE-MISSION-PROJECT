const path = require('path');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const planetsRouter = require('./routes/planets/planets.router');
const launchesRouter = require('./routes/launches/launches.router');

const app = express();

app.use(cors({
    origin:'http://localhost:3000',
}));
app.use(morgan('combined'));

app.use(express.json());

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));
app.use(planetsRouter);
app.use(launchesRouter);

app.get('/*', (req, res) => {   // adding *  here can be found in the create react app docs deployment section 
    res.sendFile(path.join(__dirname, '..\\public\\index.html'));
});


module.exports = app;


 