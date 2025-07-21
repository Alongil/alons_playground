import { Router, Request, Response, NextFunction } from 'express';
import * as usersController from './users.controller';
import { validateDto } from '../middleware/validationMiddleware';
import { CreateUserDto } from './dto/create-user.dto';


const usersRouter = Router();

// GET /api/users - Get all users
usersRouter.get('/', usersController.getAllUsers);

// POST /api/users - Create user
usersRouter.post('/', validateDto(CreateUserDto), usersController.createUser);




export { usersRouter };
