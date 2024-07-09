import { AxiosHeaders } from 'axios';

export type HttpResponse<T> = {
  statusCode: HttpStatusCode;
  body?: T;
};

export interface HttpClient<T> {
  // eslint-disable-next-line no-unused-vars
  request(config: HttpRequest<T>): Promise<HttpResponse<T>>;
}

export interface HttpRequest<T> {
  url: string;
  method: RequestMethod;
  body?: T;
  headers?: Headers | AxiosHeaders;
}

type RequestMethod = 'get' | 'post' | 'put' | 'delete';

/* eslint-disable no-unused-vars */
export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  notFound = 404,
  serverError = 500,
}
