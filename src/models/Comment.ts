import mongoose, { Document, Schema } from 'mongoose';

export interface IComment extends Document {
    user: mongoose.Types.ObjectId;
    post: mongoose.Types.ObjectId;
    content: string;
    parentComment?: mongoose.Types.ObjectId;
}

const commentSchema: Schema = new Schema({
    user: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
    post: { type: mongoose.Types.ObjectId, ref: 'Post', required: true },
    content: { type: String, required: true },
    parentComment: { type: mongoose.Types.ObjectId, ref: 'Comment', default: null }
}, {
    timestamps: true
});

export default mongoose.model<IComment>('Comment', commentSchema);