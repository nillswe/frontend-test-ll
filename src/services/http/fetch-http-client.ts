import {HttpMethods, HttpResponse} from './types'

export class FetchHttpClient {
  constructor(
    private basePath: string,
    private token?: string,
  ) {}

  private async request<T = any>(
    path: string,
    method: HttpMethods,
    body?: any,
    headers?: any,
  ): Promise<HttpResponse<T>> {
    try {
      const response = await fetch(`${this.basePath}${path}`, {
        method: method,
        body: body,
        headers: {
          ...headers,
          Authorization: `Bearer ${this.token}`,
        },
      })

      if (!response.ok) throw await this.adaptError(response)

      return await this.adaptResponse<T>(response)
    } catch (error) {
      throw error
    }
  }

  private async adaptError(response: Response) {
    try {
      const json = await response.json()
      return {status: response.status, error: json}
    } catch (error) {
      return {status: response.status, error: null}
    }
  }

  private async adaptResponse<T>(response: Response): Promise<HttpResponse<T>> {
    const json = await response.json()
    return {
      status: response.status,
      body: json as T,
    }
  }

  public async get<T = any>(path: string, headers?: any) {
    return await this.request<T>(path, 'GET', undefined, headers)
  }
  public async post<T = any>(path: string, body?: any, headers?: any) {
    return await this.request<T>(path, 'POST', body, headers)
  }
  public async put<T = any>(path: string, body?: any, headers?: any) {
    return await this.request<T>(path, 'PUT', body, headers)
  }
  public async delete<T = any>(path: string, headers?: any) {
    return await this.request<T>(path, 'DELETE', undefined, headers)
  }
}
