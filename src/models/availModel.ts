import mongoose, { Schema, Document } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Availability:
 *       type: object
 *       required:
 *         - roomId
 *         - date
 *         - status
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique ID of the availability entry
 *         roomId:
 *           type: string
 *           description: The ID of the room associated with the availability
 *         date:
 *           type: string
 *           format: date-time
 *           description: The date for which the availability status is being tracked
 *         status:
 *           type: string
 *           enum: ['available', 'booked', 'blocked']
 *           description: The current availability status of the room for the given date
 *         isDeleted:
 *           type: boolean
 *           description: Whether the availability record is marked as deleted
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the availability record was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the availability record was last updated
 */

export interface IAvailability extends Document {
  roomId: mongoose.Types.ObjectId;
  date: Date;
  status: "available" | "booked" | "blocked";
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const AvailabilitySchema = new Schema<IAvailability>(
  {
    roomId: { type: Schema.Types.ObjectId, ref: "Room", required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ["available", "booked", "blocked"], default: "available" },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IAvailability>("Availability", AvailabilitySchema);
