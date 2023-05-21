const sequelize = require('../database')
const {DataTypes} = require('sequelize')

const staff = sequelize.define(
    'staffTable', // Model Name
    {
        staffID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: true,
          },
          // password: {
          //   type: DataTypes.STRING,
          //   allowNull: false,
          // },
    }
)

module.exports = staff