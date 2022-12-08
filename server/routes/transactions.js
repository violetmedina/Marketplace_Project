
const express = require('express');
const router = express.Router()
const authLogin = require('../auth/auth');
const db = require('../models');

const findAllTransactions = async() => {
    try{

        let records = await db.transactions.findAll();

        // console.log(records[1]);

        return records
    }
    catch(error){
        console.log(error);
        return []
    }

}

const findAllItems = async() => {
    try{

        let itemRecords = await db.items.findAll();

        // console.log(records[1]);

        return itemRecords
    }
    catch(error){
        console.log(error);
        return []
    }

}


router.get('/transactions', async (req, res) => {

    try{

        // let userID = req.params.id

        let transRecords = await findAllTransactions()
        let itemRecords = await findAllItems()

        console.log(transRecords, itemRecords);

        // records.forEach(userRecord => {
        //     let recordsList = records[userRecord]
        // });

        res.render(`transactions`, {
            transRecords: transRecords,
            itemRecords: itemRecords
        })
    }
    catch(error){

        console.log(error);
        res.json([])
        // res.send('Transactions Page - ERROR')
    }

})

router.all('/transactions/:id', authLogin, (req, res, next) =>{
    next()
})

router.get('/transactions/:id', authLogin, (req, res) => {

    res.send('transactions')

})

router.post('/transactions/:id', authLogin, async (req, res) => {

    try {

        let {inCart, itemID, userID} = req.body; // session id

        // console.log(inCart, itemID, userID);

        let cart = await db.transactions.create({
            inCart: true,
            itemID: itemID,
            userID: userID
        })
    }
    catch (error) {

        console.log(error);

        res.render('transactions', {
            error: "error: you cannot buy this item"
        })
    }

})

router.put('/transactions/:id', async (req, res) => {


    res.send('transactions')
})


router.delete('/transactions/:id', async (req, res) => {


    try {


        let id = req.params.id

        let records = await db.transactions.destroy({where: {id: id}})

        res.render("transactions", {records})


    } catch (error) {
        console.log(error);
    }

    res.render('transactions')


})


router.post('/logout', (req, res)=>{

    req.session = null;

    res.redirect('/login')
})


module.exports = router;