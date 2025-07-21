

export class ValidationError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number = 400) {
        super(message);
        this.name = 'ValidationError';
        this.statusCode = statusCode;
    }
}

export class DatabaseError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number = 500) {
        super(message);
        this.name = 'DatabaseError';
        this.statusCode = statusCode;
    }
}

export class NotFoundError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number = 404) {
        super(message);
        this.name = 'NotFoundError';
        this.statusCode = statusCode;
    }
}
export class ForbiddenException extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number = 403) {
        super(message);
        this.name = 'Forbidden';
        this.statusCode = statusCode;
    }
} 
