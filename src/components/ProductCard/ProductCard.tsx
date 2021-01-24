import React from 'react'
import classnames from 'classnames'

import styles from './ProductCard.module.scss'
import { IProduct } from '../../definitions/product'
import { useBarcode } from 'react-barcodes';

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
        <div className={classnames(item.className, styles.container)}>
            <div className={item.image ? styles.media : styles.noMedia} style={{ backgroundImage: `url(${item.image || '/media-placeholder.jpg'})` }} />
            <div>
                <div>{item.name}</div>
                {item.number && <svg ref={inputRef} />}
            </div>
        </div>
    )
}
