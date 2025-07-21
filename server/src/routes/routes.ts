import { Router } from 'express';
import { healthRouter } from './health';
import { usersRouter } from '../users/users.router';
// import { tasksRouter } from '../tasks/tasks.router';

const router = Router();

// API routes
// User routes
router.use('/users', usersRouter);
// Task routes  
// router.use('/tasks', tasksRouter);

export { router as routes };
