import React, { ReactNode, ReactElement } from "react"

import Header from "../Header"
import Footer from "../Footer"
import SearchBox from "../SearchBox"

import styles from './Default.module.scss'

type Props = {
    children: ReactNode
}

const DefaultLayout = (props: Props): ReactElement => {

    return (
        <div className="container">
            <Header>
                <div className={styles.searchContainer}>
                    <SearchBox
                        onChange={() => {}}
                        placeholder="Search" />
                </div>
            </Header>

            <main>
                <div className="container">
                    {props.children}
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default DefaultLayout
