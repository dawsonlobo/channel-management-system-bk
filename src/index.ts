import express from 'express';
import { setupSwagger } from './swagger'; // adjust the path if necessary
 // assuming you have route definitions in routes/index.ts

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
});
