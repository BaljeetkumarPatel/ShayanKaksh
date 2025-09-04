import Hotel from "../models/Hotel.js";
import {v2 as cloudinary} from "cloudinary";
import Room from "../models/Room.js";

//api to create new room for a hotel-for creating a new room


export const createRoom = async (req, res) => {
    try{

        //Extract Data from Request-Takes input from frontend (room type, price per night, list of amenities).
        const {roomType,pricePerNight,amenities}=req.body;
        //Uses req.auth.userId (from middleware) to check which hotel the logged-in owner manages.If no hotel is found → returns error.
        const hotel=await Hotel.findOne({owner:req.auth.userId});
        if(!hotel){
            return res.json({success:false,message:"No Hotel Found"});
        }
        //upload image to cluodinary

        const uploadImages=req.files.map(async(file)=>{
            const response= await cloudinary.uploader.upload(file.path);
            return response.secure_url; //Collects all image URLs into images.
        })

        //after uploading all images

        //wait for all upload to complete.Promise.all waits until all images finish uploading.
        const images= await Promise.all(uploadImages)

        //store data in db using room model
        await Room.create({
            hotel:hotel._id,
            roomType,
            pricePerNight: +pricePerNight,
            amenities:JSON.parse(amenities),
            images,
        })
        res.json({success:true,message:"Room created Successfully"});
    }
    catch(error){
        res.json({success:false,message:error.message});
    }
}


//api to get all room
//This controller is for fetching available rooms from the database.
//👉 It is likely used for the “Browse Rooms” / “Search Rooms” page in your hotel booking app.
export const getRooms= async(req,res)=>{
    try {
        //populate:get object inplace of objectId
        const rooms=await Room.find({isAvailable:true}).populate({
            path:'hotel',
            populate:{
                path:'owner',
                select:'image'
            }
        }).sort({createdAt:-1});//Sorts results in descending order by createdAt.Newest rooms appear first (better for user experience).
        res.json({success:true,rooms}); //Returns the rooms data to the frontend.The frontend can then display a list of available rooms with hotel & owner info.
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}

//Api to get all room for a specific hotel
export const getOwnerRooms= async(req,res)=>{
    try {
        const hotelData= await Hotel.findOne({owner:req.auth.userId});
        const rooms=await Room.find({hotel:hotelData._id.toString()}).populate("hotel");
        res.json({success:true,rooms});
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}


//Api to toggle availability of a room

export const toggleRoomAvailability= async(req,res)=>{
    try {
        const {roomId}= req.body;
        const roomData = await Room.findById(roomId);
        roomData.isAvailable= !roomData.isAvailable;
        await roomData.save();
        res.json({success:true,message:"Room availability Updated"});
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}