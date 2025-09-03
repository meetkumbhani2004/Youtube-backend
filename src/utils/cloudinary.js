import { v2 as cloudinary } from "cloudinary";
import fs from "fs"

cloudinary.config({
    cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME',
    api_key: 'process.env.CLOUDINARY_API_KEY',
    api_secret: 'process.env.CLOUDINARY_API_SECRET'
})

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudaniry
        const response = await cloudinary.uploader.upload
        (localFilePath, {
            resource_type: "auto"
        })
        //file has been uploadend sucessfull
        console.log("file is uploaden on cloudinary", response.url);
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // removed the locaaly saved tempory file as upload opration got failed
        return null;
    }
}

export {uploadOnCloudinary}