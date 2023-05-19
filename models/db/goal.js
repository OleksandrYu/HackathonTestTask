const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('goal', {
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
    tableName: 'goal',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "goal_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
