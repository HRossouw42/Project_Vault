// Bringing in
const restify = require('restify');
const mongoose = require('mongoose');
const config = require('./config');

const server = restify.createServer();

// Middleware & plugins
server.use(restify.plugins.bodyParser());

server.listen(config.PORT, () => {
	mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true });
});

// Database initialise
const db = mongoose.connection;

db.on('error', (err) => console.log(err));

db.once('open', () => {
	require('./routes/accounts')(server);
	console.log(`Server started on port ${config.PORT}`);
});
