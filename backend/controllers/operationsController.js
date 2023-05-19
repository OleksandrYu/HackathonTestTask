const models = require('../models/db/Models')
const Sequelize = require('sequelize');

exports.getOneOperation = async (req, res, next) => {
    const id = req.params.id
    const email = req.user.email;
    const operations = await models.userinfo.findOne({
      attributes: ['email', 'id'],
      include: [
        {
          model: models.single_operation,
          as: 'single_operations',
          attributes: ['id','description', 'title', 'date', 'amount'],

          include: [
            {
              model: models.goal,
              as: 'goal',
              attributes: ['name']
            }
          ]
        },
      ],
    });
  
    if (!operations) res.status(141).json({ error: "sho za precoly" });

    const operation = operations.single_operations.filter(x => x.id == +id)[0]
    return res.json( operation);
};

exports.getAllOperation = async (req, res, next) => {
    const email = req.user.email;
    const operations = await models.userinfo.findOne({
      attributes: ['email', 'id'],
      include: [
        {
          model: models.single_operation,
          as: 'single_operations',
          attributes: ['description', 'title', 'date', 'amount'],
          include: [
            {
              model: models.goal,
              as: 'goal',
              attributes: ['name']
            }
          ]
        },
      ],
      //where: { email: email },
    });
  
    if (!operations) res.status(141).json({ error: "sho za precoly" });
  
    return res.json( operations.single_operations);
};

exports.postAddOperation = async (req, res, next) => {
    const email = req.user.email;
  const body = req.body;
  
  if (!body.description || !body.title || !body.date || !body.amount)
    res.status(133).json({ error: "sho za precoly" });
  
    const user = await models.userinfo.findOne({
    attributes: ['id'],
    where: { email: email },
  });
  
  await models.single_operation.create({
    ...body,
    user_id: user.id,
    goal_id: 1,
    status_id :1
  });

  res.json({ result: "success" });
};
