const express = require('express');
const userController = require ('../controllers/userController.js');

const UsersRouter = express.Router();

UsersRouter.post('/', userController.createUser);
UsersRouter.get('/', userController.getAllUsers);
UsersRouter.get('/:id', userController.getUserById);
UsersRouter.put('/:id', userController.updateUser);
UsersRouter.delete('/:id', userController.deleteUser);

module.exports = UsersRouter;
