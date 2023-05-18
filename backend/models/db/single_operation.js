const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('single_operation', {
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'userinfo',
        key: 'id'
      }
    },
    goal_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'goal',
        key: 'id'
      }
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'operation_status',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'single_operation',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "single_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
