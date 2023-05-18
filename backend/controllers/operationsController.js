const Operation = require('../models/operation')


exports.getAllOperation = (req, res, next) => {
    const  op = new Operation(1,2,3,4,5);
        op.save()

    Operation.fetchAll((operations) =>{
        res.json(operations);
    })
}


exports.postAddoperaion = (req, res, next) =>{

    const op = new Operation(req.body)
    op.save()
    res.status(200).json({"message": "operation saved"});

}