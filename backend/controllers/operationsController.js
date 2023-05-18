const Operation = require("../models/operation");

exports.getAllOperation = (req, res, next) => {
  Operation.fetchAll((operations) => {
    res.json(operations);
  });
};

exports.postAddoperaion = (req, res, next) => {
  const op = new Operation(req.body);
  console.log(req.body);
  console.log(op);
  op.save();
  res.status(200).json({ message: "operation saved" });
};
