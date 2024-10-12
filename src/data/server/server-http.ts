import {API_URL} from '@/config/envs-client'
import {FetchHttpClient} from '@/services/http/fetch-http-client'

class ServerHttp {
  public api: FetchHttpClient

  constructor() {
    const fakeBearerToken = '123abc'
    this.api = new FetchHttpClient(API_URL, fakeBearerToken)
  }
}

export const serverHttp = new ServerHttp()
