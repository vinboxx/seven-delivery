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
        fetch(ROUTES.API_GRAPHQL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ query: '{ products { name number } }' }),
        })
            .then((res) => res.json())
            .then((json) => setData(json.data.products))
            .catch((err) => setError(err));
    }, [])

    return {
        results: data,
        total: data.length || 0,
        isLoading: !error && !data,
        isError: error
    }
}
