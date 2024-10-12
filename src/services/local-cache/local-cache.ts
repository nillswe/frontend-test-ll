export class LocalCache {
  set(key: string, value: any) {
    if (typeof window !== 'undefined') {
      localStorage?.setItem(key, JSON.stringify(value))
    }
  }

  get<K>(key: string) {
    if (typeof window !== 'undefined') {
      const response = localStorage?.getItem(key) as string
      return JSON.parse(response) as K
    }
    return null
  }

  remove(key: string) {
    if (typeof window !== 'undefined') {
      localStorage?.removeItem(key)
    }
  }
}

export const localCache = new LocalCache()
