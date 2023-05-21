const express = require('express')
const router = express.Router()
const loginHomePageModel = require('../models/loginModel')
const sequelize = require('sequelize')

// Create User
router.post('/create', async (req, res)=>{

    try {
        const {empID, password} = req.body;

        console.log(loginHomePageModel)

        const staffTable = await loginHomePageModel.create({
            empID: empID,
            password: password
        })

        console.log(staffTable)
        return res.status(200).json(staffTable)

    } catch (error) {
        console.error(error.message)
        return res.status(500).send({success: false, error: error.message})
    }
})

// POST: Retrieve login's Data
router.post('/log-in', async (req, res)=>{

    try {
        const {empID, password} = req.body

        const ID = await loginHomePageModel.findOne({where: {empID}})
        if (ID) { // if the log in is in the DB
            if (ID.password == password) { // if password is correct
                return res.status(200).json(ID)
            }
            else { // if password is not correct
                return res.status(300).json(ID)
            }
        }
        else { // if the log in is NOT in the DB
            return res.status(400).json(ID)
        }
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({error: error.message})
    }
})

module.exports = router