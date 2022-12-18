
const express = require('express');
const app = express();
// const cookieSession = require('cookie-session');
let bcrypt = require('bcryptjs');
const cors = require('cors')

const PORT = process.env.PORT || 8080;
const db = require('./models');



app.use(express.urlencoded({extended: false})); //url parser
app.use(express.json()); //body parser
app.use(cors())

app.get('/', (req, res)=>{
    res.send('Home page')
})

//? SIGN UP
app.post('/sign-up', async (req,res)=>{
    let {username,email, fName, lName,password} = req.body
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

app.post('/add-product',async (req,res)=>{
    let {category,listingName, listingDescription,imageURL,listingPrice,buyerID, qty, total = qty * listingPrice} = req.body
    try {
        let userID = req.headers
        let newItem = await db.products.create({userID,category,listingName, listingDescription,imageURL,listingPrice,buyerID, qty})
        res.json(newItem)
    } catch (error) {
        res.json({success: false, message: error})
    }
})
app.listen(PORT, ()=>{
    console.log(`listening on PORT ${PORT}`);
})