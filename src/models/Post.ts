import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';

export interface IPost extends Document {
    user: IUser['_id'];
    content: string;
    image: string;
    category: string;
    upvotes: number;
    downvotes: number;
}

const postSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    image: { type: String },
    category: { type: String, required: true },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
}, {
    timestamps: true
});

export default mongoose.model<IPost>('Post', postSchema);