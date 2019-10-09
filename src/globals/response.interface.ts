export interface IResponse {
    message: string;
    data: string | object | boolean | null;
    date: Date | string;
    error: string;
    status: number;
}
