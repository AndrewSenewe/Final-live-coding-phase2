const Articles = require('../models/Articles');
var jwt = require('jsonwebtoken')
require('dotenv').config()
var ObjectId = require('mongodb').ObjectID;

let postArticles = (req, res) => {
  console.log(req.body.author);
  var decoded = jwt.verify(req.body.author, process.env.SECRET);
  Articles.create({
    title: req.body.title,
    content: req.body.content,
    author: decoded.id,
    category: req.body.category
  }, (err, posted) => {
    if (err) {
      res.send(err);
    } else {
      res.send(posted);
    }
  })
}

let getAllArticles = (req, res) => {
  Articles.find({})
    .populate('author')
    .populate('answers.author')
    .exec((err, results) => {
      if (err) {
        res.send(err)
      } else {
        res.send(results)
      }
    })
}


let getOneArticles = (req, res) => {
  console.log(req.params.Articles_id);
  Articles.findById(req.params.Articles_id)
    .populate('author')
    .populate('answers.author')
    .exec((err, resultArticles) => {
      if (err) {
        res.send(err);
      } else {
        res.send(resultArticles);
      }
    })
}

let editArticles = (req, res) => {
  Articles.findByIdAndUpdate(req.params.Articles_id, req.body, {
      new: true
    },
    (err, new_Articles) => {
      if (err) {
        res.send(err);
      } else {
        res.send(new_Articles);
      }
    })
}

let destroyArticles = (req, res) => {
  Articles.remove({
    _id: req.params.Articles_id
  }, (err, old_Articles) => {
    if (err) {
      res.send(err);
    } else {
      res.send(old_Articles);
    }
  })
}


module.exports = {
  getOneArticles,
  postArticles,
  getAllArticles,
  editArticles,
  destroyArticles
};
