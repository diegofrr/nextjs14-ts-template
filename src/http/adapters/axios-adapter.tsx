import axios, { AxiosError, AxiosHeaders, AxiosResponse } from 'axios';
import type { HttpClient, HttpRequest, HttpResponse } from '@/interfaces';

export class AxiosHttpClientAdapter<T> implements HttpClient<T> {
  async request(config: HttpRequest<T>): Promise<HttpResponse<T>> {
    try {
      const axiosResponse: AxiosResponse<T> = await axios.request({
        url: config.url,
        method: config.method,
        headers: config.headers as AxiosHeaders,
        data: config.body,
      });
      return {
        statusCode: axiosResponse.status,
        body: axiosResponse.data as T,
      };
    } catch (error) {
      const _error = error as AxiosError<{ message: string }>;
      throw new Error(_error.response?.data.message);
    }
  }
}
