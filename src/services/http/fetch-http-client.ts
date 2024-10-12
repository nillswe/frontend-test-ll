import {HttpMethods} from './types'

export class FetchHttpClient {
  constructor(
    private basePath: string,
    private token?: string,
  ) {}

  private async request<T = any>(path: string, method: HttpMethods, body?: any) {
    const res = await fetch(`${this.basePath}${path}`, {
      method: method,
      body: body,
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    })

    const jsonRes = await res.json()

    return {
      status: res.status,
      body: jsonRes as T,
    }
  }

  public async get<T = any>(path: string) {
    return await this.request<T>(path, 'GET')
  }
  public async post<T = any>(path: string, body?: any) {
    return await this.request<T>(path, 'POST', body)
  }
  public async put<T = any>(path: string, body?: any) {
    return await this.request<T>(path, 'PUT', body)
  }
  public async delete<T = any>(path: string) {
    return await this.request<T>(path, 'DELETE')
  }
}
