import mongoose, { Schema, Document } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     appointments:
 *       type: object
 *       required:
 *         - appointmentType
 *         - appointmentDate
 *         - customerDetails
 *         - meetingLink
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique ID of the appointment
 *         appointmentType:
 *           type: string
 *           enum: ['VIRTUAL', 'INSTORE']
 *           description: Type of appointment (VIRTUAL or INSTORE)
 *         appointmentDate:
 *           type: string
 *           format: date-time
 *           description: The date and time of the appointment
 *         branchName:
 *           type: string
 *           description: The branch where the appointment is scheduled
 *         status:
 *           type: string
 *           enum: ['COMPLETED', 'NOSHOW', 'CANCELLED']
 *           description: The current status of the appointment
 *         customerDetails:
 *           type: object
 *           required:
 *              - firstName
 *              - lastName
 *              - emailId
 *              - code
 *              - phone
 *           properties:
 *             firstName:
 *               type: string
 *               description: The first name of the customer
 *             lastName:
 *               type: string
 *               description: The last name of the customer
 *             emailId:
 *               type: string
 *               description: The email ID of the customer
 *             code:
 *               type: string
 *               description: country-code
 *             phone:
 *               type: string
 *               description: The phone number of the customer
 *         meetingLink:
 *           type: string
 *           description: The meeting link for virtual appointments
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the appointment was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the appointment was last updated
 */

export interface IAppointment extends Document {
  appointmentType: "VIRTUAL" | "INSTORE";
  appointmentDate: Date;
  branchName: string;
  status: "COMPLETED" | "NOSHOW" | "CANCELLED";
  customerDetails: {
    firstName: string;
    lastName: string;
    emailId: string;
    code: string;
    phone: string;
  };
  meetingLink: string;
  createdAt: Date;
  updatedAt: Date;
}

const AppointmentSchema = new Schema<IAppointment>(
  {
    appointmentType: { type: String, enum: ["VIRTUAL", "INSTORE"], required: true },
    appointmentDate: { type: Date, required: true },
    branchName: { type: String, required: true },
    status: { type: String, enum: ["COMPLETED", "NOSHOW", "CANCELLED"], default: "COMPLETED" },
    customerDetails: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      emailId: { type: String, required: true },
      code: { type: String, required: true },
      phone: { type: String, required: true },
    },
    meetingLink: { type: String, required: true },
  },
  { timestamps: true ,versionKey:false}
);

export default mongoose.model<IAppointment>("appointments", AppointmentSchema);
