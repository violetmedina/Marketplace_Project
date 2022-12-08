
const express = require('express');
const router = express.Router()
const db = require('../models');

const findAll = async() => {
    try{
        let records = await db.items.findAll(); 

        // console.log(records[0]);

        return records
    }
    catch(error){
        return []
    }

}

// protected
router.get('/add-items', (req, res) => {

    res.render('addItems', {
        error: ""
    })

})

router.post('/add-items', async (req, res) => {

    try {

        let {category, listingName, listingDescription, listingPrice, imageURL, userID} = req.body;


        let insertItem = await db.items.create({
            category: category,
            listingName: listingName,
            listingDescription: listingDescription,
            listingPrice: listingPrice,
            inCart: false,
            imageURL: imageURL,
            userID: 3
        })
    }
    catch (error) {

        console.log(error);

        res.render('addItems', {
            error: "error: you cannot add this item"
        })
    }

})

router.delete('/add-items/:id', async (req, res) => {

    try {

        let id = req.params.id
    
        let records = await db.items.destroy({where: {id: id}})

        res.render("addItems", {records})
    
    } catch (error) {
        console.log(error);
    }

    res.send('addItems')

})

// router.all('/add-items', authLogin, (req, res, next) =>{
//     next()
// })

module.exports = router;