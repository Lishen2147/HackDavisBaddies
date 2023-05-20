const express = require('express')
const router = express.Router()
const {z, ZodError} = require('zod')
const loginHomePageModel = require('../models/loginModel')

// Create User
// router.get('/', async (req, res)=>{

//     try {
//         const fourDigitID = Math.floor(1000 + Math.random()*9000);
//     }
// })

// POST: Retrieve login's Data
router.post('/', async (req, res)=>{

    try {
        const {staffID, password} = req.body

        // Select row (data) from role table to validate the fetched data if it's in the database 
        const ID = await loginModel.findOne({where: {staffID}})
        if (ID) { // if the logged in user is in the database, then it's not a new user, 
            if (ID.password == password) {
                return res.status(200).json(ID)
            }
            else {
                return res.status(300).json(ID)
            }
        }
        else { // if the login is NOT in the database, then it's a new member that wants to join the team
            return res.status(400).json(ID) // give it a different signal 
        } // this signal will then redirect it to the "interest" form

    } catch (error) {
        console.error(error.message);
        return res.status(500).json({error: error.message})
    }
})

module.exports = router