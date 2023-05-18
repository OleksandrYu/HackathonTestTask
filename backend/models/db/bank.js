const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bank', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'bank',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "bank_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
