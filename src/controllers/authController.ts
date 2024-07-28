import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/authService';

export const register = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;
        console.log('Registering user with email:', email);
        const user = await registerUser(username, email, password);
        res.status(201).json(user);
    } catch (error) {
        if(error instanceof Error){
        console.error('Register error:', error.message);
        res.status(500).json({ message: 'Error registering user', error });
        }
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        console.log('Logging in user with email:', email);
        const token = await loginUser(email, password);
        if (token) {
            res.status(200).json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        if(error instanceof Error){
        console.error('Login error:', error.message);
        res.status(500).json({ message: 'Error logging in', error });
        }
    }
};