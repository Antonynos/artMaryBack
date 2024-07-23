const comprasModel = require('../models/comprasModel');

const getAll = async (_req, res) => {
    const compras = await comprasModel.getAll();
    return res.status(200).json(compras);
}

const getById = async (req, res) => {
    const compra = await comprasModel.getById(req.params.id);
    return res.status(200).json(compra);
}

const createCompra = async (req, res) => {
    const createdCompra = await comprasModel.createCompra(req.body);
    return res.status(201).json(createdCompra);
}

const updateCompra = async (req, res) => {
    const updatedCompra = await comprasModel.updateCompra(req.params.id, req.body);
    return res.status(204).json(updatedCompra);
}

const deleteCompra = async (req, res) => {
    const deletedCompra = await comprasModel.deleteCompra(req.params.id);
    return res.status(204).json(deletedCompra);
}

module.exports = {
    getAll,
    getById,
    createCompra,
    updateCompra,
    deleteCompra
}