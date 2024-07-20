const connection = require('./connections');

const getAll = async () => {
    const [users] = await connection.execute('SELECT * FROM users');
    return users;
};

const getById = async (id) => {
    const [user] = await connection.execute('SELECT * FROM users WHERE id = ?', [id]);
    return user;

}

const createUser = async (user) => {
    const {name} = user;
    const dateUTC = new Date(Date.now());

    const [createdUser] = await connection.execute('INSERT INTO users(name, role, created_at) VALUES (?, ?, ?)',
        [name, 1, dateUTC]);

    return {id: createdUser.insertId};
};

const updateUser = async (id, user) => {
    const {name, role} = user;

    const [updatedUser] = await connection.execute('UPDATE users SET name = ?, role = ? WHERE id = ?',
        [name, role, id]);

    return updatedUser;
}

const deleteUser = async (id) => {
    const [deletedUser] = await connection.execute('DELETE FROM users WHERE id = ?', [id]);

    return deletedUser;
}

module.exports = {
    getAll,
    getById,
    createUser,
    updateUser,
    deleteUser,
}