import React, { ReactElement } from 'react'

import Loading from '../Loading'
import ProductCard from '../ProductCard'
import { IProduct } from '../../definitions/product'
import ErrorText from '../ErrorText'

import styles from './ProductList.module.scss'

type Props = {
    isError?: boolean
    isLoading?: boolean
    items: IProduct[]
}

export default function ProductList({
    isError,
    isLoading,
    items
}: Props): ReactElement {
    if (isError) {
        return <ErrorText />
    }
    return (
        <>
            <div className={styles.flex}>
                {items.map(item =>
                    <div className={styles.box} key={item.name}>
                        <ProductCard {...item} />
                    </div>
                )}
            </div>
            { isLoading && <Loading /> }
        </>
    )

}
