const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Transaction = sequelize.define('Transaction', {
      senderId: { type: DataTypes.INTEGER, allowNull: false },
      recipientId: { type: DataTypes.INTEGER, allowNull: false },
      amount: { type: DataTypes.FLOAT, allowNull: false },
      currency: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Transaction;

