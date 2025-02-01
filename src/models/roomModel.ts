import { Schema, model, Document } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Room:
 *       type: object
 *       required:
 *         - hotelId
 *         - roomType
 *         - price
 *         - capacity
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique ID of the room
 *         hotelId:
 *           type: string
 *           description: The hotel ID the room belongs to
 *         roomType:
 *           type: string
 *           description: The type of the room (e.g., single, double, suite)
 *         price:
 *           type: number
 *           description: The price of the room per night
 *         availability:
 *           type: boolean
 *           description: Availability status of the room
 *         capacity:
 *           type: number
 *           description: The maximum number of people the room can accommodate
 *         amenities:
 *           type: array
 *           items:
 *             type: string
 *           description: A list of amenities provided in the room
 *         isDeleted:
 *           type: boolean
 *           description: Whether the room is marked as deleted
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the room was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the room details were last updated
 */

interface IRoom extends Document {
  hotelId: string;
  roomType: string;
  price: number;
  availability: boolean;
  capacity: number;
  amenities: string[];
  isDeleted?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const RoomSchema = new Schema<IRoom>(
  {
    hotelId: { type: String, required: true },
    roomType: { type: String, required: true },
    price: { type: Number, required: true },
    availability: { type: Boolean, default: true },
    capacity: { type: Number, required: true },
    amenities: { type: [String], default: [] },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const RoomModel = model<IRoom>("Room", RoomSchema);

export { IRoom, RoomModel };
