import mongoose from 'mongoose';
import Post, { IPost } from '../models/Post';

export const createPostService = async (userId: string, image: string, content: string, category: string): Promise<IPost> => {
    const newPost = new Post({
        user: new mongoose.Types.ObjectId(userId),
        image,
        content,
        category
    });
    await newPost.save();
    return newPost;
};

export const editPostService = async (postId: string, content: string, category: string): Promise<IPost | null> => {
    const updatedPost = await Post.findByIdAndUpdate(postId, { content, category }, { new: true });
    return updatedPost;
};

export const deletePostService = async (postId: string): Promise<void> => {
    await Post.findByIdAndDelete(postId);
};

export const getPostsService = async (sortBy: string, category: string, limit: number, page: number): Promise<IPost[]> => {
    const sort: { [key: string]: 1 | -1 } = sortBy === 'upvotes' ? { upvotes: -1 } : { createdAt: -1 };
    const filter = category ? { category } : {};
    const posts = await Post.find(filter)
        .sort(sort)
        .limit(limit)
        .skip((page - 1) * limit)
        .populate('user', 'username avatar')
        .exec();
    return posts;
};

export const upvotePostService = async (postId: string): Promise<void> => {
    await Post.findByIdAndUpdate(postId, { $inc: { upvotes: 1 } });
};

export const downvotePostService = async (postId: string): Promise<void> => {
    await Post.findByIdAndUpdate(postId, { $inc: { downvotes: 1 } });
};