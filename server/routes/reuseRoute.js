const express = require('express')
const router = express.Router()
const {z, ZodError} = require('zod')
const accessRequestModel = require('../models/reuseModel')
// Send Mail to the IT once Requested from the client
// const sendAccessRequestMail = (accessRequest) => {
//     const { token } = accessRequest;
//     const approveLink = `http://localhost:5000/access-requests/approve?token=${token}`;

//     const transporter = nodemailer.createTransport({
//         service: 'hotmail',
//         auth: {
//             user: process.env.EMAIL_USERNAME,
//             pass: process.env.EMAIL_PASSWORD
//         }
//     })
    
//     const mailOptions = {
//         from: process.env.EMAIL_USERNAME,
//         to: 'testnodemailer2147@gmail.com',
//         subject: 'Access Request Approval Link',
//         text: `Click this link to approve your access request: ${approveLink}`
//     };
    
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//           console.error('Error sending email', error.message);
//           throw new Error("Had Error with the nodemailer!!")
//         } else {
//           console.log('Email sent', info.response);
//         }
//     });
// }

// // POST: Retrieve New Member's Data
// router.post('/', async (req, res)=>{

//     try {
//         const {requestorEmail, fullname, emailaddress} = req.body

//         // Create row (data) from fetched data and save into accessRequest table
//         const accessRequest = await accessRequestModel.create({
//             requestorEmail: requestorEmail,
//             fullname: fullname,
//             emailaddress: emailaddress
//         })
        
//         // Send Email to IT
//         sendAccessRequestMail(accessRequest)

//         return res.status(200).json(accessRequest)

//     } catch (error) {
//         console.error(error.message);
//         return res.status(500).json({error: error.message})
//     }
// })

// // GET: Switches the Status of a new member from pending to approved
// router.get('/approve', async (req, res)=>{
//     try {
//         const {token} = req.query
//         // Token does not exist
//         if (!token) {
//             return res.status(400).json({success: false, error: "Token Required"});
//         }

//         const accessRequest = await accessRequestModel.findOne({ where: { token } });
        
//         // Request Not Found on DB
//         if (!accessRequest) {
//             return res.status(404).json({success: false, error: "Access Request Not Found"});
//         }
//         await accessRequest.update({ requestStatus: 'APPROVED' });

//         return res.status(200).json({success: true, msg: `Successfully updated the status to APPROVED for New Member: ${accessRequest.fullname}`})

//     } catch (error) {
//         console.error(error.message)
//         return res.status(500).json({success: false, error: error.message})
//     }
// })

// LOGIN: Only gets into the 
// router.post('/login', (req, res)=>{
//     try {
        
//     } catch (error) {
//         console.error(error.message)
//         return res.status(500).json({success: false, error: "There is an error happening in the server"})
//     }
// })

module.exports = router