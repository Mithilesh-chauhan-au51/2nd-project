 
import dotenv from 'dotenv';
dotenv.config();

import mongoose from "mongoose";
 
  
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

 const Connection = async () => {
    const URL = `mongodb://${dbUser}:${dbPassword}@ac-m715usp-shard-00-00.1koergc.mongodb.net:27017,ac-m715usp-shard-00-01.1koergc.mongodb.net:27017,ac-m715usp-shard-00-02.1koergc.mongodb.net:27017/?ssl=true&replicaSet=atlas-6zla9u-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true });
        console.log("connected successfully");
    } catch (error) {
        console.log(" error while connecting DB", error.message);
    }
 }

  export default Connection;