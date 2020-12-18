import axios, { AxiosResponse } from 'axios';

class ApiService {
  private readonly httpClient = axios;

  public get<T, K = void>(url: string, params?: K): Promise<AxiosResponse<T>> {
    return this.httpClient.get<T>(url, { params });
  }
}

export const apiService = new ApiService();
