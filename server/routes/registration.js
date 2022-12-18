
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); //hash and salt our password
const db = require('../models');

//? SIGN UP
router.post('/sign-up', async (req,res)=>{
    let {username,email, fName, lName,password} = req.body
    console.log(req.body)
    let salt = await bcrypt.genSalt(10)
    let hashedPassword = await bcrypt.hash(password, salt)
    console.log(hashedPassword )
    try {
        let user = await db.users.findAll({where: {email:email}}) //check if email already exists in db
        if(user.length >0){
            console.log(user)
            res.json({success: false, message: "This email is already registered"})
        }else {
            
            let newUser = await db.users.create({username,email, fName, lName,password: hashedPassword})
            res.json(newUser)
        }
        
    } catch (error) {
        res.json({success: false, message: error})
    }
})

module.exports = router;
