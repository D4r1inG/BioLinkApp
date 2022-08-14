import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function ProtectedLayout({ route, Component }) {

    const [check, setCheck] = useState()

    useEffect(() => {
        const checkAdmin = async () => {
            let res = await axios.get()
            setCheck(res.data)
        }
        checkAdmin()
    }, [])

    const renderRoute = () => {
        if (check) {
            return <Component route={route} />
        } else {
            <Redirect to={'/'} />
        }
    }

    return (
        <>
            {renderRoute()}
        </>
    )
}
