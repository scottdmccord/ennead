// install dependencies

const express    = require('express');
const logger     = require('morgan');
const path       = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('The liths await on port', PORT));
