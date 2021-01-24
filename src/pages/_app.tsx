import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import LayoutWrapper from '../components/Layouts/LayoutWrapper'
import '../styles/globals.scss'
import { SITE_NAME, SITE_DESCRIPTION, SITE_KEYWORDS } from '../constants/site'

function Application({ Component, pageProps }: AppProps): React.ReactElement {
    return (
        <LayoutWrapper {...pageProps}>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content={SITE_DESCRIPTION} />
                <meta name="keywords" content={SITE_KEYWORDS} />
                <title>{SITE_NAME}</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
            </Head>
            <Component {...pageProps} />
        </LayoutWrapper>
    )
}

export default Application
