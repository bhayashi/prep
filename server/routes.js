const express = require('express');

const Router = express.Router();
const controller = require('./controllers');

Router.get('/',
  controller.getData,
  (req, res) => {
    res.status(200).cookie('chocolate', 3).json(res.locals.info);
  });

module.exports = Router;
