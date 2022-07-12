import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { register } from '../../redux/Actions/UserAction'
import './Register.css'

export default function Register() {

    const [showPassWord, setShowPassWord] = useState(false)
    const dispatch = useDispatch()

    const [formInput, setFormInput] = useState({
        values: {
            email: '',
            userName: '',
            password: ''
        },
        errors: {
            email: '',
            userName: '',
            password: ''
        }
    })

    const handleChange = (e) => {
        let { name, value, placeholder } = e.target
        let newValue = { ...formInput.values, [name]: value }
        let newError = { ...formInput.errors }

        if (value.trim() === '') {
            newError[name] = placeholder + ' is required!'
        } else {
            newError[name] = ''
        }

        if (name === 'email') {
            const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!re.test(value)) {
                newError[name] = 'Email is invalid!'
            } else {
                newError[name] = ''
            }
        }

        setFormInput({
            values: newValue,
            errors: newError
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        for (let key in Object.keys(formInput.errors)) {
            if (!formInput.errors[key]) {
                return
            }
        }
        // dispatch(register(formInput.values))
    }

    return (
        <div style={{ paddingTop: '60px' }} className='min-h-screen bg-zinc-50 flex justify-center '  >
            <div className='fixed top-0 left-0 border-b-2 border-gray-100 w-full z-40'>
                <div className='bg-white flex justify-between items-center px-16' style={{ height: "60px" }}>
                    <NavLink to='/' className='cursor-pointer'>
                        <svg width="34" height="32" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.0706 14.9791V12.4128C14.0706 12.0534 13.8765 11.8737 13.4883 11.8737H11.7199V15.5182H13.4883C13.8765 15.5182 14.0706 15.3385 14.0706 14.9791ZM14.0706 20.8233V18.1492C14.0706 17.9623 14.0274 17.8329 13.9412 17.761C13.8549 17.6748 13.7039 17.6316 13.4883 17.6316H11.7199V21.3625H13.4883C13.8765 21.3625 14.0706 21.1827 14.0706 20.8233ZM8.6792 9.76025H14.3725C16.1983 9.76025 17.1113 10.551 17.1113 12.1325V14.5478C17.1113 15.6117 16.7878 16.2802 16.1408 16.5534C16.7878 16.7978 17.1113 17.416 17.1113 18.408V21.0821C17.1113 22.678 16.1983 23.4759 14.3725 23.4759H8.6792V9.76025Z" fill="black"></path><path d="M19.0001 9.76025H22.0624V23.4759H19.0001V9.76025Z" fill="black"></path><path d="M26.7266 9.76025H29.6164C31.4279 9.76025 32.3336 10.551 32.3336 12.1325V21.0821C32.3336 22.678 31.4279 23.4759 29.6164 23.4759H26.7266C24.9007 23.4759 23.9878 22.678 23.9878 21.0821V12.1325C23.9878 10.551 24.9007 9.76025 26.7266 9.76025ZM29.2498 20.6724V12.5638C29.2498 12.2043 29.0629 12.0246 28.6891 12.0246H27.6539C27.2657 12.0246 27.0717 12.2043 27.0717 12.5638V20.6724C27.0717 21.0318 27.2657 21.2115 27.6539 21.2115H28.6891C29.0629 21.2115 29.2498 21.0318 29.2498 20.6724Z" fill="black"></path><path d="M36.1149 23.4396C35.0876 23.4396 34.2549 22.6069 34.2549 21.5796V21.4596C34.2549 20.4324 35.0876 19.5996 36.1149 19.5996C37.1421 19.5996 37.9749 20.4324 37.9749 21.4596V21.5796C37.9749 22.6069 37.1421 23.4396 36.1149 23.4396Z" fill="black"></path><path d="M11.7537 38.023H15.7002V40.2874H8.69141V26.5718H11.7537V38.023Z" fill="black"></path><path d="M16.7589 26.5718H19.8212V40.2874H16.7589V26.5718Z" fill="black"></path><path d="M27.5693 26.5718H30.3943V40.2874H27.634L24.6364 32.071V40.2874H21.8328V26.5718H24.6148L27.5693 34.7666V26.5718Z" fill="black"></path><path d="M41.4213 26.5718L38.661 33.3433L41.4213 40.2874H38.1003L35.4477 33.3433L38.1003 26.5718H41.4213ZM32.3207 40.2874V26.5718H35.383V40.2874H32.3207Z" fill="black"></path><path d="M1 1H49V49H1V1Z" stroke="black" strokeWidth="2" strokeLinejoin="round" className="svg-log-bg"></path></svg>
                    </NavLink>
                    <div className='flex items-center'>
                        <p className='text-sm'>Already have an account? </p>
                        <NavLink className='text-sm underline text-blue-500 ml-1' to='/login' >Login</NavLink>
                    </div>
                </div>
            </div>
            <div className='mt-16  h-full' style={{ width: '400px' }}>
                <form className='bg-white p-8 rounded-md' onSubmit={handleSubmit}>
                    <div className="flex w-full">
                        <div className=" font-bold text-xl w-full">Sign up</div>
                    </div>
                    <div className='mt-6'>
                        <div className={` rounded-sm input-main-wrap relative ${formInput.errors.email !== '' ? 'input-error' : ''}`}>
                            <input type="text" name="email" placeholder="Email" className='bl-input w-full p-4 text-sm font-normal font-inter placeholder-grey hover:bg-bl-bg-grey focus:bg-white' onChange={handleChange} />
                            <span className="error">{formInput.errors.email}</span>
                        </div>

                        <div className="relative mt-6">
                            <div className="input-prefix text-sm text-blDark font-inter font-normal absolute">bio.link/</div>
                            <div className={`input-main-wrap ${formInput.errors.userName !== '' ? 'input-error' : ''} rounded-sm`}>
                                <input type="text" name='userName' placeholder="Username" className="bl-input-with-prefix bl-input w-full p-4 text-sm font-normal font-inter placeholder-grey hover:bg-bl-bg-grey focus:bg-white" onChange={handleChange} />
                                <span className="error">{formInput.errors.userName}</span>

                            </div>
                        </div>
                    </div>

                    <div className="relative bl-input-with-suffix-wrap mt-6">
                        <div className={`input-main-wrap relative rounded-sm ${formInput.errors.password !== '' ? 'input-error' : ''}`}>
                            <input name="password" placeholder="Password" type={showPassWord ? 'text' : 'password'} className="bl-input w-full p-4 text-sm font-normal font-inter placeholder-grey hover:bg-bl-bg-grey focus:bg-white" onChange={handleChange} />
                            <span className="error errorPass">{formInput.errors.password}</span>
                        </div>
                        <div className="bl-input-with-icon enable-on-change absolute cursor-pointer">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '-2px', display: showPassWord ? 'block' : 'none' }} onClick={() => {
                                setShowPassWord(!showPassWord)
                            }}><path fillRule="evenodd" clipRule="evenodd" d="M9.80327 15.2526C10.4277 15.6759 11.1888 15.9319 11.9987 15.9319C14.1453 15.9319 15.8919 14.1696 15.8919 12.0037C15.8919 11.1866 15.6382 10.4186 15.2186 9.78855L14.1551 10.8617C14.3307 11.1964 14.4283 11.5902 14.4283 12.0037C14.4283 13.3525 13.3354 14.4551 11.9987 14.4551C11.5889 14.4551 11.1986 14.3567 10.8668 14.1795L9.80327 15.2526ZM18.4288 6.54952C19.8436 7.84907 21.0438 9.60149 21.9415 11.7083C22.0195 11.8954 22.0195 12.112 21.9415 12.2892C19.8534 17.1921 16.1358 20.1259 11.9987 20.1259H11.9889C10.1058 20.1259 8.30063 19.5056 6.71018 18.3735L4.81725 20.2834C4.67089 20.4311 4.4855 20.5 4.30011 20.5C4.11472 20.5 3.91957 20.4311 3.78297 20.2834C3.53903 20.0373 3.5 19.6435 3.69515 19.358L3.72442 19.3186L18.1556 4.75771C18.1751 4.73802 18.1946 4.71833 18.2044 4.69864L18.2044 4.69863C18.2239 4.67894 18.2434 4.65925 18.2532 4.63957L19.1704 3.71413C19.4631 3.42862 19.9217 3.42862 20.2046 3.71413C20.4974 3.99964 20.4974 4.4722 20.2046 4.75771L18.4288 6.54952ZM8.09836 12.0075C8.09836 12.2635 8.12764 12.5195 8.16667 12.7558L4.55643 16.3984C3.5807 15.2564 2.7318 13.8781 2.05854 12.293C1.98049 12.1158 1.98049 11.8992 2.05854 11.7122C4.14662 6.80933 7.86419 3.88534 11.9916 3.88534H12.0013C13.3966 3.88534 14.7529 4.22007 16.0018 4.85015L12.7429 8.13841C12.5087 8.09903 12.255 8.0695 12.0013 8.0695C9.84494 8.0695 8.09836 9.83177 8.09836 12.0075Z" fill="#230B34"></path>
                            </svg>

                            <svg width="18" height="14" viewBox="0 0 18 14" fill="block" xmlns="http://www.w3.org/2000/svg" style={{ display: showPassWord ? 'none' : 'block' }} onClick={() => {
                                setShowPassWord(!showPassWord)
                            }}><path fillRule="evenodd" clipRule="evenodd" d="M5.74805 7.00018C5.74805 8.77796 7.20333 10.2244 9.00008 10.2244C10.7887 10.2244 12.244 8.77796 12.244 7.00018C12.244 5.21432 10.7887 3.76786 9.00008 3.76786C7.20333 3.76786 5.74805 5.21432 5.74805 7.00018ZM13.7806 2.03855C15.2033 3.13754 16.4147 4.74562 17.2846 6.75774C17.3497 6.91127 17.3497 7.08905 17.2846 7.23451C15.5448 11.2587 12.4472 13.6668 9.00008 13.6668H8.99195C5.55293 13.6668 2.45537 11.2587 0.715529 7.23451C0.650488 7.08905 0.650488 6.91127 0.715529 6.75774C2.45537 2.7335 5.55293 0.333496 8.99195 0.333496H9.00008C10.7237 0.333496 12.3578 0.931476 13.7806 2.03855ZM9.00106 9.01049C10.1149 9.01049 11.0254 8.10544 11.0254 6.99837C11.0254 5.88321 10.1149 4.97816 9.00106 4.97816C8.9035 4.97816 8.80594 4.98625 8.71651 5.00241C8.68399 5.8913 7.95228 6.60241 7.04984 6.60241H7.00919C6.9848 6.7317 6.96854 6.86099 6.96854 6.99837C6.96854 8.10544 7.87911 9.01049 9.00106 9.01049Z" fill="#230B34"></path>
                            </svg>
                        </div>

                        <button type='submit' className="bl-btn bl-bg font-semibold font-inter  text-white rounded-sm leading-4 relative flex justify-center items-center mt-6 w-full uppercase tracking-wider" style={{ height: '40px' }}>
                            <span className="">sign up with email</span>
                            {/* <span className="bl-circle-loader absolute hidden"></span>  */}
                            {/* Loader */}
                        </button>
                    </div>

                    <div className="flex items-center mt-6">
                        <div className="grey-border-block w-2/4 mr-4"></div>
                        <div className="text-gray-500 text-sm font-inter font-normal">Or</div>
                        <div className="grey-border-block w-2/4 ml-4"></div>
                    </div>

                    <a href="#">
                        <button className="font-semibold text-sm relative flex justify-center items-center mt-4 btn-signup-social text-black rounded-md w-full h-10">
                            <span className="flex">
                                <span className="flex w-4 justify-center items-center mr-2">
                                    <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.55416 0.00332907L6.42212 0C4.02684 0 2.47891 1.54552 2.47891 3.93762V5.75313H0.335243C0.150004 5.75313 0 5.89927 0 6.07954V8.71001C0 8.89028 0.150175 9.03625 0.335243 9.03625H2.47891V15.6737C2.47891 15.854 2.62892 16 2.81416 16H5.61104C5.79628 16 5.94628 15.8539 5.94628 15.6737V9.03625H8.45273C8.63797 9.03625 8.78797 8.89028 8.78797 8.71001L8.789 6.07954C8.789 5.99299 8.75359 5.91009 8.69082 5.84884C8.62805 5.78758 8.54253 5.75313 8.45359 5.75313H5.94628V4.2141C5.94628 3.47438 6.12741 3.09886 7.11758 3.09886L8.55382 3.09836C8.73888 3.09836 8.88889 2.95222 8.88889 2.77211V0.329578C8.88889 0.149642 8.73905 0.00366197 8.55416 0.00332907Z" fill="#3B5998"></path>
                                    </svg>
                                </span>
                                <span className="w-155 text-left">Sign up with Facebook</span>
                            </span>
                            <span className="bl-circle-loader absolute hidden">
                            </span>
                        </button>
                    </a>
                </form>

                <div className="mt-6 text-center text-xs mx-auto font-inter text-gray-500" style={{ width: '340px' }}>
                    By signing up, you agree to our <a href="#" alt="terms" target="_blank" className="underline">Terms of Service</a> and <a href="#" alt="privacy" target="_blank" className="underline">Privacy Policy</a>.
                </div>
            </div>
        </div>
    )
}
