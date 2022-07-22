import React, { useEffect, useRef, useState } from 'react'
import { history } from '../../App'
import './Tour.css'

export default function Tour({ steps, isOpen, onRequestClose }) {

    //TODO: Chỉnh zIndex khi next, back

    const [index, setIndex] = useState(0)
    const [position, setPosition] = useState({
        top: 0,
        left: 0
    })
    const [tempEle, setTempEle] = useState()
    const [styleTarget, setStyleTarget] = useState({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })

    useEffect(() => {
        setTempEle(document.getElementsByClassName(steps[index].selector))
        if (steps[index].path !== '') {
            history.push(steps[index].path)
        }

        if (tempEle === undefined || tempEle.length === 0) {
            setPosition({
                top: '50%',
                left: '50%'
            })
            setStyleTarget({
                width: 0,
                height: 0,
                top: 0,
                left: 0
            })
        } else {
            let tempElePos = tempEle[0].getBoundingClientRect()
            setStyleTarget({
                width: tempElePos.width + 20,
                height: tempElePos.height + 20,
                top: tempElePos.top - 10,
                left: tempElePos.left - 10
            })
            setPosition({
                top: tempElePos.top,
                left: tempElePos.left - 350
            })
        }

    }, [index, steps, tempEle])


    const handleNextStep = () => {
        if (index !== steps.length - 1) {
            setIndex(index + 1)
        }
    }

    const handlePrevStep = () => {
        if (index !== 0) {
            setIndex(index - 1)
        }
    }

    let stylePosition = {
        top: position.top,
        left: position.left,
        transform: position.top === '50%' && position.left === '50%' ? "translate(-50%, -50%)" : ''
    }

    return (
        <div className='tour'>
            <div className='tour_overlay'>
                <div className='tour_target' style={styleTarget}></div>
            </div>
            <div className='modal_tour shadow-md' style={stylePosition}>
                {steps[index].content}
                <div className='mt-4 flex justify-center items-center'>
                    <button className='prevTourBtn cursor-pointer py-1 px-3 rounded-md mr-8 bg-red-100' onClick={handlePrevStep}>Back</button>
                    <button className='prevTourBtn cursor-pointer py-1 px-3 rounded-md  bg-green-100' onClick={handleNextStep}>Next</button>
                </div>
            </div>

        </div>
    )
}
