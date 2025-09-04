import User from '../models/User.js';


//middleware to check if user is authenticated
//function is add as middleware as that will be  executed before excuting the contoller function
//Protects routes by checking authentication.


export const protect = async (req, res, next) => {
    const {userId} = req.auth();
     if(!userId){
        res.json( {success: false, message: 'Not authorized'});
     }
     else{
        const user = await User.findById(userId);
        req.user=user;
        next(); //function to call next middleware
     }
}