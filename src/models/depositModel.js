const connect = require('../connection/mongo');

const deposit = async (cpf, money) => {
  const db = await connect();

  const { balance } = await db.collection('Users').findOne({ cpf });

  const { value } = await db.collection('Users').findOneAndUpdate(
    { cpf },
    { $set: { balance: balance + money } },
    { returnDocument: 'after' },
  );

  return value;
};

module.exports = deposit;
