export interface IResponse<T = any> {
    data: T;
    status: number;
}

export interface AppError extends Error {
    statusCode?: number;
}
interface Pagination {
    page: number;
    pageSize: number;
    total: number;
}

export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    pageSize: number;
}
