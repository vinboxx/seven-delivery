import React, {ReactElement } from 'react'
import { IProduct } from '../../definitions/product'

import ProductCard from '../ProductCard'

import styles from './SearchResult.module.css'

type Props = {
    items: IProduct[]
}

export default function SearchResult({ items}: Props): ReactElement {
    return (
        <div className={styles.grid}>
            {items.map(item => (
                <div key={item.number} className={styles.card}>
                    <ProductCard {...item} />
                </div>
            ))}
        </div>
    )
}
