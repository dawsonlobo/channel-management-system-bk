import mongoose, { Schema, Document } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     stores:
 *       type: object
 *       required:
 *         - name
 *         - country
 *         - shift1Timings
 *         - shift2Timings
 *         - address
 *         - landlineNumber
 *         - phoneNumber
 *         - emailId
 *         - whatsappNumber
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique ID of the store
 *         name:
 *           type: string
 *           description: The name of the store
 *         country:
 *           type: string
 *           description: The country where the store is located
 *         shift1Timings:
 *           type: string
 *           format: date-time
 *           description: The timing for the first shift
 *         shift2Timings:
 *           type: string
 *           format: date-time
 *           description: The timing for the second shift
 *         address:
 *           type: object
 *           required:
 *               - line1
 *           properties:
 *             line1:
 *               type: string
 *               description: The first line of the store address
 *             line2:
 *               type: string
 *               description: The second line of the store address
 *             country:
 *               type: string
 *               description: The country of the store's address
 *             pincode:
 *               type: string
 *               description: The postal code of the store's location
 *             location:
 *               type: string
 *               description: The location name or city of the store
 *         landlineNumber:
 *           type: string
 *           description: The landline number of the store
 *         phoneNumber:
 *           type: object
 *           properties:
 *             countryCode:
 *               type: string
 *               description: The country code of the phone number
 *             phone:
 *               type: string
 *               description: The phone number of the store
 *         emailId:
 *           type: string
 *           format: email
 *           description: The email address of the store
 *         whatsappNumber:
 *           type: object
 *           properties:
 *             wacode:
 *               type: string
 *               description: The country code for WhatsApp
 *             waphone:
 *               type: string
 *               description: The WhatsApp phone number of the store
 *         isDefault:
 *           type: boolean
 *           description: Indicates if the store is the default one
 *         isEnabled:
 *           type: boolean
 *           description: Indicates if the store is currently enabled
 *         isDeleted:
 *           type: boolean
 *           description: Indicates if the store is marked as deleted
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the store was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the store details were last updated
 */

export interface IStore extends Document {
  name: string;
  country: string;
  shift1Timings: Date;
  shift2Timings: Date;
  address: {
    line1: string;
    line2: string;
    country: string;
    pincode: string;
    location: string;
  };
  landlineNumber: string;
  phoneNumber: {
    countryCode: string;
    phone: string;
  };
  emailId: string;
  whatsappNumber: {
    wacode: string;
    waphone: string;
  };
  isDefault: boolean;
  isEnabled: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const StoreSchema = new Schema<IStore>(
  {
    name: { type: String, required: true },
    country: { type: String, required: true },
    shift1Timings: { type: Date, required: true },
    shift2Timings: { type: Date, required: true },
    address: {
      line1: { type: String, required: true },
      line2: { type: String},
      country: { type: String, required: true },
      pincode: { type: String, required: true },
      location: { type: String, required: true },
    },
    landlineNumber: { type: String, required: true },
    phoneNumber: {
      countryCode: { type: String, required: true },
      phone: { type: String, required: true },
    },
    emailId: { type: String, required: true },
    whatsappNumber: {
      wacode: { type: String, required: true },
      waphone: { type: String, required: true },
    },
    isDefault: { type: Boolean, default: false },
    isEnabled: { type: Boolean, default: false},
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true,versionKey:false }
);

export default mongoose.model<IStore>("stores", StoreSchema);
