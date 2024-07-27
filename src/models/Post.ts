import mongoose, { Document, Schema } from 'mongoose';

export interface IPost extends Document {
    user: mongoose.Schema.Types.ObjectId;
    content: string;
    image: string;
    category: string;
    upvotes: number;
    downvotes: number;
    viewCount: number;
    replyCount: number;
}

const PostSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    image: { type: String },
    category: { type: String, required: true },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    viewCount: { type: Number, default: 0 },
    replyCount: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model<IPost>('Post', PostSchema);