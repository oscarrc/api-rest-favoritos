'use strict'

var app = require('./app');
var port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`API REST FAVORITOS funcionando en http://localhost:${port}`);
});
