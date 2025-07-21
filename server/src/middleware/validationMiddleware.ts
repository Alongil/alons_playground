// middleware/validate.ts
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import { ValidationError } from '../shared/errors';

export const ValidationType = Object.freeze({
    QUERY: 'query',
    REQUEST: 'request',
    RESPONSE: 'response',
    PARAMS: 'params',
});

export function validateDto<T>(classValidatorType: ClassConstructor<T>) {
    return async (req: Request, res: Response, next: NextFunction) => {
        console.log('validateDto', classValidatorType);
        try {
            // Check if req.body exists and is not empty
            if (!req.body || Object.keys(req.body).length === 0) {
                throw new ValidationError('Request body is required', 400);
            }

            // Convert plain object to class instance
            const instance = plainToInstance(classValidatorType, req.body);

            // Validate the instance
            const errors = await validate(instance as object);

            if (errors.length > 0) {
                // Format validation errors
                const errorMessages = errors.map(error => {
                    const constraints = error.constraints;
                    return Object.values(constraints || {}).join(', ');
                }).join('; ');

                throw new ValidationError(errorMessages, 400);
            }

            // Replace req.body with validated instance
            req.body = instance;
            next();
        } catch (error) {
            next(error);
        }
    };
}
