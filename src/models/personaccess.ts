import { Schema, model, Document } from "mongoose";
import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     PersonAccess:
 *       type: object
 *       required:
 *         - userId
 *         - passId
 *         - passType
 *         - accessCard
 *         - accessFace
 *         - accessFPrint
 *         - status
 *         - isEnabled
 *         - isDeleted
 *       properties:
 *         _id:
 *           type: string
 *           format: ObjectId
 *           description: The unique ID of the person access entry
 *         userId:
 *           type: string
 *           format: ObjectId
 *           description: ID of the user associated with the access entry
 *         passId:
 *           type: string
 *           description: ID of the pass
 *         passType:
 *           type: string
 *           description: Type of the pass (e.g., RFID, Biometric)
 *         accessCard:
 *           type: string
 *           enum: ["DISABLED", "REGISTERED", "ENABLED"]
 *           description: Status of the access card
 *         accessFace:
 *           type: string
 *           enum: ["DISABLED", "REGISTERED", "ENABLED"]
 *           description: Face recognition status
 *         accessFPrint:
 *           type: string
 *           enum: ["DISABLED", "REGISTERED", "ENABLED"]
 *           description: Fingerprint status
 *         status:
 *           type: string
 *           enum: ["EXPIRED", "ACTIVE"]
 *           description: Status of the access (e.g., expired or active)
 *         expiry:
 *           type: string
 *           format: date
 *           description: Expiry date of the access
 *         isEnabled:
 *           type: boolean
 *           description: Whether the access is enabled
 *         isDeleted:
 *           type: boolean
 *           description: Whether the access record is marked as deleted
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the access record was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the access record was last updated
 */

interface IPersonAccess extends Document {
  userId: mongoose.Types.ObjectId;
  passId: string;
  passType: string;
  accessCard: "DISABLED" | "REGISTERED" | "ENABLED";
  accessFace: "DISABLED" | "REGISTERED" | "ENABLED";
  accessFPrint: "DISABLED" | "REGISTERED" | "ENABLED";
  status: "EXPIRED" | "ACTIVE";
  expiry: Date;
  isEnabled: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const PersonAccessSchema = new Schema<IPersonAccess>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    passId: { type: String, required: true },
    passType: { type: String, required: true },
    accessCard: { type: String, enum: ["DISABLED", "REGISTERED", "ENABLED"], required: true },
    accessFace: { type: String, enum: ["DISABLED", "REGISTERED", "ENABLED"], required: true },
    accessFPrint: { type: String, enum: ["DISABLED", "REGISTERED", "ENABLED"], required: true },
    status: { type: String, enum: ["EXPIRED", "ACTIVE"], required: true },
    expiry: { type: Date, required: true },
    isEnabled: { type: Boolean, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true,
    //usePushEach: true,
    bufferCommands: true,
    versionKey: false
   }
);

const PersonAccessModel = model<IPersonAccess>("PersonAccess", PersonAccessSchema);

export { IPersonAccess, PersonAccessModel };
