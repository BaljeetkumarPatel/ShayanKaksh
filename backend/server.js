import express from 'express';
import "dotenv/config";
import cors from 'cors';
import connectDB from './configs/db.js';
const PORT = process.env.PORT || 5000;
import { clerkMiddleware } from '@clerk/express'
import ClerkWebhooks from './controllers/clerkWebhooks.js';

connectDB();

//app
const app = express();


app.use(cors());  //allow to backend to any frontend-Enable cross-origin resource sharing

//Middleware
app.use(express.json()); //to accept json data in body of request mean all request will pass in json method
app.use(clerkMiddleware()); //clerk middleware

//Api to listen webhook request from clerk
app.use('/api/clerk',ClerkWebhooks);

app.get('/',(req,res)=>res.send("Api is Working"))


app.listen(PORT,console.log(`Server is running on port ${PORT}`));