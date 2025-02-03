import { Schema, model, Document } from "mongoose";
import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     VehicleAccess:
 *       type: object
 *       required:
 *         - vehicleId
 *         - passId
 *         - passType
 *         - isPassed
 *         - status
 *         - isEnabled
 *         - isDeleted
 *       properties:
 *         _id:
 *           type: string
 *           format: ObjectId
 *           description: The unique ID of the vehicle access entry
 *         vehicleId:
 *           type: string
 *           format: ObjectId
 *           description: ID of the vehicle associated with the access entry
 *         passId:
 *           type: string
 *           description: ID of the pass
 *         passType:
 *           type: string
 *           description: Type of the pass (e.g., RFID, Biometric)
 *         isPassed:
 *           type: boolean
 *           description: Whether the vehicle has passed the access point
 *         status:
 *           type: string
 *           enum: ["EXPIRED", "ACTIVE"]
 *           description: Status of the vehicle access (e.g., expired or active)
 *         expiry:
 *           type: string
 *           format: date
 *           description: Expiry date of the vehicle access
 *         isEnabled:
 *           type: boolean
 *           description: Whether the access is enabled
 *         isDeleted:
 *           type: boolean
 *           description: Whether the access record is marked as deleted
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the vehicle access record was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the vehicle access record was last updated
 */

interface IVehicleAccess extends Document {
  vehicleId: mongoose.Types.ObjectId;
  passId: string;
  passType: string;
  isPassed: boolean;
  status: "EXPIRED" | "ACTIVE";
  expiry: Date;
  isEnabled: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const VehicleAccessSchema = new Schema<IVehicleAccess>(
  {
    vehicleId: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle", required: true },
    passId: { type: String, required: true },
    passType: { type: String, required: true },
    isPassed: { type: Boolean, required: true },
    status: { type: String, enum: ["EXPIRED", "ACTIVE"], required: true },
    expiry: { type: Date, required: true },
    isEnabled: { type: Boolean, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true,
    //usePushEach: true,
    bufferCommands: true,
    versionKey: false }
);

const VehicleAccessModel = model<IVehicleAccess>("VehicleAccess", VehicleAccessSchema);

export { IVehicleAccess, VehicleAccessModel };
