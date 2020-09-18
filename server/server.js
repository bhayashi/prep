const express = require('express');

const app = express();
const { urlencoded } = require('express');
const cors = require('cors');
const path = require('path');
const pool = require('./models');

const PORT = 3000;

app.use(cors());
// require all interactions to use/parse JSON
app.use(express.json());
// handle form data correctly
app.use(express.urlencoded({ extended: true }));

app.use(express.static('client'));
// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'))
// });

// app.post();
// app.get();
// app.put();
// app.delete();

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
