const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const verify = require('../controllers/auth')
const photoController = require('../controllers/photoController')



router
  .get('/users', userController.view)
  .post('/signup', userController.add)
  .post('/signin', userController.signIn)
  .get('/', verify.auth, photoController.view)
  .post('/add', verify.auth, photoController.add)
  .patch('/edit:id', verify.auth, photoController.edit)
  .delete('/delete:id', verify.auth, photoController.delete)

module.exports = router;
