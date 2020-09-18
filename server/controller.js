const db = require('./models');

const controller = {};

controller.getData = (req, res, next) => {
  const text = `SELECT * FROM todo;`;
  db.query(text)
    .then((data) => {
      res.locals.info = data;
      return next();
    })
    .catch((err) => {
      console.log(err);
      return next(err);
    });
};

module.exports = controller;
//todo primary key; todo item; date; status;
