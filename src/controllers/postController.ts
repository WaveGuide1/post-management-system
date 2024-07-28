import { Request, Response } from 'express';
import { createPostService, editPostService, deletePostService, getPostsService, upvotePostService, downvotePostService } from '../services/postService';
import { CustomError } from '../utils/customException';

interface AuthenticatedRequest extends Request {
    user?: { id: string };
    file?: Express.Multer.File;
}

export const createPost = async (req: AuthenticatedRequest, res: Response) => {
    try {
        if (!req.file) {
            throw new CustomError('Image is required', 400);
        }
        const image = req.file.path;

        if (!req.user) {
            throw new CustomError('User is not authenticated', 401);
        }
        const userId = req.user.id;

        const { content, category } = req.body;
        const post = await createPostService(userId, image, content, category);
        res.status(201).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error creating post', error });
    }
};

export const editPost = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const { content, category } = req.body;
        const { id } = req.params;
        const post = await editPostService(id, content, category);
        if (!post) {
            throw new CustomError('Post not found', 404);
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error editing post', error });
    }
};

export const deletePost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await deletePostService(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post', error });
    }
};

export const getPosts = async (req: Request, res: Response) => {
    try {
        const { sortBy = 'createdAt', category, limit = 10, page = 1 } = req.query;
        const posts = await getPostsService(sortBy.toString(), category?.toString() || '', parseInt(limit.toString()), parseInt(page.toString()));
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving posts', error });
    }
};

export const upvotePost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await upvotePostService(id);
        res.status(200).json({ message: 'Post upvoted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error upvoting post', error });
    }
};

export const downvotePost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await downvotePostService(id);
        res.status(200).json({ message: 'Post downvoted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error downvoting post', error });
    }
};