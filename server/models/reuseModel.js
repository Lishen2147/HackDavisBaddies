const sequelize = require('../database')
const {DataTypes} = require('sequelize')

const reuseInventory = sequelize.define(
    'AggieReuseInventory', // Model Name
    {
        clothtoken: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            unique: true,
        },
        dateBroughtIn: {
            type: DataTypes.DATE,
            defaultValue: sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        staffBroughtIn: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        dateEdited: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        staffEdited: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        dateSold: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        staffSold: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        color: {
            type: DataTypes.ENUM('Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink', 'Cyan', 'Magenta', 'Teal', 'Black', 'White', 'Gray'),
            allowNull: false,
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        size: {
            type: DataTypes.ENUM('XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'),
            allowNull: false,
        },
        gender: {
            type: DataTypes.ENUM('Menswear', 'Womenswear', 'Netural'),
            defaultValue: 'Netural',
        },
        category: {
            type: DataTypes.ENUM('Tops', 'Bottoms', 'Dresses', 'Lingerie', 'Outerwear', 'Accessories', 'Shoes', 'Sets'),
            allowNull: false,
        },
        notes: {
            type:DataTypes.STRING,
            allowNull: true,
        },
        availability: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    }
);

module.exports = reuseInventory