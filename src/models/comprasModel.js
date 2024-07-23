const connection = require('./connections');

const getAll = async () => {
    const [compras] = await connection.execute('SELECT * FROM compras');
    return compras;
}

const getById = async (id) => {
    const [compra] = await connection.execute('SELECT * FROM compras WHERE id = ?', [id]);
    return compra;
}

const createCompra = async(compra) => {
    const {descricao} = compra;
    const dateUTC = new Date(Date.now());
    const [createdCompra] = await connection.execute('INSERT INTO compras(descricao, users_id, data_compra, status_compra) VALUES (?, ?, ?, ?)',
        [descricao, 1, dateUTC, 1]);
    return {id: createdCompra.insertId};
}

const updateCompra = async(id, compra) => {
    const {descricao, mensagem_vendedor} = compra;
    const [updatedCompra] = await connection.execute('UPDATE compras SET descricao = ?, mensagem_vendedor = ? WHERE id = ?',
        [descricao, mensagem_vendedor, id]);
    return updatedCompra;
}

const deleteCompra = async(id) => {
    const [deletedCompra] = await connection.execute('DELETE FROM compras WHERE id = ?', [id]);
    return deletedCompra;
}

module.exports = {
    getAll,
    getById,
    createCompra,
    updateCompra,
    deleteCompra
}