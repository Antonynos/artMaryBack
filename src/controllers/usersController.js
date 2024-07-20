const usersModel = require('../models/usersModel');

const getAll = async (_req, res) =>{
    const users = await usersModel.getAll();
    return res.status(200).json(users);
};

const getById = async(req, res) =>{
    const user = await usersModel.getById(req.params.id);
    return res.status(200).json(user);
};

const createUser = async (req, res) =>{
    const createdUser = await usersModel.createUser(req.body);
    return res.status(201).json(createdUser);
};

const updateUser = async (req, res) =>{
    const updatedUser = await usersModel.updateUser(req.params.id, req.body);
    return res.status(204).json(updatedUser);
};

const deleteUser = async (req, res) =>{
    const deletedUser = await usersModel.deleteUser(req.params.id);
    return res.status(204).json(deletedUser);
};

module.exports = {
    getAll,
    getById,
    createUser,
    updateUser,
    deleteUser,
};