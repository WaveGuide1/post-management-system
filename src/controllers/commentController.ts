import { Request, Response } from 'express';
import { createComment, getCommentsByPost } from '../services/commentService';
import { CustomError } from '../utils/customException'


interface AuthenticatedRequest extends Request {
    user?: { id: string };
}

export const addComment = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const { postId, content, parentCommentId } = req.body;
        if (!req.user) {
            throw new CustomError('User is not authenticated', 401);
        }
        const userId = req.user.id;
        const comment = await createComment(userId, postId, content, parentCommentId);
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Error adding comment', error });
    }
};

export const getComments = async (req: Request, res: Response) => {
    console.log(req.params);
    
    try {
        const { postId } = req.params;
        
        const comments = await getCommentsByPost(postId);
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving comments', error });
    }
};
