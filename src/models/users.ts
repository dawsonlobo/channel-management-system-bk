import mongoose, { Schema, Document } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       required:
 *         - name
 *         - countryCode
 *         - phone
 *         - email
 *         - password
 *         - role
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique ID of the user
 *         name:
 *           type: string
 *           description: The name of the user
 *         countryCode:
 *           type: string
 *           description: The country code of the user's phone number
 *         phone:
 *           type: string
 *           description: The phone number of the user
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the user
 *         password:
 *           type: string
 *           description: The password for the user's account
 *         role:
 *           type: string
 *           description: The role of the user in the system
 *         isEnabled:
 *           type: boolean
 *           description: Whether the user's account is enabled
 *         isDeleted:
 *           type: boolean
 *           description: Whether the user is marked as deleted
 *         isVerified:
 *           type: boolean
 *           description: Whether the user has verified their account
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the user was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the user details were last updated
 */

export interface IUser extends Document {
  name: string;
  countryCode: string;
  phone: string;
  email: string;
  password: string;
  role: string;
  isEnabled: boolean;
  isDeleted: boolean;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    countryCode: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String},
    isEnabled: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("users", UserSchema);
