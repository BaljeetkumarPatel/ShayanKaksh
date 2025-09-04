//middleware to uplaod image
//This tells multer where and how to store uploaded files.
//diskStorage means → save file directly to server’s file system (like in a /uploads folder).
//The {} is empty now


import multer from "multer";


const upload = multer({storage:multer.diskStorage({})})

export default upload;