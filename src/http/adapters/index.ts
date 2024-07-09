import { env } from '@/environments';
import { HttpClient } from '@/interfaces';
import { AxiosHttpClientAdapter } from './axios-adapter';
import { FetchHttpClientAdapter } from './fetch-adapter';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HttpClientAdapter: HttpClient<any> =
  env.NEXT_PUBLIC_HTTP_CLIENT === 'axios'
    ? new AxiosHttpClientAdapter()
    : new FetchHttpClientAdapter();

export default HttpClientAdapter;
