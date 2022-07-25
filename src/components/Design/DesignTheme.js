import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

let bgColorOptions = ['rgb(133, 107, 255)', 'rgb(0, 136, 115)', 'rgb(255, 31, 84)', 'rgb(0, 0, 0)', 'rgb(255, 255, 255)']
let btnRadiusOptions = ['30px', '8px', '0px']
let fontOptions = [
    {
        name: 'DM Sans',
        fontFamily: "'DM Sans', sans-serif"
    },
    {
        name: 'Balsamiq Sans',
        fontFamily: "'Balsamiq Sans', cursive"
    },
    {
        name: 'EB Garamond',
        fontFamily: "'EB Garamond', serif"
    },
    {
        name: 'Kite One',
        fontFamily: "'Kite One', sans-serif"
    },
    {
        name: 'Quicksand',
        fontFamily: "'Quicksand', sans-serif"
    },
    {
        name: 'Teko',
        fontFamily: "'Teko', sans-serif"
    }
]
let btnBdStyles = ['dotted', 'dashed', 'solid']

export default function DesignTheme() {

    // TODO: Dùng input type='color' để chọn màu và lấy ra value từ ref

    const dispatch = useDispatch()
    const { newTheme } = useSelector(state => state.ProfileReducer)
    const themeRef = useRef(null)

    const renderBgColor = () => {
        return bgColorOptions.map((item, index) => {
            return <div key={index} className={`rounded-full flex justify-center items-center cursor-pointer ${newTheme.background === item ? 'theme-select-border' : 'theme-default-border'}`} style={{ width: '70px', height: '70px' }} onClick={() => {
                dispatch({
                    type: 'UPDATE_NEW_THEME',
                    background: item
                })
            }}>
                <div className="bl-color-each rounded-full br-grey relative" style={{ backgroundColor: item, width: '64px', height: '64px' }}></div>
            </div>
        })
    }

    const renderBtnRadius = () => {
        return btnRadiusOptions.map((item, index) => {
            return <div key={index} className={`flex justify-center items-center ${newTheme.btnRadius === item ? 'theme-select-border' : 'theme-default-border'}`} style={{ borderRadius: item, height: '56px', padding: '0 2px 0' }} onClick={() => {
                dispatch({
                    type: 'UPDATE_NEW_THEME',
                    btnRadius: item
                })
            }}>
                <div className="cursor-pointer relative overflow-hidden w-full theme-bordered-btn" style={{ borderRadius: item, height: '48px' }}></div>
            </div>
        })
    }

    const btnBtnBdStyles = () => {
        return btnBdStyles.map((item, index) => {
            return <div key={index} className={`flex justify-center items-center ${newTheme.btnBdStyle === item ? 'theme-select-border' : 'theme-default-border'}`} style={{ height: '56px', padding: '0 2px 0' }} onClick={() => {
                dispatch({
                    type: 'UPDATE_NEW_THEME',
                    btnBdStyle: item
                })
            }}>
                <div className="cursor-pointer relative overflow-hidden w-full theme-bordered-btn" style={{ borderStyle: item, height: '48px' }}></div>
            </div>
        })
    }

    const renderBtnBdColor = () => {
        return bgColorOptions.map((item, index) => {
            return <div key={index} className={`rounded-full flex justify-center items-center cursor-pointer ${newTheme.btnBdColor === item ? 'theme-select-border' : 'theme-default-border'}`} style={{ width: '70px', height: '70px' }} onClick={() => {
                dispatch({
                    type: 'UPDATE_NEW_THEME',
                    btnBdColor: item
                })
            }}>
                <div className="bl-color-each rounded-full br-grey relative" style={{ backgroundColor: item, width: '64px', height: '64px' }}></div>
            </div>
        })
    }

    const renderBtnBgColor = () => {
        return bgColorOptions.map((item, index) => {
            return <div key={index} className={`rounded-full flex justify-center items-center cursor-pointer ${newTheme.btnBg === item ? 'theme-select-border' : 'theme-default-border'}`} style={{ width: '70px', height: '70px' }} onClick={() => {
                dispatch({
                    type: 'UPDATE_NEW_THEME',
                    btnBg: item
                })
            }}>
                <div className="bl-color-each rounded-full br-grey relative" style={{ backgroundColor: item, width: '64px', height: '64px' }}></div>
            </div>
        })
    }

    const renderLinkColor = () => {
        return bgColorOptions.map((item, index) => {
            return <div key={index} className={`rounded-full flex justify-center items-center cursor-pointer ${newTheme.colorLink === item ? 'theme-select-border' : 'theme-default-border'}`} style={{ width: '70px', height: '70px' }} onClick={() => {
                dispatch({
                    type: 'UPDATE_NEW_THEME',
                    colorLink: item
                })
            }}>
                <div className="bl-color-each rounded-full br-grey relative" style={{ backgroundColor: item, width: '64px', height: '64px' }}></div>
            </div>
        })
    }

    const renderHeaderColor = () => {
        return bgColorOptions.map((item, index) => {
            return <div key={index} className={`rounded-full flex justify-center items-center cursor-pointer ${newTheme.colorHeader === item ? 'theme-select-border' : 'theme-default-border'}`} style={{ width: '70px', height: '70px' }} onClick={() => {
                dispatch({
                    type: 'UPDATE_NEW_THEME',
                    colorHeader: item
                })
            }}>
                <div className="bl-color-each rounded-full br-grey relative" style={{ backgroundColor: item, width: '64px', height: '64px' }}></div>
            </div>
        })
    }

    const renderFont = () => {
        return fontOptions.map((item, index) => {
            return <div key={index} className={`rounded-md  cursor-pointer rounded-12 flex justify-center items-center mb-6 ${newTheme.fontFamily === item.fontFamily ? 'theme-select-border' : 'theme-default-border'}`} style={{ height: '56px', padding: '0 2px 0' }} onClick={() => {
                dispatch({
                    type: 'UPDATE_NEW_THEME',
                    fontFamily: item.fontFamily
                })
            }}>
                <div className="rounded-md flex justify-center items-center overflow-hidden relative br-grey w-full" style={{ height: '48px' }}>
                    <div className="font-normal text-sm text-black" style={{ fontFamily: item.fontFamily }}>{item.name}</div>
                </div>
            </div>
        })
    }

    const handleSave = () => {
        dispatch({
            type: 'SAVE_NEW_THEME',
            name: themeRef.current.value
        })
    }

    const handleChangeColor = (e) => {
        const { name, value } = e.target
        dispatch({
            type: 'UPDATE_NEW_THEME',
            [name]: value
        })
    }


    return (
        <div className='p-8 bg-white rounded-sm mt-8 shadow-sm'>

            <div className='text-2xl font-bold text-black mb-10 text-center'>
                <p className='mb-4'>Theme name</p>
                <div className="input-main-wrap overflow-hidden	rounded-sm mb-4 flex">
                    <input ref={themeRef} type="text" name="name" placeholder="Name" className="flex-1 bl-input w-full p-4 text-sm font-normal font-inter placeholder-grey hover:bg-bl-bg-grey focus:bg-white" />
                </div>
            </div>

            <div className='text-3xl font-bold text-black mb-8 text-center'>Background</div>
            <div className='pb-8 border-b-gray-200 border-b mt-6'>
                <div className='w-full'>
                    <div className='grid grid-cols-3 gap-x-8'>
                        <div className="p-1 rounded-xl theme-select-border" >
                            <div className="theme-btn-box bg-black rounded-md flex justify-center items-center flex-col relative cursor-pointer">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.37331 0 0 5.37331 0 12C0 18.6267 5.37331 24 12 24C13.1067 24 14 23.1067 14 22C14 21.48 13.8067 21.0133 13.48 20.66C13.1667 20.3067 12.98 19.8467 12.98 19.3333C12.98 18.2266 13.8733 17.3333 14.98 17.3333H17.3333C21.0133 17.3333 24 14.3466 24 10.6666C24 4.77331 18.6267 0 12 0ZM4.66669 12C3.56 12 2.66669 11.1067 2.66669 10C2.66669 8.89331 3.56 8 4.66669 8C5.77338 8 6.66669 8.89331 6.66669 10C6.66669 11.1067 5.77331 12 4.66669 12ZM8.66669 6.66669C7.56 6.66669 6.66669 5.77338 6.66669 4.66669C6.66669 3.56 7.56 2.66669 8.66669 2.66669C9.77338 2.66669 10.6667 3.56 10.6667 4.66669C10.6667 5.77338 9.77331 6.66669 8.66669 6.66669ZM15.3333 6.66669C14.2266 6.66669 13.3333 5.77338 13.3333 4.66669C13.3333 3.56 14.2266 2.66669 15.3333 2.66669C16.44 2.66669 17.3333 3.56 17.3333 4.66669C17.3333 5.77338 16.44 6.66669 15.3333 6.66669ZM19.3333 12C18.2266 12 17.3333 11.1067 17.3333 10C17.3333 8.89331 18.2266 8 19.3333 8C20.44 8 21.3333 8.89331 21.3333 10C21.3333 11.1067 20.44 12 19.3333 12Z" fill="#FFFFFF"></path></svg>
                                <div className="font-inter font-semibold text-sm mt-2 text-center px-6 text-white ">Flat color</div>
                            </div>
                        </div>

                        <div className="p-1 rounded-xl theme-default-border">
                            <div className="theme-btn-box theme-gradient-btn rounded-md flex justify-center items-center flex-col relative cursor-pointer">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.6667 8H13.3333V10.6667H10.6667V8ZM8 10.6667H10.6667V13.3333H8V10.6667ZM13.3333 10.6667H16V13.3333H13.3333V10.6667ZM16 8H18.6667V10.6667H16V8ZM5.33333 8H8V10.6667H5.33333V8ZM21.3333 0H2.66667C1.2 0 0 1.2 0 2.66667V21.3333C0 22.8 1.2 24 2.66667 24H21.3333C22.8 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8 0 21.3333 0ZM8 20H5.33333V17.3333H8V20ZM13.3333 20H10.6667V17.3333H13.3333V20ZM18.6667 20H16V17.3333H18.6667V20ZM21.3333 10.6667H18.6667V13.3333H21.3333V16H18.6667V13.3333H16V16H13.3333V13.3333H10.6667V16H8V13.3333H5.33333V16H2.66667V13.3333H5.33333V10.6667H2.66667V2.66667H21.3333V10.6667Z" fill="#F3F3F4"></path></svg>
                                <div className="font-inter font-semibold text-sm mt-2 text-center px-6 text-white ">Gradient</div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-8 grid grid-cols-6 items-center'>
                        <div className={`rounded-full relative overflow-hidden flex justify-center items-center br-gray custom-color-picker cursor-pointer ${newTheme.background === true ? 'theme-select-border' : ''}`} style={{ width: '64px', height: '64px' }} >
                            <div className="flex justify-center items-center absolute w-full h-full top-0 left-0 " style={{ background: 'rgba(0,0,0,.25)' }}>
                                <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0678 8.38654C19.3238 9.04108 19.2464 10.1734 19.9009 10.9218L18.5493 12.1033L12.6409 5.34181L13.9926 4.16145C14.646 4.90763 15.7795 4.9829 16.5235 4.32945L20.0646 1.30108C20.5773 0.857082 21.2078 0.636719 21.8373 0.636719C23.3427 0.636719 24.5449 1.86726 24.5449 3.33235C24.5449 4.12872 24.1936 4.85199 23.6133 5.35926L20.0678 8.38654ZM12.4936 12.6367H9.76638L13.6522 9.22981L12.4686 7.87708L4.46238 14.8447C3.16529 15.9716 4.06092 16.8422 2.99183 18.3302C2.84674 18.5331 2.76274 18.736 2.73983 18.9302C2.66783 19.5193 3.09438 20.0156 3.6311 20.0822C3.84274 20.1073 4.07838 20.0658 4.3031 19.9327C5.99401 18.9378 6.6791 20.0604 8.00783 18.8996L16.0151 11.9353L14.8358 10.5814L12.4936 12.6367ZM2.55983 20.8185C1.97619 23.0582 0.544922 23.3658 0.544922 24.8374C0.544922 25.9316 1.45474 26.8185 2.55983 26.8185C3.66492 26.8185 4.56056 25.9316 4.56056 24.8374C4.56056 23.3658 3.14347 23.0582 2.55983 20.8185Z" fill="white"></path></svg>
                            </div>
                            <input type="color" name='background' className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer" onChange={handleChangeColor} />
                        </div>
                        {renderBgColor()}
                    </div>
                </div>
            </div>

            <div className='mt-12 pb-8 border-b-gray-200 border-b'>
                <div className='text-3xl font-bold text-black mb-8 text-center'>Button</div>
                <div className="font-inter font-semibold text-black text-lg text-center"> Border radius</div>
                <div className='pb-8 mt-3'>
                    <div className='pt-3 grid grid-cols-3 gap-x-8'>
                        {renderBtnRadius()}
                    </div>
                </div>

                <div className="font-inter font-semibold text-black text-lg text-center "> Border Style</div>
                <div className='pb-8 mt-3'>
                    <div className='pt-3 grid grid-cols-3 gap-x-8'>
                        {btnBtnBdStyles()}
                    </div>
                </div>

                <div className="font-inter font-semibold text-black text-lg text-center "> Border color</div>
                <div className='pb-8 mt-3'>
                    <div className='pt-3 grid grid-cols-6'>
                        <div className={`rounded-full relative overflow-hidden flex justify-center items-center br-gray custom-color-picker cursor-pointer ${newTheme.background === true ? 'theme-select-border' : ''}`} style={{ width: '64px', height: '64px' }} >
                            <div className="flex justify-center items-center absolute w-full h-full top-0 left-0 " style={{ background: 'rgba(0,0,0,.25)' }}>
                                <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0678 8.38654C19.3238 9.04108 19.2464 10.1734 19.9009 10.9218L18.5493 12.1033L12.6409 5.34181L13.9926 4.16145C14.646 4.90763 15.7795 4.9829 16.5235 4.32945L20.0646 1.30108C20.5773 0.857082 21.2078 0.636719 21.8373 0.636719C23.3427 0.636719 24.5449 1.86726 24.5449 3.33235C24.5449 4.12872 24.1936 4.85199 23.6133 5.35926L20.0678 8.38654ZM12.4936 12.6367H9.76638L13.6522 9.22981L12.4686 7.87708L4.46238 14.8447C3.16529 15.9716 4.06092 16.8422 2.99183 18.3302C2.84674 18.5331 2.76274 18.736 2.73983 18.9302C2.66783 19.5193 3.09438 20.0156 3.6311 20.0822C3.84274 20.1073 4.07838 20.0658 4.3031 19.9327C5.99401 18.9378 6.6791 20.0604 8.00783 18.8996L16.0151 11.9353L14.8358 10.5814L12.4936 12.6367ZM2.55983 20.8185C1.97619 23.0582 0.544922 23.3658 0.544922 24.8374C0.544922 25.9316 1.45474 26.8185 2.55983 26.8185C3.66492 26.8185 4.56056 25.9316 4.56056 24.8374C4.56056 23.3658 3.14347 23.0582 2.55983 20.8185Z" fill="white"></path></svg>
                            </div>
                            <input type="color" name='btnBdColor' className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer" onChange={handleChangeColor} />
                        </div>
                        {renderBtnBdColor()}
                    </div>
                </div>

                <div className="font-inter font-semibold text-black text-lg text-center "> Background color</div>
                <div className='pb-8 mt-3'>
                    <div className='pt-3 grid grid-cols-6'>
                        <div className={`rounded-full relative overflow-hidden flex justify-center items-center br-gray custom-color-picker cursor-pointer ${newTheme.background === true ? 'theme-select-border' : ''}`} style={{ width: '64px', height: '64px' }} >
                            <div className="flex justify-center items-center absolute w-full h-full top-0 left-0 " style={{ background: 'rgba(0,0,0,.25)' }}>
                                <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0678 8.38654C19.3238 9.04108 19.2464 10.1734 19.9009 10.9218L18.5493 12.1033L12.6409 5.34181L13.9926 4.16145C14.646 4.90763 15.7795 4.9829 16.5235 4.32945L20.0646 1.30108C20.5773 0.857082 21.2078 0.636719 21.8373 0.636719C23.3427 0.636719 24.5449 1.86726 24.5449 3.33235C24.5449 4.12872 24.1936 4.85199 23.6133 5.35926L20.0678 8.38654ZM12.4936 12.6367H9.76638L13.6522 9.22981L12.4686 7.87708L4.46238 14.8447C3.16529 15.9716 4.06092 16.8422 2.99183 18.3302C2.84674 18.5331 2.76274 18.736 2.73983 18.9302C2.66783 19.5193 3.09438 20.0156 3.6311 20.0822C3.84274 20.1073 4.07838 20.0658 4.3031 19.9327C5.99401 18.9378 6.6791 20.0604 8.00783 18.8996L16.0151 11.9353L14.8358 10.5814L12.4936 12.6367ZM2.55983 20.8185C1.97619 23.0582 0.544922 23.3658 0.544922 24.8374C0.544922 25.9316 1.45474 26.8185 2.55983 26.8185C3.66492 26.8185 4.56056 25.9316 4.56056 24.8374C4.56056 23.3658 3.14347 23.0582 2.55983 20.8185Z" fill="white"></path></svg>
                            </div>
                            <input type="color" name='btnBg' className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer" onChange={handleChangeColor} />
                        </div>
                        {renderBtnBgColor()}
                    </div>
                </div>
            </div>

            <div className='mt-12 pb-8 border-b-gray-200 border-b'>
                <div className='text-3xl font-bold text-black mb-8 text-center'>Text</div>

                <div className="font-inter font-semibold text-black text-lg text-center ">Link color</div>
                <div className='pb-8 mt-3'>
                    <div className='pt-3 grid grid-cols-6'>
                        <div className={`rounded-full relative overflow-hidden flex justify-center items-center br-gray custom-color-picker cursor-pointer ${newTheme.background === true ? 'theme-select-border' : ''}`} style={{ width: '64px', height: '64px' }} >
                            <div className="flex justify-center items-center absolute w-full h-full top-0 left-0 " style={{ background: 'rgba(0,0,0,.25)' }}>
                                <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0678 8.38654C19.3238 9.04108 19.2464 10.1734 19.9009 10.9218L18.5493 12.1033L12.6409 5.34181L13.9926 4.16145C14.646 4.90763 15.7795 4.9829 16.5235 4.32945L20.0646 1.30108C20.5773 0.857082 21.2078 0.636719 21.8373 0.636719C23.3427 0.636719 24.5449 1.86726 24.5449 3.33235C24.5449 4.12872 24.1936 4.85199 23.6133 5.35926L20.0678 8.38654ZM12.4936 12.6367H9.76638L13.6522 9.22981L12.4686 7.87708L4.46238 14.8447C3.16529 15.9716 4.06092 16.8422 2.99183 18.3302C2.84674 18.5331 2.76274 18.736 2.73983 18.9302C2.66783 19.5193 3.09438 20.0156 3.6311 20.0822C3.84274 20.1073 4.07838 20.0658 4.3031 19.9327C5.99401 18.9378 6.6791 20.0604 8.00783 18.8996L16.0151 11.9353L14.8358 10.5814L12.4936 12.6367ZM2.55983 20.8185C1.97619 23.0582 0.544922 23.3658 0.544922 24.8374C0.544922 25.9316 1.45474 26.8185 2.55983 26.8185C3.66492 26.8185 4.56056 25.9316 4.56056 24.8374C4.56056 23.3658 3.14347 23.0582 2.55983 20.8185Z" fill="white"></path></svg>
                            </div>
                            <input type="color" name='colorLink' className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer" onChange={handleChangeColor} />
                        </div>
                        {renderLinkColor()}
                    </div>
                </div>

                <div className="font-inter font-semibold text-black text-lg text-center " >Header color</div>
                <div className='pb-8 mt-3'>
                    <div className='pt-3 grid grid-cols-6'>
                        <div className={`rounded-full relative overflow-hidden flex justify-center items-center br-gray custom-color-picker cursor-pointer ${newTheme.background === true ? 'theme-select-border' : ''}`} style={{ width: '64px', height: '64px' }} >
                            <div className="flex justify-center items-center absolute w-full h-full top-0 left-0 " style={{ background: 'rgba(0,0,0,.25)' }}>
                                <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.0678 8.38654C19.3238 9.04108 19.2464 10.1734 19.9009 10.9218L18.5493 12.1033L12.6409 5.34181L13.9926 4.16145C14.646 4.90763 15.7795 4.9829 16.5235 4.32945L20.0646 1.30108C20.5773 0.857082 21.2078 0.636719 21.8373 0.636719C23.3427 0.636719 24.5449 1.86726 24.5449 3.33235C24.5449 4.12872 24.1936 4.85199 23.6133 5.35926L20.0678 8.38654ZM12.4936 12.6367H9.76638L13.6522 9.22981L12.4686 7.87708L4.46238 14.8447C3.16529 15.9716 4.06092 16.8422 2.99183 18.3302C2.84674 18.5331 2.76274 18.736 2.73983 18.9302C2.66783 19.5193 3.09438 20.0156 3.6311 20.0822C3.84274 20.1073 4.07838 20.0658 4.3031 19.9327C5.99401 18.9378 6.6791 20.0604 8.00783 18.8996L16.0151 11.9353L14.8358 10.5814L12.4936 12.6367ZM2.55983 20.8185C1.97619 23.0582 0.544922 23.3658 0.544922 24.8374C0.544922 25.9316 1.45474 26.8185 2.55983 26.8185C3.66492 26.8185 4.56056 25.9316 4.56056 24.8374C4.56056 23.3658 3.14347 23.0582 2.55983 20.8185Z" fill="white"></path></svg>
                            </div>
                            <input type="color" name='colorHeader' className="absolute w-full h-full top-0 left-0 opacity-0 cursor-pointer" onChange={handleChangeColor} />
                        </div>
                        {renderHeaderColor()}
                    </div>
                </div>
            </div>

            <div className='mt-12'>
                <div className='text-3xl font-bold text-black mb-8 text-center'>Font</div>
                <div className='pb-8 mt-3'>
                    <div className='pt-3 grid grid-cols-3 gap-x-4'>
                        {renderFont()}
                    </div>
                </div>
            </div>

            <div className='mt-6'>
                <button onClick={() => { handleSave() }} className="button-primary font-bold text-white flex justify-center items-center w-full uppercase  btn-h-48 mt-8 tracking-wider">
                    {/* <span className={`${loading ? 'hidden' : 'block'}`}>Save</span>
                    <span className={`bl-circle-loader absolute ${!loading ? 'hidden' : 'block'}`}></span> */}
                    <span>Save theme</span>
                </button>
            </div>
        </div>
    )
}
