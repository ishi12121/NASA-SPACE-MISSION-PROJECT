const path = require('path');
const express = require('express');
const cors = require('cors');

const planetsRouter = require('./routes/planets/planets.router');

const app = express();

app.use(cors({
    origin:'http://localhost:3000',
}));


app.use(express.json());

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));
app.use(planetsRouter);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..\\public\\index.html'));
});


module.exports = app;


 