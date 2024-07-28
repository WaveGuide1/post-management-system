import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './User';
import { IPost } from './Post';

export interface IComment extends Document {
    user: IUser['_id'];
    post: IPost['_id'];
    content: string;
    parentComment: IComment['_id'] | null;
}

const commentSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    content: { type: String, required: true },
    parentComment: { type: Schema.Types.ObjectId, ref: 'Comment', default: null },
}, {
    timestamps: true
});

export default mongoose.model<IComment>('Comment', commentSchema);