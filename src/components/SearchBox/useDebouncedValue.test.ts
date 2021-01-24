import { Dispatch, SetStateAction, useState } from 'react'
import { renderHook, act } from '@testing-library/react-hooks'

import useDebouncedValue from './useDebouncedValue'

describe('useDebouncedValue', () => {
    const DELAY = 100
    const mockHook = (): { searchTerm: string, setValue: Dispatch<SetStateAction<string>> } => {
        const [value, setValue] = useState<string>('')
        const searchTerm = useDebouncedValue(value, DELAY)
        return {
            searchTerm,
            setValue
        }
    }

    beforeAll(() => {
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.clearAllTimers()
    })

    afterAll(() => {
        jest.useRealTimers()
    })

    test('debounced value', () => {
        const value = 'Travel'
        const { result } = renderHook(() => mockHook())

        expect(result.current.searchTerm).toBe('')

        act(() => {
            result.current.setValue(value)
            jest.advanceTimersByTime(DELAY)
        })

        expect(result.current.searchTerm).toBe(value)
    })
})
