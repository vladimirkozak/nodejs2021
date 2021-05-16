const DB = require('../../common/in-memory-db');

const getAll = async () => DB.getAllUsers();

const get = async id => {
  const user = DB.getUser(id);

  if (!user) {
    throw new Error(`The user with id: ${id} was not found`);
  }

  return user;
};

const create = async user => DB.createUser(user);

const delById = async id => {
  const user = await DB.delUser(id);

  if (!user) {
    throw new Error(`The user with id: ${id} has not been found`);
  }

  return user;
};

module.exports = { getAll, get, create, deleteById };