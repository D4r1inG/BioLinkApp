import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { saveComment } from '../../redux/Actions/ProfileAction'


export default function ChatBox({list, username}) {

    const inputValue = useRef(null)
    const dispatch = useDispatch()

    const renderMessage = (arr) => {
        return arr.reverse().map((item, index) => {
            return <div key={index} className={`text_box p-4 my-4 flex items-center w-full self-end mr-4 bg-green-300 rounded-md relative ${item.username === localStorage.getItem('username') ? 'bg-green-300' : 'bg-blue-300'}`}>
                <p className="text-lg">{item.comment}</p>
                <p className='absolute -top-6 left-0'>{item.username}</p>
                <img src={item.imageUser} alt={item.username} className='absolute -left-6 top-1/3 rounded-full' style={{ width: 20, height: 20, right: -8, bottom: -8 }} />
            </div>
        })
    }

    const handleSend = (e) => {
        if(inputValue.current.value !== ""){
            dispatch(saveComment(inputValue.current.value, username))
        }
        inputValue.current.value = ""
    }

    return (
        <div className='chat_box_popup rounded-md shadow-md '>
            <div className='pt-4 h-full w-full chat-box-top transparent-scroll'>
                <div className='flex flex-col w-full py-4 h-full' style={{ paddingBottom: '70px' }}>
                    {renderMessage(list)}
                </div>
            </div>
            <div className='chatbox_input '>
                <div className='input-main-wrap overflow-hidden rounded-sm flex-1'>
                    <input ref={inputValue} type="text" name="name" placeholder="Say something..." className="bl-input w-full p-4 text-sm font-normal font-inter placeholder-grey hover:bg-bl-bg-grey focus:bg-white" onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSend()
                        }
                    }} />
                </div>
                <button className='chatbox_btn rounded-full transition-all' onClick={() => { handleSend() }} >
                    <svg width="20px" height="20px" viewBox="0 0 24 24" ><path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z"></path></svg>
                </button>
            </div>
        </div>
    )
}
