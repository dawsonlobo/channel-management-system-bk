import { Schema, model, Document } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     files:
 *       type: object
 *       required:
 *         - pathUrl
 *         - name
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique ID of the file
 *         pathUrl:
 *           type: string
 *           description: Path URL of the file
 *         name:
 *           type: string
 *           description: Name of the file
 *         date:
 *           type: string
 *           format: date-time
 *           description: Date associated with the file
 *         isEnabled:
 *           type: boolean
 *           description: File status
 *         isDeleted:
 *           type: boolean
 *           description: File deletion status
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: File creation timestamp
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Last file update timestamp
 */
interface IFile extends Document {
  pathUrl: string;
  name: string;
  date?: Date;
  isEnabled: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const FileSchema = new Schema<IFile>(
  {
    pathUrl: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: Date },
    isEnabled: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true,versionKey:false }
);

const FileModel = model<IFile>("files", FileSchema);

export { IFile, FileModel };
