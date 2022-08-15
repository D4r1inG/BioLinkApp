import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loginWithSocial } from '../../redux/Actions/UserAction'

export default function LoginWithSocial() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loginWithSocial())
    }, [])

    return (
        <>
            <span className={`bl-circle-loader absolute block`}></span>
            <div className='w-full h-screen flex justify-center items-center font-semibold text-xl'>Redirecting...</div>
        </>
    )
}
