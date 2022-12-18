
const express = require('express');
const app = express();
// const cookieSession = require('cookie-session');
let bcrypt = require('bcryptjs');
const cors = require('cors')
const router = express.Router();
const PORT = process.env.PORT || 8080;
const db = require('./models');



app.use(express.urlencoded({extended: false})); //url parser
app.use(express.json()); //body parser
app.use(cors())
app.use(require('./routes/registration'))



app.get('/', (req, res)=>{
    res.send('Home page')
})




// //? SIGN IN 
// app.post('/sign-in',async (req,res)=>{
//     let {email,password} = req.body
//     try {
//         let user = await db.users.findAll({where: {email:email}}) //check if email already exists in db
//         if (user.length >0){ //email is a match
//             const result = await bcrypt.compare(password, user.password)
//             if(result) {
//                 const token = jwt.sign({ name: user.name }, process.env.SECRET_KEY)
        
//                 res.json({ success: true, token: token, name: user.name })
//             }else {
//                 res.json({ success: false, message: 'Username or password is incorrect.' })
           
//             }
//         }
//     } catch (error) {
//         res.json({success: false, message: error})
//     }
// })
// app.post('/add-produt',async (req,res)=>{
//     let {category,listingName, listingDescription,imageURL,listingPrice,buyerID, qty, total = qty * listingPrice} = req.body
//     try {
//         let userID = req.headers
//         let newItem = await db.products.create({userID,category,listingName, listingDescription,imageURL,listingPrice,buyerID, qty})
//         res.json(newItem)
//     } catch (error) {
//         res.json({success: false, message: error})
//     }
// })
app.listen(PORT, ()=>{
    console.log(`listening on PORT ${PORT}`);
})