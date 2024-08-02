import Comment from '../models/Comment';
import Post from '../models/Post';

class CommentService {
    async createComment(content: string, postId: string, userId: string) {
        const post = await Post.findById(postId);
        if (!post) {
            throw new Error('Post not found');
        }

        const comment = new Comment({
            content,
            postId,
            userId
        });

        await comment.save();
        return comment;
    }

    async getCommentsByPost(postId: string) {
        const comments = await Comment.find({ postId }).populate('userId', 'username profilePic').sort({ createdAt: -1 });
        return comments;
    }
}

export default new CommentService();