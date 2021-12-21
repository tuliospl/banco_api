const connect = require('../connection/mongo');

const createNewUser = async (name, cpf) => {
  const db = await connect();

  const newUser = await db.collection('Users').insertOne({
    name, cpf, balance: 0,
  });

  return {
    _id: newUser.insertedId, name, cpf,
  };
};

module.exports = createNewUser;
