import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export const validateRequest = (schema: Joi.Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);
        if (error) {
            console.error('Validation error:', error.details[0].message);
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    };
};