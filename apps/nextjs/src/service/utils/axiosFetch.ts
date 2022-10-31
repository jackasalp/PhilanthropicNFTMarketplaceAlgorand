import Axios, { AxiosError, AxiosRequestConfig } from 'axios';
import Cookies from 'js-cookie';

const axiosClient = Axios.create({
  baseURL: process.env.API_ROOT_URL,
  timeout: 25000,
});

export interface FetchAPIResponse {
  success: boolean;
  error: string;
  message: string;
  data: any;
  statusCode: number;
}

interface Config<T extends boolean = false> extends AxiosRequestConfig {
  checkToken?: T;
  token?: string;
}

export const axiosFetch = <T = FetchAPIResponse, K extends boolean = true>(
  config: Config<K>,
): K extends true ? Promise<T | null> : Promise<T> => {
  if (config.method?.toLowerCase() === 'purge') {
    throw new Error('Method PURGE is not supported');
  }

  const responseType = config.responseType ?? 'json';

  if (responseType === 'document') {
    throw new Error(`This response type is not supported: ${responseType}`);
  }

  const headers = config.headers ?? {};

  const token = Cookies.get(process.env.TOKEN_COOKIE_NAME!) ?? config.token ?? '';
  if (token) {
    const { token: apiToken } = JSON.parse(token);
    headers.authorization = headers.authorization || `Bearer ${apiToken}`;
  }

  if (config.checkToken && !token) {
    return null as any;
  }

  const source = Axios.CancelToken.source();

  const promise = new Promise<T>((resolve, reject) => {
    axiosClient
      .request<T>({
        ...config,
        headers,
        cancelToken: source.token,
      })
      .then((response) => resolve(response.data))
      .catch((error_: AxiosError) => {
        const error = error_.isAxiosError ? error_.response?.data ?? error_.message : error_;
        reject(error);
      });
  });

  // @ts-ignore
  promise.cancel = () => {
    source.cancel('[Fetch Mutator] Request was cancelled');
  };

  return promise;
};
