import React, { cloneElement } from "react"

// import providers
import { SearchProvider } from "./searchStore"

function ProviderComposer({ contexts, children }) {
    return contexts.reduce(
        (kids, parent) =>
            cloneElement(parent, {
                children: kids
            }),
        children
    )
}
export default function ContextProvider({ children }) {
    return (
        <ProviderComposer contexts={[<SearchProvider />]} >
            {children}
        </ProviderComposer>
    )
}
