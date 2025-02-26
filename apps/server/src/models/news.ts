import mongoose, { Document, Schema } from 'mongoose';

// title, description, date, content, author, archiveDate.
export interface INews extends Document {
  title: string;
  description: string;
  date: Date;
  content: string;
  author: string;
  archiveDate: Date | null;
}

const newsSchema = new Schema(
  {
    title: { type: String, minlength: 3, maxlength: 50, required: true },
    description: { type: String, minlength: 10, required: true },
    date: { type: Date, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    archiveDate: { type: Date, default: null },
  },
  { timestamps: true }
);

const News = mongoose.model<INews>('News', newsSchema);

export default News;
