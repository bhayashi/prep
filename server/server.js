const express = require('express');
const app = express();
const pool = require('./models');
const path = require('path');

// port number
const PORT = 2222;
const cors = require('cors');
//const { urlencoded } = require('body-parser');

// prevent cors errors
app.use(cors());
// require all interactions to use/parse JSON
app.use(express.json());
// handle form data correctly
app.use(express.urlencoded({ extended: true }));

const router = require('./routes.js');

app.use(express.static('client'));
//app.get('/', (req, res) =>
//   res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
// );
// app.post(//when we post, take in endpoint, middleware, cb)
app.use('/api', router);
// app.put(//when we put...)
// app.delete(//when we delete)

app.use('/', (err, req, res, next) => {
  console.log(err);
});

app.listen(PORT, () => {
  console.log('yall listening on 2222');
});

module.exports = app;
