declare interface BaseApiService {
  GET?(url: string, query?: object): Promise<any>;
  POST?(url: string, body: any): Promise<any>;
  PUT?(url: string, body: any, query?: object): Promise<any>;
  DELETE?(url: string, query?: object, body?: any): Promise<any>;
  HEADER(): HeadersInit;
}
