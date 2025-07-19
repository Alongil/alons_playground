import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Router } from 'express';

const healthRouter = Router();

healthRouter.get('/', async (_req: Request, res: Response) => {
    try {
        // Check database connection
        const isDbConnected = AppDataSource.isInitialized;

        const healthStatus = {
            status: 'ok',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            database: isDbConnected ? 'connected' : 'disconnected',
            environment: process.env.NODE_ENV || 'development'
        };

        const statusCode = isDbConnected ? 200 : 503;
        res.status(statusCode).json(healthStatus);
    } catch (error) {
        res.status(503).json({
            status: 'error',
            timestamp: new Date().toISOString(),
            error: 'Health check failed',
            database: 'error'
        });
    }
});

export { healthRouter };
