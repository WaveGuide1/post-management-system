import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validateComment = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        content: Joi.string().required(),
        postId: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};