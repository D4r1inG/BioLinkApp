import React from 'react'

export default function PublicLayout({ Component, route }) {
    return (
        <>
            <Component route={route} />
        </>
    )
}
