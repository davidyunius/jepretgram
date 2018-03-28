const Photo = require('../models/photoModel')

module.exports = {
  view(req, res) {
    Photo.find().then(data => {
      res.status(200).json({
        message: 'photo data found!',
        data
      })
    }).catch(err => {
      message: err
    })
  },
  add(req, res) {
    Photo.create({
      url: req.body.url,
      name: req.body.name,
      caption: req.body.caption
    }).then(data => {
      res.status(201).json({
        message: 'photo added!',
        data
      })
    }).catch(err => {
      message: err
    })
  },
  edit(req, res) {
    Photo.update({
      _id: req.params.id
    }, {
      $set: {
        caption: req.body.caption
      }
    }, {
      where: {
        _id: req.params.id
      }
    }).then(data => {
      res.status(200).json({
        message: 'caption updated!',
        data
      })
    }).catch(err => {
      message: err
    })
  },
  delete(req, res) {
    Photo.remove({
      _id: req.params.id
    }).then(data => {
      res.status(200).json({
        message: 'photo deleted!'
      })
    }).catch(err => {
      message: err
    })
  }
}