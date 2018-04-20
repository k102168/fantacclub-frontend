const express = require('express');
let app = express();
const passport = require('passport');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const {mlab_URL} = require('./config')

// database connection
mongoose.Promise = global.Promise;
mongoose.connect(mlab_URL);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mlab connected: ')
});

app.use(morgan('combine'));
app.use(bodyParser.json());

app.use('/api', require('./routes'));
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("Server is running on port: ", port)
});

module.exports = app;