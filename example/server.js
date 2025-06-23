const express = require('express');
const { gaslight } = require('../index');

const app = express();
app.use(gaslight());

app.get('/', (req, res) => {
	res.status(200).send('This is success'); // Actually sends 500
});

app.get('/fail', (req, res) => {
	res.status(500).send('This is failure'); // Actually sends 200
});

app.listen(3000, () => {
	console.log('Listening on http://localhost:3000');
});
