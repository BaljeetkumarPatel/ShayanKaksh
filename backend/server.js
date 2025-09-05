import express from 'express';
import "dotenv/config";
import cors from 'cors';
import connectDB from './configs/db.js';
const PORT =5000;
import { clerkMiddleware } from "@clerk/express";
import ClerkWebhooks from './controllers/clerkWebhooks.js';
import UserRouter from './routes/userRoutes.js';
import hotelRouter from './routes/hotelRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import roomRouter from './routes/roomRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';
import { stripePayment } from './controllers/bookingController.js';
import { stripeWebhooks } from './controllers/stripeWebhooks.js';

connectDB();
connectCloudinary();
//app
const app = express();


app.use(cors());  //allow to backend to any frontend-Enable cross-origin resource sharing

//api to listen to sstripe wwebhooks
app.post('/api/stripe',express.raw({type:'application/json'}),stripeWebhooks);

//Middleware
app.use(express.json()); //to accept json data in body of request mean all request will pass in json method
app.use(clerkMiddleware()); //clerk middleware


//Api to listen webhook request from clerk
app.use('/api/clerk',ClerkWebhooks);

app.get('/',(req,res)=>res.send("Api is Working"))
app.use('/api/user',  UserRouter); 
app.use('/api/hotels',  hotelRouter);
app.use('/api/rooms',roomRouter);
app.use('/api/bookings',bookingRouter);

app.listen(PORT,console.log(`Server is running on port ${PORT}`));