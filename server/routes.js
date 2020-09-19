const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/', controller.getData, (req, res) => {
  res.status(200).json(res.locals.info);
});

module.exports = router;
