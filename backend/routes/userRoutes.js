//Defines the API endpoints for users and connects them to controller functions.

import express from 'express'; //create router
import { getUserData, storeRecentSearch } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const UserRouter = express.Router(); //import controller functions

UserRouter.get('/',protect, getUserData);  
UserRouter.post('/store-recent-search',protect, storeRecentSearch);


export default UserRouter;