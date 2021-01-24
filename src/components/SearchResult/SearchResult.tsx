import React, { LegacyRef, ReactElement, useState } from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook'

import { SORTING_STRATEGIES } from '../../constants/article'
import { Item } from '../Dropdown/Dropdown'
import { useSearchInfinite } from '../../hooks/useSearch'
import ErrorText from '../ErrorText'
import SectionHeader from '../SectionHeader'
import SectionToolbar from '../SectionToolbar'
import ProductList from '../ProductList'

type Props = {
    keyword?: string
}

const DEFAULT_SORTING = SORTING_STRATEGIES.NEWEST.value

export default function SearchResult({
    keyword
}: Props): ReactElement {
    const [orderBy, setOrderBy] = useState(DEFAULT_SORTING)
    const { results, isLoadingMore, isError, size, setSize, total } = useSearchInfinite(
        {
            'order-by': orderBy,
            q: keyword
        }
    )

    if (isError) {
        return <ErrorText />
    }

    const handleLoadMore = () => {
        setSize(size + 1)
    }

    const onSortingChange = (selecteditem: Item) => {
        setOrderBy(selecteditem.value)
    }

    const infiniteRef = useInfiniteScroll({
        loading: isLoadingMore,
        hasNextPage: results.length < total,
        threshold: 500,
        onLoadMore: handleLoadMore
    }) as LegacyRef<HTMLDivElement>

    return <>
        <SectionHeader title="Search result">
            <SectionToolbar showBookmark={true} onSortingChange={onSortingChange} defaultSorting={orderBy} />
        </SectionHeader>
        <div ref={infiniteRef}>
            <ProductList isError={isError} isLoading={isLoadingMore} items={results} />
        </div>
    </>
}
