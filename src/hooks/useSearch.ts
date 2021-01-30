import { useEffect, useState } from 'react'
import { ROUTES } from '../constants/routes'
import { IProduct } from '../definitions/product'

export const useSearch = (): {
    results: IProduct[]
    total: number
    isLoading: boolean
    isError: boolean
} => {
    const [data, setData] = useState<IProduct[]>([]);
    const [error, setError] = useState();

    useEffect(() => {
        fetch(ROUTES.API_SEARCH)
            .then(result => result.json())
            .then(result => setData(Object.values(result)))
            .catch((err) => setError(err));
    }, [])

    return {
        results: data,
        total: data.length || 0,
        isLoading: !error && !data,
        isError: error
    }
}
