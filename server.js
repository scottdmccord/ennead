// install dependencies

const express    = require('express');
const logger     = require('morgan');
const path       = require('path');
const bodyParser = require('body-parser');

const indexRoute = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000;

// set the view engine as ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRoute);


app.listen(PORT, () => console.log('The liths await on port', PORT));
