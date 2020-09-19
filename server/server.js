const express = require('express');

const app = express();
const { urlencoded } = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const pool = require('./models');
const router = require('./routes.js');

const PORT = 3000;

app.use(cookieParser());
app.use(cors());
// require all interactions to use/parse JSON
app.use(express.json());
// handle form data correctly
app.use(express.urlencoded({ extended: true }));
// serves html and style files
app.use(express.static('client'));

app.use('/api', router);
// app.post();
// app.get();
// app.put();
// app.delete();

app.use((req, res) => res.sendStatus(404));

app.use((err, req, res) => {
  const defaultErr = {
    log: 'Express error handler caught an unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errObj = { ...defaultErr, err };
  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
