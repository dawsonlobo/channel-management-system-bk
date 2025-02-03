import { Schema, model, Document } from "mongoose";
import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Logs:
 *       type: object
 *       required:
 *         - userId
 *         - type
 *         - passId
 *         - gateId
 *         - gateDirection
 *         - accessType
 *       properties:
 *         _id:
 *           type: string
 *           format: ObjectId
 *           description: The unique ID of the log entry
 *         userId:
 *           type: string
 *           format: ObjectId
 *           description: ID of the user associated with the log
 *         type:
 *           type: string
 *           description: Type of log entry
 *         passId:
 *           type: string
 *           description: Pass ID associated with the log
 *         gateId:
 *           type: string
 *           format: ObjectId
 *           description: Gate ID where access was logged
 *         gateDirection:
 *           type: string
 *           enum: ["IN", "OUT"]
 *           description: Direction of gate access
 *         accessType:
 *           type: string
 *           enum: ["CCTV", "BIOMETRIC", "UHF_READER"]
 *           description: Type of access control used
 *         isDeleted:
 *           type: boolean
 *           description: Whether the log entry is marked as deleted
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the log was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the log was last updated
 */

interface ILogs extends Document {
  userId: mongoose.Types.ObjectId;
  type: string;
  passId: string;
  gateId: mongoose.Types.ObjectId;
  gateDirection: "IN" | "OUT";
  accessType: "CCTV" | "BIOMETRIC" | "UHF_READER";
  isDeleted?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const LogsSchema = new Schema<ILogs>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, required: true },
    passId: { type: String, required: true },
    gateId: { type: mongoose.Schema.Types.ObjectId, ref: "Gate", required: true },
    gateDirection: { type: String, enum: ["IN", "OUT"], required: true },
    accessType: { type: String, enum: ["CCTV", "BIOMETRIC", "UHF_READER"], required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true,
    //usePushEach: true,
    bufferCommands: true,
    versionKey: false }
);

const LogsModel = model<ILogs>("logs", LogsSchema);

export { ILogs, LogsModel };
