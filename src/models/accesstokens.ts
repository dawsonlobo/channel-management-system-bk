import mongoose, { Schema, Document } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     accessTokens:
 *       type: object
 *       required:
 *         - userId
 *         - token
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique ID of the access token
 *         userId:
 *           type: string
 *           description: The unique ID of the user associated with the access token
 *           format: objectid
 *         token:
 *           type: string
 *           description: The access token used for authentication or authorization
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the access token was created
 */

export interface IAccessToken extends Document {
  userId: mongoose.Types.ObjectId;  // Now using ObjectId
  token: string;
  createdAt: Date;
}

const AccessTokenSchema = new Schema<IAccessToken>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },  // Reference to the 'users' collection
    token: { type: String, required: true },
    createdAt: { type: Date},
  },
  { timestamps: false ,versionKey:false}
);

export default mongoose.model<IAccessToken>("accessTokens", AccessTokenSchema);
