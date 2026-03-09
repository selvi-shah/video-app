import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Temporary debug - remove after fixing
console.log("Cloudinary config:", {
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY ? "EXISTS" : "UNDEFINED",
    api_secret: process.env.CLOUDINARY_API_SECRET ? "EXISTS" : "UNDEFINED"
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        //upload the file on cloudinary
        console.log(localFilePath);

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type:"auto"
        })
        //file has been uploaded successfully
        console.log("File is uploaded on cloudinary", response.url);
        return response;
    } catch (error) {
        console.log(error);
        fs.unlinkSync(localFilePath) //remove the locally saved file as the upload operation got failed
        return null;
    }
}

export {uploadOnCloudinary} 

