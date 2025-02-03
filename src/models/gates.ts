import { Schema, model, Document } from "mongoose";
import mongoose, { Model } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Gate:
 *       type: object
 *       required:
 *         - gateNoName
 *         - gateDirection
 *       properties:
 *         _id:
 *           type: string
 *           format: ObjectId
 *           description: The unique ID of the gate
 *         gateNoName:
 *           type: string
 *           description: Name or number of the gate
 *         gateDirection:
 *           type: string
 *           enum: ['IN', 'OUT']
 *           description: Direction of the gate
 *         assignedUserid:
 *           type: string
 *           format: ObjectId
 *           description: User assigned to the gate
 *         uhfid:
 *           type: string
 *           format: ObjectId
 *           description: UHF Reader ID associated with the gate
 *         cctvid:
 *           type: string
 *           format: ObjectId
 *           description: CCTV ID associated with the gate
 *         biometricid:
 *           type: string
 *           format: ObjectId
 *           description: Biometric device ID associated with the gate
 *         isDeleted:
 *           type: boolean
 *           description: Whether the gate is marked as deleted
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the gate was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the gate details were last updated
 */

interface IGate extends Document {
  gateNoName: string;
  gateDirection: "IN" | "OUT";
  assignedUserid?: mongoose.Types.ObjectId;
  uhfid?: mongoose.Types.ObjectId;
  cctvid?: mongoose.Types.ObjectId;
  biometricid?: mongoose.Types.ObjectId;
  isDeleted?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const GateSchema = new Schema<IGate>(
  {
    gateNoName: { type: String, required: true },
    gateDirection: { type: String, enum: ["IN", "OUT"], required: true },
    assignedUserid: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    uhfid: { type: mongoose.Schema.Types.ObjectId, ref: "UHFReader" },
    cctvid: { type: mongoose.Schema.Types.ObjectId, ref: "CCTV" },
    biometricid: { type: mongoose.Schema.Types.ObjectId, ref: "Biometric" },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true,
    //usePushEach: true,
    bufferCommands: true,
    versionKey: false }
);

const GateModel = model<IGate>("gates", GateSchema);

export { IGate, GateModel };
