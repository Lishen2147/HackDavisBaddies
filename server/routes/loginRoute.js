const express = require('express')
const router = express.Router()
const loginHomePageModel = require('../models/loginModel')
const sequelize = require('sequelize')

// Create User
router.post('/create', async (req, res)=>{

    try {
        const {emailaddress, password} = req.body;

        console.log(loginHomePageModel)

        const staffTable = await loginHomePageModel.create({
            staffID: emailaddress,
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
        const {staffID, password} = req.body

        // Select row (data) from role table to validate the fetched data if it's in the database 
        const ID = await loginHomePageModel.findOne({where: {staffID}})
        if (ID) { // if the logged in user is in the database, then it's not a new user, 
                return res.status(200).json(ID)
        }
        else { // if the login is NOT in the database, then it's a new member that wants to join the team
            return res.status(300).json(ID) // give it a different signal 
        } // this signal will then redirect it to the "interest" form

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({error: error.message})
    }
})

module.exports = router