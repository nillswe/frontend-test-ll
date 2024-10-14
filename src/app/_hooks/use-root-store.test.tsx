import {RootStoreProvider, useRootStore} from '@/app/_hooks/use-root-store'
import {renderHook} from '@testing-library/react'

const suppressConsoleError = () => {
  const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {
    //do nothing
  })

  return () => errorSpy.mockRestore()
}

const renderHookWithError = (...args: any[]) => {
  let error
  const restore = suppressConsoleError()

  try {
    // @ts-expect-error expected param
    renderHook(...args)
  } catch (ex) {
    error = ex
  }

  restore()
  return error
}

describe('RootStore', () => {
  it('Should useRootStore throw an erro when called without a provider', () => {
    const res = renderHookWithError(useRootStore)
    expect(res).toStrictEqual(new Error('useRootStore must be used within RootStoreProvider'))
  })

  it('Should useRootStore run successfully', () => {
    const {result} = renderHook(useRootStore, {wrapper: RootStoreProvider})
    expect(result.current.wishlistStore.wishlist).toStrictEqual([])
  })
})
