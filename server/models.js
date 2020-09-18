const { Pool } = require('pg');

const PG_URL = 'postgres://iqzgopty:YKIPob3fxF_3yPa2ioTXf35wl83pUV08@lallah.db.elephantsql.com:5432/iqzgopty';

const pool = new Pool({ connectString: PG_URL });

module.exports = {
  query: (text, params, cb) => pool.query(text, params, cb),
};
