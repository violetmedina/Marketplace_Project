
const express = require('express');
const app = express();
const cookieSession = require('cookie-session');

// const helmet = require('helmet');
// const passport = require('passport');
// require('./auth/passport-config')(passport); //this passes the global instance of passport to config file and invoking function


const port = 3000;

// const authLogin = (req, res, next) => {
    //check to see if username is on the session

//     if(req.session.username){
//         next()
//     }
//     else{
//         res.redirect('/login')
//     }
// };

const db = require('./models');

app.use(express.static('public'));
app.set('view engine', 'ejs');

// app.use(helmet())


app.use(cookieSession({
    name: 'session',
    keys: ['fhedjklsbsvliughidflugjklbdf'],
    maxAge: 14 * 24 * 60 * 60 * 1000
}));

// app.use(passport.initialize());
// app.use(passport.session());



//magic lines
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use(require('./routes/index'));
app.use(require('./routes/transactions'));
app.use(require('./routes/login'));
app.use(require('./routes/addItems'));
app.use(require('./routes/registration'));


app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})