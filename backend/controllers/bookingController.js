import Room from "../models/Room.js";
import Booking from '../models/Booking.js';
import Hotel from '../models/Hotel.js';
import transporter from "../configs/nodemailer.js";
import stripe from 'stripe';

//function to check availability of room

const checkAvailability= async({checkInDate,checkOutDate,room})=>{
    try {
        const bookings=await Booking.find({
            room,
            checkInDate:{$lte:checkOutDate},
            checkOutDate:{$gte:checkInDate},
            
        });

        const isAvailable= bookings.length===0;
        return isAvailable;
    } catch (error) {
        console.error(error.message);
    }
}


//api to check availability of room
//post /api/bookings/check-availability


export const checkAvailabilityAPI= async(req,res)=>{
    try {
        const {room,checkInDate,checkOutDate}= req.body;
        const isAvailable= await checkAvailability({checkInDate,checkOutDate,room});
        res.json({success:true,isAvailable});
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}


//api to create new booking
// post /api/booking/book

export const createBooking=async(req,res)=>{
    try {
        const {room,checkInDate,checkOutDate,guests}= req.body;
        const user=req.user._id;
        //before Booking check Availability
        const isAvailable=await checkAvailability({
            checkInDate,
            checkOutDate,
            room
        });
        if(!isAvailable){
            return res.json({success:false,message:"Room is not available"});
        }

        //Get totalPrice from Room-else condition
        const roomData= await Room.findById(room).populate("hotel");
        let totalPrice=roomData.pricePerNight;

        //calculate total price based on night
        const checkIn= new Data(checkInDate);
        const checkOut=new Data(checkOutDate);
        const timeDiff=checkOut.getTime()-checkIn.getTime();
        const nights= Math.ceil(timeDiff /(1000*3600*24));
        
        totalPrice *=nights;

        const booking= await Booking.create({
            user,
            room,
            hotel:roomData.hotel._id,
            guests: +guests,
            checkInDate,
            checkOutDate,
            totalPrice,
        })

        const mailOptions={
            from:process.env.SENDER_EMAIL,
            to:req.user.email,
            subject:"Hotel Booking Confirmation Details",
            html:`
                <h2>Booking Details</h2>
                <p>Dear ${req.user.username},</p>
                <p>Thank you for your booking. Here are your booking details:</p>
                <ul>
                   <li><strong>Booking ID:</strong> ${booking._id}</li>
                   <li><strong>Hotel Name:</strong> ${roomData.hotel.name}</li>
                   <li><strong>Location:</strong> ${roomData.hotel.address}</li>
                   <li><strong>Date:</strong> ${booking.checkInDate.toDateString()}</li>
                   <li><strong>Booking Amount:</strong>${process.env.CURRENCY || '$'} ${booking.totalPrice} /night</li>
                   <li><strong>Booking ID:</strong> ${booking._id}</li>
                </ul>
                <p>We look forward to Welcome  You!. If you have any questions, feel free to contact us.</p>
            `
        }

        await transporter.sendMail(mailOptions)

        res.json({success:true,message:"Booking created successfully"})

    } catch (error) {
        res.json({success:false,message:"Failed to create booking"});
    }
}


//api to get all booking  for a user
//GET /api/booking/user

export const getUserBookings= async(req,res)=>{
    try {
        const user=req.user._id;
        const bookings= await Booking.find({user}).populate("room hotel").sort({createdAt:-1});
        res.json({success:true,bookings});
    } catch (error) {
        res.json({success:false,message:"Failed to fetch bookings"});
    }
}


export const getHotelBookings=async(req,res)=>{
    try {
        const hotel= await Hotel.findOne({owner:req.auth.userId});
    if(!hotel){
        return res.json({success:false,message:"No Hotel Found!"});
    }

    const bookings= await Booking.find({hotel:hotel._id}).populate("room hotel user").sort({createdAt:-1});

    //Total Booking

    const totalBookings= bookings.length;
    //Total Revenue
    const totalRevenue=bookings.reduce((acc,booking)=>acc + booking.totalPrice,0);
    res.json({success:true,dashboardData:{totalBookings,totalRevenue,bookings}});
    } catch (error) {
        res.json({success:false,message:"Failed to fetch bookings"});
    }
}

export const stripePayment= async(req,res)=>{
    try {
        const {bookingId}= req.body;
        const booking= await Booking.findById(bookingId);
        const roomData=await Room.findById(booking.room).populate('hotel');
        const totalPrice= booking.totalPrice;
        const {origin}= req.headers;
        //stripe instance
        const stripeInstance=new stripe(process.env.STRIPE_SECRET_KEY)

        // creation of line item for stripe payment
        const line_items=[
            {
                price_data:{
                    currency:"usd",
                    product_data:{
                        name:roomData.hotel.name,
                    },
                    unit_amount:totalPrice*100
                },
                quantity:1,
            }
        ]

        //create check out session
        const session=await stripeInstance.checkout.sessions.create({
            line_items,
            mode:"payment",
            success_url:`${origin}/loader/my-bookings` ,
            cancel_url: `${origin}/my-bookings`,
            metadata:{
                bookingId,
            }
        })
        res.json({success:true,url:session.url})
    } catch (error) {
        res.json({success:false,url:"Payment Failed"})
    }
}