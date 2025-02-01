import express from 'express';

const router = express.Router();


/**
 * @swagger
 * /auth/send-otp:
 *   post:
 *     tags: ['Auth']
 *     summary: Send OTP for phone-based authentication
 *     description: Sends a one-time password (OTP) to the user's phone for authentication.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - phone
 *             properties:
 *               phone:
 *                 type: string
 *                 description: User's phone number
 *                 example: 9876543210
 *     responses:
 *       200:
 *         description: OTP sent successfully
 *       400:
 *         description: Invalid or missing phone number
 *       500:
 *         description: Server error
 */
router.post('/send-otp', (req, res) => {
  res.send('Send OTP route');
});

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags: ['Auth']
 *     summary: Login with OTP
 *     description: Verify OTP and generate JWT tokens
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - phone
 *               - otp
 *               - countrycode
 *             properties:
 *               phone:
 *                 type: string
 *                 description: User's phone number
 *                 example: "1234567890"
 *               otp:
 *                 type: string
 *                 description: One-time password
 *                 example: "1234"
 *               countrycode:
 *                 type: string
 *                 description: countrycode
 *                 example: +91
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accessToken:
 *                   type: string
 *                   description: JWT access token
 *                 refreshToken:
 *                   type: string
 *                   description: JWT refresh token
 *       400:
 *         description: Invalid OTP
 *       500:
 *         description: Server error
 */
router.post('/login', (req, res) => {
  res.send('Login route');
});

/**
 * @swagger
 * /auth/refresh-token:
 *   post:
 *     tags: ['Auth']
 *     summary: Refresh access token
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
 *                 refreshToken:
 *                   type: string
 *                   description: New refresh token
 *       400:
 *         description: Invalid refresh token
 *       500:
 *         description: Server error
 */
router.post('/refresh-token', (req, res) => {
  res.send('Refresh token route');
});

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     tags: ['Auth']
 *     summary: Logout user
 *     description: Logs out the user by invalidating their JWT tokens
 *     responses:
 *       200:
 *         description: User logged out successfully
 *       500:
 *         description: Server error
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
 *               name:
 *                 type: string
 *                 description: Updated name
 *                 example: "John Smith"
 *               phone:
 *                 type: string
 *                 description: Updated phone number
 *                 example: "9876543210"
 *     responses:
 *       200:
 *         description: Profile updated successfully
 *       400:
 *         description: Invalid data
 *       500:
 *         description: Server error
 */
router.put('/update-profile', (req, res) => {
  res.send('Update profile route');
});

/**
 * @swagger
 * /auth/get-profile:
 *   get:
 *     tags: ['Auth']
 *     summary: Get user profile
 *     description: Fetches the user's profile information
 *     responses:
 *       200:
 *         description: User profile fetched successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: User's full name
 *                   example: "John Doe"
 *                 phone:
 *                   type: string
 *                   description: User's phone number
 *                   example: "1234567890"
 *       500:
 *         description: Server error
 */
router.get('/get-profile', (req, res) => {
  res.send('Get profile route');
});

export default router;
