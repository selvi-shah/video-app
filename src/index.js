import connectDB from "./db/index.js";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { app } from "./app.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });


connectDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port ${process.env.PORT}`);
    })
}).catch((err) => {
    console.log("Mongo db connection failed!!", err);
})