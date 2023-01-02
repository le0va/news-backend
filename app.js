const express = require('express');
const bodyParser = require('body-parser');

const newsRoutes = require('./routes/news-routes');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    next();
});

app.use('/', (req, res) => {
    res.json({message: 'works!'});
})

app.use('/api/news', newsRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: 'Could not find this route' });
});

app.listen(process.env.PORT || 5000);
