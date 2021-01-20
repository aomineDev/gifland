import { renderHook, act } from '@testing-library/react-hooks'
import useSearchEngine from './hook'

test('should change query', () => {
  const { result } = renderHook(() => useSearchEngine())

  act(() => {
    result.current.setQuery('aomine')
  })

  expect(result.current.query).toBe('aomine')
})

test('should update correctly times when used twice', () => {
  const { result } = renderHook(() => useSearchEngine())

  act(() => {
    result.current.setQuery('saber')
    result.current.setQuery('aomine')
  })

  expect(result.current.query).toBe('aomine')
  expect(result.current.times).toBe(2)
})
