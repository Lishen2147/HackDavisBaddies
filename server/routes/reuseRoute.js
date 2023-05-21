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

// just "sold" an item: update dateSold & availability
// router.post('/sold/clothToken', async (req, res)=>{
//     try {
//         const {clothToken} = req.body;
//     }
// })
// request an specific item given conditions such as color
// can return the quantity of this similar
// car return the availability of very specific item given request like the clothToken

module.exports = router