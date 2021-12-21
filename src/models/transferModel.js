const connect = require('../connection/mongo');

const decreaseBalance = async (cpf, money) => {
  const db = await connect();

  const { balance } = await db.collection('Users').findOne({ cpf });

  const { value } = await db.collection('Users').findOneAndUpdate(
    { cpf },
    { $set: { balance: balance - money } },
    { returnDocument: 'after' },
  );

  return value;
};

const addBalance = async (cpfTransfer, money) => {
  const db = await connect();

  const { balance } = await db.collection('Users').findOne({ cpf: cpfTransfer });

  const { value } = await db.collection('Users').findOneAndUpdate(
    { cpf: cpfTransfer },
    { $set: { balance: balance + money } },
    { returnDocument: 'after' },
  );

  return value;
};

const transferModel = async (cpf, money, cpfTransfer) => {
  const sender = await decreaseBalance(cpf, money);

  const receiver = await addBalance(cpfTransfer, money);

  return { sender, receiver };
};

module.exports = transferModel;
