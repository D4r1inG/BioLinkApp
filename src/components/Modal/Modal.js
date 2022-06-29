import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import './Modal.css'

export default function Modal() {

    const { isOpen, modalHeader, addNew } = useSelector(state => state.ModalReducer)
    const dispatch = useDispatch()
    const myModal = useRef(null)

    window.onclick = (e) => {
        if(e.target === myModal.current){
            dispatch({
                type: 'CLOSE_MODAL'
            })
        }
    }

    return (
        <div className={`${isOpen ? '' : 'hidden'} fixed w-screen z-50 h-screen inset-0  transition-all`} style={{ background: 'rgba(0, 0, 0, 0.8)' }} >
            <div ref={myModal} className='flex justify-center items-center h-full w-full'>
                <div className='modal-content overflow-hidden relative'>
                    <div className='modal-header border-b flex justify-between'>
                        <div className='flex items-center'>
                            <div className="font-inter font-semibold text-black text-base py-4" >{modalHeader}</div>
                        </div>
                        <div className="bl-modal-close cursor-pointer flex items-center" onClick={() => {
                            dispatch({
                                type: 'CLOSE_MODAL'
                            })
                        }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-3a96bf30="" d="M13.3222 2.6665L2.66663 13.3221" stroke="#6E6D7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path data-v-3a96bf30="" d="M13.3311 13.3332L2.66663 2.6665" stroke="#6E6D7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                    </div>
                    <div className=''>
                        <div className="flex mt-8">
                            <div className="w-full flex justify-between flex-col flex-wrap">
                                <div className="input-main-wrap overflow-hidden	rounded-sm w-full">
                                    <input type="text" name="title" placeholder="Title" className="bl-input w-full p-4 text-sm font-normal font-inter tracking-wider placeholder-grey hover:bg-bl-bg-grey focus:bg-white" />
                                </div>
                                <div className="input-main-wrap overflow-hidden	rounded-sm w-full mt-2">
                                    <input type="text" name="url" placeholder="URL" className="bl-input w-full p-4 text-sm font-normal font-inter tracking-wider placeholder-grey hover:bg-bl-bg-grey focus:bg-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute left-0 bottom-0 w-full'>
                        <button className="bl-btn bl-btn-md bl-bg font-bold text-white flex justify-center items-center w-full uppercase  btn-h-48 mt-8 tracking-wider">
                            <span className="">Save</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
