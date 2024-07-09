import { HttpClient, HttpRequest, HttpResponse } from '@/interfaces';

export class FetchHttpClientAdapter<T> implements HttpClient<T> {
  async request({
    url,
    method,
    body,
    headers,
  }: HttpRequest<T>): Promise<HttpResponse<T>> {
    let fetchResponse: Response;

    try {
      fetchResponse = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers,
      });
      fetchResponse = await fetchResponse.json();
    } catch (error) {
      const _error = error as Error;
      throw new Error(_error?.message);
    }
    return {
      statusCode: fetchResponse.status,
      body: fetchResponse as T,
    };
  }
}
