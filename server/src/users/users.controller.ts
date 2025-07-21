import { Request, Response, NextFunction } from 'express';
import * as usersService from './users.service';


// ✅ Controller handles HTTP response with try-catch
export async function getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const users = await usersService.getAllUsers();
        res.json(users);
    } catch (error) {
        next(error);
    }
}

export async function createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        console.log('req.body', req.body);
        const user = req.body;
        const createdUserId = await usersService.createUser(user);
        res.json({ data: createdUserId, status: 200 });
    } catch (error) {
        console.log('error2', error);
        next(error);
    }
}





