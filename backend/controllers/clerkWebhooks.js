import User from "../models/User.js";
import { Webhook } from 'svix'; //svix is a library to handle webhooks and  we hv to create to get user data from clerk

//Webhook from svix: Used to verify that the request is really from Clerk (not a fake).

const ClerkWebhooks= async (req,res)=>{
    try{
        //create a Svix instance with clerk webhook secret mean Uses the secret Clerk gave you to verify incoming requests.
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        // getting header and body of request
        //Clerk sends special headers (svix-*) with each webhook request. We need these headers to verify the request.You must verify these, or else anyone could fake requests to your backend.
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        };

        //Verify the Header
        //Ensures the payload really came from Clerk.
        await whook.verify(JSON.stringify(req.body), headers);

        //Getting data from request body
        //Pulls out user details from Clerk's event payload.
        //Creates a userData object in your app’s format.
        const {data,type} = req.body;

        //create object mean data in userData after getting data from request body
        

        //Switch case statement based different type of eveent recieving fron request body
        switch(type){
            case "user.created":{ //when user is created
                const userData={
                     _id:data.id,
                     email:data.email_addresses[0].email_address,
                     username:data.first_name + " " + data.last_name,
                     image:data.profile_image_url,
                }
                //create new user in database
                await User.create(userData);
                break;
            }
            case "user.updated":{//when user is updated
                 const userData={
                     _id:data.id,
                     email:data.email_addresses[0].email_address,
                     username:data.first_name + " " + data.last_name,
                     image:data.profile_image_url,
                 }
                //update user in database
                await User.findByIdAndUpdate(data.id,userData);
                break;
                }
            case "user.deleted": //when user is deleted
                //delete user from database
                await User.findByIdAndDelete(data.id);
                break;
            default:
                break;
        }

        //Confirms that your backend received and handled the webhook.

        res.json({success:true,message: "Webhook received"});

    } catch(error){
        console.log(error.message);
        res.json({success:false,message:error.message});
    }


}


export default ClerkWebhooks;