const { Pool } = require('pg');
const PG_URL =
  'postgres://bnbxeluw:QXpcLgTGsyQio28Wd3w86LQ75B6KQ8Ub@lallah.db.elephantsql.com:5432/bnbxeluw';

const pool = new Pool({ connectString: PG_URL });

module.exports = {
  query: function (text, params, cb) {
    return pool.query(text, params, cb);
  },
};
