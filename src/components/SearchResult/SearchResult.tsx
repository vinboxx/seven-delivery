import React, {ReactElement } from 'react'

import products from '../../database/products.json'
import ProductCard from '../ProductCard'

import styles from './SearchResult.module.css'

type Props = {
    keyword: string
}

export default function SearchResult(): ReactElement {
    return (
        <div className={styles.grid}>
            {products.map(item => (
                <div key={item.id} className={styles.card}>
                    <ProductCard {...item} />
                </div>
            ))}
        </div>
    )
}
