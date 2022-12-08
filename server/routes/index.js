
const express = require('express');
const db = require('../models');

const router = express.Router()

// const authLogin = (req, res, next) => {
//     //check to see if username is on the session

//     if(req.session.username){
//         next()
//     }
//     else{
//         res.redirect('/login')
//     }
// };

router.get('/', async (req, res) => {

    let items = await db.items.findAll()

    res.render('index', {
        itemsdata: items
    })
})





// router.all('/:id', authLogin, (req, res, next) =>{
//     next()
// })


module.exports = router;