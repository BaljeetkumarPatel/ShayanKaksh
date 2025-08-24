import mongoose from "mongoose";

//funtion to connect project to mongoDB database 
const connectDB = async () => {
    try{
        mongoose.connection.on('connected', ()=> console.log("Database connected"));
        await mongoose.connect(`${process.env.MONODB_URI}/SHAYANKAKSH`);
    }
    catch(error){
        console.log(error.message);
    }
}

export default connectDB;