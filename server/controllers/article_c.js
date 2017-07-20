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

let getLimitedArticles = (req, res) => {
  Articles.find({})
    .limit(3)
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
  console.log(req.params.articles_id);
  Articles.findById(req.params.articles_id)
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
  Articles.findByIdAndUpdate(req.params.articles_id, req.body, {
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
    _id: req.params.articles_id
  }, (err, old_Articles) => {
    if (err) {
      res.send(err);
    } else {
      res.send(old_Articles);
    }
  })
}

let getArticlesByAuthor = (req, res) => {
  console.log(req.params.name);
  Articles.find({})
    .populate('author')
    .populate('answers.author')
    .exec((err, results) => {
      if (err) {
        res.send(err)
      } else {
        // console.log(results);
        var filtered = results.filter(function limitnya(parent) {
          return parent.author.name == req.params.name
        })
        console.log(filtered);
        res.send(filtered)
      }
    })
}

let getArticlesByCategory = (req, res) => {
  console.log(req.params.category);
  Articles.find({})
    .populate('author')
    .populate('answers.author')
    .exec((err, results) => {
      if (err) {
        res.send(err)
      } else {
        var limitnya = function (parent) {
          return parent.category.includes(req.params.category) == true
        }
        // console.log(results[0].category.includes(req.params.category));
        var filtered = results.filter(limitnya)
        console.log(filtered);
        res.send(filtered)
      }
    })
}


module.exports = {
  getOneArticles,
  postArticles,
  getAllArticles,
  editArticles,
  destroyArticles,
  getArticlesByAuthor,
  getArticlesByCategory,
  getLimitedArticles
};
