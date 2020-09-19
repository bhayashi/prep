const express = require('express');
const controller = require('./controller');
const munch = require('cookie-parser');

const router = express.Router();
router.use(munch());

// READ method (query all items in database)
router.get('/', controller.getData, (req, res) => {
  console.log(req.cookies);
  res.status(200).cookie('raisin', 7).json(res.locals.info);
});

// CREATE one post method
router.post('/', controller.postData, (req, res) => {
  res.status(200).json(res.locals.post);
});

// UPDATE one post method
router.put('/', controller.putData, (req, res) => {
  res.status(200).json(res.locals.put);
});

//DELETE one post method
router.delete('/', controller.deleteData, (req, res) => {
  res.status(200).json(res.locals.deleted);
});
module.exports = router;
