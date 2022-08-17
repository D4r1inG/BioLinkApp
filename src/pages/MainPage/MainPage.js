import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { history } from '../../App'
import { getAllUserProfile } from '../../redux/Actions/ProfileAction'
import checkAuth from '../../utils/CheckAuth'

export default function Mainpage() {

    const [isAnimate, setIsAnimate] = useState(false)
    const header = useRef(null)
    const svgHeader = useRef(null)
    const { isTouring } = useSelector(state => state.UserReducer)
    const { profileList } = useSelector(state => state.ProfileReducer)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getAllUserProfile())
        const onScroll = () => handleScroll(window.pageYOffset);
        // window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        if (isTouring) {
            dispatch({
                type: 'ADD_DUMMY_DATA'
            })
            dispatch({
                type: 'SET_DUMMY_THEME'
            })
        }
    }, [isTouring])

    const renderProfile = () => {
        return profileList.map((item, index) => {
            if (index < 5) {
                return <NavLink to={`/profile/${item?.username}`}
                    className="flex flex-col justify-center text-center cursor-pointer w-175 duration-500 opacity-100">
                    <div className="bl-bg rounded-full overflow-hidden">
                        <img src={item?.image} alt=""
                            className="object-cover w-175 rounded-full transform hover:scale-95 duration-300" />
                    </div>
                    <div className="mt-4 leading-17 text-black font-inter font-medium">
                        <p className='text-xl mr-2'>{item?.name}</p>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                            xmlns="http://www.w3.org/2000/svg" className="inline -mt-2">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M8 0L9.99182 1.3121L12.3696 1.29622L13.3431 3.48797L15.3519 4.77336L14.9979 7.14888L16 9.32743L14.431 11.1325L14.1082 13.5126L11.8223 14.1741L10.277 16L8 15.308L5.72296 16L4.17772 14.1741L1.89183 13.5126L1.569 11.1325L0 9.32743L1.00206 7.14888L0.648112 4.77336L2.65693 3.48797L3.6304 1.29622L6.00818 1.3121L8 0Z"
                                fill="#0095F6"></path>
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M10.4036 5.20536L7.18853 8.61884L6.12875 7.49364C5.8814 7.23102 5.46798 7.21864 5.20536 7.466C4.94274 7.71335 4.93036 8.12677 5.17771 8.38939L6.71301 10.0195C6.9709 10.2933 7.40616 10.2933 7.66405 10.0195L11.3546 6.10111C11.6019 5.83848 11.5896 5.42507 11.3269 5.17771C11.0643 4.93036 10.6509 4.94274 10.4036 5.20536Z"
                                fill="white"></path>
                        </svg>
                    </div>
                    <div className=" mt-3 text-gradient">profile/{item?.username}</div>
                </NavLink>
            } else {
                return ''
            }
        })
    }

    const handleScroll = (offset) => {
        if (offset > 10 || offset > 10) {
            header?.current.classList.add('active')
        } else {
            header?.current.classList.remove('active')
        }

        if ((document.body.scrollTop > 200 && document.body.scrollTop < 1000)
            || (offset > 200 && offset < 1000)) {
            setIsAnimate(true)
            for (let item of svgHeader?.current.children) {
                item.attributes[1].value = 'white'
            }
        } else {
            setIsAnimate(false)
            for (let item of svgHeader?.current.children) {
                item.attributes[1].value = 'black'
            }
        }
    }

    const logout = (e) => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('username')
        history.push('/login')
    };

    return (
        <div id="main_page">
            <div className={`${!isAnimate ? '' : 'bg_dark'} pt-24 bg_landing overflow-hidden`}>
                <div ref={header} className="fixed top-0 left-0 right-0 z-40 nav-smooth text-white">
                    <div className="mx-8">
                        <div id="header" className={`${!isAnimate ? '' : 'bg_dark'} flex relative mx-auto py-4 px-5 shadow-xl width_1300 bg_landing`}>
                            <div>
                                <div className="font-inter font-medium mr-6 ml-4 cursor-pointer self-center">
                                    <svg ref={svgHeader} width="42" height="42" viewBox="0 0 42 42" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.8922 12.6488V10.5103C11.8922 10.2107 11.7305 10.061 11.407 10.061H9.93335V13.0981H11.407C11.7305 13.0981 11.8922 12.9484 11.8922 12.6488ZM11.8922 17.519V15.2906C11.8922 15.1349 11.8563 15.027 11.7844 14.9671C11.7125 14.8952 11.5867 14.8593 11.407 14.8593H9.93335V17.9683H11.407C11.7305 17.9683 11.8922 17.8186 11.8922 17.519ZM7.39941 8.2998H12.1438C13.6654 8.2998 14.4262 8.95875 14.4262 10.2766V12.2894C14.4262 13.176 14.1566 13.7331 13.6174 13.9607C14.1566 14.1644 14.4262 14.6796 14.4262 15.5063V17.7347C14.4262 19.0646 13.6654 19.7295 12.1438 19.7295H7.39941V8.2998Z"
                                            fill="black"></path>
                                        <path d="M16.0002 8.2998H18.5521V19.7295H16.0002V8.2998Z" fill="black"></path>
                                        <path
                                            d="M22.4389 8.2998H24.8471C26.3566 8.2998 27.1114 8.95875 27.1114 10.2766V17.7347C27.1114 19.0646 26.3566 19.7295 24.8471 19.7295H22.4389C20.9174 19.7295 20.1566 19.0646 20.1566 17.7347V10.2766C20.1566 8.95875 20.9174 8.2998 22.4389 8.2998ZM24.5415 17.3932V10.6361C24.5415 10.3365 24.3858 10.1868 24.0743 10.1868H23.2117C22.8882 10.1868 22.7265 10.3365 22.7265 10.6361V17.3932C22.7265 17.6928 22.8882 17.8425 23.2117 17.8425H24.0743C24.3858 17.8425 24.5415 17.6928 24.5415 17.3932Z"
                                            fill="black"></path>
                                        <path
                                            d="M30.2629 19.6998C29.4068 19.6998 28.7129 19.0058 28.7129 18.1498V18.0498C28.7129 17.1937 29.4068 16.4998 30.2629 16.4998C31.1189 16.4998 31.8129 17.1937 31.8129 18.0498V18.1498C31.8129 19.0058 31.1189 19.6998 30.2629 19.6998Z"
                                            fill="black"></path>
                                        <path d="M9.96109 31.852H13.2498V33.739H7.40918V22.3093H9.96109V31.852Z"
                                            fill="black"></path>
                                        <path d="M14.1321 22.3093H16.684V33.739H14.1321V22.3093Z" fill="black"></path>
                                        <path
                                            d="M23.1407 22.3093H25.4949V33.739H23.1946L20.6966 26.892V33.739H18.3604V22.3093H20.6787L23.1407 29.1384V22.3093Z"
                                            fill="black"></path>
                                        <path
                                            d="M34.6841 22.3093L32.3838 27.9523L34.6841 33.739H31.9166L29.7061 27.9523L31.9166 22.3093H34.6841ZM27.1003 33.739V22.3093H29.6522V33.739H27.1003Z"
                                            fill="black"></path>
                                        <path d="M1 1H41V41H1V1Z" stroke="black" strokeWidth="2" strokeLinejoin="round">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div
                                className={`${!isAnimate ? 'text-black ' : 'text-white '} font-inter header_btn font-semibold mr-6 cursor-pointer self-center duration-200 hover:text-gray-600`}>
                                Features
                            </div>
                            <div
                                className={`${!isAnimate ? 'text-black' : ' text-white'} font-inter header_btn font-semibold cursor-pointer self-center duration-200 hover:text-gray-600`}>
                                FAQ</div>
                            <div className="flex flex-grow flex-row-reverse">
                                <NavLink to='/listuser' className={`${!isAnimate ? 'bg-black text-white' : 'bg-white text-black'} ml-2 font-inter sign_up_btn font-medium text-base cursor-pointer rounded-full py-2 px-6 dashboard_tour`}>
                                    List profiles
                                </NavLink>
                                {checkAuth.getToken() === null ?
                                    <>
                                        <NavLink to='/signup' className={`${!isAnimate ? 'bg-black text-white' : 'bg-white text-black'} font-inter sign_up_btn font-medium text-base cursor-pointer rounded-full py-2 px-6 `}>
                                            Sign up
                                        </NavLink>
                                        <NavLink to='/login' className={`${!isAnimate ? 'text-black' : 'text-white'} font-inter header_btn font-semibold mr-8 cursor-pointer text-base self-center`}>
                                            Log in
                                        </NavLink>
                                    </>
                                    :
                                    <>
                                        <NavLink to='/dashboard/link' className={`${!isAnimate ? 'bg-black text-white' : 'bg-white text-black'} font-inter sign_up_btn font-medium text-base cursor-pointer rounded-full py-2 px-6 dashboard_tour`}>
                                            DashBoard
                                        </NavLink>
                                        <div onClick={logout} className={`${!isAnimate ? 'text-black' : 'text-white'} font-inter header_btn font-semibold ml-3 px-3 cursor-pointer text-base self-center`}>
                                            Log out
                                        </div>
                                    </>
                                }

                            </div>
                        </div>
                    </div>
                </div>

                <div id="about" className={`duration-700  ${!isAnimate ? 'opacity-100' : 'opacity-25'}`}>
                    <div className="flex flex-col relative text-center mx-auto w-full width_840 px-6 py-4 mt-5">
                        <h1 className="w-760 text-8xl font-bold my-12 heading_gradient self-center leading-100">
                            The One Link for All Your Links
                        </h1>
                    </div>
                </div>

                <div id="myStat"
                    className={`grid grid-cols-2 gap-y-8 w-screen w-1100 mx-auto lg:flex lg:space-x-12 lg:justify-center mt-16 mb-24 duration-700 ${!isAnimate ? 'opacity-100' : 'opacity-25'}`}>
                    <div className="flex ">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M16.5532 2.00002C15.1056 2 14.1724 2.17246 13.1027 2.69607C12.7066 2.88993 12.335 3.12339 11.99 3.39576C11.6582 3.13866 11.3015 2.91592 10.9218 2.72813C9.83132 2.18878 8.85028 2 7.45455 2C3.71644 2 1 5.09727 1 9.11988C1 12.1578 2.69383 15.0923 5.84884 17.9299C7.50489 19.4193 9.61932 20.8933 11.1336 21.6775L12 22.1261L12.8664 21.6775C14.3807 20.8933 16.4951 19.4193 18.1512 17.9299C21.3062 15.0923 23 12.1578 23 9.11988C23 5.13984 20.2579 2.01536 16.5532 2.00002ZM21 9.11988C21 11.4999 19.5862 13.9493 16.8137 16.4429C15.3022 17.8023 13.359 19.1609 12 19.8737C10.641 19.1609 8.69782 17.8023 7.18628 16.4429C4.41382 13.9493 3 11.4999 3 9.11988C3 6.14772 4.88364 4 7.45455 4C8.56428 4 9.24813 4.13159 10.0351 4.52084C10.5 4.75077 10.9109 5.05437 11.2665 5.43377L12.0023 6.2187L12.7315 5.42755C13.0951 5.03295 13.512 4.72244 13.9819 4.49243C14.7459 4.11849 15.387 4 16.5491 4.00001C19.0882 4.01053 21 6.18896 21 9.11988Z"
                                fill="url(#paint0_linear)"></path>
                            <defs>
                                <linearGradient id="paint0_linear" x1="12" y1="2" x2="12" y2="22.1261"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF5959"></stop>
                                    <stop offset="1" stopColor="#C059FF"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <h4 className="ml-3">Free forever</h4>
                    </div>
                    <div className="flex ">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.56 8.94L7.62 0L6.21 1.41L8.59 3.79L3.44 8.94C2.85 9.53 2.85 10.48 3.44 11.06L8.94 16.56C9.23 16.85 9.62 17 10 17C10.38 17 10.77 16.85 11.06 16.56L16.56 11.06C17.15 10.48 17.15 9.53 16.56 8.94ZM5.21 10L10 5.21L14.79 10H5.21ZM19 11.5C19 11.5 17 13.67 17 15C17 16.1 17.9 17 19 17C20.1 17 21 16.1 21 15C21 13.67 19 11.5 19 11.5ZM2 20H22V21.8H2V20Z"
                                fill="url(#paint0_linear_1390_496)"></path>
                            <defs>
                                <linearGradient id="paint0_linear_1390_496" x1="2.86956" y1="10.9" x2="16.0059" y2="19.7736"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF5858"></stop>
                                    <stop offset="1" stopColor="#C058FF"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <h4 className="ml-3">15+ themes</h4>
                    </div>
                    <div className="flex ">
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 16.5002L4.66663 11.0003L10.1666 11.6114L13.869 4.38672" stroke="url(#paint0_linear)"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M17.0279 9.74367L14.4612 2.50564L7.11143 4.73238" stroke="url(#paint1_linear)"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <defs>
                                <linearGradient id="paint0_linear" x1="1.55952" y1="10.4435" x2="9.19635" y2="16.4171"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF5858"></stop>
                                    <stop offset="1" stopColor="#C058FF"></stop>
                                </linearGradient>
                                <linearGradient id="paint1_linear" x1="8.73833" y1="2.58407" x2="9.35653" y2="8.33127"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF5858"></stop>
                                    <stop offset="1" stopColor="#C058FF"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <h4 className="ml-3">Visitor stats</h4>
                    </div>
                    <div className="flex ">
                        <svg width="15" height="22" viewBox="0 0 15 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.4651 8.7013C13.4285 8.63688 13.3754 8.58329 13.3113 8.54601C13.2471 8.50873 13.1742 8.48908 13.0999 8.48908H7.60113L8.52302 1.46492C8.53291 1.37092 8.51079 1.27633 8.46021 1.19638C8.40964 1.11643 8.33356 1.05579 8.24422 1.0242C8.15488 0.992614 8.05748 0.991929 7.96771 1.02226C7.87793 1.05258 7.801 1.11215 7.7493 1.19138L1.06218 12.8743C1.02307 12.9377 1.00164 13.0104 1.00009 13.0848C0.99854 13.1593 1.01693 13.2328 1.05336 13.2977C1.08979 13.3627 1.14294 13.4169 1.20734 13.4545C1.27173 13.4922 1.34504 13.5121 1.4197 13.5121H6.83633L6.10575 20.5468C6.09857 20.6405 6.12302 20.7339 6.1752 20.8121C6.22738 20.8903 6.3043 20.9489 6.39371 20.9785C6.48313 21.0082 6.57991 21.0071 6.66866 20.9755C6.7574 20.944 6.83301 20.8837 6.88345 20.8044L13.4601 9.12271C13.4982 9.05919 13.5188 8.98672 13.5197 8.91269C13.5205 8.83866 13.5017 8.76572 13.4651 8.7013Z"
                                stroke="url(#paint0_linear)" strokeWidth="1.5"></path>
                            <defs>
                                <linearGradient id="paint0_linear" x1="1.54433" y1="11" x2="11.4214" y2="15.5524"
                                    gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#FF5858"></stop>
                                    <stop offset="1" stopColor="#C058FF"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <h4 className="ml-3">Lightning fast (100ms)</h4>
                    </div>
                </div>

                <div className={`dark-space ${!isAnimate ? '' : 'dark-space-in'} mx-auto p-0`}>
                    <div className="width_1300 mx-auto dark-space-black py-16 bg-black rounded-xl">
                        <div className="font-semibold py-2 text-4xl text-gradient text-center">Launch your page in
                            seconds</div>
                        <div
                            className="flex flex-col justify-center content-center lg:grid lg:grid-cols-3 lg:gap-8 lg:mx-20 mt-12 font-semibold">
                            <div className="mx-5 lg:mx-0">
                                <div className="flex justify-center">
                                    <img src="https://cdn.bio.link/landing/claim.jpg"
                                        width="350" height="257" alt="" className="landing_img rounded-md" /></div>
                                <div
                                    className="w-350p md:px-0 lg:w-auto leading-relaxed xl:w-350p mx-auto text-white text-xl sm:text-24 mt-6">
                                    <h2>Claim your bio link</h2>
                                    <h3 className="text-whiteLOp font-inter font-medium">Choose your
                                        username, pick a theme (or design your own), and publish your page.</h3>
                                </div>
                            </div>
                            <div className="mx-5 lg:mx-0 lg:mt-0">
                                <div className="flex justify-center">
                                    <img src="https://cdn.bio.link/landing/all_links.jpg"
                                        width="350" height="257" alt="" className="landing_img rounded-md" /></div>
                                <div
                                    className="w-350p md:px-0 lg:w-auto leading-relaxed xl:w-350p mx-auto text-white text-xl sm:text-24 mt-6">
                                    <h2>Add all your links</h2>
                                    <h3 className="text-whiteLOp font-inter font-medium">Add your
                                        socials, websites, videos, anything. Your bio link is your new website. </h3>
                                </div>
                            </div>
                            <div className="mx-5 lg:mx-0 lg:mt-0">
                                <div className="flex justify-center">
                                    <img src="https://cdn.bio.link/landing/use_it_everywhere.jpg" width="350" height="257"
                                        alt="" className="landing_img rounded-md" /></div>
                                <div
                                    className="w-350p md:px-0 lg:w-auto leading-relaxed xl:w-350 mx-auto text-white text-xl sm:text-24 mt-6">
                                    <h2>Use it everywhere</h2>
                                    <h3 className="text-whiteLOp font-inter font-medium">Use your bio
                                        link on your Instagram, Twitter, TikTok, emails, wherever people follow you.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center align-center mt-90 mt-24 w-full w-1100 mx-auto">
                    <h3 id="profiles"
                        className={`${!isAnimate ? 'opacity-100' : 'text-gray-600 opacity-25'} text-5xl xl:px-0 text-black  leading-relaxed self-center font-bold duration-700 `}>
                        Loved by thousands <span className={`text_gray  ${!isAnimate ? 'text_gray_light' : ''} `}> of
                            artists, writers, musicians, podcasters, youtubers, gamers, developers, hobbyists,
                            brands...</span></h3>
                    <div className="">
                        <div className="flex justify-between mt-6 w-1100 px-6 ">
                            {/* <a href="#"
                                className="flex flex-col justify-center text-center cursor-pointer w-175 duration-700 opacity-100">
                                <div className="bl-bg rounded-full overflow-hidden">
                                    <img src="https://cdn.bio.link/landing/user_1.webp" alt=""
                                        className="object-cover w-175 rounded-full transform hover:scale-95 duration-300" />
                                </div>
                                <div className="mt-4 leading-17 text-black font-inter font-medium">
                                    Austin Archer
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" className="inline -mt-2">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M8 0L9.99182 1.3121L12.3696 1.29622L13.3431 3.48797L15.3519 4.77336L14.9979 7.14888L16 9.32743L14.431 11.1325L14.1082 13.5126L11.8223 14.1741L10.277 16L8 15.308L5.72296 16L4.17772 14.1741L1.89183 13.5126L1.569 11.1325L0 9.32743L1.00206 7.14888L0.648112 4.77336L2.65693 3.48797L3.6304 1.29622L6.00818 1.3121L8 0Z"
                                            fill="#0095F6"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M10.4036 5.20536L7.18853 8.61884L6.12875 7.49364C5.8814 7.23102 5.46798 7.21864 5.20536 7.466C4.94274 7.71335 4.93036 8.12677 5.17771 8.38939L6.71301 10.0195C6.9709 10.2933 7.40616 10.2933 7.66405 10.0195L11.3546 6.10111C11.6019 5.83848 11.5896 5.42507 11.3269 5.17771C11.0643 4.93036 10.6509 4.94274 10.4036 5.20536Z"
                                            fill="white"></path>
                                    </svg>
                                </div>
                                <div className=" mt-3 text-gradient">bio.link/austinarcher</div>
                            </a>
                            <a href="#"
                                className="flex flex-col justify-center text-center cursor-pointer rounded-full w-175 duration-1000 opacity-100">
                                <div className="bl-bg rounded-full overflow-hidden">
                                    <img src="https://cdn.bio.link/landing/user_2.jpg" alt=""
                                        className="object-cover w-175 rounded-full transform hover:scale-95 duration-300" />
                                </div>
                                <div className="mt-4 leading-17 text-black font-inter font-medium">
                                    AC Milan
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" className="inline -mt-2">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M8 0L9.99182 1.3121L12.3696 1.29622L13.3431 3.48797L15.3519 4.77336L14.9979 7.14888L16 9.32743L14.431 11.1325L14.1082 13.5126L11.8223 14.1741L10.277 16L8 15.308L5.72296 16L4.17772 14.1741L1.89183 13.5126L1.569 11.1325L0 9.32743L1.00206 7.14888L0.648112 4.77336L2.65693 3.48797L3.6304 1.29622L6.00818 1.3121L8 0Z"
                                            fill="#0095F6"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M10.4036 5.20536L7.18853 8.61884L6.12875 7.49364C5.8814 7.23102 5.46798 7.21864 5.20536 7.466C4.94274 7.71335 4.93036 8.12677 5.17771 8.38939L6.71301 10.0195C6.9709 10.2933 7.40616 10.2933 7.66405 10.0195L11.3546 6.10111C11.6019 5.83848 11.5896 5.42507 11.3269 5.17771C11.0643 4.93036 10.6509 4.94274 10.4036 5.20536Z"
                                            fill="white"></path>
                                    </svg>
                                </div>
                                <div className=" mt-3 text-gradient">bio.link/acmilan</div>
                            </a>
                            <a href="#"
                                className="flex flex-col justify-center text-center cursor-pointer w-175 duration-300 opacity-100">
                                <div className="bl-bg rounded-full overflow-hidden">
                                    <img src="https://cdn.bio.link/landing/user-3_1.jpeg" alt=""
                                        className="object-cover w-175 rounded-full transform hover:scale-95 duration-300" />
                                </div>
                                <div className="mt-4 leading-17 text-black font-inter font-medium">
                                    Jo Franco
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" className="inline -mt-2">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M8 0L9.99182 1.3121L12.3696 1.29622L13.3431 3.48797L15.3519 4.77336L14.9979 7.14888L16 9.32743L14.431 11.1325L14.1082 13.5126L11.8223 14.1741L10.277 16L8 15.308L5.72296 16L4.17772 14.1741L1.89183 13.5126L1.569 11.1325L0 9.32743L1.00206 7.14888L0.648112 4.77336L2.65693 3.48797L3.6304 1.29622L6.00818 1.3121L8 0Z"
                                            fill="#0095F6"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M10.4036 5.20536L7.18853 8.61884L6.12875 7.49364C5.8814 7.23102 5.46798 7.21864 5.20536 7.466C4.94274 7.71335 4.93036 8.12677 5.17771 8.38939L6.71301 10.0195C6.9709 10.2933 7.40616 10.2933 7.66405 10.0195L11.3546 6.10111C11.6019 5.83848 11.5896 5.42507 11.3269 5.17771C11.0643 4.93036 10.6509 4.94274 10.4036 5.20536Z"
                                            fill="white"></path>
                                    </svg>
                                </div>
                                <div className=" mt-3 text-gradient">bio.link/jo_franco</div>
                            </a>
                            <a href="#"
                                className="flex flex-col justify-center text-center cursor-pointer w-175 duration-500 opacity-100">
                                <div className="bl-bg rounded-full overflow-hidden">
                                    <img src="https://cdn.bio.link/landing/user-4.png" alt=""
                                        className="object-cover w-175 rounded-full transform hover:scale-95 duration-300" />
                                </div>
                                <div className="mt-4 leading-17 text-black font-inter font-medium">
                                    Padre Paulo
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" className="inline -mt-2">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M8 0L9.99182 1.3121L12.3696 1.29622L13.3431 3.48797L15.3519 4.77336L14.9979 7.14888L16 9.32743L14.431 11.1325L14.1082 13.5126L11.8223 14.1741L10.277 16L8 15.308L5.72296 16L4.17772 14.1741L1.89183 13.5126L1.569 11.1325L0 9.32743L1.00206 7.14888L0.648112 4.77336L2.65693 3.48797L3.6304 1.29622L6.00818 1.3121L8 0Z"
                                            fill="#0095F6"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M10.4036 5.20536L7.18853 8.61884L6.12875 7.49364C5.8814 7.23102 5.46798 7.21864 5.20536 7.466C4.94274 7.71335 4.93036 8.12677 5.17771 8.38939L6.71301 10.0195C6.9709 10.2933 7.40616 10.2933 7.66405 10.0195L11.3546 6.10111C11.6019 5.83848 11.5896 5.42507 11.3269 5.17771C11.0643 4.93036 10.6509 4.94274 10.4036 5.20536Z"
                                            fill="white"></path>
                                    </svg>
                                </div>
                                <div className=" mt-3 text-gradient">bio.link/padrepaulorica...</div>
                            </a>
                            <a href="#"
                                className="flex flex-col justify-center text-center cursor-pointer w-175 duration-100 opacity-100">
                                <div className="bl-bg rounded-full overflow-hidden">
                                    <img src="https://cdn.bio.link/landing/user_5.png" alt=""
                                        className="object-cover w-175 rounded-full transform hover:scale-95 duration-300" />
                                </div>
                                <div className="mt-4 leading-17 text-black font-inter font-medium">
                                    @afrochella
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" className="inline -mt-2">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M8 0L9.99182 1.3121L12.3696 1.29622L13.3431 3.48797L15.3519 4.77336L14.9979 7.14888L16 9.32743L14.431 11.1325L14.1082 13.5126L11.8223 14.1741L10.277 16L8 15.308L5.72296 16L4.17772 14.1741L1.89183 13.5126L1.569 11.1325L0 9.32743L1.00206 7.14888L0.648112 4.77336L2.65693 3.48797L3.6304 1.29622L6.00818 1.3121L8 0Z"
                                            fill="#0095F6"></path>
                                        <path fillRule="evenodd" clipRule="evenodd"
                                            d="M10.4036 5.20536L7.18853 8.61884L6.12875 7.49364C5.8814 7.23102 5.46798 7.21864 5.20536 7.466C4.94274 7.71335 4.93036 8.12677 5.17771 8.38939L6.71301 10.0195C6.9709 10.2933 7.40616 10.2933 7.66405 10.0195L11.3546 6.10111C11.6019 5.83848 11.5896 5.42507 11.3269 5.17771C11.0643 4.93036 10.6509 4.94274 10.4036 5.20536Z"
                                            fill="white"></path>
                                    </svg>
                                </div>
                                <div className=" mt-3 text-gradient">bio.link/afrochella</div>
                            </a> */}
                            {renderProfile()}
                        </div>
                    </div>
                </div>

                <div className="text-center pt-2 pb-5 duration-100 opacity-100">
                    <div className="mx-auto mb-4 mt-24 w-full w-1100 ">
                        <div className="flex justify-center">
                            <svg width="1101" height="8" viewBox="0 0 1101 8" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.5">
                                    <path
                                        d="M0 6.96948C5.68452 6.96948 8.57997 5.04827 11.1347 3.35318C13.4413 1.82239 15.2636 0.613239 19.1573 0.613239C23.0507 0.613239 24.8726 1.82239 27.1792 3.3529C29.7336 5.04827 32.629 6.96948 38.3135 6.96948C43.9977 6.96948 46.8927 5.04799 49.4471 3.3529C51.7533 1.82211 53.5748 0.613239 57.4678 0.613239C61.3616 0.613239 63.1834 1.82239 65.49 3.3529C68.0444 5.04827 70.9399 6.96948 76.6244 6.96948C82.3093 6.96948 85.2043 5.04827 87.7591 3.3529C90.0657 1.82239 91.888 0.613239 95.7813 0.613239C99.6755 0.613239 101.497 1.82239 103.804 3.3529C106.359 5.04827 109.254 6.96948 114.939 6.96948C120.624 6.96948 123.519 5.04827 126.074 3.3529C128.381 1.82239 130.203 0.613239 134.096 0.613239C137.991 0.613239 139.813 1.82239 142.121 3.35318C144.675 5.04827 147.571 6.96948 153.256 6.96948"
                                        stroke="url(#paint0_linear_547_487)"></path>
                                    <path
                                        d="M153.266 6.96973C158.95 6.96973 161.846 5.04851 164.4 3.35342C166.707 1.82263 168.529 0.613483 172.423 0.613483C176.316 0.613483 178.138 1.82263 180.445 3.35314C182.999 5.04851 185.895 6.96973 191.579 6.96973C197.263 6.96973 200.158 5.04823 202.713 3.35314C205.019 1.82235 206.84 0.613483 210.733 0.613483C214.627 0.613483 216.449 1.82263 218.756 3.35314C221.31 5.04851 224.205 6.96973 229.89 6.96973C235.575 6.96973 238.47 5.04851 241.025 3.35314C243.331 1.82263 245.154 0.613483 249.047 0.613483C252.941 0.613483 254.763 1.82263 257.07 3.35314C259.624 5.04851 262.52 6.96973 268.205 6.96973C273.89 6.96973 276.785 5.04851 279.34 3.35314C281.646 1.82263 283.468 0.613483 287.362 0.613483C291.257 0.613483 293.079 1.82263 295.386 3.35342C297.941 5.04851 300.837 6.96973 306.522 6.96973"
                                        stroke="url(#paint1_linear_547_487)"></path>
                                    <path
                                        d="M306.52 6.96973C312.204 6.96973 315.1 5.04851 317.654 3.35342C319.961 1.82263 321.783 0.613483 325.677 0.613483C329.57 0.613483 331.392 1.82263 333.699 3.35314C336.253 5.04851 339.149 6.96973 344.833 6.96973C350.517 6.96973 353.412 5.04823 355.967 3.35314C358.273 1.82235 360.094 0.613483 363.987 0.613483C367.881 0.613483 369.703 1.82263 372.01 3.35314C374.564 5.04851 377.459 6.96973 383.144 6.96973C388.829 6.96973 391.724 5.04851 394.279 3.35314C396.585 1.82263 398.407 0.613483 402.301 0.613483C406.195 0.613483 408.017 1.82263 410.323 3.35314C412.878 5.04851 415.774 6.96973 421.459 6.96973C427.143 6.96973 430.039 5.04851 432.594 3.35314C434.9 1.82263 436.722 0.613483 440.616 0.613483C444.51 0.613483 446.333 1.82263 448.64 3.35342C451.195 5.04851 454.091 6.96973 459.776 6.96973"
                                        stroke="url(#paint2_linear_547_487)"></path>
                                    <path
                                        d="M459.781 6.96973C465.466 6.96973 468.361 5.04851 470.916 3.35342C473.223 1.82263 475.045 0.613483 478.939 0.613483C482.832 0.613483 484.654 1.82263 486.96 3.35314C489.515 5.04851 492.41 6.96973 498.095 6.96973C503.779 6.96973 506.674 5.04823 509.228 3.35314C511.535 1.82235 513.356 0.613483 517.249 0.613483C521.143 0.613483 522.965 1.82263 525.271 3.35314C527.826 5.04851 530.721 6.96973 536.406 6.96973C542.091 6.96973 544.986 5.04851 547.54 3.35314C549.847 1.82263 551.669 0.613483 555.563 0.613483C559.457 0.613483 561.279 1.82263 563.585 3.35314C566.14 5.04851 569.035 6.96973 574.72 6.96973C580.405 6.96973 583.301 5.04851 585.855 3.35314C588.162 1.82263 589.984 0.613483 593.878 0.613483C597.772 0.613483 599.594 1.82263 601.902 3.35342C604.457 5.04851 607.352 6.96973 613.038 6.96973"
                                        stroke="url(#paint3_linear_547_487)"></path>
                                    <path
                                        d="M613.047 6.96973C618.731 6.96973 621.627 5.04851 624.182 3.35342C626.488 1.82263 628.31 0.613483 632.204 0.613483C636.098 0.613483 637.919 1.82263 640.226 3.35314C642.78 5.04851 645.676 6.96973 651.36 6.96973C657.045 6.96973 659.94 5.04823 662.494 3.35314C664.8 1.82235 666.622 0.613483 670.515 0.613483C674.408 0.613483 676.23 1.82263 678.537 3.35314C681.091 5.04851 683.987 6.96973 689.671 6.96973C695.356 6.96973 698.251 5.04851 700.806 3.35314C703.113 1.82263 704.935 0.613483 708.828 0.613483C712.722 0.613483 714.544 1.82263 716.851 3.35314C719.406 5.04851 722.301 6.96973 727.986 6.96973C733.671 6.96973 736.566 5.04851 739.121 3.35314C741.428 1.82263 743.25 0.613483 747.143 0.613483C751.038 0.613483 752.86 1.82263 755.167 3.35342C757.722 5.04851 760.618 6.96973 766.303 6.96973"
                                        stroke="url(#paint4_linear_547_487)"></path>
                                    <path
                                        d="M766.305 6.96973C771.989 6.96973 774.885 5.04851 777.439 3.35342C779.746 1.82263 781.568 0.613483 785.462 0.613483C789.355 0.613483 791.177 1.82263 793.484 3.35314C796.038 5.04851 798.934 6.96973 804.618 6.96973C810.302 6.96973 813.197 5.04823 815.752 3.35314C818.058 1.82235 819.879 0.613483 823.772 0.613483C827.666 0.613483 829.488 1.82263 831.795 3.35314C834.349 5.04851 837.245 6.96973 842.929 6.96973C848.614 6.96973 851.509 5.04851 854.064 3.35314C856.37 1.82263 858.193 0.613483 862.086 0.613483C865.98 0.613483 867.802 1.82263 870.109 3.35314C872.663 5.04851 875.559 6.96973 881.244 6.96973C886.929 6.96973 889.824 5.04851 892.379 3.35314C894.685 1.82263 896.507 0.613483 900.401 0.613483C904.296 0.613483 906.118 1.82263 908.425 3.35342C910.98 5.04851 913.876 6.96973 919.561 6.96973"
                                        stroke="url(#paint5_linear_547_487)"></path>
                                    <path
                                        d="M919.557 6.96973C925.241 6.96973 928.137 5.04851 930.691 3.35342C932.998 1.82263 934.82 0.613483 938.714 0.613483C942.607 0.613483 944.429 1.82263 946.736 3.35314C949.29 5.04851 952.186 6.96973 957.87 6.96973C963.554 6.96973 966.449 5.04823 969.004 3.35314C971.31 1.82235 973.131 0.613483 977.024 0.613483C980.918 0.613483 982.74 1.82263 985.047 3.35314C987.601 5.04851 990.497 6.96973 996.181 6.96973C1001.87 6.96973 1004.76 5.04851 1007.32 3.35314C1009.62 1.82263 1011.44 0.613483 1015.34 0.613483C1019.23 0.613483 1021.05 1.82263 1023.36 3.35314C1025.92 5.04851 1028.81 6.96973 1034.5 6.96973C1040.18 6.96973 1043.08 5.04851 1045.63 3.35314C1047.94 1.82263 1049.76 0.613483 1053.65 0.613483C1057.55 0.613483 1059.37 1.82263 1061.68 3.35342C1064.23 5.04851 1067.13 6.96973 1072.81 6.96973"
                                        stroke="url(#paint6_linear_547_487)"></path>
                                    <path
                                        d="M1072.82 6.96973C1078.5 6.96973 1081.4 5.04851 1083.96 3.35342C1086.26 1.82263 1088.08 0.613483 1091.98 0.613483C1095.87 0.613483 1097.69 1.82263 1100 3.35314"
                                        stroke="url(#paint7_linear_547_487)"></path>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_547_487" x1="6.66332" y1="3.79136" x2="7.12698"
                                        y2="-4.43997" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FF5858"></stop>
                                        <stop offset="1" stopColor="#C058FF"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint1_linear_547_487" x1="159.929" y1="3.7916" x2="160.393"
                                        y2="-4.43973" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FF5858"></stop>
                                        <stop offset="1" stopColor="#C058FF"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint2_linear_547_487" x1="313.183" y1="3.7916" x2="313.647"
                                        y2="-4.43973" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FF5858"></stop>
                                        <stop offset="1" stopColor="#C058FF"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_547_487" x1="466.445" y1="3.7916" x2="466.908"
                                        y2="-4.43973" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FF5858"></stop>
                                        <stop offset="1" stopColor="#C058FF"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_547_487" x1="619.71" y1="3.7916" x2="620.174"
                                        y2="-4.43973" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FF5858"></stop>
                                        <stop offset="1" stopColor="#C058FF"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint5_linear_547_487" x1="772.968" y1="3.7916" x2="773.432"
                                        y2="-4.43973" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FF5858"></stop>
                                        <stop offset="1" stopColor="#C058FF"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint6_linear_547_487" x1="926.22" y1="3.7916" x2="926.684"
                                        y2="-4.43973" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FF5858"></stop>
                                        <stop offset="1" stopColor="#C058FF"></stop>
                                    </linearGradient>
                                    <linearGradient id="paint7_linear_547_487" x1="1074" y1="3.7916" x2="1076.38"
                                        y2="-3.70913" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FF5858"></stop>
                                        <stop offset="1" stopColor="#C058FF"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="my-12 flex flex-row gap-0 justify-between">
                            <div className="flex flex-col text-left">
                                <div className="flex justify-start gap-2">
                                    <a href="https://play.google.com/store/apps/details?id=app.biolink"
                                        className="transform hover:-translate-y-0.5 duration-75 ease-out w-125">
                                        <img src="https://cdn.bio.link/landing/google-play.png" alt="get from googlplay" />
                                    </a>
                                    <a href="https://apps.apple.com/app/bio-link-link-in-bio/id1573294119#?platform=iphone"
                                        className="transform hover:-translate-y-0.5 duration-75 ease-out w-125">
                                        <img src="https://cdn.bio.link/landing/app-store.png" alt="get from appstore" />
                                    </a>
                                </div>
                                <div
                                    className="flex lg:justify-end gap-8 text-base font-inter font-medium text-dark mt-8 text-black">
                                    <div className="cursor-pointer hover:text-gray-600">Features</div>
                                    <div className="cursor-pointer hover:text-gray-600">Help Center</div>
                                    <div className="cursor-pointer hover:text-gray-600">Terms</div>
                                    <div className="cursor-pointer hover:text-gray-600">Privacy</div>
                                    <div className="cursor-pointer hover:text-gray-600">Report</div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex justify-end gap-8">
                                    <a href="https://twitter.com/@biodotlink"
                                        className="transform hover:scale-110 duration-75 ease-out">
                                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.49096 26.9697C19.6797 26.9697 25.2525 18.5049 25.2525 11.1643C25.2525 10.9239 25.2525 10.6845 25.2363 10.4463C26.3204 9.65992 27.2563 8.68626 28 7.57089C26.9891 8.02034 25.9165 8.31496 24.8183 8.44488C25.9748 7.75073 26.8403 6.6588 27.2537 5.37239C26.1664 6.0195 24.9767 6.47551 23.7362 6.72073C22.901 5.83016 21.7963 5.24044 20.5932 5.04284C19.3901 4.84524 18.1556 5.05077 17.0807 5.62763C16.0058 6.20449 15.1505 7.12051 14.6471 8.23395C14.1437 9.34739 14.0202 10.5962 14.2959 11.787C12.0935 11.6763 9.93898 11.1023 7.97214 10.1024C6.0053 9.10256 4.27011 7.69912 2.8792 5.98321C2.17082 7.2061 1.95386 8.65375 2.27249 10.0314C2.59112 11.4091 3.42138 12.6132 4.59424 13.3986C3.71264 13.3727 2.85023 13.1342 2.08 12.7033V12.7737C2.08035 14.0562 2.52308 15.2991 3.3331 16.2916C4.14313 17.2841 5.27057 17.9651 6.5242 18.219C5.70867 18.4421 4.85298 18.4747 4.02292 18.3143C4.37704 19.418 5.06623 20.3831 5.99414 21.0748C6.92206 21.7665 8.0423 22.1501 9.19828 22.172C8.04974 23.0773 6.73448 23.7466 5.32773 24.1417C3.92099 24.5368 2.45037 24.6499 1 24.4745C3.53331 26.1046 6.48091 26.9694 9.49096 26.9654"
                                                stroke="#0D0C22" strokeWidth="1.5" strokeLinejoin="round"></path>
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/biodotlink/"
                                        className="transform hover:scale-110 duration-75 ease-out">
                                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M22 7H24M9 1H21C25.4183 1 29 4.58172 29 9V21C29 25.4183 25.4183 29 21 29H9C4.58172 29 1 25.4183 1 21V9C1 4.58172 4.58172 1 9 1ZM15 21C11.6863 21 9 18.3137 9 15C9 11.6863 11.6863 9 15 9C18.3137 9 21 11.6863 21 15C21 18.3137 18.3137 21 15 21Z"
                                                stroke="#0D0C22" strokeWidth="1.5"></path>
                                        </svg>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCMtHlkP8mJDQjxHPkwOOnbQ"
                                        className="transform hover:scale-110 duration-75 ease-out">
                                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M30.372 9.26956C30.21 8.62242 29.8801 8.02949 29.4157 7.55065C28.9512 7.07182 28.3686 6.72403 27.7267 6.54242C25.3813 5.96973 16 5.96973 16 5.96973C16 5.96973 6.61867 5.96973 4.27334 6.59697C3.63143 6.77857 3.04882 7.12636 2.58435 7.6052C2.11988 8.08403 1.79 8.67696 1.62802 9.3241C1.19879 11.7043 0.988829 14.1188 1.00078 16.5374C0.985479 18.9741 1.19545 21.4071 1.62802 23.8052C1.80659 24.4322 2.14387 25.0026 2.60726 25.4612C3.07065 25.9198 3.64449 26.2511 4.27334 26.4232C6.61867 27.0505 16 27.0504 16 27.0504C16 27.0504 25.3813 27.0505 27.7267 26.4232C28.3686 26.2416 28.9512 25.8938 29.4157 25.415C29.8801 24.9361 30.21 24.3432 30.372 23.6961C30.7979 21.3338 31.0078 18.9377 30.9992 16.5374C31.0145 14.1006 30.8046 11.6677 30.372 9.26956V9.26956Z"
                                                stroke="#0D0C22" strokeWidth="1.5" strokeLinecap="round"
                                                strokeLinejoin="round"></path>
                                            <path d="M12.9316 20.9971L20.7721 16.5382L12.9316 12.0793V20.9971Z"
                                                stroke="#0D0C22" strokeWidth="1.5" strokeLinecap="round"
                                                strokeLinejoin="round"></path>
                                        </svg>
                                    </a>
                                    <a href="https://tiktok.com/@biodotlink"
                                        className="transform hover:scale-110 duration-75 ease-out">
                                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M17.5172 1.96973V23.2111C17.5172 26.9438 14.4913 29.9697 10.7586 29.9697C7.02594 29.9697 4 26.9438 4 23.2111C4 19.4784 7.02594 16.4525 10.7586 16.4525M26.2069 12.5904C21.4077 12.5904 17.5172 8.69993 17.5172 3.90076"
                                                stroke="#0D0C22" strokeWidth="1.5"></path>
                                        </svg>
                                    </a>
                                    <a href="https://bio.link/biodotlink"
                                        className="transform hover:scale-110 duration-75 ease-out">
                                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_547_800)">
                                                <rect width="30" height="30" transform="translate(0 0.969727)"
                                                    stroke="#0D0C22"></rect>
                                                <rect x="0.9375" y="1.90723" width="28.125" height="28.125" stroke="#0D0C22"
                                                    strokeWidth="1.5"></rect>
                                                <path
                                                    d="M9.42656 9.55629V7.94754C9.42656 7.81754 9.40219 7.73223 9.35344 7.6916C9.30469 7.64285 9.21125 7.61848 9.07312 7.61848H7.96406V9.88535H9.07312C9.21125 9.88535 9.30469 9.86504 9.35344 9.82441C9.40219 9.77566 9.42656 9.68629 9.42656 9.55629ZM9.42656 12.9322V11.2382C9.42656 11.1082 9.40219 11.0229 9.35344 10.9822C9.30469 10.9335 9.21125 10.9091 9.07312 10.9091H7.96406V13.2613H9.07312C9.21125 13.2613 9.30469 13.241 9.35344 13.2004C9.40219 13.1516 9.42656 13.0622 9.42656 12.9322ZM6.5625 6.59473H9.4875C10.3731 6.59473 10.8159 6.99691 10.8159 7.80129V9.45879C10.8159 9.97066 10.6453 10.2835 10.3041 10.3972C10.6453 10.511 10.8159 10.8035 10.8159 11.2747V13.0785C10.8159 13.8829 10.3731 14.285 9.4875 14.285H6.5625V6.59473Z"
                                                    fill="#0D0C22"></path>
                                                <path d="M12.0034 6.59473H13.4049V14.285H12.0034V6.59473Z" fill="#0D0C22">
                                                </path>
                                                <path
                                                    d="M15.9235 6.59473H17.4104C18.296 6.59473 18.7389 6.99691 18.7389 7.80129V13.0785C18.7389 13.8829 18.296 14.285 17.4104 14.285H15.9235C15.0379 14.285 14.5951 13.8829 14.5951 13.0785V7.80129C14.5951 6.99691 15.0379 6.59473 15.9235 6.59473ZM17.3373 12.8835V7.99629C17.3373 7.86629 17.3129 7.78098 17.2642 7.74035C17.2154 7.6916 17.126 7.66723 16.996 7.66723H16.3501C16.212 7.66723 16.1185 7.6916 16.0698 7.74035C16.021 7.78098 15.9967 7.86629 15.9967 7.99629V12.8835C15.9967 13.0135 16.021 13.1029 16.0698 13.1516C16.1185 13.1922 16.212 13.2125 16.3501 13.2125H16.996C17.126 13.2125 17.2154 13.1922 17.2642 13.1516C17.3129 13.1029 17.3373 13.0135 17.3373 12.8835Z"
                                                    fill="#0D0C22"></path>
                                                <path d="M19.6982 14.285V12.6397H21.185V14.285H19.6982Z" fill="#0D0C22">
                                                </path>
                                                <path d="M7.96406 23.525H10.0116V24.5975H6.5625V16.9072H7.96406V23.525Z"
                                                    fill="#0D0C22"></path>
                                                <path d="M10.7061 16.9072H12.1076V24.5975H10.7061V16.9072Z" fill="#0D0C22">
                                                </path>
                                                <path
                                                    d="M16.3203 16.9072H17.6V24.5975H16.2837L14.6384 19.5032V24.5975H13.3466V16.9072H14.6994L16.3203 21.9285V16.9072Z"
                                                    fill="#0D0C22"></path>
                                                <path
                                                    d="M23.2951 16.9072L21.7107 20.7341L23.2829 24.5975H21.7716L20.2482 20.7341L21.7838 16.9072H23.2951ZM18.7857 24.5975V16.9072H20.1873V24.5975H18.7857Z"
                                                    fill="#0D0C22"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_547_800">
                                                    <rect width="30" height="30" fill="white"
                                                        transform="translate(0 0.969727)"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </div>
                                <div className="font-inter font-medium mt-8 text-right text-black">
                                    © This page is made by <a href="https://www.facebook.com/profile.php?id=100005135208157" className="text-gradient">
                                        D4rl1ng - quannt86
                                    </a> base on bio.link
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
