import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useDetectClickOutside } from '../../utils/CustomHook'
import ModalAddNewPlugin from './ModalAddNewPlugin'

export default function ModalSelectPlugin() {

    const { pluginVisible } = useSelector(state => state.ModalReducer)
    const dispatch = useDispatch()
    const modalPlugin = useRef(null)

    const cancelModal = () => {
        dispatch({
            type: 'CLOSE_PLUGIN'
        })
    }

    useDetectClickOutside(modalPlugin, cancelModal)


    return (
        <div>
            <div className={`${pluginVisible ? '' : 'hidden'} fixed w-screen z-50 h-screen inset-0  transition-all`} style={{ background: 'rgba(0, 0, 0, 0.8)' }} >
                <div ref={modalPlugin} className='flex justify-center items-center h-full w-full'>
                    <div className='modal-content overflow-hidden relative' style={{ width: '870px', paddingBottom: '32px' }}>
                        <div className='modal-header border-b flex justify-between'>
                            <div className='flex items-center '>
                                <div className="font-inter font-semibold text-black text-base py-4 " >Add an embed</div>
                            </div>
                            <div className="bl-modal-close cursor-pointer flex items-center" onClick={() => {
                                cancelModal()
                            }}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3222 2.6665L2.66663 13.3221" stroke="#6E6D7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.3311 13.3332L2.66663 2.6665" stroke="#6E6D7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className=' my-6 transparent-scroll border-b pb-4'>
                                <div className='pb-3'>
                                    <div className="font-inter font-semibold text-black leading-4 mt-6 text-xl">Content</div>
                                </div>
                                <div className='grid grid-cols-2 items-center'>
                                    <div>
                                        <div className="flex items-center justify-betweeen px-3  h-20 cursor-pointer rounded-lg hover:bg-gray-100 justify-between" onClick={() => {
                                            dispatch({
                                                type: "MODAL_ADD_NEW",
                                                modalHeader: 'Youtube',
                                                component: <ModalAddNewPlugin />
                                            })
                                        }}>
                                            <div className="" style={{ flex: '0 0 48px' }}>
                                                <img src={`/assets/Imgs/embed-youtube-new.png`} alt="youtube" />
                                            </div>
                                            <div className="flex w-full items-center ml-3 pr-3 justify-between" >
                                                <div>
                                                    <div className="text-sm text-black font-inter font-semibold leading-7 tracking-wide	" >
                                                        YouTube
                                                    </div>
                                                    <div className="text-xs w-52 text-gray-500 font-inter">
                                                        Play YouTube video without leaving your page.
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className="py-2 px-3 bg-gray-100 text-dark font-inter leading-4 relative flex justify-center items-center rounded-full text-xs text-blue-500 bl-btn-sm">
                                                        <span className="flex font-semibold text-xs">
                                                            ADD
                                                        </span> <span className="bl-circle-loader absolute hidden"></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-betweeen px-3  h-20 cursor-pointer rounded-lg hover:bg-gray-100 justify-between" onClick={() => {
                                            dispatch({
                                                type: "MODAL_ADD_NEW",
                                                modalHeader: 'Spotify',
                                                component: <ModalAddNewPlugin />
                                            })
                                        }}>
                                            <div className="" style={{ flex: '0 0 48px' }}>
                                                <img src={`/assets/Imgs/embed-spotify-new.png`} alt="spotify" />
                                            </div>
                                            <div className="flex w-full items-center ml-3 pr-3 justify-between" >
                                                <div>
                                                    <div className="text-sm text-black font-inter font-semibold leading-7 tracking-wide	" >
                                                        Spotify
                                                    </div>
                                                    <div className="text-xs w-52 text-gray-500 font-inter">
                                                        Embed Spotify to play the preview of a track.
                                                    </div>
                                                </div>
                                                <div>
                                                    <button className="py-2 px-3 bg-gray-100 text-dark font-inter leading-4 relative flex justify-center items-center rounded-full text-xs text-blue-500 bl-btn-sm">
                                                        <span className="flex font-semibold text-xs">
                                                            ADD
                                                        </span> <span className="bl-circle-loader absolute hidden"></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pb-3'>
                                <div className="font-inter font-semibold text-black leading-4 mt-4 text-xl">Basics</div>
                            </div>
                            <div className='grid grid-cols-2 items-center'>
                                <div>
                                    <div className="flex items-center justify-betweeen px-3  h-20 cursor-pointer rounded-lg hover:bg-gray-100 justify-between" >
                                        <div className="" style={{ flex: '0 0 48px' }}>
                                            <img src={`/assets/Imgs/embed-contactform-new.png`} alt="forms" />
                                        </div>
                                        <div className="flex w-full items-center ml-3 pr-3 justify-between" >
                                            <div>
                                                <div className="text-sm text-black font-inter font-semibold leading-7 tracking-wide	" >
                                                    Forms
                                                </div>
                                                <div className="text-xs w-52 text-gray-500 font-inter">
                                                    Collect information from your visitors easily.
                                                </div>
                                            </div>
                                            <div>
                                                <button className="py-2 px-3 bg-gray-100 text-dark font-inter leading-4 relative flex justify-center items-center rounded-full text-xs text-blue-500 bl-btn-sm">
                                                    <span className="flex font-semibold text-xs">
                                                        ADD
                                                    </span> <span className="bl-circle-loader absolute hidden"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-betweeen px-3  h-20 cursor-pointer rounded-lg hover:bg-gray-100 justify-between" >
                                        <div className="" style={{ flex: '0 0 48px' }}>
                                            <img src={`/assets/Imgs/embed-story-new.png`} alt="spotify" />
                                        </div>
                                        <div className="flex w-full items-center ml-3 pr-3 justify-between" >
                                            <div>
                                                <div className="text-sm text-black font-inter font-semibold leading-7 tracking-wide	" >
                                                    Story
                                                </div>
                                                <div className="text-xs w-52 text-gray-500 font-inter">
                                                    Add a text area.
                                                </div>
                                            </div>
                                            <div>
                                                <button className="py-2 px-3 bg-gray-100 text-dark font-inter leading-4 relative flex justify-center items-center rounded-full text-xs text-blue-500 bl-btn-sm">
                                                    <span className="flex font-semibold text-xs">
                                                        ADD
                                                    </span> <span className="bl-circle-loader absolute hidden"></span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
