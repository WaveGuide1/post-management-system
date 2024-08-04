import Comment, { IComment } from '../models/Comment';

export const createComment = async (userId: string, postId: string, content: string, parentCommentId?: string): Promise<IComment> => {
    const comment = new Comment({
        user: userId,
        post: postId,
        content,
        parentComment: parentCommentId || null
    });
    await comment.save();
    return comment;
};

export const getCommentsByPost = async (postId: string) => {
    return await Comment.find({ post: postId }).populate('user', 'username avatar').populate('parentComment');
};
