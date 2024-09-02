t { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Badge = sequelize.define('Badge', {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING },
});

module.exports = Badge;

