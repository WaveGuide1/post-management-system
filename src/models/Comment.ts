import mongoose, { Document, Schema } from 'mongoose';

export interface IComment extends Document {
    post: mongoose.Schema.Types.ObjectId;
    user: mongoose.Schema.Types.ObjectId;
    content: string;
}

const CommentSchema: Schema = new Schema({
    post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<IComment>('Comment', CommentSchema);