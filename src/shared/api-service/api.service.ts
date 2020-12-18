import axios, { AxiosResponse } from 'axios';

class ApiService {
  private readonly httpClient = axios;

  public get<T, K = void, H = void>(url: string, params?: K, headers?: H): Promise<AxiosResponse<T>> {
    return this.httpClient.get<T>(url, { params, headers });
  }

  public downloadVideoFile(url: string) {
    return this.httpClient.get(url, {
      responseType: 'stream',
    });
  }
}

export const apiService = new ApiService();
