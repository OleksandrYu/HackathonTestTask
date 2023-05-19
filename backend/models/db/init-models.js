var DataTypes = require("sequelize").DataTypes;
var _bank = require("./bank");
var _goal = require("./goal");
var _long_term_operation = require("./long_term_operation");
var _long_term_operation_type = require("./long_term_operation_type");
var _operation_status = require("./operation_status");
var _single_operation = require("./single_operation");
var _userinfo = require("./userinfo");

function initModels(sequelize) {
  var bank = _bank(sequelize, DataTypes);
  var goal = _goal(sequelize, DataTypes);
  var long_term_operation = _long_term_operation(sequelize, DataTypes);
  var long_term_operation_type = _long_term_operation_type(sequelize, DataTypes);
  var operation_status = _operation_status(sequelize, DataTypes);
  var single_operation = _single_operation(sequelize, DataTypes);
  var userinfo = _userinfo(sequelize, DataTypes);

  long_term_operation.belongsTo(bank, { as: "bank", foreignKey: "bank_id"});
  bank.hasMany(long_term_operation, { as: "long_term_operations", foreignKey: "bank_id"});
  single_operation.belongsTo(goal, { as: "goal", foreignKey: "goal_id"});
  goal.hasMany(single_operation, { as: "single_operations", foreignKey: "goal_id"});
  long_term_operation.belongsTo(long_term_operation_type, { as: "type", foreignKey: "type_id"});
  long_term_operation_type.hasMany(long_term_operation, { as: "long_term_operations", foreignKey: "type_id"});
  long_term_operation.belongsTo(operation_status, { as: "status", foreignKey: "status_id"});
  operation_status.hasMany(long_term_operation, { as: "long_term_operations", foreignKey: "status_id"});
  single_operation.belongsTo(operation_status, { as: "status", foreignKey: "status_id"});
  operation_status.hasMany(single_operation, { as: "single_operations", foreignKey: "status_id"});
  long_term_operation.belongsTo(userinfo, { as: "user", foreignKey: "user_id"});
  userinfo.hasMany(long_term_operation, { as: "long_term_operations", foreignKey: "user_id"});
  single_operation.belongsTo(userinfo, { as: "user", foreignKey: "user_id"});
  userinfo.hasMany(single_operation, { as: "single_operations", foreignKey: "user_id"});

  return {
    bank,
    goal,
    long_term_operation,
    long_term_operation_type,
    operation_status,
    single_operation,
    userinfo,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
