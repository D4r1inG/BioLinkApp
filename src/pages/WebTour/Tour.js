import React, { useEffect, useRef, useState } from 'react'
import { history } from '../../App'

export default function Tour({ steps, onRequestClose }) {

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
        setTempEle(document.getElementsByClassName(steps[index]?.selector))
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
            let modalEle = myModal.current.getBoundingClientRect()
            let modalOffSet = ((tempElePos.bottom - tempElePos.top) / 2) - modalEle.height / 2

            setPosition({
                top: (window.innerHeight - tempElePos.height) < modalEle.height ? '0' : tempElePos.top,
                left: tempElePos.left < modalEle.width ? tempElePos.right + 80 : tempElePos.left - modalEle.width - 50,
                transform: `translateY(${tempElePos.top < 50 ? 40 : modalOffSet}px)`
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
            closeTour()
        }
    }

    const closeTour = () => {
        onRequestClose()
        setIndex(0)
    }

    const handlePrevStep = () => {
        if (index !== 0) {
            setIndex(index - 1)
        }
    }

    const renderDot = () => {
        return steps.map((_, itemIndex) => (
            <span key={itemIndex} className={`tour_dot mr-1 rounded-full ${itemIndex === index ? 'bg-gray-400' : 'bg-gray-200'}`} ></span>
        ))
    }

    return (
        <div className='tour' style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <div className='tour_overlay transition-all duration-500' style={styleTarget} ></div>
            <div className={`modal_tour shadow-md transition-all duration-700 ${index === 0 ? 'text-center index0' : ''}`} style={position} ref={myModal}>
                <img src='./assets/Imgs/Quan_noi.jpg' className={`tour_img quan_noi transition-all ${index === 0 ? 'block' : 'hidden'}`} alt='Khanh_Noi' />
                <img src='./assets/Imgs/Khanh_noi.jpg' className={`tour_img khanh_noi transition-all ${index === 1 ? 'active' : ''} ${index === 0 ? '' : 'img_left'}`} alt='Khanh_Noi' />
                <img src='./assets/Imgs/Lam_noi.jpg' className={`tour_img lam_noi transition-all ${index === 0 ? 'block' : 'hidden'}`} alt='Lam_Noi' />
                <img src='./assets/Imgs/Hieu_noi.jpg' className={`tour_img hieu_noi transition-all ${index === 0 ? 'block' : 'hidden'}`} alt='Hieu_Noi' />
                <img src='./assets/Imgs/NgocAnh_noi.jpg' className={`tour_img ngocanh_noi transition-all ${index === 0 ? 'block' : 'hidden'}`} alt='NgocAnh_Noi' />
                <span className={`step_index bg-green-300 flex justify-center items-center rounded-full transition-all ${index === 0 ? 'opacity-0' : 'opacity-100'}`}>{index + 1}</span>
                <svg onClick={() => { closeTour() }} className={`tour_close transition-all ${index === 0 ? 'hidden' : 'block'}`} viewBox="0 0 9.1 9.1"><path fill="currentColor" d="M5.9 4.5l2.8-2.8c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L4.5 3.1 1.7.3C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4l2.8 2.8L.3 7.4c-.4.4-.4 1 0 1.4.2.2.4.3.7.3s.5-.1.7-.3L4.5 6l2.8 2.8c.3.2.5.3.8.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L5.9 4.5z"></path></svg>
                {steps[index].content}
                <p className={`text-center mt-4 text-2xl ${steps[index]?.quote ? 'block' : 'hidden '}`}>
                    "<small className='italic text-lg'>{steps[index]?.quote}</small>" @<small className='text-xl underline'>KhanhNoi</small>
                </p>
                <div className='mt-4 flex justify-center items-center'>
                    <button className={`cursor-pointer py-1 px-3 rounded-md mr-6 ${index === 0 ? 'bg-gray-200 hidden' : 'bg-red-100 block'} hover:scale-110 transition-all`} onClick={handlePrevStep}>Trở lại</button>
                    <div className={`flex ${index === 0 ? 'hidden' : 'block'}`}>
                        {renderDot()}
                    </div>
                    <button className={`cursor-pointer py-1 px-3 rounded-md ${index === 0 ? '' : 'ml-6'} bg-green-100 hover:scale-110 transition-all`} onClick={handleNextStep}>{index === 0 ? 'Yay!' : index === steps.length - 1 ? 'Bye Khanh Noi ~' : 'Đi tiếp'}</button>
                </div>
            </div>
        </div >
    )
}
