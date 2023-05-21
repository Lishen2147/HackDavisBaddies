const sequelize = require('../database')
const {DataTypes} = require('sequelize')

const staff = sequelize.define(
    'staffTable', // Model Name
    {
        empID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
          },
          password: {
            type: DataTypes.STRING,
          },
    }
)

module.exports = staff