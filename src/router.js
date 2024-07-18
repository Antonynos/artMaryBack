const express = require('express');
const router = express.Router();

const usersController = require('./controllers/usersController');

router.get('/users', usersController.getAll);
router.get('/users/:id', usersController.getById);
router.post('/users', usersController.createUser);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

router.get('/', (req, res) => res.status(200).send("deu certo?"));

module.exports = router;