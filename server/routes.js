const express = require('express');
const controller = require('./controller');
const munch = require('cookie-parser');

const router = express.Router();
router.use(munch());

router.get('/', controller.getData, (req, res) => {
  console.log(req.cookies);
  res.status(200).cookie('raisin', 7).json(res.locals.info);
});

module.exports = router;
