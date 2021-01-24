import React, {ReactElement, ReactNode } from 'react'

import ContextProvider from "../../stores/providerComposer"
import DefaultLayout from "./Default"

const layouts = {
    default: DefaultLayout
}

type Props = {
    children: ReactNode & {
        type: {
            layout: string
        }
    }
}

const LayoutWrapper = (props: Props): ReactElement => {
    const Layout = layouts[props.children[1].type.layout]

    return (
        <ContextProvider>
            {
                Layout ? <Layout {...props}>{props.children}</Layout>
                    : <DefaultLayout {...props}>{props.children}</DefaultLayout>
            }
        </ContextProvider>
    )
}

export default LayoutWrapper
