import { Schema, model, Document } from "mongoose";
import mongoose, { Model } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Device:
 *       type: object
 *       required:
 *         - deviceName
 *         - ipAddress
 *         - portNumber
 *         - deviceType
 *         - status
 *       properties:
 *         _id:
 *           type: string
 *           format: ObjectId
 *           description: The unique ID of the device
 *         deviceName:
 *           type: string
 *           description: Name of the device
 *         ipAddress:
 *           type: string
 *           description: IP address of the device
 *         portNumber:
 *           type: string
 *           description: Port number associated with the device
 *         deviceType:
 *           type: string
 *           enum: ['CCTV', 'BIOMETRIC', 'UHF_READER']
 *           description: Type of the device
 *         isDeleted:
 *           type: boolean
 *           description: Whether the device is marked as deleted
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the device was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the device details were last updated
 *         status:
 *           type: string
 *           enum: ['ACTIVE', 'INACTIVE']
 *           description: Status of the device
 */

interface IDevice extends Document {
  deviceName: string;
  ipAddress: string;
  portNumber: string;
  deviceType: "CCTV" | "BIOMETRIC" | "UHF_READER";
  isDeleted?: boolean;
  createdAt: Date;
  updatedAt: Date;
  status: "ACTIVE" | "INACTIVE";
}

const DeviceSchema = new Schema<IDevice>(
  {
    deviceName: { type: String, required: true },
    ipAddress: { type: String, required: true },
    portNumber: { type: String, required: true },
    deviceType: { type: String, enum: ["CCTV", "BIOMETRIC", "UHF_READER"], required: true },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    status: { type: String, enum: ["ACTIVE", "INACTIVE"], required: true },
  },
  { timestamps: true,
    //usePushEach: true,
    bufferCommands: true,
    versionKey: false }
);

const DeviceModel = model<IDevice>("devices", DeviceSchema);

export { IDevice, DeviceModel };
