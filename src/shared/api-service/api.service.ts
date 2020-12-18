import axios, { AxiosResponse } from 'axios';

class ApiService {
  private readonly httpClient = axios;

  public get<T, K = void, H = void>(url: string, params?: K, headers?: H): Promise<AxiosResponse<T>> {
    return this.httpClient.get<T>(url, { params, headers });
  }
}

export const apiService = new ApiService();
