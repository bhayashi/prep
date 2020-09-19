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

controller.postData = (req, res, next) => {
  // we want information like item, info, date, and status from req.body, set those datapoints to variables.
  console.log(`req.body: ${req.body}`);
  const { item, description, date, status } = req.body;
  const values = [item, description, date, status];
  //query the databse, passing in the items that we received
  db.query(
    `INSERT INTO todo (item, description, date, status) VALUES ($1, $2, $3, $4) returning *`,
    values,
    (err, post) => {
      if (err) {
        return next(err);
      }
      // send response back to client saying we got ur info and here it is.
      res.locals.post = post.rows[0];
      return next();
    }
  );
};

controller.putData = (req, res, next) => {
  //take request that comes in
  const { _id, item, description, date, status } = req.body;
  // if !hasOwnProperty, don't update
  //send insert request to db based on information that comes in (some of which will be null, if null don't update? right?)
  const values = [item, description, date, status, _id];
  db.query(
    `UPDATE todo SET item = $1, description = $2, date = $3, status = $4 WHERE _id = $5 returning *;`,
    values,
    (err, result) => {
      if (err) {
        return next(err);
      }
      //return back the updated db
      else {
        res.locals.put = result.rows[0];
        return next();
      }
    }
  );
};

controller.deleteData = (req, res, next) => {
  const { _id } = req.body;
  const values = [_id];
  db.query(
    `DELETE from todo WHERE _id = $1 RETURNING _id;`,
    values,
    (err, response) => {
      if (err) {
        return next(err);
      } else {
        res.locals.deleted = response.rows[0];
        return next();
      }
    }
  );
};

module.exports = controller;
//todo primary key; todo item; date; status;
