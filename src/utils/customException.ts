import { Request, Response, NextFunction } from 'express';

export class CustomError extends Error {
    status: number;
    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    }
}

export const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
};