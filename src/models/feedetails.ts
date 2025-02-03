import { Schema, model, Document } from "mongoose";
import mongoose from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     FeeDetails:
 *       type: object
 *       required:
 *         - type
 *         - roleType
 *         - perDay
 *         - perMonth
 *       properties:
 *         _id:
 *           type: string
 *           format: ObjectId
 *           description: The unique ID of the fee detail
 *         type:
 *           type: string
 *           enum: ["PERSON", "VEHICLE"]
 *           description: Type of fee applicable
 *         roleType:
 *           type: string
 *           description: Role associated with the fee
 *         perDay:
 *           type: number
 *           description: Daily fee amount
 *         perMonth:
 *           type: number
 *           description: Monthly fee amount
 *         isDeleted:
 *           type: boolean
 *           description: Whether the fee detail is marked as deleted
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the fee detail was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the fee detail was last updated
 */

interface IFeeDetails extends Document {
  type: "PERSON" | "VEHICLE";
  roleType: string;
  perDay: number;
  perMonth: number;
  isDeleted?: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const FeeDetailsSchema = new Schema<IFeeDetails>(
  {
    type: { type: String, enum: ["PERSON", "VEHICLE"], required: true },
    roleType: { type: String, required: true },
    perDay: { type: Number, required: true },
    perMonth: { type: Number, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true,
    //usePushEach: true,
    bufferCommands: true,
    versionKey: false }
);

const FeeDetailsModel = model<IFeeDetails>("feeDetails", FeeDetailsSchema);

export { IFeeDetails, FeeDetailsModel };
