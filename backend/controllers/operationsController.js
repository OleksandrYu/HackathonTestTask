const { json } = require("body-parser");
const Operation = require("../models/operation");

exports.getOneOperation = (req, res, next) => {
  Operation.fetchAll((operations) => {
    const element = operations.filter((i) => i.id == req.params.id);
    if (element.length < 1) {
      res.status(404).json({ message: "not found" });
    }

    res.status(200).json(element[0]);
  });
};

exports.getAllOperation = (req, res, next) => {
  Operation.fetchAll((operations) => {
    const days = operations
      .map((op) => op.date)
      .reduce((accum, date) => {
        const temp = accum;
        if (!temp.includes(date)) {
          temp.push(date);
        }
        return temp;
      }, []);

    //console.log(days);

    const inDaysOperations = [];
    for (var day of days) {
      inDaysOperations.push({
        day: day,
        operations: operations.filter((op) => op.date == day),
      });
    }

    inDaysOperations.sort((a, b) => new Date(b.day) - new Date(a.day));

    res.json(inDaysOperations);
  });
};

exports.postAddoperaion = (req, res, next) => {
  const op = new Operation(req.body);
  op.save();
  res.status(200).json({ message: "operation saved" });
};
