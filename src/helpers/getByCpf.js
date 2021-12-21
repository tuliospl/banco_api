const connect = require('../connection/mongo');

const getByCpf = async (cpf) => {
  const db = await connect();

  const user = await db.collection('Users').findOne({ cpf });

  if (!user) return null;

  return user;
};

module.exports = getByCpf;
