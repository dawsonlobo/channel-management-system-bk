import express from 'express';

const router = express.Router();
/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: ['Auth']
 *     summary: Login with email and password
 *     description: Authenticate user using email and password, and generate JWT tokens
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 description: User's password
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "Login successful"
 *                 data:
 *                   type: object
 *                   properties:
 *                     accessToken:
 *                       type: string
 *                       description: JWT access token
 *                     refreshToken:
 *                       type: string
 *                       description: JWT refresh token
 *                     email:
 *                       type: string
 *                       description: User's email address
 *                       example: "user@example.com"   
 */
router.post('/login', (req, res) => {
  res.send('Login route');
});

/**
 * @swagger
 * /auth/refresh-token:
 *   post:
 *     tags: ['Auth']
 *     summary: generate a new access token
 *     description: Generate a new access token using a valid refresh token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - refreshToken
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 description: Refresh token from previous login
 *                 example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkVCJ9..."
 *     responses:
 *       200:
 *         description: Successfully refreshed access token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   description: New JWT access token
 *       400:
 *         description: Invalid refresh token
 *       500:
 *         description: Server error
 */
router.post('/refresh', (req, res) => {
  res.send('Refresh token route');
});
/**
 * @swagger
 * /auth/logout:
 *   post:
 *     tags: ['Auth']
 *     summary: Logout user
 *     description: Logs out the user by invalidating their JWT tokens.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - refreshToken
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 description: Refresh token to invalidate and log out the user
 *                 example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkVCJ9..."
 *     responses:
 *       200:
 *         description: User logged out successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   description: Response status
 *                   example: "200,"
 *                 message:
 *                   type: string
 *                   description: Response message
 *                   example: "Success,"
 *                 data:
 *                   type: string
 *                   description: Logout result
 *                   example: "Logout Successful"
 */
router.post('/logout', (req, res) => {
    res.send('Logout route');
  });
  
/**
 * @swagger
 * /auth/update-profile:
 *   put:
 *     tags: ['Auth']
 *     summary: Update user profile
 *     description: Allows the user to update their profile information
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstname:
 *                 type: string
 *                 description: Updated first name
 *                 example: "John"
 *               lastname:
 *                 type: string
 *                 description: Updated last name
 *                 example: "Smith"
 *               phone:
 *                 type: string
 *                 description: Updated phone number
 *                 example: "9876543210"
 *               countrycode:
 *                 type: string
 *                 description: Updated country code
 *                 example: "+91"
 *               password:
 *                  type: string
 *                  description: Updated password
 *                  example: "password123"
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 message:
 *                   type: string
 *                   example: "Profile updated successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     firstname:
 *                       type: string
 *                     lastname:
 *                       type: string
 *                     phone:
 *                       type: string
 *                     countrycode:
 *                       type: string
 *                     password:
 *                       type: string
 */

router.put('/update-profile', (req, res) => {
  res.send('Update profile route');
});

/**
 * @swagger
 * /auth/get-profile:
 *   post:
 *     tags: ['Auth']
 *     summary: Fetch user profile information
 *     description: Fetch detailed user profile information with selective projections
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               project:
 *                 type: object
 *                 description: Fields to be projected in the response
 *                 properties:
 *                   name:
 *                     type: integer
 *                     example: 1
 *                   phone:
 *                     type: integer
 *                     example: 1
 *                   email:
 *                     type: integer
 *                     example: 1
 *     responses:
 *       200:
 *         description: Successful response with user data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: "Success"
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: "66588adb21f1e6f99d33bb74"
 *                     name:
 *                       type: string
 *                       example: "rakshitha"
 *                     phone:
 *                       type: string
 *                       example: "9008734521"
 *                     role:
 *                       type: string
 *                       example: "ADMIN"
 *                     countryCode:
 *                       type: integer
 *                       example: 91
 *                     isDeleted:
 *                       type: boolean
 *                       example: false
 *                     isEnabled:
 *                       type: boolean
 *                       example: true
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-05-30T14:19:07.340Z"
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2024-06-15T08:37:23.503Z"
 *                     changedCountryCode:
 *                       type: integer
 *                       example: 91
 *                     changedPhone:
 *                       type: string
 *                       example: "9353068588"
 */


router.post('/get-profile', (req, res) => {
  res.send('Get profile route');
});

export default router;
