const db = require('./models');

const controller = {};

controller.getData = (req, res, next) => {
  const string = 'SELECT * FROM todo;';
  db.query(string)
    .then((response) => {
      res.locals.info = response.rows;
      return next();
    })
    .catch((err) => {
      throw err;
    });
};

/*
`CREATE TABLE todo (
_id serial PRIMARY KEY,
item VARCHAR ( 50 ) NOT NULL,
description VARCHAR ( 1000 ),
date VARCHAR ( 100 ) NOT NULL,
status VARCHAR ( 50 ) NOT NULL
);`

`INSERT INTO todo(item, description, date, status)
VALUES ('finish CRUD prep', 'with codesmith friends', '09/18/20', 'incomplete');`
*/
module.exports = controller;
