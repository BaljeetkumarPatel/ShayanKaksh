//get user data from database

//GET /api/user

//Gets the logged-in user’s role and their recently searched cities from req.user (which is attached in middleware). and Returns this info as JSON.


export const getUserData= async (req, res) => {
    try{
        const role=req.user.role; 
        const recentSearchedCities=req.user.recentSearchedCities;
        res.json({success:true, role, recentSearchedCities});
    } catch (error) {
        res.json({success:false, message: error.message});
    }
}


//store user recent searched cities
//Gets a city name from the request body. Adds it to the user’s recentSearchedCities array (max 3 cities).
//Saves the updated user back to the database.
//Returns confirmation in JSON.


export const storeRecentSearch= async (req, res) => {
    try{
        const {recentSearchedCity}=req.body;
        const user=await req.user;

        if(user.recentSearchedCities.length <3){
            user.recentSearchedCities.push(recentSearchedCity);
        }
        else{
            user.recentSearchedCities.shift(); //remove first element
            user.recentSearchedCities.push(recentSearchedCity);
        }

        await user.save();
        res.json({success:true, message: 'city added'});
    }
    catch (error) {
        res.json({success:false, message: error.message});
    }
}