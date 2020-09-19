const { Pool } = require('pg');

const PG_URI = 'postgres://iqzgopty:YKIPob3fxF_3yPa2ioTXf35wl83pUV08@lallah.db.elephantsql.com:5432/iqzgopty';

const pool = new Pool({ connectionString: PG_URI });

module.exports = {
  query: (text, params, cb) => {
    console.log('*SQL QUERY*', text);
    return pool.query(text, params, cb);
  },
};
