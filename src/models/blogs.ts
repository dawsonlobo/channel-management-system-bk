import mongoose, { Schema, Document } from "mongoose";

/**
 * @swagger
 * components:
 *   schemas:
 *     blogs:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - authorName
 *         - seoTags
 *         - featuredImage
 *         - seoDetails
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique ID of the blog
 *         title:
 *           type: string
 *           description: The title of the blog
 *         description:
 *           type: string
 *           description: A short description of the blog content
 *         authorName:
 *           type: string
 *           description: The name of the author of the blog
 *         seoTags:
 *           type: array
 *           items:
 *             type: string
 *           description: Tags for SEO purposes
 *         featuredImage:
 *           type: string
 *           description: The URL of the featured image for the blog
 *         ogImage:
 *           type: array
 *           items:
 *             type: string
 *           description: Original image URLs
 *         seoDetails:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *               description: The SEO title
 *             description:
 *               type: string
 *               description: The SEO description
 *             handle:
 *               type: string
 *               description: The SEO handle for the blog
 *         isEnabled:
 *           type: boolean
 *           description: Whether the blog is enabled for viewing
 *         isDeleted:
 *           type: boolean
 *           description: Whether the blog is marked as deleted
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the blog was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Timestamp when the blog was last updated
 */

export interface IBlog extends Document {
  title: string;
  description: string;
  authorName: string;
  seoTags: string[];
  featuredImage: string;
  ogImage: string[];
  seoDetails: {
    title: string;
    description: string;
    handle: string;
  };
  isEnabled: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    authorName: { type: String, required: true },
    seoTags: { type: [String], required: true },
    featuredImage: { type: String, required: true },
    ogImage: { type: [String]},
    seoDetails: {
      title: { type: String, required: true },
      description: { type: String, required: true },
      handle: { type: String, required: true },
    },
    isEnabled: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true ,versionKey:false}
);

export default mongoose.model<IBlog>("blogs", BlogSchema);
