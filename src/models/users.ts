import { Schema, model, Document } from "mongoose";
import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - firstName
 *         - lastName
 *         - dob
 *         - username
 *         - password
 *         - isEnabled
 *         - isDeleted
 *       properties:
 *         _id:
 *           type: string
 *           format: ObjectId
 *           description: The unique ID of the user
 *         firstName:
 *           type: string
 *           description: First name of the user
 *         lastName:
 *           type: string
 *           description: Last name of the user
 *         dob:
 *           type: string
 *           format: date
 *           description: Date of birth of the user
 *         assignedGateId:
 *           type: string
 *           format: ObjectId
 *           description: ID of the assigned gate (if applicable)
 *         employeeId:
 *           type: string
 *           description: Employee ID of the user (if applicable)
 *         designation:
 *           type: string
 *           description: Designation of the user in the organization
 *         username:
 *           type: string
 *           description: Unique username for the user
 *         password:
 *           type: string
 *           description: Encrypted password of the user
 *         isEnabled:
 *           type: boolean
 *           description: Whether the user account is enabled
 *         isDeleted:
 *           type: boolean
 *           description: Whether the user record is marked as deleted
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the user was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the user was last updated
 */

interface IUser extends Document {
  firstName: string;
  lastName: string;
  dob: Date;
  assignedGateId?: mongoose.Types.ObjectId;
  employeeId?: string;
  designation?: string;
  username: string;
  password: string;
  isEnabled: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dob: { type: Date, required: true },
    assignedGateId: { type: mongoose.Schema.Types.ObjectId, ref: "Gate", required: false },
    employeeId: { type: String, required: false },
    designation: { type: String, required: false },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isEnabled: { type: Boolean, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true,
    //usePushEach: true,
    bufferCommands: true,
    versionKey: false
   }
);

const UserModel = model<IUser>("User", UserSchema);

export { IUser, UserModel };
