import fetch from 'jest-mock-fetch'

import {FetchHttpClient} from '@/services/http/fetch-http-client'
import {faker} from '@faker-js/faker'

const makeSut = () => {
  const basePath = 'http://localhost'
  const fakeToken = faker.string.uuid()
  const sut = new FetchHttpClient(basePath, fakeToken)

  return {
    sut,
    basePath,
    fakeToken,
  }
}

describe('FetchHttpClient', () => {
  beforeEach(() => {
    fetch.reset()
  })

  describe('GET', () => {
    it('Should call GET method properly with the correct response', () => {
      const {sut, basePath, fakeToken} = makeSut()
      const getMock = sut.get('/example')

      fetch.mockResponse({json: () => Promise.resolve(true)})

      expect(fetch).toHaveBeenCalledWith(`${basePath}/example`, {
        method: 'GET',
        body: undefined,
        headers: {Authorization: `Bearer ${fakeToken}`},
      })

      expect(getMock).resolves.toStrictEqual({body: true, status: 200})
    })
  })

  describe('POST', () => {
    it('Should call POST method properly with the correct response', () => {
      const {sut, basePath, fakeToken} = makeSut()
      const postMock = sut.post('/example', {data: true})

      fetch.mockResponse({json: () => Promise.resolve(true)})

      expect(fetch).toHaveBeenCalledWith(`${basePath}/example`, {
        method: 'POST',
        body: {data: true},
        headers: {Authorization: `Bearer ${fakeToken}`},
      })

      expect(postMock).resolves.toStrictEqual({body: true, status: 200})
    })
  })

  describe('PUT', () => {
    it('Should call PUT method properly with the correct response', () => {
      const {sut, basePath, fakeToken} = makeSut()
      const putMock = sut.put('/example', {data: true})

      fetch.mockResponse({json: () => Promise.resolve(true)})

      expect(fetch).toHaveBeenCalledWith(`${basePath}/example`, {
        method: 'PUT',
        body: {data: true},
        headers: {Authorization: `Bearer ${fakeToken}`},
      })

      expect(putMock).resolves.toStrictEqual({body: true, status: 200})
    })
  })

  describe('DELETE', () => {
    it('Should call DELETE method properly with the correct response', () => {
      const {sut, basePath, fakeToken} = makeSut()
      const deleteMock = sut.delete('/example')

      fetch.mockResponse({json: () => Promise.resolve(true)})

      expect(fetch).toHaveBeenCalledWith(`${basePath}/example`, {
        method: 'DELETE',
        body: undefined,
        headers: {Authorization: `Bearer ${fakeToken}`},
      })

      expect(deleteMock).resolves.toStrictEqual({body: true, status: 200})
    })
  })
})
