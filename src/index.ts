import express, { Request, Response } from "express";
import { setupSwagger } from "./swagger"; // adjust the path if necessary
import { connectDB } from "./database"; // Import database connection
import deviceRoutes from './routes/devices' // Import the device routes

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Setup Routes
// Setup Swagger
setupSwagger(app);


app.use('/devices', deviceRoutes); // Use device routes for the devices API

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  
  // Connect to MongoDB
  connectDB().then((db) => {
    const usersCollection = db.collection("users");

    // Sample API to fetch users
    app.get("/users", async (req: Request, res: Response) => {
      try {
        const users = await usersCollection.find().toArray();
        res.json(users);
      } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
      }
    });
  });
});
