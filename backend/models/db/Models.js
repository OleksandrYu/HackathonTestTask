const {Sequelize, Model, DataTypes} = require('sequelize')
const initModels = require('./init-models')



const getModels =() =>{
    const sequelize = new Sequelize('postgres://postgres:bolik120@localhost:5432/Cashy')
    const students = initModels(sequelize)
    return students
}



module.exports = getModels();
