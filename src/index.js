const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes/file-upload.route');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('/views', express.static(process.cwd() + '/views'));
app.use('/public', express.static(process.cwd() + '/public'));

// API Endpoint
app.use('/', router);

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
