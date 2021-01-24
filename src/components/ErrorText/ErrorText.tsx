import React from 'react'
import styles from './ErrorText.module.scss'

type Props = {
    message?: string
}

export default function ErrorText({
    message = 'Something went wrong :('
}: Props): React.ReactElement {
    return (
        <div className={styles.container}>
            {message}
        </div>
    )
}
