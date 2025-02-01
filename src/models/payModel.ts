import mongoose, { Schema, Document } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     Payment:
 *       type: object
 *       required:
 *         - bookingId
 *         - amount
 *         - paymentMethod
 *         - status
 *         - transactionId
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique ID of the payment
 *         bookingId:
 *           type: string
 *           description: The ID of the booking associated with this payment
 *         amount:
 *           type: number
 *           description: The amount of money paid
 *         paymentMethod:
 *           type: string
 *           enum: ['credit_card', 'paypal', 'upi']
 *           description: The method used for the payment
 *         status:
 *           type: string
 *           enum: ['completed', 'pending', 'failed']
 *           description: The current status of the payment
 *         transactionId:
 *           type: string
 *           description: The unique ID of the payment transaction
 *         isDeleted:
 *           type: boolean
 *           description: Whether the payment record is marked as deleted
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the payment was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the payment details were last updated
 */

export interface IPayment extends Document {
  bookingId: mongoose.Types.ObjectId;
  amount: number;
  paymentMethod: "credit_card" | "paypal" | "upi";
  status: "completed" | "pending" | "failed";
  transactionId: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const PaymentSchema = new Schema<IPayment>(
  {
    bookingId: { type: Schema.Types.ObjectId, ref: "Booking", required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ["credit_card", "paypal", "upi"], required: true },
    status: { type: String, enum: ["completed", "pending", "failed"], default: "pending" },
    transactionId: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IPayment>("Payment", PaymentSchema);
