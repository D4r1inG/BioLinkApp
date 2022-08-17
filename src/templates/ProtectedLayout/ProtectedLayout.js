import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { userService } from '../../services/UserService'
import { openNotification } from '../../utils/Notification'

export default function ProtectedLayout({ route, Component }) {

    const [check, setCheck] = useState()

    useEffect(() => {
        const checkAdmin = async () => {
            try {
                let res = await userService.checkRole()
                setCheck(true)
            } catch (err) {
                setCheck(false) 
                openNotification('error', 'Tài khoản của bạn không có quyền truy cập trang này!')
                console.log(err);
            };
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
