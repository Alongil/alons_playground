import { Router, Request, Response, NextFunction } from 'express';
import * as usersController from './users.controller';
import { validateRequestBodyDto } from '../middleware/validationMiddleware';
import { CreateUserDto } from './dto/create-user.dto';
import { UserFiltersDto } from './dto/user-filters.dto';


const usersRouter = Router();

usersRouter.get('/', usersController.getAllUsers);

usersRouter.post('/', validateRequestBodyDto(CreateUserDto), usersController.createUser);


usersRouter.post('/search', validateRequestBodyDto(UserFiltersDto), usersController.search);





export { usersRouter };
