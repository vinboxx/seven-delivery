import React from 'react'
import { useBarcode } from 'react-barcodes';

import { IProduct } from '../../definitions/product'

import styles from './ProductCard.module.css'

interface Props extends IProduct {
    className?: string
}

export default function ProductCard(item: Props): React.ReactElement {
    const { inputRef } = useBarcode({
        value: item.number,
        options: {
            background: '#fff',
        }
    });

    return (
        <a className={styles.card}>
            {item.image && <img src={item.image} alt={item.name} />}
            <h3 className={styles.title}>{item.name}</h3>
            <div className={styles.number}>
                {item.number && <svg ref={inputRef} />}
            </div>
        </a>
    )
}
