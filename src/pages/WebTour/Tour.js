import React, { useEffect, useRef, useState } from 'react'
import { history } from '../../App'
import './Tour.css'

export default function Tour({ steps, isOpen, onRequestClose }) {

    // TODO: Khi touring => disable gọi api 

    const [index, setIndex] = useState(0)
    const [tempEle, setTempEle] = useState()
    const [position, setPosition] = useState({
        top: '50%',
        left: '50%',
        transform: "translate(-50%, -50%)"
    })
    const [styleTarget, setStyleTarget] = useState({
        width: 0,
        height: 0,
        top: '50%',
        left: '50%',
    })

    const myModal = useRef(null)

    useEffect(() => {
        setTempEle(document.getElementsByClassName(steps[index].selector))
        if (steps[index].path !== '') {
            history.push(steps[index].path)
        }

        if (tempEle === undefined || tempEle?.length === 0) {
            setPosition({
                top: '50%',
                left: '50%',
                transform: "translate(-50%, -50%)"
            })
            setStyleTarget({
                width: 0,
                height: 0,
                top: '50%',
                left: '50%',
            })
        } else {
            let tempElePos = tempEle[0].getBoundingClientRect()
            let modalHeight = myModal.current.getBoundingClientRect().height
            let modalOffSet = ((tempElePos.bottom - tempElePos.top) / 2) - modalHeight / 2
            // window.scrollTo({
            //     top: tempElePos.bottom,
            //     behavior: 'smooth'
            // })
            setPosition({
                top: tempElePos.top,
                left: tempElePos.left - 500,
                transform: `translateY(${modalOffSet}px)`
            })
            setStyleTarget({
                width: tempElePos.width + 30,
                height: tempElePos.height + 30,
                top: tempElePos.top - 15,
                left: tempElePos.left - 15
            })
        }

    }, [index, steps, tempEle])


    const handleNextStep = () => {
        if (index !== steps.length - 1) {
            setIndex(index + 1)
        } else {
            onRequestClose()
        }
    }

    const handlePrevStep = () => {
        if (index !== 0) {
            setIndex(index - 1)
        }
    }

    const renderDot = () => {
        return steps.map((_, itemIndex) => (
            <div key={itemIndex} className={`tour_dot mr-1 rounded-full ${itemIndex === index ? 'bg-gray-400' : 'bg-gray-200'}`} ></div>
        ))
    }

    return (
        <>
            {
                isOpen ?
                    <div className='tour' style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        < div className='tour_overlay transition-all duration-500' style={styleTarget} ></div >
                        <div className='modal_tour shadow-md transition-all duration-700' style={position} ref={myModal}>
                            <span className='step_index bg-green-300 flex justify-center items-center rounded-full'>{index}</span>
                            {steps[index].content}
                            <div className='mt-4 flex justify-center items-center'>
                                <button className=' cursor-pointer py-1 px-3 rounded-md mr-6 bg-red-100 hover:scale-105 transition-all' onClick={handlePrevStep}>Trở lại</button>
                                <div className='flex'>
                                    {renderDot()}
                                </div>
                                <button className=' cursor-pointer py-1 px-3 rounded-md ml-6 bg-green-100 hover:scale-105 transition-all' onClick={handleNextStep}>{index === 0 ? 'Theo Khanh Noi' : index === steps.length - 1 ? 'Bye Khanh noi ~' : 'Đi tiếp'}</button>
                            </div>
                        </div>
                    </div > : ''
            }
        </>
    )
}
