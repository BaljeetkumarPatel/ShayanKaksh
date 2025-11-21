// import express from 'express';
// import "dotenv/config";
// import cors from 'cors';
// import connectDB from './configs/db.js';
// const PORT =process.env.PORT || 5000;
// import { clerkMiddleware } from "@clerk/express";
// import ClerkWebhooks from './controllers/clerkWebhooks.js';
// import UserRouter from './routes/userRoutes.js';
// import hotelRouter from './routes/hotelRoutes.js';
// import connectCloudinary from './configs/cloudinary.js';
// import roomRouter from './routes/roomRoutes.js';
// import bookingRouter from './routes/bookingRoutes.js';
// import { stripePayment } from './controllers/bookingController.js';
// import { stripeWebhooks } from './controllers/stripeWebhooks.js';

// connectDB();
// connectCloudinary();
// //app
// const app = express();


// // app.use(cors());  //allow to backend to any frontend-Enable cross-origin resource sharing
// // const allowedOrigins = [
// //   "http://localhost:5173",         // local vite frontend
// //   "https://shayan-kaksh.vercel.app" // deployed frontend
// // ];

// // app.use(
// //   cors({
// //     origin: function (origin, callback) {
// //       if (!origin || allowedOrigins.includes(origin)) {
// //         callback(null, true);
// //       } else {
// //         callback(new Error("Not allowed by CORS"));
// //       }
// //     },
// //     credentials: true, // allow cookies & auth headers
// //   })
// // );

// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://shayan-kaksh.vercel.app"
//     ],
//     methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
//     allowedHeaders: "Content-Type,Authorization",
//     credentials: true,
//   })
// );
// //api to listen to sstripe wwebhooks
// app.post('/api/stripe',express.raw({type:'application/json'}),stripeWebhooks);

// //Middleware
// app.use(express.json()); //to accept json data in body of request mean all request will pass in json method



// //Api to listen webhook request from clerk
// app.use('/api/clerk',ClerkWebhooks);

// app.use(clerkMiddleware()); //clerk middleware

// app.get('/',(req,res)=>res.send("Api is Working"))
// app.use('/api/user',  UserRouter); 
// app.use('/api/hotels',  hotelRouter);
// app.use('/api/rooms',roomRouter);
// app.use('/api/bookings',bookingRouter);

// app.listen(PORT,console.log(`Server is running on port ${PORT}`));

  import express from 'express';
import "dotenv/config";
import cors from 'cors';
import connectDB from './configs/db.js';
import { clerkMiddleware, requireAuth } from "@clerk/express";

import ClerkWebhooks from './controllers/clerkWebhooks.js';
import UserRouter from './routes/userRoutes.js';
import hotelRouter from './routes/hotelRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import roomRouter from './routes/roomRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';
import { stripeWebhooks } from './controllers/stripeWebhooks.js';

const app = express();
const PORT = process.env.PORT || 5000;

// DB + Cloudinary
connectDB();
connectCloudinary();

// ------------ CORS (before everything) ------------
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://shayan-kaksh.vercel.app"
    ],
    credentials: true,
    methods: "GET,POST,PUT,DELETE,PATCH,OPTIONS",
    allowedHeaders: "Content-Type,Authorization"
  })
);

// Allow OPTIONS requests BEFORE Clerk
app.options("*", (req, res) => res.sendStatus(200));


// ------------ STRIPE WEBHOOK (NO CLERK, NO JSON PARSER) ------------
app.post(
  "/api/stripe",
  express.raw({ type: "application/json" }),
  stripeWebhooks
);


// ------------ JSON PARSER ------------
app.use(express.json());


// ------------ CLERK WEBHOOK (must be BEFORE clerkMiddleware) ------------
app.use("/api/clerk", ClerkWebhooks);


// ------------ APPLY CLERK (AFTER webhooks) ------------
app.use(clerkMiddleware());


// ------------ PUBLIC ROUTES (no auth needed) ------------
app.get("/", (req, res) => res.send("API is Working"));
app.use("/api/rooms", roomRouter); // GET /api/rooms is public


// ------------ PROTECTED ROUTES ------------
app.use("/api/user", requireAuth(), UserRouter);
app.use("/api/hotels", requireAuth(), hotelRouter);
app.use("/api/bookings", requireAuth(), bookingRouter);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
