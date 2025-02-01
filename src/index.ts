import { setupSwagger } from "./swagger"; // adjust the path if necessary
// assuming you have route definitions in routes/index.ts
import express, { Request, Response } from "express";
import { connectDB } from "./database"; // Import database connection

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Setup Routes
//app.use('/api', routes); // Mount your route handlers

// Setup Swagger
setupSwagger(app);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  app.use(express.json()); // Middleware for parsing JSON

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

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  });
});
