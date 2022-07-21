import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useQuery } from '../../utils/CustomHook'

export default function ConfirmPage() {

    let query = useQuery()
    console.log(query.get('code'))

    useEffect(() => {
        // TODO: Đưa token lên backend để verify
    }, [])

    return (
        <>
            <div className='flex items-center justify-center flex-col h-screen'>
                <div className='p-12 bg-green-50 rounded-sm'>
                    <h1 className='font-bold text-xl'>Confirmation completed! </h1>
                    <NavLink to={'/login'} >
                        <button className="bl-btn bl-bg px-12 font-semibold font-inter  text-white rounded-md leading-4 relative flex justify-center items-center mt-6 w-full uppercase tracking-wider" style={{ height: '40px' }}>
                            <span>Login</span>
                        </button>
                    </NavLink>
                </div>
            </div>

        </>
    )
}
