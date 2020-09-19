const db = require('./models');

const controller = {};

controller.getData = (req, res, next) => {
  const string = 'SELECT * FROM todo;';
  db.query(string)
    .then((response) => {
      res.locals.info = response.rows;
      return next();
    })
    .catch((err) => next({
      log: 'Query error in controller.getData',
      status: 400,
      message: { err },
    }));
};

controller.newPost = (req, res, next) => {
  const {
    item, description, date, status,
  } = req.body;
  const string = `
  INSERT INTO todo(item, description, date, status)
  VALUES ($1, $2, $3, $4)
  returning *;
  `;
  const values = [item, description, date, status];
  db.query(string, values)
    .then((results) => {
      res.locals.results = results.rows;
      return next();
    })
    .catch((err) => next({
      log: 'Query error in controller.postRow',
      status: 400,
      message: { err },
    }));
};

controller.updatePost = (req, res, next) => {
  const {
    item, description, date, status, id,
  } = req.body;
  const string = `
  UPDATE todo
  SET item = $2,
  description = $3,
  date = $4,
  status = $5
  WHERE _id = $1
  returning *
  ;`;
  const values = [id, item, description, date, status];
  db.query(string, values)
    .then((results) => {
      res.locals.results = results.rows;
      return next();
    })
    .catch((err) => next({
      log: 'Query error in controller.updatePost',
      status: 400,
      message: { err },
    }));
};

controller.deletePost = (req, res, next) => {
  const { id } = req.body;
  const string = `
  DELETE FROM todo
  WHERE _id = $1
  returning *;
  `;
  const values = [id];
  db.query(string, values)
    .then((results) => {
      res.locals.results = results.rows;
      return next();
    })
    .catch((err) => next({
      log: 'Query error in controller.deletePost',
      status: 400,
      message: { err },
    }));
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
