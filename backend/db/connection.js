import mongoose from "mongoose";

const connectToDb = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
      dbName: 'novelsDB',
    }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("Connected Successfully to the Datebase");
    } catch (error) {
        console.log(error);
    }
}

export default connectToDb