import { Schema, model, Document } from "mongoose";
import mongoose, { Model } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - role
 *         - countryCode
 *         - phone
 *       properties:
 *         _id:
 *           type: integer
 *           description: The unique ID of the user
 *         name:
 *           type: string
 *           description: Name of the user
 *         email:
 *           type: string
 *           description: Email of the user
 *         password:
 *           type: string
 *           description: Password for the user
 *         role:
 *           type: string
 *           enum: ['manager', 'receptionist']
 *           description: Role of the user
 *         countryCode:
 *           type: string
 *           description: Country code of the user's phone number
 *         phone:
 *           type: string
 *           description: The user's phone number
 *         isDeleted:
 *           type: boolean
 *           description: Whether the user is marked as deleted
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the user was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the user details were last updated
 */

interface IUser extends Document {
  _id: number;
  name: string;
  email: string;
  password: string;
  role: "admin"|"manager";
  countryCode: string;
  phone: string;
  isDeleted?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    _id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin","manager"], required: true },
    countryCode: { type: String, required: true },
    phone: { type: String, required: true },  // Phone number as a string
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const UserModel = model<IUser>("users", UserSchema);

export { IUser, UserModel };
