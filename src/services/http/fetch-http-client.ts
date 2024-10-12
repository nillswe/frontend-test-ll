import {HttpMethods} from './types'

export class FetchHttpClient {
  constructor(
    private basePath: string,
    private token?: string,
  ) {}

  private async request(path: string, method: HttpMethods, body?: any) {
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
      body: jsonRes,
    }
  }

  public async get(path: string) {
    return await this.request(path, 'GET')
  }
  public async post(path: string, body?: any) {
    return await this.request(path, 'POST', body)
  }
  public async put(path: string, body?: any) {
    return await this.request(path, 'PUT', body)
  }
  public async delete(path: string) {
    return await this.request(path, 'DELETE')
  }
}
