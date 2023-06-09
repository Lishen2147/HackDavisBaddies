const express = require('express')
const router = express.Router()
const reuseModel = require('../models/reuseModel')
const { col } = require('../database')

// When new supplies are brought to the inventory
// Registering new supplies to the database table
// Retrieve new data from frontend
// Insert this new data into the table
router.post('/insert', async (req, res)=>{
    try {
        const {
            // staffBroughtIn,
            color,
            brand,
            size,
            gender,
            category,
            notes,
        } = req.body;

        console.log(reuseModel.tableAttributes)

        // Create table
        const inventory = await reuseModel.create({
            // staffBroughtIn: staffBroughtIn,
            dateEdited: null,
            staffEdited: null,
            dateSold: null,
            staffSold: null,
            color: color,
            brand: brand,
            size: size,
            gender: gender,
            category: category,
            notes: notes,
            availability: true
        })

        console.log(inventory)
        return res.status(200).json(inventory)

    } catch (error) {
        console.error(error.message)
        return res.status(500).send({success: false, error: error.message})
    }
})

// for looking through the inventory
router.post('/select', async (req, res)=>{
    try {
        const {
            color,
            brand,
            size,
            gender,
            category,
            availability,
        } = req.body;

        const conditions = {};

        if (color) {
            conditions.color = color;
        }
        if (brand) {
            conditions.brand = brand;
        }
        if (brand) {
            conditions.size = size;
        }
        if (gender) {
            conditions.gender = gender;
        }
        if (category) {
            conditions.category = category;
        }
        if (availability) {
            conditions.availability = availability;
        }

        const inventory = await reuseModel.findAll({
            where: conditions
          });

        console.log(inventory);

        res.status(200).json(inventory);
    } catch (error) {
        console.error('ERROR retrieving stocks: ', inventory);
        res.status(500).json({error: 'ERROR retrieving stocks'});
    }
});

module.exports = router;