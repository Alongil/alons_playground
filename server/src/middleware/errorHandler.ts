import { Request, Response, NextFunction } from 'express';
import { AppError } from '../shared/interfaces';
import { ErrorMessages } from '../shared/enums';


export const errorHandler = (
    error: AppError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    // Default values
    const statusCode = error.statusCode || 500;
    const message = error.message || ErrorMessages.INTERNAL_SERVER_ERROR;

    // Log error details1
    console.error('Error:', {
        message: error.message,
        stack: error.stack,
        url: req.url,
        method: req.method,
        timestamp: new Date().toISOString()
    });

    // Development vs Production error response
    const errorResponse = {
        message,
        status: 'error',
        statusCode: statusCode,
        ...(process.env.NODE_ENV === 'development' && {
            stack: error.stack,
            details: error
        })
    };

    // Send response
    res.status(statusCode).json(errorResponse);
};
