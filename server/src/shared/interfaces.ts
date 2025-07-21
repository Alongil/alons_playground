export interface IResponse<T = any> {
    data: T;
    status: number;
}

export interface AppError extends Error {
    statusCode?: number;
}

