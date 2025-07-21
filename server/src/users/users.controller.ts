import { Request, Response, NextFunction } from 'express';
import * as usersService from './users.service';


// ✅ Controller handles HTTP response with try-catch
export async function getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const result = await usersService.getAllUsers();
        res.json(result);
    } catch (error) {
        next(error);
    }
}

export async function createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const user = req.body;
        const createdUserId = await usersService.createUser(user);
        res.json({ data: createdUserId, status: 200 });
    } catch (error) {
        next(error);
    }
}

// ✅ Controller handles HTTP response with try-catch
export async function search(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const filters = req.body;
        const result = await usersService.search(filters);
        res.json(result);
    } catch (error) {
        next(error);
    }
}





