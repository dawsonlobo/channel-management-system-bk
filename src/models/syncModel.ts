import mongoose, { Schema, Document } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Sync:
 *       type: object
 *       required:
 *         - platform
 *         - roomId
 *         - lastSync
 *         - status
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique ID of the sync entry
 *         platform:
 *           type: string
 *           description: The platform where the room sync status is being tracked
 *         roomId:
 *           type: string
 *           description: The ID of the room associated with this sync
 *         lastSync:
 *           type: string
 *           format: date-time
 *           description: The timestamp when the last sync occurred
 *         status:
 *           type: string
 *           enum: ['success', 'failed', 'pending']
 *           description: The current status of the sync operation
 *         isDeleted:
 *           type: boolean
 *           description: Whether the sync record is marked as deleted
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the sync record was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the sync record was last updated
 */

export interface ISync extends Document {
  platform: string;
  roomId: mongoose.Types.ObjectId;
  lastSync: Date;
  status: "success" | "failed" | "pending";
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const SyncSchema = new Schema<ISync>(
  {
    platform: { type: String, required: true },
    roomId: { type: Schema.Types.ObjectId, ref: "Room", required: true },
    lastSync: { type: Date, default: Date.now },
    status: { type: String, enum: ["success", "failed", "pending"], default: "pending" },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<ISync>("Sync", SyncSchema);
