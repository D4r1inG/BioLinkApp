import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { userService } from '../../services/UserService'

export default function ProtectedLayout({ route, Component }) {

    const [check, setCheck] = useState()

    useEffect(() => {
        const checkAdmin = async () => {
            let res = await userService.checkRole()
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
