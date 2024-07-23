const express = require('express');
const router = express.Router();

const usersController = require('./controllers/usersController');
const comprasController = require('./controllers/comprasController');
const validadeUsers = require('./middlewares/validadeUsers');

router.get('/users', usersController.getAll);
router.get('/users/:id', usersController.getById);
router.post('/users', validadeUsers.validadeCreation, usersController.createUser);
router.put('/users/:id', usersController.updateUser);
router.delete('/users/:id', usersController.deleteUser);

router.get('/compras', comprasController.getAll);
router.get('/compras/:id', comprasController.getById);
router.post('/compras', comprasController.createCompra);
router.put('/compras/:id', comprasController.updateCompra);
router.delete('/compras/:id', comprasController.deleteCompra);




router.get('/', (req, res) => res.status(200).send("deu certo?"));

module.exports = router;