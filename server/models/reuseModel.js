const sequelize = require('../database')
const {DataTypes} = require('sequelize')

const reuseInventory = sequelize.define(
    'AggieReuseInventory', // Model Name
    {

    }
)

module.exports = reuseInventory