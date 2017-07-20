'use strict'
const User = require('../models/users.js');
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
require('dotenv').config()

var getAllUser = (req, res, next) => {
  User.find({})
    .then(users => {
      // console.log(users);
      res.send(users)
    })
}

var createUser = (req, res, next) => {
  User.findOne({
      username: req.body.username
    })
    .then((user) => {
      if (user) {
        res.send('User name already exists')
      } else {
        var insertUser = new User({
          username: req.body.username,
          email: req.body.email,
          name: req.body.name,
          password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
        })
        insertUser.save((err, regist) => {
          if (err) {
            res.send(err.message)
          } else {
            res.json(regist);
          }
        })
      }
    })
    .catch((err) => {
      res.send(err.message)
    })
}

var login = function(req, res) {
  let username = req.body.username
  let password = req.body.password
  User.findOne({username: username}, function(err, result) {
    if (result && bcrypt.compareSync(req.body.password, result.password)) {
      var token = jwt.sign({
        username: result.username,
        name: result.name,
        email: result.email,
        id: result._id
      }, process.env.SECRET, {expiresIn: '1d'})
      res.send(token)
    } else {
      console.log(result);
      res.send('email or password incorrect')
    }
  })
}

module.exports = {
  createUser,
  login,
  getAllUser
};