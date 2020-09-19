const express = require('express');

const Router = express.Router();
const controller = require('./controllers');

// READ method - query all items in database
Router.get('/',
  controller.getData,
  (req, res) => {
    res.status(200).json(res.locals.info);
  });

// CREATE new post and add it to the database
Router.post('/',
  controller.newPost,
  (req, res) => {
    res.status(200).json(res.locals.results);
  });

// UPDATE post in database
Router.put('/',
  controller.updatePost,
  (req, res) => {
    res.status(200).json(res.locals.results);
  });

// DELETE post from row in database
Router.delete('/',
  controller.deletePost,
  (req, res) => {
    res.status(200).json(res.locals.results);
  });

module.exports = Router;
