import mongoose, { Schema, Document } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     updateEvents:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - featuredImage
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique ID of the update/event
 *         title:
 *           type: string
 *           description: The title of the update/event
 *         description:
 *           type: string
 *           description: A detailed description of the update/event
 *         featuredImage:
 *           type: string
 *           description: The URL of the featured image for the update/event
 *         buttonTitle:
 *           type: string
 *           description: The title of the button displayed for the event
 *         buttonUrl:
 *           type: string
 *           description: The URL that the button points to
 *         isEnabled:
 *           type: boolean
 *           description: Whether the update/event is enabled
 *         isDeleted:
 *           type: boolean
 *           description: Whether the update/event is deleted
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the update/event was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the update/event was last updated
 */

export interface IUpdateEvent extends Document {
  title: string;
  description: string;
  featuredImage: string;
  buttonTitle: string;
  buttonUrl: string;
  isEnabled: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UpdateEventSchema = new Schema<IUpdateEvent>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    featuredImage: { type: String, required: true },
    buttonTitle: { type: String },
    buttonUrl: { type: String },
    isEnabled: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IUpdateEvent>("updateEvents", UpdateEventSchema);
