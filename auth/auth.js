
const authLogin = (req, res, next) => {
    //check to see if username is on the session

    if(req.session.userID){
        console.log("session ID", req.session.userID);
        next()
    }
    else{
        res.redirect('/login')
    }
};

module.exports = authLogin
