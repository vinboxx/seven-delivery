import { useState } from 'react'
import useDebounce from 'react-use/lib/useDebounce'

const useDebouncedValue = (value: string, ms: number): string => {
    const [debouncedValue, setDebouncedValue] = useState<string>(value)

    useDebounce(
        () => setDebouncedValue(value),
        ms,
        [value]
    )

    return debouncedValue
}

export default useDebouncedValue
