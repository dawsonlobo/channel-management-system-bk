import mongoose, { Schema, Document } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     refreshTokens:
 *       type: object
 *       required:
 *         - userId
 *         - token
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique ID of the refresh token
 *         userId:
 *           type: string
 *           description: The unique ID of the user associated with the refresh token
 *           format: objectid
 *         token:
 *           type: string
 *           description: The refresh token used for obtaining new access tokens
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the refresh token was created
 */

export interface IRefreshToken extends Document {
  userId: mongoose.Types.ObjectId;  // Reference to the user
  token: string;
  createdAt: Date;
}

const RefreshTokenSchema = new Schema<IRefreshToken>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },  // Reference to the 'users' collection
    token: { type: String, required: true },
    createdAt: { type: Date, required: true },
  },
  { timestamps: false ,versionKey:false}
);

export default mongoose.model<IRefreshToken>("refreshTokens", RefreshTokenSchema);
