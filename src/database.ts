import { MongoClient, Db } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI || "mongodb://localhost:27017"; // Use local or environment variable
const dbName = "cms"; // Your database name

let db: Db;

export async function connectDB(): Promise<Db> {
  if (!db) {
    try {
      const client = new MongoClient(uri);
      await client.connect();
      console.log("Connected to MongoDB successfully");
      db = client.db(dbName);
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error);
      process.exit(1); // Exit on failure
    }
  }
  return db;
}
