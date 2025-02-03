import mongoose, { Schema, Document } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     faqs:
 *       type: object
 *       required:
 *         - topicName
 *         - tags
 *         - questions
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique ID of the FAQ
 *         topicName:
 *           type: string
 *           description: The name of the FAQ topic
 *         tags:
 *           type: array
 *           items:
 *             type: string
 *           description: List of tags related to the FAQ topic
 *         questions:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *                 description: The FAQ question
 *               description:
 *                 type: string
 *                 description: The detailed answer to the question
 *               isEnabled:
 *                 type: boolean
 *                 description: Whether the question is enabled
 *               isDeleted:
 *                 type: boolean
 *                 description: Whether the question is deleted
 *         isEnabled:
 *           type: boolean
 *           description: Whether the FAQ is enabled
 *         isDeleted:
 *           type: boolean
 *           description: Whether the FAQ is deleted
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the FAQ was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the FAQ was last updated
 */

export interface IFAQ extends Document {
  topicName: string;
  tags: string[];
  questions: {
    question: string;
    description: string;
    isEnabled: boolean;
    isDeleted: boolean;
  }[];
  isEnabled: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const FAQSchema = new Schema<IFAQ>(
  {
    topicName: { type: String, required: true },
    tags: { type: [String], required: true },
    questions: [
      {
        question: { type: String, required: true },
        description: { type: String, required: true },
        isEnabled: { type: Boolean, default: false},
        isDeleted: { type: Boolean, default: false },
      },
    ],
    isEnabled: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true ,versionKey:false}
);

export default mongoose.model<IFAQ>("faqs", FAQSchema);
