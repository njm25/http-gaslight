# http-gaslight

Express middleware that inverts HTTP status codes.

Install:

```bash
npm install http-gaslight
```

Example usage:

```js
const express = require('express');
const { gaslight } = require('http-gaslight');

const app = express();
app.use(gaslight());

app.get('/', (req, res) => {
	res.status(200).send('Everything is fine'); // Actually sends 500
});

app.get('/fail', (req, res) => {
	res.status(500).send('Something broke'); // Actually sends 200
});

app.listen(3000, () => {
	console.log('Server gaslighting on http://localhost:3000');
});
