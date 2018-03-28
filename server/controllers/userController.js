const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 4;

module.exports = {
  view(req, res) {
    User.find().then(userData => {
      res.status(200).json({
        message: 'user data found!',
        userData
      })
    }).catch(err => {
      res.status(500).json({
        message: err
      })
    })
  },
  add(req, res) {
    let hash = bcrypt.hashSync(req.body.password, saltRounds)
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: hash
    }).then(userData => {
      res.status(201).json({
        message: 'user data created!',
        userData
      })
      }).catch(err => {
        res.status(500).json({
        message: err
      })
    })
  },
  signIn(req, res) {
    User.findOne({
      where: {
        email: req.body.email
      }
    }).then(userData => {
      if (userData) {
        let success = bcrypt.compareSync(req.body.password, userData.password)
        if (success) {
          let token = jwt.sign({ id: userData.id, email: userData.email }, 'lasday')
          res.status(202).json({
            message: 'logged in successfully!',
            userData,
            token
          })
        } else {
          res.status(401).json({
            message: 'wrong password!'
          })
        }
      } else {
        res.status(404).json({
          message: 'email not found!'
        })
      }
    })
  }
}