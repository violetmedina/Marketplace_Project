
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); //hash and salt our password
const db = require('../models');

router.get('/registration', (req,res) => {

    res.render('registration', {
        error: ""
    })
})


router.post('/registration', async (req, res)=>{

    //collect form data and store it in our db
    try {

        //scrape information from the header
        let {username, email, fullName, password} = req.body;

        // password encrypt

        password = bcrypt.hashSync(password, 8);


        let emailCheck = await db.users.findAll({where: {email: email}})

        if(emailCheck.length > 0){
            res.render('registration', {
                error: 'email already exits, please login or use a different email address'
            })
        }
        else{
            let insertRecord = await db.users.create({
                username: username,
                email: email,
                fullName: fullName,
                password: password
            })

            res.redirect('/login')
        }

    }
    catch (error) {

        console.log(error);

        res.render('registration', {
            error: "error: can't register this username"
        })
    }

})



module.exports = router;
