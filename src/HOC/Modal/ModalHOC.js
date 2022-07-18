import React from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useDetectClickOutside } from '../../utils/CustomHook'
import './Modal.css'

export default function ModalHOC() {

    const { visible, modalHeader, component } = useSelector(state => state.ModalReducer)
    const dispatch = useDispatch()
    const myModal = useRef(null)

    const cancelModal = () => {
        dispatch({
            type: 'CLOSE_MODAL'
        })
    }

    useDetectClickOutside(myModal, cancelModal)

    return (
        <div className={`${visible ? '' : 'hidden'} fixed w-screen z-50 h-screen inset-0  transition-all`} style={{ background: 'rgba(0, 0, 0, 0.8)' }} >
            <div ref={myModal} className='flex justify-center items-center h-full w-full'>
                <div className='modal-content overflow-hidden relative'>
                    <div className='modal-header border-b flex justify-between'>
                        <div className='flex items-center'>
                            <div className="font-inter font-semibold text-black text-base py-4" >{modalHeader}</div>
                        </div>
                        <div className="bl-modal-close cursor-pointer flex items-center" onClick={() => {
                            cancelModal()
                        }}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3222 2.6665L2.66663 13.3221" stroke="#6E6D7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.3311 13.3332L2.66663 2.6665" stroke="#6E6D7A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                    </div>

                    <div>
                        {component}
                    </div>
                </div>
            </div>
        </div>
    )
}
