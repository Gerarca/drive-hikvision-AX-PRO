const express = require('express');
const morgan = require('morgan');


// Intializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(morgan('dev'));

// Global variables

// Routes
app.use(require('./routes/'));

// Public
//app.use(express.static(path.join(__dirname, 'public')));

// Starting
app.listen(app.get('port'), () => {
  console.log('Server is in port', app.get('port'));
});
