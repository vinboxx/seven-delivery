import React, { ReactNode } from 'react'
import { SITE_MENU, SITE_NAME } from '../../constants/site'
import Logo from '../Logo'
import NavBar from '../NavBar'

import styles from './Header.module.scss'

type Props = {
    children?: ReactNode
}

export default function Header({ children }: Props): React.ReactElement {
    return (
        <header className={styles.header}>
            <div className="container">
                <Logo title={SITE_NAME} href="/" />
                <div className={styles.categoryMenu}>
                    <NavBar items={SITE_MENU} />
                    {children}
                </div>
            </div>
        </header>
    )
}
