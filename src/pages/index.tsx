import Head from 'next/head'
import SearchResult from '../components/SearchResult'
import styles from '../styles/App.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>7-11 Delivery</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <SearchResult />
            </main>

            <footer className={styles.footer} />
        </div>
    )
}
