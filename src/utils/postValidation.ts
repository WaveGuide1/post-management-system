import Joi from 'joi';

export const postSchema = Joi.object({
    content: Joi.string().min(3).required(),
    category: Joi.string().required(),
});

export const editPostSchema = Joi.object({
    content: Joi.string().min(3).required(),
    category: Joi.string().required(),
});