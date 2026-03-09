import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants.js";



// const connectDB = async () => {
//     try{
//         console.log("ENV VALUE:", process.env.MONGODB_URI);
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`/n MongoDB connected !! DB host: ${connectionInstance.connection.host}`);
//     } catch (error){
//         console.log("MONGODB Connection error", error);
//         process.exit(1)
//     }
// }

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`\nMongoDB connected!! DB host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB Connection error", error);
        process.exit(1)
    }
}

export default connectDB;

