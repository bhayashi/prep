const { Pool } = require('pg');
const PG_URL =
  'postgres://bnbxeluw:QXpcLgTGsyQio28Wd3w86LQ75B6KQ8Ub@lallah.db.elephantsql.com:5432/bnbxeluw';

const pool = new Pool({ connectionString: PG_URL });

module.exports = {
  query: function (text, params, cb) {
    return pool.query(text, params, cb);
  },
};

//CREATE TABLE todo (_id SERIAL PRIMARY KEY,item VARCHAR(200) NOT NULL,description VARCHAR(1000),date VARCHAR(100) NOT NULL, status VARCHAR(50));

//INSERT INTO todo (item, description, date, status) VALUES ('finish CRUD practice', 'with codesmith friends', 'Friday night', 'incomplete'), ('eat food', 'for dinner', 'Saturday', 'incomplete'), ('take assessment', 'with codesmith friends', 'Tomorrow', 'incomplete'), ('penguins', 'because', 'Wednesday', 'complete');

//SELECT * from todo
