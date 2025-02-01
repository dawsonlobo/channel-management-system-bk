import mongoose, { Schema, Document } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Booking:
 *       type: object
 *       required:
 *         - userId
 *         - roomId
 *         - checkIn
 *         - checkOut
 *         - status
 *         - totalAmount
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique ID of the booking
 *         userId:
 *           type: string
 *           description: The ID of the user who made the booking
 *         roomId:
 *           type: string
 *           description: The ID of the room booked
 *         checkIn:
 *           type: string
 *           format: date-time
 *           description: The check-in date and time
 *         checkOut:
 *           type: string
 *           format: date-time
 *           description: The check-out date and time
 *         status:
 *           type: string
 *           enum: ['confirmed', 'pending', 'cancelled']
 *           description: The current status of the booking
 *         totalAmount:
 *           type: number
 *           description: The total amount for the booking
 *         isDeleted:
 *           type: boolean
 *           description: Whether the booking is marked as deleted
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the booking was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the booking details were last updated
 */

export interface IBooking extends Document {
  userId: mongoose.Types.ObjectId;
  roomId: mongoose.Types.ObjectId;
  checkIn: Date;
  checkOut: Date;
  status: "confirmed" | "pending" | "cancelled";
  totalAmount: number;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    roomId: { type: Schema.Types.ObjectId, ref: "Room", required: true },
    checkIn: { type: Date, required: true },
    checkOut: { type: Date, required: true },
    status: { type: String, enum: ["confirmed", "pending", "cancelled"], default: "pending" },
    totalAmount: { type: Number, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IBooking>("Booking", BookingSchema);
